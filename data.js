// ============================================================
//  北歐之旅 2026 · 行程資料
//  每次更新行程，只需修改這個檔案
//
//  卡片類型 (type):
//    flight  → 藍色（航班、高鐵、集合）
//    sight   → 磚紅（景點、博物館）
//    food    → 銅棕（咖啡、餐廳）
//    hotel   → 深藍（住宿）
//    drive   → 赭紅（自駕、租車）
//    default → 灰白（自由活動、其他）
//
//  tag 樣式:
//    tag-warn  → 橘色    tag-info → 藍色
//    tag-brick → 磚紅    tag-note → 灰色
//
//  people：名字後加 * 代表粗體標示（Michael's family）
// ============================================================

const TRIP = {
  title: '北歐設計、單車、咖啡文化之旅',
  subtitle: '2026 年 7 月 12 日 – 8 月 2 日 · 22 天',
  sheetsUrl: 'https://docs.google.com/spreadsheets/d/156MmwAFObsIvsE8CYA1BWxEvaouGdqNjEpfGV4_3MaU/edit?usp=sharing',
  badges: [
    { text: '4 個家庭 · 15 人', style: 'harbor' },
    { text: '🇳🇱 🇩🇪 🇩🇰 🇸🇪',  style: 'brick'  },
    { text: 'CI73 / CI74',       style: 'harbor' },
  ],

  days: [

    // ── DAY 1 · 7/12 Sun · 出發 ──
    {
      tab: '7/12', tabSub: '出發',
      badge: 'transit', badgeLabel: 'DAY 1',
      title: '出發・飛往阿姆斯特丹',
      theme: '出發',
      events: [
        {
          time: '23:10', type: 'flight', dotType: 'flight',
          evType: '去程航班 · CI73',
          title: 'Depart TPE → AMS',
          hint: 'Shampoo\'s family 稍後在柏林會合',
          people: ["Ryan's family", "Eric's family", "Michael's family*"],
        },
        {
          time: '機上', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'On flight',
        },
      ],
    },

    // ── DAY 2 · 7/13 Mon · 抵達 Amsterdam ──
    {
      tab: '7/13', tabSub: '抵達',
      badge: 'transit', badgeLabel: 'DAY 2',
      title: '抵達阿姆斯特丹',
      theme: '抵達',
      events: [
        {
          time: '07:40', type: 'flight', dotType: 'flight',
          evType: '抵達阿姆斯特丹 · CI73',
          title: 'Arrive AMS · Check-in Hotel',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '下午', type: 'default', dotType: 'default',
          evType: '觀光',
          title: '運河遊船',
          hint: '搭乘遊船穿梭阿姆斯特丹的運河網絡，是認識這座城市最美的方式',
        },
        {
          time: '下午', type: 'food', dotType: 'food',
          evType: '咖啡 · 精品烘豆',
          title: 'Bocca Coffee',
          img: 'https://bocca.nl/cdn/shop/files/Bocca-Kerkstraat-2-Jasper-de-Waal-Photography-1-1350x901.webp?v=1742835373&width=1296',
          address: 'Kerkstraat 96, 1017 GP Amsterdam',
          hint: '阿姆斯特丹知名精品烘豆坊，手沖與義式皆優。長途飛行後的第一杯好咖啡',
          link: { url: 'https://bocca.nl/en', label: '官網 ↗' },
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Amsterdam',
          hint: "Eric's、Ryan's、Michael's families",
        },
      ],
    },

    // ── DAY 3 · 7/14 Tue · 梵谷 + 九街 ──
    {
      tab: '7/14', tabSub: '梵谷',
      badge: 'normal', badgeLabel: 'DAY 3',
      title: '梵谷博物館・九街',
      theme: '梵谷',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '博物館 · Art',
          title: '梵谷博物館',
          en: 'Van Gogh Museum',
          img: 'https://www.vangoghmuseum.nl/assets/9d8ff7b6-f3ae-42d7-ae40-f4886ebd4b95?w=900&h=1671&x=1158&y=568&cropWidth=1316&cropHeight=2352&format=webp&c=56cadd4dc32684fe97fbd438bc587d5df3a3a32975445715990df2324b6fe41b',
          address: 'Museumplein 6, 1071 DJ Amsterdam',
          hint: '全世界收藏最多梵谷畫作的博物館，必訪',
          tags: [{ text: '需提早預約早場門票', cls: 'tag-warn' }],
          link: { url: 'https://maps.app.goo.gl/1mjz8vnywgtZrsfNA', label: 'Google Maps ↗' },
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '購物・散步 · Site',
          title: '九街',
          en: 'De Negen Straatjes',
          img: 'https://de9straatjes.nl/contents/images/kaart.webp',
          address: 'Wolvenstraat 9, 1016 EM Amsterdam',
          hint: '運河區九條小街，獨立精品店、古董店與餐廳。漫步挖掘北歐小物，每條巷弄都有驚喜',
          link: { url: 'https://de9straatjes.nl/en', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 4 · 7/15 Wed · 風車村 ──
    {
      tab: '7/15', tabSub: '風車',
      badge: 'normal', badgeLabel: 'DAY 4',
      title: 'Zaanse Schans 風車村',
      theme: '風車',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '景點 · 半日遊 · Site',
          title: 'Zaanse Schans 風車村',
          img: 'https://www.dezaanseschans.nl/wp-content/uploads/2024/06/Zaanse-Schans-x-ZEB-69.jpg',
          address: 'Schansend 7, 1509 AW Zaandam',
          hint: '荷蘭著名風車村，保留木造建築、風車與傳統工藝。可參觀風車內部、乳酪工廠和木鞋工坊',
          tags: [{ text: '建議安排半日遊', cls: 'tag-note' }],
          link: { url: 'https://www.dezaanseschans.nl/zh-hant/', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 5 · 7/16 Thu · 腳踏車 ──
    {
      tab: '7/16', tabSub: '單車',
      badge: 'normal', badgeLabel: 'DAY 5',
      title: '租腳踏車逛市區',
      theme: '單車',
      events: [
        {
          time: '全天', type: 'default', dotType: 'default',
          evType: '自由探索',
          title: '租腳踏車逛阿姆斯特丹市區',
          hint: '沿運河騎行，感受荷蘭單車文化。在地人的日常移動方式',
          tags: [{ text: 'Amsterdam 最後一天', cls: 'tag-note' }],
        },
      ],
    },

    // ── DAY 6 · 7/17 Fri · 前往 Bremen ──
    {
      tab: '7/17', tabSub: '不來梅',
      badge: 'transit', badgeLabel: 'DAY 6',
      title: '取租車・前往 Bremen',
      theme: '不來梅',
      events: [
        {
          time: '上午', type: 'drive', dotType: 'drive',
          evType: '租車 · 自駕',
          title: '取車 → 開車 Amsterdam → Bremen',
          hint: '車程約 3.5 小時。北歐公路之旅正式開始',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '科學博物館 · Museum',
          title: '不來梅宇宙館',
          en: 'Universum Bremen',
          img: 'https://universum-bremen.de/wp-content/uploads/2025/04/Universum_Bremen_Dauerausstellungsgebaeude_Sonnenschein_mit_Wiese.jpg',
          address: 'Wiener Straße 1, 28359 Bremen, Germany',
          hint: '外觀形似巨大銀蛤的科學博物館，室內包含科技、人類與自然三大互動展區。互動性極強，非常適合全家人一起體驗',
          link: { url: 'https://share.google/ZzEJ9TSzTLvIBWlfY', label: 'Google Maps ↗' },
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Bremen',
          hint: "Eric's、Ryan's、Michael's families",
        },
      ],
    },

    // ── DAY 7 · 7/18 Sat · Bremen 舊城 + 前往 Berlin ──
    {
      tab: '7/18', tabSub: '柏林',
      badge: 'transit', badgeLabel: 'DAY 7',
      title: 'Bremen 舊城區・前往柏林',
      theme: '柏林',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '舊城區散步 · Site',
          title: 'Bremen 舊城區',
          hint: '探索中世紀市政廳、羅蘭雕像與布萊梅音樂家雕塑，UNESCO 世界文化遺產',
          tags: [{ text: '步行即可遊覽', cls: 'tag-note' }],
        },
        {
          time: '下午', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 Bremen → Berlin',
          hint: '車程約 4 小時',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Berlin',
        },
      ],
    },

    // ── DAY 8 · 7/19 Sun · 集合 + 布蘭登堡門 ──
    {
      tab: '7/19', tabSub: '集合',
      badge: 'normal', badgeLabel: 'DAY 8',
      title: '全員集合・布蘭登堡門',
      theme: '集合',
      events: [
        {
          time: '上午', type: 'flight', dotType: 'flight',
          evType: '🎉 集合',
          title: "Shampoo's family 抵達柏林・四家全員到齊",
          people: ["Shampoo's family", "Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '地標 · Site',
          title: '布蘭登堡門',
          en: 'Brandenburg Gate',
          img: 'https://www.visitberlin.de/system/files/styles/visitberlin_content_image_medium_visitberlin_xl_2x/private/image/brandenburger_tor_fruehling_650696492_gettyimages_sborisov.jpg.webp?itok=z475Fl4U',
          address: 'Pariser Platz, 10117 Berlin',
          hint: '柏林最具象徵性的地標，曾見證德國分裂與統一。建議傍晚前往，燈光效果絕美',
          tags: [{ text: '全天開放・免費', cls: 'tag-note' }],
          link: { url: 'https://www.visitberlin.de/en/brandenburg-gate', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 9 · 7/20 Mon · The Barn + Boros ──
    {
      tab: '7/20', tabSub: '柏林',
      badge: 'normal', badgeLabel: 'DAY 9',
      title: 'The Barn Coffee・Boros 收藏館',
      theme: '柏林',
      events: [
        {
          time: '上午', type: 'food', dotType: 'food',
          evType: '精品咖啡 · Coffee',
          title: 'The Barn Coffee',
          img: 'https://thebarn.de/cdn/shop/files/cafes_THE_BARN_HACKESCHER_MARKT_3_fa12b443-200c-47d3-9ec5-85e82c75f8a6.jpg?v=1691616263&width=1070',
          address: 'Auguststraße 58, 10115 Berlin, Germany',
          hint: '柏林精品咖啡的先驅與領航者，堅持單一產區豆與精準的科學化沖煮流程。店內通常禁止筆電與大聲交談，旨在讓顧客專注於咖啡風味',
          tags: [{ text: '柏林必訪咖啡廳', cls: 'tag-brick' }],
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '當代藝術 · Art',
          title: 'Boros 收藏館',
          en: 'Boros Collection',
          img: 'https://boros-collection.com/fileadmin/user_upload/Startseite/Boros-Collection-aussen-gesamt.jpg',
          address: 'Reinhardtstraße 20, 10117 Berlin',
          hint: '位於前二戰防空碉堡內的私人當代藝術收藏館，空間本身即是震撼的建築作品',
          tags: [{ text: '⚠ 需提前數月訂位，請盡早安排', cls: 'tag-warn' }],
          link: { url: 'https://www.sammlung-boros.de/', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 10 · 7/21 Tue · Scooter + Tempelhof ──
    {
      tab: '7/21', tabSub: '柏林',
      badge: 'normal', badgeLabel: 'DAY 10',
      title: '租 Scooter・Tempelhof 機場公園',
      theme: '柏林',
      events: [
        {
          time: '上午', type: 'default', dotType: 'default',
          evType: '自由探索',
          title: '租 Scooter 逛柏林市區',
          hint: '柏林適合 scooter，快速穿梭 Mitte、Prenzlauer Berg、Kreuzberg 各特色街區',
          tags: [{ text: '需 14 歲以上', cls: 'tag-warn' }],
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '城市公園 · Site',
          title: 'Tempelhof 舊機場公園',
          en: 'Tempelhofer Feld',
          img: 'https://www.thf-berlin.de/fileadmin/_processed_/2/2/csm_GB_TempelhoferFeld_02Okt21_FotoOleBader-1534_6d3627e3c1.jpg',
          address: 'Tempelhofer Damm, 12101 Berlin',
          hint: '由舊柏林 Tempelhof 機場改建的巨大城市公園，保留原來的飛機跑道。適合騎車、溜滑板或全家野餐',
          tags: [{ text: '免費入場', cls: 'tag-note' }],
          link: { url: 'https://www.thf-berlin.de/en/your-visit/tempelhof-field', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 11 · 7/22 Wed · 柏林 → 漢堡 ──
    {
      tab: '7/22', tabSub: '漢堡',
      badge: 'transit', badgeLabel: 'DAY 11',
      title: '前往漢堡・Miniatur Wunderland',
      theme: '漢堡',
      events: [
        {
          time: '上午', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 柏林 → 漢堡',
          hint: '車程約 3.5 小時',
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '微縮景觀 · Museum',
          title: 'Miniatur Wunderland',
          img: 'https://www.miniatur-wunderland.com/imager/contentimages/layout/skandinavien/1333/schweden-kiruna-nacht_bc687f62802525bd2b7f491f2188ec3e.jpg',
          address: 'Kehrwieder 2/Block D, 20457 Hamburg',
          hint: '世界最大鐵道模型博物館，擁有極其精細的微縮城市、日夜交替與機場場景，大人小孩都著迷',
          tags: [{ text: '⚠ 強烈建議提早官網預約', cls: 'tag-warn' }],
          link: { url: 'https://www.miniatur-wunderland.com/', label: '官網 ↗' },
        },
        {
          time: '傍晚', type: 'sight', dotType: 'sight',
          evType: '世界遺產 · Site',
          title: '倉庫城散步',
          en: 'Speicherstadt',
          img: 'https://www.hamburg.com/resource/image/23476/landscape_ratio16x9/1240/697/a2c8e13901a16389dfdd26f83b9bad3b/3B43B85F11BD3B0C144732C8C0555333/km1-speicherstadt.jpg',
          address: 'Speicherstadt, 20457 Hamburg',
          hint: '世界最大的紅磚倉庫區，建於 19 世紀末，UNESCO 世界文化遺產。傍晚運河倒影非常迷人',
          link: { url: 'https://www.hamburg.com/visitors/sights/architecture/speicherstadt-19324', label: '官網 ↗' },
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · 漢堡',
        },
      ],
    },

    // ── DAY 12 · 7/23 Thu · 漢堡 → LEGOLAND → Aarhus ──
    {
      tab: '7/23', tabSub: 'LEGO',
      badge: 'transit', badgeLabel: 'DAY 12',
      title: 'LEGOLAND・前往 Aarhus',
      theme: 'LEGO',
      events: [
        {
          time: '上午', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 漢堡 → LEGOLAND Billund',
          hint: '車程約 3 小時',
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '主題樂園 · Site',
          title: 'LEGOLAND® Billund Resort',
          img: 'https://www.legoland.dk/media/safbchyj/081-legoland__k1a1579_final_700x500.jpg?format=webp&quality=80&width=720&height=360',
          address: 'Nordmarksvej 9, 7190 Billund, Denmark',
          hint: '全球第一座樂高樂園！豐富遊樂設施與壯觀樂高微縮景觀，園內樂高商店品項超齊全',
          tags: [{ text: '建議預先購票', cls: 'tag-warn' }],
          link: { url: 'https://www.legoland.dk/en/', label: '官網 ↗' },
        },
        {
          time: '傍晚', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 LEGOLAND → Aarhus',
          hint: '車程約 1 小時 10 分',
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Aarhus',
        },
      ],
    },

    // ── DAY 13 · 7/24 Fri · JL Møller + 前往 Copenhagen ──
    {
      tab: '7/24', tabSub: '傢俱',
      badge: 'transit', badgeLabel: 'DAY 13',
      title: 'JL Møller 傢俱廠・前往哥本哈根',
      theme: '傢俱',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '設計工廠 · Design',
          title: 'JL Møller 傢俱廠',
          en: 'JL Møller',
          img: 'https://assets.everydayobject.us/wp-content/uploads/2025/07/PXL_20250609_105932898.jpg-%E7%9A%84%E5%89%AF%E6%9C%AC_Easy-Resize.com_-edited.jpg',
          address: 'Oddervej 202, 8270 Højbjerg, Denmark',
          hint: '丹麥國寶級手工椅品牌，以精湛的木工與編織工藝聞名，是北歐設計愛好者的朝聖地',
          tags: [{ text: '需事先預約參訪', cls: 'tag-warn' }],
          link: { url: 'https://www.jlm.dk/', label: '官網 ↗' },
        },
        {
          time: '下午', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 Aarhus → Copenhagen',
          hint: '車程約 2 小時 45 分',
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Copenhagen',
        },
      ],
    },

    // ── DAY 14 · 7/25 Sat · 路易斯安那 + April Coffee ──
    {
      tab: '7/25', tabSub: '藝術',
      badge: 'normal', badgeLabel: 'DAY 14',
      title: '路易斯安那博物館・April Coffee',
      theme: '藝術',
      events: [
        {
          time: '全天', type: 'sight', dotType: 'sight',
          evType: '博物館 · Art',
          title: '路易斯安那現代藝術博物館',
          en: 'Louisiana Museum of Modern Art',
          img: 'https://louisiana.dk/wp-content/uploads/2020/08/2015_06_01_Louisiana_Genrebilleder_101-1-1600x1067.jpg',
          address: 'Gl. Strandvej 13, 3050 Humlebæk, Denmark',
          hint: '被譽為世界最美博物館之一，藝術、建築與海岸景觀完美融合。從哥本哈根搭火車約 40 分鐘',
          tags: [{ text: '建議預留至少 3 小時', cls: 'tag-note' }],
          link: { url: 'https://louisiana.dk/en/', label: '官網 ↗' },
        },
        {
          time: '下午', type: 'food', dotType: 'food',
          evType: '精品咖啡 · Coffee',
          title: 'April Coffee',
          img: 'https://www.aprilcoffeeroasters.com/cdn/shop/files/Screenshot2025-08-13at13.57.04.png?v=1755086248&width=2048',
          address: 'Ryesgade 116, 2100 Copenhagen, Denmark',
          hint: '由 Patrik Rolf 創立的頂尖烘豆品牌，以簡約美學與極致的淺焙風味享譽國際。Showroom 空間設計也是視覺享受',
          link: { url: 'https://maps.app.goo.gl/G3eLnJQmeAhKAjME8', label: 'Google Maps ↗' },
        },
      ],
    },

    // ── DAY 15 · 7/26 Sun · 跨橋至馬爾默 + Prolog Coffee ──
    {
      tab: '7/26', tabSub: '跨海',
      badge: 'transit', badgeLabel: 'DAY 15',
      title: '開車跨橋至瑞典馬爾默・Prolog Coffee',
      theme: '跨海',
      events: [
        {
          time: '上午', type: 'drive', dotType: 'drive',
          evType: '自駕 · 跨橋',
          title: '開車跨越厄勒海峽大橋至瑞典馬爾默',
          hint: '跨越壯觀的 Øresund Bridge 進入瑞典，抵達馬爾默 (Malmö) 探索這座充滿設計感的城市',
          tags: [{ text: '🇸🇪 跨越丹麥—瑞典大橋', cls: 'tag-info' }],
        },
        {
          time: '下午', type: 'food', dotType: 'food',
          evType: '精品咖啡 · Coffee',
          title: 'Prolog Coffee',
          img: 'https://cdn.shopify.com/s/files/1/0052/3599/8790/files/wholesale-img.jpg?v=1728038129',
          address: 'Høkerboderne 16, 1712 København',
          hint: '位於哥本哈根肉類加工區 (Kødbyen) 的精品咖啡館，深受當地人喜愛。咖啡口感純淨，附近有很多特色小店可以一起逛',
          link: { url: 'https://maps.app.goo.gl/T3bv2fvULBuHdff87', label: 'Google Maps ↗' },
        },
      ],
    },

    // ── DAY 16 · 7/27 Mon · Finn Juhl + Coffee Collective ──
    {
      tab: '7/27', tabSub: '傢俱',
      badge: 'normal', badgeLabel: 'DAY 16',
      title: '芬·尤爾故居・Coffee Collective',
      theme: '傢俱',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '設計故居 · Design',
          title: '芬·尤爾故居',
          en: "Finn Juhl's House",
          img: 'https://ordrupgaard.dk/wp-content/uploads/2021/01/Finn-Juhls-hus-Interioer-1-Foto-Henrik-Soerensen-2.jpg',
          address: 'Vilvordevej 110, 2920 Charlottenlund',
          hint: '丹麥設計大師 Finn Juhl 的私人故居，家具、藝術品與空間渾然一體，是「整體設計」概念的完美實踐',
          tags: [{ text: '建議先確認開放時間', cls: 'tag-warn' }],
          link: { url: 'https://ordrupgaard.dk/en/exhibitions/finn-juhls-house/', label: '官網 ↗' },
        },
        {
          time: '下午', type: 'food', dotType: 'food',
          evType: '精品咖啡 · Coffee',
          title: 'Coffee Collective',
          img: 'https://coffeecollective.dk/cdn/shop/files/carlsberg_byen_high_res.jpg?v=1764586224',
          address: 'Jægersborggade 57, 2200 København N',
          hint: '丹麥最具代表性的精品咖啡，注重公平貿易與極淺焙風格。創始店位於文藝氣息濃厚的 Jægersborggade 街道',
          link: { url: 'https://coffeecollective.dk/', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 17 · 7/28 Tue · 設計博物館 + Illums / Hay ──
    {
      tab: '7/28', tabSub: 'Hay',
      badge: 'normal', badgeLabel: 'DAY 17',
      title: '丹麥設計博物館・Illums & Hay House',
      theme: 'Hay',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '博物館 · Design',
          title: '丹麥設計博物館',
          en: 'Designmuseum Danmark',
          img: 'https://designmuseum.dk/en/wp-content/uploads/sites/5/2024/12/Danish-Modern_Foto-JoakimZuger-1.jpg',
          address: 'Bredgade 68, 1260 København',
          hint: '展示丹麥設計的歷史與未來，包含經典丹麥家具設計。博物館商店非常值得一逛',
          link: { url: 'https://designmuseum.dk/en/', label: '官網 ↗' },
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '設計購物 · Design',
          title: 'Illums Bolighus & Hay House',
          img: 'https://www.hay.com/globalassets/blocks/brandsite/footer/hay-stores/denmark/new-order-shelving-system_sowden-bottle_pc-portable_910x1100.jpg?w=900',
          address: 'Amagertorv 10, 1160 København（Illums）',
          hint: '哥本哈根最頂級的設計百貨與 Hay 旗艦店，設計控必訪。兩間店位於購物大街，Hay House 在三樓景觀極佳',
          link: { url: 'https://www.illumsbolighus.com/', label: 'Illums 官網 ↗' },
        },
      ],
    },

    // ── DAY 18 · 7/29 Wed · 單車 + 渡輪至漢堡 ──
    {
      tab: '7/29', tabSub: '單車',
      badge: 'transit', badgeLabel: 'DAY 18',
      title: '騎腳踏車・搭渡輪前往漢堡',
      theme: '單車',
      events: [
        {
          time: '上午', type: 'default', dotType: 'default',
          evType: '自由探索',
          title: '騎腳踏車逛哥本哈根市區',
          hint: '哥本哈根是全球最友善單車城市之一，騎車感受丹麥首都的日常節奏',
          tags: [{ text: 'Copenhagen 最後一天', cls: 'tag-note' }],
        },
        {
          time: '下午', type: 'flight', dotType: 'flight',
          evType: 'Shampoo\'s family',
          title: "Shampoo's family 留守哥本哈根",
          people: ["Shampoo's family"],
        },
        {
          time: '下午', type: 'drive', dotType: 'drive',
          evType: '自駕 · 渡輪',
          title: '哥本哈根 → Rødby 港口 → Scandlines 渡輪 → 漢堡',
          hint: '開車至 Rødby 港口帶車上渡輪，航程約 45 分鐘抵達德國 Puttgarden，再開車前往漢堡。全程約 4 小時 20 分',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '渡輪', type: 'flight', dotType: 'flight',
          evType: '跨海渡輪 · Transport',
          title: 'Scandlines Ferry · Rødby → Puttgarden',
          img: 'https://www.scandlines.com/_next/image/?url=https%3A%2F%2Fcomplete-harmony-41d693229b.media.strapiapp.com%2FCouple_with_coffee_cups_on_the_deck_47b84a8cbc.jpg&w=3840&q=75',
          address: 'Rødby（丹麥）→ Puttgarden（德國）',
          hint: '往返德國與丹麥的跨海汽車渡輪，連人帶車一起上船，航程約 45 分鐘',
          tags: [{ text: '務必提早預訂彈性票 (Flex Ticket)', cls: 'tag-warn' }],
          link: { url: 'https://www.scandlines.com/', label: '官網 ↗' },
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · 漢堡',
          hint: "Eric's、Ryan's、Michael's families",
        },
      ],
    },

    // ── DAY 19 · 7/30 Thu · 還車 + 返回 Amsterdam ──
    {
      tab: '7/30', tabSub: '還車',
      badge: 'transit', badgeLabel: 'DAY 19',
      title: "Shampoo's 返台・三家開車返阿姆斯特丹",
      theme: '還車',
      events: [
        {
          time: '上午', type: 'flight', dotType: 'flight',
          evType: "Shampoo's family 出發",
          title: "Shampoo's family 從 Copenhagen 出發返台",
          people: ["Shampoo's family"],
        },
        {
          time: '全天', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 漢堡 → Amsterdam',
          hint: '車程約 4 小時',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '抵達', type: 'drive', dotType: 'drive',
          evType: '還車',
          title: '還租車 · Amsterdam',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Amsterdam',
          hint: "Eric's、Ryan's、Michael's families",
        },
      ],
    },

    // ── DAY 20 · 7/31 Fri · Eric 返台 ──
    {
      tab: '7/31', tabSub: '回程',
      badge: 'transit', badgeLabel: 'DAY 20',
      title: "Eric's family 返台",
      theme: '回程',
      events: [
        {
          time: '11:00', type: 'flight', dotType: 'flight',
          evType: '回程航班 · CI74',
          title: 'Depart AMS → TPE',
          people: ["Eric's family"],
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Amsterdam',
          hint: "Ryan's、Michael's families",
        },
      ],
    },

    // ── DAY 21 · 8/1 Sat · Eric 抵台 + Ryan & Michael 出發 ──
    {
      tab: '8/1', tabSub: '回程',
      badge: 'transit', badgeLabel: 'DAY 21',
      title: "Eric 抵台・Ryan & Michael 出發",
      theme: '回程',
      events: [
        {
          time: '06:15', type: 'flight', dotType: 'flight',
          evType: '抵達桃園 · CI64',
          title: 'Arrive TPE · 歡迎回家！',
          people: ["Eric's family"],
        },
        {
          time: '11:00', type: 'flight', dotType: 'flight',
          evType: '回程航班 · CI74',
          title: 'Depart AMS → TPE',
          people: ["Ryan's family", "Michael's family*"],
        },
      ],
    },

    // ── DAY 22 · 8/2 Sun · 全員返台 ──
    {
      tab: '8/2', tabSub: '回程',
      badge: 'transit', badgeLabel: 'DAY 22',
      title: '全員平安返台',
      theme: '回程',
      events: [
        {
          time: '06:15', type: 'flight', dotType: 'flight',
          evType: '抵達桃園 · CI74',
          title: 'Arrive TPE 🏠',
          hint: '北歐設計、單車、咖啡文化之旅圓滿結束。帶著滿滿回憶與一箱設計好物回家！',
          tags: [{ text: 'God rejse ✓ 旅程完成！', cls: 'tag-brick' }],
          people: ["Ryan's family", "Michael's family*"],
        },
      ],
    },

  ], // end days
}; // end TRIP
