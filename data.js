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
//  tag 樣式 (tagClass):
//    tag-warn  → 橘色（警告、注意）
//    tag-info  → 藍色（資訊）
//    tag-brick → 磚紅（重點）
//    tag-note  → 灰色（備註）
//
//  people 陣列：名字後加 * 代表粗體標示（Michael's family）
// ============================================================

const TRIP = {
  title: '北歐之旅',
  subtitle: '2026 年 7 月 12 日 – 8 月 2 日 · 22 天',
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
      ],
    },

    // ── DAY 2 · 7/13 Mon · 抵達 Amsterdam ──
    {
      tab: '7/13', tabSub: 'AMS抵',
      badge: 'transit', badgeLabel: 'DAY 2',
      title: '抵達阿姆斯特丹',
      theme: 'Amsterdam',
      events: [
        {
          time: '07:40', type: 'flight', dotType: 'flight',
          evType: '抵達阿姆斯特丹 · CI73',
          title: 'Arrive AMS · Check-in Hotel',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
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
          hint: 'Eric\'s、Ryan\'s、Michael\'s families',
        },
      ],
    },

    // ── DAY 3 · 7/14 Tue · 梵谷 + 九街 ──
    {
      tab: '7/14', tabSub: '梵谷',
      badge: 'normal', badgeLabel: 'DAY 3',
      title: '博物館廣場・九街',
      theme: 'Amsterdam',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '博物館',
          title: '博物館廣場・梵谷博物館',
          en: 'Van Gogh Museum',
          img: 'https://www.vangoghmuseum.nl/assets/9d8ff7b6-f3ae-42d7-ae40-f4886ebd4b95?w=900&h=1671&x=1158&y=568&cropWidth=1316&cropHeight=2352&format=webp&c=56cadd4dc32684fe97fbd438bc587d5df3a3a32975445715990df2324b6fe41b',
          address: 'Museumplein 6, 1071 DJ Amsterdam',
          hint: '全世界收藏最多梵谷畫作的博物館，必訪',
          tags: [{ text: '需提早預約早場門票', cls: 'tag-warn' }],
          link: { url: 'https://maps.app.goo.gl/1mjz8vnywgtZrsfNA', label: 'Google Maps ↗' },
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '購物・散步',
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
      tab: '7/15', tabSub: '風車村',
      badge: 'normal', badgeLabel: 'DAY 4',
      title: 'Zaanse Schans 風車村',
      theme: 'Amsterdam',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '景點 · 半日遊',
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
      theme: 'Amsterdam',
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
      tab: '7/17', tabSub: 'Bremen',
      badge: 'transit', badgeLabel: 'DAY 6',
      title: '取租車・前往 Bremen',
      theme: 'Bremen',
      events: [
        {
          time: '上午', type: 'drive', dotType: 'drive',
          evType: '租車 · 自駕',
          title: '取車 → 開車 Amsterdam → Bremen',
          hint: '車程約 3.5 小時。北歐公路之旅正式開始',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Bremen',
          hint: 'Eric\'s、Ryan\'s、Michael\'s families',
        },
      ],
    },

    // ── DAY 7 · 7/18 Sat · Bremen 舊城 + 前往 Berlin ──
    {
      tab: '7/18', tabSub: 'Bremen',
      badge: 'normal', badgeLabel: 'DAY 7',
      title: 'Bremen 舊城區・前往柏林',
      theme: 'Bremen',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '舊城區散步',
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
      theme: 'Berlin',
      events: [
        {
          time: '上午', type: 'flight', dotType: 'flight',
          evType: '🎉 集合',
          title: "Shampoo's family 抵達柏林・四家全員到齊",
          people: ["Shampoo's family", "Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '地標',
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

    // ── DAY 9 · 7/20 Mon · Boros ──
    {
      tab: '7/20', tabSub: 'Boros',
      badge: 'normal', badgeLabel: 'DAY 9',
      title: 'Boros 當代藝術收藏館',
      theme: 'Berlin',
      events: [
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '當代藝術',
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
      tab: '7/21', tabSub: 'Scooter',
      badge: 'normal', badgeLabel: 'DAY 10',
      title: '租 Scooter・Tempelhof 機場公園',
      theme: 'Berlin',
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
          evType: '城市公園',
          title: 'Tempelhof 舊機場公園',
          en: 'Tempelhofer Feld',
          img: 'https://www.thf-berlin.de/fileadmin/user_upload/THF/Bilder/Tempelhofer_Feld/Tempelhofer_Feld_Sunset.jpg',
          address: 'Tempelhofer Damm, 12101 Berlin',
          hint: '由舊柏林 Tempelhof 機場改建的巨大城市公園，保留原來的飛機跑道。適合騎車、溜滑板或全家野餐，感受柏林獨特的開闊感',
          tags: [{ text: '免費入場', cls: 'tag-note' }],
          link: { url: 'https://www.thf-berlin.de/en/your-visit/tempelhof-field', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 11 · 7/22 Wed · 柏林 → 漢堡 ──
    {
      tab: '7/22', tabSub: '漢堡',
      badge: 'transit', badgeLabel: 'DAY 11',
      title: '前往漢堡・倉庫城',
      theme: 'Hamburg',
      events: [
        {
          time: '上午', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 柏林 → 漢堡',
          hint: '車程約 3.5 小時',
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '微縮景觀',
          title: 'Miniatur Wunderland',
          img: 'https://www.miniatur-wunderland.com/wp-content/uploads/header-wunderland-logo.png',
          address: 'Kehrwieder 2/Block D, 20457 Hamburg',
          hint: '世界最大鐵道模型博物館，擁有極其精細的微縮城市、日夜交替與機場場景，大人小孩都著迷',
          tags: [{ text: '⚠ 強烈建議提早官網預約', cls: 'tag-warn' }],
          link: { url: 'https://www.miniatur-wunderland.com/', label: '官網 ↗' },
        },
        {
          time: '傍晚', type: 'sight', dotType: 'sight',
          evType: '世界遺產',
          title: '倉庫城散步',
          en: 'Speicherstadt',
          img: 'https://www.hamburg.com/resource/image/19324/landscape_ratio16x9/1000/562/speicherstadt-at-night.jpg',
          address: 'Speicherstadt, 20457 Hamburg',
          hint: '世界最大的紅磚倉庫區，建於19世紀末，UNESCO 世界文化遺產。傍晚運河倒影非常迷人',
          link: { url: 'https://www.hamburg.com/visitors/sights/architecture/speicherstadt-19324', label: '官網 ↗' },
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · 漢堡',
        },
      ],
    },

    // ── DAY 12 · 7/23 Thu · 漢堡 → LEGOLAND → Odense ──
    {
      tab: '7/23', tabSub: 'LEGO',
      badge: 'transit', badgeLabel: 'DAY 12',
      title: 'LEGOLAND・前往 Odense',
      theme: 'Billund',
      events: [
        {
          time: '上午', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 漢堡 → LEGOLAND Billund',
          hint: '車程約 3 小時',
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '主題樂園',
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
          title: '開車 LEGOLAND → Odense',
          hint: '車程約 1.5 小時',
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Odense',
        },
      ],
    },

    // ── DAY 13 · 7/24 Fri · Odense → Copenhagen ──
    {
      tab: '7/24', tabSub: 'Odense',
      badge: 'transit', badgeLabel: 'DAY 13',
      title: 'Odense 安徒生故鄉・抵達哥本哈根',
      theme: 'Odense',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '童話故鄉 · 中繼',
          title: 'Odense 奧登斯',
          img: 'https://www.visitodense.com/sites/visitodense.com/files/2022-04/HC_Andersen_Museum_Odense_0.jpg',
          address: 'Odense, Funen, Denmark',
          hint: '丹麥第三大城，童話大師安徒生的故鄉，充滿中世紀鵝卵石街道與童話氛圍',
          link: { url: 'https://www.visitodense.com/', label: '官網 ↗' },
        },
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '建築・博物館',
          title: 'H.C. Andersens Hus 安徒生博物館',
          img: 'https://hcandersenshus.dk/wp-content/uploads/sites/3/2025/09/HCAH_Drone_Sommer_August_2024_BKKLA_15-1024x576.jpg',
          address: 'H.C. Andersen Haven 1, 5000 Odense, Denmark',
          hint: '2021年全新開幕，由日本建築大師隈研吾設計。沉浸式音效與多媒體裝置，將童話意象與地景建築完美結合',
          tags: [{ text: '建議官網預約 · 攜帶耳機體驗', cls: 'tag-info' }],
          link: { url: 'https://hcandersenshus.dk/en/', label: '官網 ↗' },
        },
        {
          time: '下午', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 Odense → Copenhagen',
          hint: '車程約 2 小時',
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Copenhagen',
        },
      ],
    },

    // ── DAY 14 · 7/25 Sat · 路易斯安那 ──
    {
      tab: '7/25', tabSub: '路易安',
      badge: 'normal', badgeLabel: 'DAY 14',
      title: '路易斯安那現代藝術博物館',
      theme: 'Copenhagen',
      events: [
        {
          time: '全天', type: 'sight', dotType: 'sight',
          evType: '博物館 · 當代藝術',
          title: '路易斯安那現代藝術博物館',
          en: 'Louisiana Museum of Modern Art',
          img: 'https://louisiana.dk/wp-content/uploads/2020/08/2015_06_01_Louisiana_Genrebilleder_101-1-1600x1067.jpg',
          address: 'Gl. Strandvej 13, 3050 Humlebæk, Denmark',
          hint: '被譽為世界最美博物館之一，藝術、建築與海岸景觀完美融合。從哥本哈根搭火車約 40 分鐘',
          tags: [{ text: '建議預留至少 3 小時', cls: 'tag-note' }],
          link: { url: 'https://louisiana.dk/en/', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 15 · 7/26 Sun · 跨橋至瑞典馬爾默 + World of Volvo ──
    {
      tab: '7/26', tabSub: '馬爾默',
      badge: 'transit', badgeLabel: 'DAY 15',
      title: '跨海至瑞典馬爾默・World of Volvo',
      theme: 'Malmö / Gothenburg',
      events: [
        {
          time: '全天', type: 'drive', dotType: 'drive',
          evType: '自駕 · 跨橋',
          title: '開車跨越厄勒海峽大橋至瑞典馬爾默',
          hint: '跨越壯觀的 Øresund Bridge 進入瑞典，抵達馬爾默 (Malmö) 探索這座充滿設計感的城市',
          tags: [{ text: '🇸🇪 跨越丹麥—瑞典大橋', cls: 'tag-info' }],
        },
        {
          time: '(待定)', type: 'sight', dotType: 'sight',
          evType: '品牌展覽 · Michael 單獨考慮',
          title: 'World of Volvo（哥德堡）',
          img: 'https://www.worldofvolvo.com/globalassets/visual/wov-exterior--interior/wov_exterior_retouch_20240418_dji_0077-small.jpg?maxwidth=1920&quality=80',
          address: 'Valhallagatan 1, 412 51 Göteborg, Sweden',
          hint: '2024 年開幕的 Volvo 品牌中心，結合歷史、設計、創新與北歐生活方式。哥德堡距馬爾默約 2.5 小時，Michael 可考慮單獨前往',
          tags: [{ text: '路線待確認', cls: 'tag-warn' }],
          link: { url: 'https://www.worldofvolvo.com/', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 16 · 7/27 Mon · Finn Juhl + Coffee Collective ──
    {
      tab: '7/27', tabSub: 'Juhl',
      badge: 'normal', badgeLabel: 'DAY 16',
      title: '芬·尤爾故居・Coffee Collective',
      theme: 'Copenhagen',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '設計 · 故居',
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
          evType: '精品咖啡',
          title: 'Coffee Collective',
          img: 'https://coffeecollective.dk/cdn/shop/files/carlsberg_byen_high_res.jpg?v=1764586224',
          address: 'Jægersborggade 57, 2200 København N',
          hint: '丹麥最具代表性的精品咖啡，注重公平貿易與極淺焙風格。創始店位於文藝氣息濃厚的 Jægersborggade 街道',
          link: { url: 'https://coffeecollective.dk/', label: '官網 ↗' },
        },
      ],
    },

    // ── DAY 17 · 7/28 Tue · 設計博物館 + Illums ──
    {
      tab: '7/28', tabSub: '設計',
      badge: 'normal', badgeLabel: 'DAY 17',
      title: '丹麥設計博物館・設計購物',
      theme: 'Copenhagen',
      events: [
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '博物館',
          title: '丹麥設計博物館',
          en: 'Designmuseum Danmark',
          img: 'https://designmuseum.dk/en/wp-content/uploads/sites/5/2024/12/Danish-Modern_Foto-JoakimZuger-1.jpg',
          address: 'Bredgade 68, 1260 København',
          hint: '展示丹麥設計的歷史與未來，包含經典丹麥家具設計。博物館商店非常值得一逛',
          link: { url: 'https://designmuseum.dk/en/', label: '官網 ↗' },
        },
        {
          time: '下午', type: 'sight', dotType: 'sight',
          evType: '購物 · 設計',
          title: 'Illums Bolighus & Hay House',
          img: 'https://www.hay.com/globalassets/blocks/brandsite/footer/hay-stores/denmark/new-order-shelving-system_sowden-bottle_pc-portable_910x1100.jpg?w=900',
          address: 'Amagertorv 10, 1160 København（Illums）',
          hint: '哥本哈根最頂級的設計百貨與 Hay 旗艦店，設計控必訪。兩間店位於購物大街，Hay House 在三樓景觀極佳',
          link: { url: 'https://www.illumsbolighus.com/', label: 'Illums 官網 ↗' },
        },
      ],
    },

    // ── DAY 18 · 7/29 Wed · 單車 + 搭渡輪前往 Münster ──
    {
      tab: '7/29', tabSub: '渡輪',
      badge: 'transit', badgeLabel: 'DAY 18',
      title: '騎腳踏車・搭渡輪前往德國明斯特',
      theme: 'Copenhagen → Münster',
      events: [
        {
          time: '上午', type: 'default', dotType: 'default',
          evType: '自由探索',
          title: '騎腳踏車逛哥本哈根市區',
          hint: '哥本哈根是全球最友善單車城市之一，騎車感受丹麥首都的日常節奏',
          tags: [{ text: 'Copenhagen 最後一天', cls: 'tag-note' }],
        },
        {
          time: '下午', type: 'drive', dotType: 'drive',
          evType: '自駕 · 渡輪',
          title: '哥本哈根 → Rødby 港口 → Scandlines 渡輪 → 德國',
          hint: '開車至 Rødby 港口，帶車上 Scandlines 渡輪跨越波羅的海，航程約 45 分鐘抵達德國 Puttgarden，再開車前往明斯特',
        },
        {
          time: '渡輪', type: 'flight', dotType: 'flight',
          evType: '跨海渡輪',
          title: 'Scandlines Ferry · Rødby → Puttgarden',
          img: 'https://www.scandlines.com/-/media/scandlines/images/ferries/hybrid-ferry-berlin.jpg',
          address: 'Rødby 港口（丹麥）→ Puttgarden（德國）',
          hint: '往返德國與丹麥的跨海汽車渡輪，連人帶車一起上船，航程約 45 分鐘',
          tags: [{ text: '務必提早預訂彈性票 (Flex Ticket)', cls: 'tag-warn' }],
          link: { url: 'https://www.scandlines.com/', label: '官網 ↗' },
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Münster 明斯特',
        },
      ],
    },

    // ── DAY 19 · 7/30 Thu · Shampoo's 返台 + 其他三家返 AMS ──
    {
      tab: '7/30', tabSub: '返AMS',
      badge: 'transit', badgeLabel: 'DAY 19',
      title: "Shampoo's 返台・三家開車返阿姆斯特丹",
      theme: 'Amsterdam',
      events: [
        {
          time: '上午', type: 'flight', dotType: 'flight',
          evType: "Shampoo's family 出發",
          title: "Shampoo's family 從 Copenhagen 出發返台",
          people: ["Shampoo's family"],
        },
        {
          time: '上午', type: 'sight', dotType: 'sight',
          evType: '自行車之都',
          title: 'Münster 明斯特舊城區',
          img: 'https://www.germany.travel/media/content/staedte___kultur_1/staedte_und_kultur/muenster/muenster_lambertibrunnen_auf_dem_prinzipalmarkt.jpg',
          address: 'Münster, Germany',
          hint: '德國自行車之都，簽署西發里亞和約的和平之城。可沿舊城牆改建的林蔭步道騎腳踏車，或在舊城區品嚐咖啡',
          link: { url: 'https://www.stadt-muenster.de/en/tourismus/welcome-to-muenster', label: '官網 ↗' },
        },
        {
          time: '午後', type: 'drive', dotType: 'drive',
          evType: '自駕',
          title: '開車 Münster → Amsterdam',
          hint: '車程約 3 小時',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '抵達', type: 'drive', dotType: 'drive',
          evType: '還車',
          title: '還租車',
          people: ["Eric's family", "Ryan's family", "Michael's family*"],
        },
        {
          time: '住宿', type: 'hotel', dotType: 'hotel',
          evType: '住宿',
          title: 'TBD · Amsterdam',
          hint: 'Eric\'s、Ryan\'s、Michael\'s families',
        },
      ],
    },

    // ── DAY 20 · 7/31 Fri · Eric 返台 ──
    {
      tab: '7/31', tabSub: 'Eric返',
      badge: 'transit', badgeLabel: 'DAY 20',
      title: "Eric's family 返台",
      theme: '返台',
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
          hint: 'Ryan\'s、Michael\'s families',
        },
      ],
    },

    // ── DAY 21 · 8/1 Sat · Eric 抵台 + Ryan & Michael 出發 ──
    {
      tab: '8/1', tabSub: '分批',
      badge: 'transit', badgeLabel: 'DAY 21',
      title: "Eric 抵台・Ryan & Michael 出發",
      theme: '返台',
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
      tab: '8/2', tabSub: '返台',
      badge: 'transit', badgeLabel: 'DAY 22',
      title: '全員平安返台',
      theme: '返台',
      events: [
        {
          time: '06:15', type: 'flight', dotType: 'flight',
          evType: '抵達桃園 · CI74',
          title: 'Arrive TPE 🏠',
          hint: '北歐之旅圓滿結束。帶著滿滿回憶與一箱設計好物回家！',
          tags: [{ text: 'God rejse ✓ 旅程完成！', cls: 'tag-brick' }],
          people: ["Ryan's family", "Michael's family*"],
        },
      ],
    },

  ], // end days
}; // end TRIP
