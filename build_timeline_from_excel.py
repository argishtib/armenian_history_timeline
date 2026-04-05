#!/usr/bin/env python3
"""
Regenerate timeline-data.js from excel/armenian_history_timeline.xlsx.

Requires: pip install openpyxl

Columns (header row):
  timeline_id, timeline_section_title, timeline_section_id,
  timeline_start, timeline_finish, timeline_description
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
XLSX = ROOT / "excel" / "armenian_history_timeline.xlsx"
OUT = ROOT / "timeline-data.js"

# TimelineJS requires cosmological scale outside roughly ±271,821 years (human scale limit).
COSMO_THRESHOLD = 271_821


def _cell_str(v) -> str:
    if v is None:
        return ""
    if isinstance(v, float) and v.is_integer():
        return str(int(v))
    return str(v).strip()


def _headline_from_row(section_title: str, description: str) -> str:
    desc = (description or "").strip()
    if desc:
        first = desc.split("\n")[0].strip()
        first = re.sub(r"\s+", " ", first)
        if len(first) > 140:
            return first[:137].rstrip() + "…"
        return first
    st = (section_title or "").strip()
    return st or "Ժամանակագրություն"


def _desc_html(description: str) -> str:
    if not (description or "").strip():
        return ""
    parts = [p.strip() for p in description.split("\n") if p.strip()]
    if not parts:
        return ""
    return "".join(f"<p>{_escape_html(p)}</p>" for p in parts)


def _escape_html(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def _year_pair(section_id: str, start, finish) -> tuple[int, int]:
    try:
        y0 = int(float(start))
        y1 = int(float(finish))
    except (TypeError, ValueError) as e:
        raise ValueError(f"Invalid year values: {start!r}, {finish!r}") from e
    sid = (section_id or "").strip().upper()
    if sid == "BCE":
        y0_j = -abs(y0)
        y1_j = -abs(y1)
    elif sid in ("CE", "AD", "ԹՎ", ""):
        y0_j = abs(y0)
        y1_j = abs(y1)
    else:
        raise ValueError(f"Unknown timeline_section_id: {section_id!r}")

    # Chronological order (older = smaller year number in JS timeline for both BCE and CE)
    return (min(y0_j, y1_j), max(y0_j, y1_j))


def _display_date(section_id: str, start, finish) -> str:
    sid = (section_id or "").strip().upper()
    try:
        s = int(float(start))
        f = int(float(finish))
    except (TypeError, ValueError):
        return ""
    if sid == "BCE":
        if s == f:
            return f"մ.թ.ա. {s:,}"
        # Larger BCE number = farther back in time; show older → newer.
        older, newer = max(s, f), min(s, f)
        return f"մ.թ.ա. {older:,} — {newer:,}"
    if s == f:
        return f"{s} թ."
    a, b = min(s, f), max(s, f)
    return f"{a}—{b} թ."


def needs_cosmological(years: list[int]) -> bool:
    for y in years:
        if abs(y) > COSMO_THRESHOLD:
            return True
    return False


def main() -> int:
    try:
        import openpyxl
    except ImportError:
        print("Install openpyxl: pip install openpyxl", file=sys.stderr)
        return 1

    if not XLSX.is_file():
        print(f"Missing workbook: {XLSX}", file=sys.stderr)
        return 1

    wb = openpyxl.load_workbook(XLSX, read_only=True, data_only=True)
    ws = wb.active
    rows = list(ws.iter_rows(values_only=True))
    wb.close()

    if not rows:
        print("Empty sheet", file=sys.stderr)
        return 1

    header = [str(c).strip() if c is not None else "" for c in rows[0]]
    expected = [
        "timeline_id",
        "timeline_section_title",
        "timeline_section_id",
        "timeline_start",
        "timeline_finish",
        "timeline_description",
    ]
    if header[: len(expected)] != expected:
        print("Warning: header row does not match expected columns.", file=sys.stderr)
        print(f"  Got:      {header}", file=sys.stderr)
        print(f"  Expected: {expected}", file=sys.stderr)

    events = []
    all_years: list[int] = []

    for row in rows[1:]:
        if not row or all(c is None or str(c).strip() == "" for c in row):
            continue
        tid = _cell_str(row[0])
        section_title = _cell_str(row[1])
        section_id = _cell_str(row[2])
        start, finish = row[3], row[4]
        description = row[5] if len(row) > 5 else ""

        if isinstance(description, float) and description.is_integer():
            description = str(int(description))
        elif description is None:
            description = ""
        else:
            description = str(description)

        if not tid or start in (None, "") or finish in (None, ""):
            continue

        try:
            y_start, y_end = _year_pair(section_id, start, finish)
        except ValueError as e:
            print(f"Skip row {tid}: {e}", file=sys.stderr)
            continue

        all_years.extend([y_start, y_end])

        ev: dict = {
            "unique_id": tid,
            "start_date": {"year": y_start},
            "text": {
                "headline": _headline_from_row(section_title, description),
                "text": _desc_html(description),
            },
        }
        dd = _display_date(section_id, start, finish)
        if dd:
            ev["start_date"]["display_date"] = dd
        if y_end != y_start:
            ev["end_date"] = {"year": y_end}

        group = section_title.strip()
        if group:
            ev["group"] = group

        events.append(ev)

    if not events:
        print("No data rows found.", file=sys.stderr)
        return 1

    cosmo = needs_cosmological(all_years)

    data = {
        "title": {
            "text": {
                "headline": "Հայ ժողովրդի պատմություն",
                "text": (
                    "<p>Տվյալները՝ <code>excel/armenian_history_timeline.xlsx</code>։ "
                    "Թարմացնելու համար գործարկեք <code>python build_timeline_from_excel.py</code>։</p>"
                    "<p>Գործիք՝ <a href=\"https://timeline.knightlab.com/\" target=\"_blank\" rel=\"noopener\">TimelineJS</a>։</p>"
                ),
            },
        },
        "events": events,
    }
    if cosmo:
        data["scale"] = "cosmological"

    out_text = (
        "/* Auto-generated by build_timeline_from_excel.py — do not edit by hand */\n"
        "window.TIMELINE_DATA = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUT.write_text(out_text, encoding="utf-8")
    print(f"Wrote {OUT} ({len(events)} events, scale={'cosmological' if cosmo else 'human'})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
