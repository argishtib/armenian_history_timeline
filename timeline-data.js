/**
 * TimelineJS 3 data — events summarized and cleaned from the PDF chronology
 * in pdf/ (Հայ ժողովրդի պատմություն / ժամանակագրություն).
 */
window.TIMELINE_DATA = {
  title: {
    text: {
      headline: "Հայ ժողովրդի պատմություն",
      text:
        "<p>Ինտերակտիվ ժամանակագրություն՝ կազմված ձեր թղթապանակի PDF-ի հիման վրա (նախապատմությունից մինչև 1960-ականներ)։ Տեքստերը մաքրված են OCR-ի ավելորդ բացատներից։</p>" +
        "<p>Գործիք՝ <a href='https://timeline.knightlab.com/' target='_blank' rel='noopener'>TimelineJS</a> (Northwestern Knight Lab, MPL 2.0)։</p>",
    },
    media: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/640px-Flag_of_Armenia.svg.png",
      caption: "Հայաստանի դրոշ",
      credit: "Wikimedia Commons",
    },
  },
  eras: [
    {
      start_date: { year: -870 },
      end_date: { year: -590 },
      text: { headline: "Ուրարտու", text: "" },
    },
    {
      start_date: { year: 190 },
      end_date: { year: 428 },
      text: { headline: "Արտաշեսյան թագավորություն", text: "" },
    },
    {
      start_date: { year: 428 },
      end_date: { year: 884 },
      text: { headline: "Արշակունիներ", text: "" },
    },
    {
      start_date: { year: 884 },
      end_date: { year: 1045 },
      text: { headline: "Բագրատունիներ", text: "" },
    },
  ],
  events: [
    {
      start_date: { year: -50000, display_date: "մ.թ.ա. մինչև ~50 000 (նախապատմություն)" },
      text: {
        headline: "Նախապատմական շրջան",
        text:
          "<p>Ըստ ժամանակագրության՝ մարդու ձևավորման և մարդկային հասարակության նախասկիզբը, հին և միջին քարեդարյան մշակույթների զարգացումը Հայկական լեռնաշխարհում (ներառյալ շելյան, աշելյան, նեանդերթալյան շրջանները)։</p>",
      },
      group: "Նախապատմություն",
    },
    {
      start_date: { year: -12000, display_date: "մ.թ.ա. ~12 000 — 10 000" },
      text: {
        headline: "Միջին քարեդար · մեզոլիթ",
        text: "<p>Միջին քարեդարի մեզոլիթի ժամանակաշրջանը։</p>",
      },
      group: "Նախապատմություն",
    },
    {
      start_date: { year: -870, display_date: "մ.թ.ա. ~870—860" },
      text: {
        headline: "Ուրարտու պետության կազմավորում",
        text:
          "<p>Ուրարտու պետության կազմավորման ժամանակաշրջանը (Արամե թագավոր)։</p>",
      },
      media: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Urartu_stone_foundation.png/640px-Urartu_stone_foundation.png",
        caption: "Ուրարտական արձանագրություն",
        credit: "Wikimedia Commons",
      },
      group: "Հին աշխարհ",
    },
    {
      start_date: { year: -782 },
      end_date: { year: -782 },
      text: {
        headline: "Էրեբունի-Երևան",
        text:
          "<p>Արգիշտի Ա-ի կողմից Էրեբունի-Երևան քաղաք-ամրոցի հիմնադրումը։</p>",
      },
      media: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Erebuni_Fortress_Walls.jpg/640px-Erebuni_Fortress_Walls.jpg",
        caption: "Էրեբունի ամրոց",
        credit: "Wikimedia Commons",
      },
      group: "Հին աշխարհ",
    },
    {
      start_date: { year: -776 },
      text: {
        headline: "Արգիշտիխինիլի (Արմավիր)",
        text:
          "<p>Արգիշտի Ա-ի կողմից Արարատյան դաշտում Արգիշտիխինիլի (Արմավիր) քաղաք-ամրոցի հիմնադրումը։</p>",
      },
      group: "Հին աշխարհ",
    },
    {
      start_date: { year: 140 },
      text: {
        headline: "Տիգրան Մեծի ծնունդ",
        text: "<p>Տիգրան Բ Մեծի ծնունդը (հետագայում Մեծ Հայքի հզոր թագավոր)։</p>",
      },
      group: "Հելլենիստական շրջան",
    },
    {
      start_date: { year: 301 },
      text: {
        headline: "Հայաստանում քրիստոնեություն",
        text:
          "<p>Մեծ Հայքի արքունիքի և զորամասերի մկրտությունը Բագավանում։ Գրիգոր Լուսավորչի ձեռնադրումը Մեծ Հայքի արքեպիսկոպոս (301—325 թթ.՝ կաթողիկոս)։</p>",
      },
      media: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Gregory_the_Illuminator_%28Menologion_of_Basil_II%29.jpg/480px-Gregory_the_Illuminator_%28Menologion_of_Basil_II%29.jpg",
        caption: "Գրիգոր Լուսավորիչ",
        credit: "Wikimedia Commons",
      },
      group: "Հին աշխարհ",
    },
    {
      start_date: { year: 405 },
      end_date: { year: 440 },
      text: {
        headline: "Մեսրոպ Մաշտոց",
        text: "<p>Հայ գրերի ստեղծող Մեսրոպ Մաշտոցի գործունեության ժամանակաշրջանը (ըստ ժամանակագրության)։</p>",
      },
      group: "Հին աշխարհ",
    },
    {
      start_date: { year: 451, month: 5, day: 26 },
      text: {
        headline: "Վարդանանց ճակատամարտ",
        text:
          "<p>Մայիսի 26-ին՝ Ավարայրի ճակատամարտը (Վարդանանց հերոսամարտ)։ Նույն թվականին՝ Քաղկեդոնում չորրորդ տիեզերական ժողովը։</p>",
      },
      group: "Հին աշխարհ",
    },
    {
      start_date: { year: 961 },
      text: {
        headline: "Անին՝ մայրաքաղաք",
        text: "<p>Անին դառնում է Հայաստանի մայրաքաղաք։</p>",
      },
      group: "Միջին դար",
    },
    {
      start_date: { year: 1236 },
      end_date: { year: 1243 },
      text: {
        headline: "Մոնղոլական արշավանքներ",
        text:
          "<p>Հայերի նոր գաղթը Կիլիկիա, մոնղոլների կողմից Հայաստանի արշավանքների համատեքստում (ըստ ժամանակագրության)։</p>",
      },
      group: "Միջին դար",
    },
    {
      start_date: { year: 1604 },
      text: {
        headline: "Շահ Աբբաս և գաղթեր",
        text:
          "<p>Շահ Աբբաս I-ը Արևելյան Հայաստանի բնակչությանը գաղթեցնում է Պարսկաստան։</p>",
      },
      group: "Նոր ժամանակներ",
    },
    {
      start_date: { year: 1826 },
      end_date: { year: 1828 },
      text: {
        headline: "Ռուս-պարսկական պատերազմ",
        text:
          "<p>1826—1828 թթ. Ռուս-պարսկական պատերազմը և Արևելյան Հայաստանի ճակատագիրը կայսրությունների միջև պայքարի համատեքստում։</p>",
      },
      group: "Նոր ժամանակներ",
    },
    {
      start_date: { year: 1915 },
      text: {
        headline: "1915 · Հայոց ցեղասպանություն",
        text:
          "<p>Ըստ PDF ժամանակագրության՝ ԿՄԿ-ի կենտկոմը որոշում է մշակել Արևմտահայության տեղահանության և բնաջինջման միջոցները։ Ապրիլի վերջին՝ Կ. Պոլսում 800 հայ մտավորականների ձերբակալություն, «Հայկական մեծ եղեռնի» սկիզբը։</p>",
      },
      group: "Նոր ժամանակներ",
    },
    {
      start_date: { year: 1917, month: 12, day: 29 },
      text: {
        headline: "«Թուրքահայաստանի» մասին դեկրետ",
        text:
          "<p>Ըստ ժամանակագրության՝ Խորհրդային Ռուսաստանի ժողկոմսովետը դեկրետ է ընդունում «Թուրքահայաստանի» մասին։ Նույն ամիսներին Մոսկվայում ստեղծվում է հայկական գործերի կոմիսարիատ։</p>",
      },
      group: "Նոր ժամանակներ",
    },
    {
      start_date: { year: 1918, month: 5, day: 28 },
      text: {
        headline: "Անդրկովկասյան սեյմի փլուզում · անկախ Հայաստան",
        text:
          "<p>Մայիսի 26—28-ին փլուզվում է Անդրկովկասյան սեյմը։ Վրաստանը, Ադրբեջանը և Հայաստանը հայտարարում են անկախ հանրապետություններ (ըստ ժամանակագրության)։</p>",
      },
      group: "Նոր ժամանակներ",
    },
    {
      start_date: { year: 1943, month: 11, day: 29 },
      text: {
        headline: "Հայկական ՍՍՀ Գիտությունների ակադեմիա",
        text:
          "<p>Երևանում Հայկական ՍՍՀ գիտությունների ակադեմիայի հանդիսավոր բացումը (ըստ ժամանակագրության)։</p>",
      },
      group: "Խորհրդային շրջան",
    },
    {
      start_date: { year: 1962, month: 5, day: 27 },
      text: {
        headline: "Մաշտոցի 1600-ամյակ",
        text:
          "<p>Նշվում է հայ գրերի ստեղծող և հայ դպրության հիմնադիր Մեսրոպ Մաշտոցի ծննդյան 1600-ամյակը։</p>",
      },
      group: "Խորհրդային շրջան",
    },
    {
      start_date: { year: 1965, month: 5, day: 3 },
      text: {
        headline: "Հրաչյա Քոչար",
        text:
          "<p>Մահացավ սովետահայ ականավոր գրող և հասարակական գործիչ Հրաչյա Քոչարը (ըստ ժամանակագրության)։</p>",
      },
      group: "Խորհրդային շրջան",
    },
  ],
};
