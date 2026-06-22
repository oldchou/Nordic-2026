// ============================================================
//  北歐設計、單車、咖啡文化之旅 2026
//  data.js — 行程資料檔（每次更新行程只需修改此檔）
//
//  event.type:
//    flight  → 藍色（航班、高鐵、集合）
//    sight   → 城市主色（景點、博物館）
//    food    → 琥珀色（咖啡、餐廳）
//    hotel   → 深藍（住宿）
//    drive   → 赭紅（自駕、租車）
//    family  → 淺色橫幅（家庭加入 / 離隊）
//    split   → 分流路線（特殊渲染）
//    default → 中性（自由活動）
//
//  event.spot (選填):
//    { nameEn, img, desc, tip, url }
// ============================================================

const TRIP = {
  title: '北歐設計、單車、咖啡文化之旅',
  subtitle: '2026 年 7 月 12 日 – 8 月 2 日・22 天',
  sheetsUrl: 'https://docs.google.com/spreadsheets/d/156MmwAFObsIvsE8CYA1BWxEvaouGdqNjEpfGV4_3MaU/edit?usp=sharing',
  badges: [
    { text: '4 個家庭・15 人' },
    { text: '🇳🇱 🇸🇪 🇩🇰' },
    { text: 'CI73 / CI74' },
  ],

  sections: [

    // ══════════════════════════════════════════════
    //  🇳🇱  AMSTERDAM  ·  橘 + 黑
    // ══════════════════════════════════════════════
    {
      id: 'amsterdam',
      name: '阿姆斯特丹',
      flag: '🇳🇱',
      country: '荷蘭',
      dates: '7/12 – 7/16',
      theme: 'amsterdam',
      days: [

        // ── DAY 1 · 7/12 Sun ──────────────────────
        {
          date: '7/12', dow: 'Sun', dayNum: 1, title: '出發',
          events: [
            {
              time: '23:10', type: 'flight',
              evType: '去程航班 · CI73',
              title: 'Depart TPE → AMS',
              hint: 'E、R、M 三家出發',
            },
            {
              type: 'family',
              title: 'S 家自行出發，7/17 於斯德哥爾摩會合',
            },
          ],
        },

        // ── DAY 2 · 7/13 Mon ──────────────────────
        {
          date: '7/13', dow: 'Mon', dayNum: 2, title: '抵達阿姆斯特丹',
          events: [
            {
              time: '07:40', type: 'flight',
              evType: '抵達 · CI73',
              title: 'Arrive AMS',
              hint: '機場巴士 397 至 Museumplein（30 min）→ 放行李至飯店',
            },
            {
              time: '11:00', type: 'food',
              evType: '早午餐・已預約',
              title: 'Moods Coffee & Brunch',
              spot: {
                nameEn: 'Moods Coffee & Brunch',
                img: 'img/moods-coffee.jpg',
                desc: '超人氣網美風早午餐與精品咖啡店，餐點擺盤精緻美味。',
                tip: '非常熱門，已提前預約。',
                url: 'https://maps.app.goo.gl/xzAjhwegGs1D87fE6',
              },
            },
            {
              time: '15:00', type: 'hotel',
              evType: '住宿 · Check-in',
              title: 'De Ware Jacob Boutique Hotel',
              spot: {
                nameEn: 'De Ware Jacob Boutique Hotel',
                img: 'img/de-ware-jacob.jpg',
                desc: '位於博物館廣場附近的精品酒店，步行即可抵達國家博物館與梵谷博物館。',
                tip: null,
                url: 'https://maps.app.goo.gl/R6Lz9rKQ2yBUzDyQ8',
              },
            },
            {
              time: '傍晚', type: 'default',
              evType: '散步',
              title: '運河區漫步',
            },
          ],
        },

        // ── DAY 3 · 7/14 Tue ──────────────────────
        {
          date: '7/14', dow: 'Tue', dayNum: 3, title: '國家博物館・九街漫步',
          events: [
            {
              time: '11:00', type: 'sight',
              evType: '博物館',
              title: '荷蘭國家博物館',
              spot: {
                nameEn: 'Rijksmuseum',
                img: 'img/rijksmuseum.jpg-c250-4ed9-b941-39800085a4e3?w=2880&h=2165&fx=1190&fy=1235&format=webp&c=e78b1b5d8b026e4a8ba0725cf1b62501ba77f13ac453d9e85cc0eca095be1dbb',
                desc: '荷蘭最大博物館，收藏林布蘭《夜巡》、維梅爾《倒牛奶的女僕》等黃金時代傑作。',
                tip: '極度熱門，需提早預約。中庭與戶外花園也非常漂亮。',
                url: 'https://maps.app.goo.gl/LVwPzPpYiA77cBHx6',
              },
            },
            {
              time: '隨興', type: 'sight',
              evType: '散步・購物',
              title: '九街',
              spot: {
                nameEn: 'De Negen Straatjes',
                img: 'img/de-negen-straatjes.webp',
                desc: '運河區九條小街，充滿獨立精品店、古董店與餐廳。',
                tip: '漫步挖掘獨特北歐小物，每條巷弄都有驚喜。',
                url: 'https://de9straatjes.nl/en',
              },
            },
            {
              time: '隨興', type: 'food',
              evType: '精品咖啡',
              title: 'Bocca Coffee',
              spot: {
                nameEn: 'Bocca Coffee',
                img: 'img/bocca-coffee.jpg',
                desc: '阿姆斯特丹知名精品咖啡烘豆坊，手沖與義式皆優。',
                tip: '店內空間寬敞現代，旅途中歇腳的好地方。',
                url: 'https://bocca.nl/en',
              },
            },
          ],
        },

        // ── DAY 4 · 7/15 Wed ──────────────────────
        {
          date: '7/15', dow: 'Wed', dayNum: 4, title: '梵谷博物館・野餐・音樂會',
          events: [
            {
              time: '10:00', type: 'sight',
              evType: '博物館',
              title: '梵谷博物館',
              spot: {
                nameEn: 'Van Gogh Museum',
                img: 'img/van-gogh.jpg',
                desc: '全世界收藏最多梵谷畫作的博物館，必訪。',
                tip: '需儘早預約，旺季時段極度搶手。',
                url: 'https://maps.app.goo.gl/1mjz8vnywgtZrsfNA',
              },
            },
            {
              time: '下午', type: 'default',
              evType: '分流',
              title: '（路線一）Vondelpark 租腳踏車 → 繞行運河區',
            },
            {
              time: '下午', type: 'food',
              evType: '市場・分流',
              title: '（路線二）Albert Cuyp 市場買野餐食材',
              spot: {
                nameEn: 'Albert Cuyp Market',
                img: 'img/albert-cuyp.jpg',
                desc: '阿姆斯特丹最大露天市場，必嚐現烤焦糖煎餅等庶民美食。',
                tip: '大團體請注意看管隨身財物。',
                url: 'https://maps.app.goo.gl/GXPxCb5ZW2Dqx13K6',
              },
            },
            {
              time: '合流', type: 'sight',
              evType: '野餐・合流',
              title: 'Vondelpark 草地野餐',
              spot: {
                nameEn: 'Vondelpark',
                img: 'img/vondelpark.webp',
                desc: '城市心臟地帶的大公園，氛圍悠閒，適合在草地上放鬆野餐。',
                tip: null,
                url: 'https://maps.app.goo.gl/3bo86px4qpJBB4sv7',
              },
            },
            {
              time: '20:00', type: 'sight',
              evType: '音樂會',
              title: '角野隼斗鋼琴演奏會・阿姆斯特丹音樂廳',
              hint: 'Hayato Sumino — Chopin Orbit',
              spot: {
                nameEn: 'Royal Concertgebouw',
                img: 'img/concertgebouw.avif',
                desc: '世界三大音樂廳之一，以極佳音響效果聞名，建築充滿新古典主義的優雅。',
                tip: '建議提早 30–45 分鐘抵達完成驗票與安檢。',
                url: 'https://www.concertgebouw.nl/en/concerts/41414663-hayato-sumino---chopin-orbit',
              },
            },
          ],
        },

        // ── DAY 5 · 7/16 Thu ──────────────────────
        {
          date: '7/16', dow: 'Thu', dayNum: 5, title: '運河遊船・自由探索',
          events: [
            {
              time: '上午', type: 'sight',
              evType: '遊船・TBD',
              title: '運河遊船',
              hint: '時間與航線待確認（TBD）',
              spot: {
                nameEn: 'Amsterdam Canal Cruise',
                img: 'img/canal-museum.jpg',
                desc: '搭乘遊船穿梭阿姆斯特丹的運河網絡，是認識這座城市最美的方式之一。',
                tip: '有多種航線可選，包含導覽型或自由式電動船，建議出發前確認預約。',
                url: null,
              },
            },
            {
              time: '下午', type: 'default',
              evType: '自由活動',
              title: '自由探索・補逛景點',
              hint: '可選：De Hallen 美食市場、Albert Cuyp 市場、Haarlem 近郊一日遊',
            },
          ],
        },

      ], // end amsterdam days
    },

    // ══════════════════════════════════════════════
    //  🇸🇪  STOCKHOLM  ·  藍 + 金黃
    // ══════════════════════════════════════════════
    {
      id: 'stockholm',
      name: '斯德哥爾摩',
      flag: '🇸🇪',
      country: '瑞典',
      dates: '7/17 – 7/21',
      theme: 'stockholm',
      days: [

        // ── DAY 6 · 7/17 Fri ──────────────────────
        {
          date: '7/17', dow: 'Fri', dayNum: 6, title: '前往斯德哥爾摩',
          events: [
            {
              time: '11:00', type: 'default',
              evType: '退房',
              title: 'De Ware Jacob Boutique Hotel 退房',
            },
            {
              time: '17:40', type: 'flight',
              evType: '航班 · KLM KL1225',
              title: 'AMS → ARN',
              hint: '抵達 19:40',
            },
            {
              type: 'family',
              title: 'S 家今日抵達斯德哥爾摩，四家首次全員會合',
            },
            {
              time: '21:00', type: 'drive',
              evType: '取車',
              title: '取 Stockholm 租車・Sixt ARN Airport',
            },
            {
              time: '住宿', type: 'hotel',
              evType: '住宿',
              title: 'Mysig Villa',
              spot: {
                nameEn: 'Mysig Villa',
                img: 'img/mysig-villa.jpg',
                desc: '斯德哥爾摩的舒適溫馨獨棟別墅，完美體驗道地北歐居家生活。',
                tip: null,
                url: 'https://www.airbnb.com.tw/rooms/1414936847020904908',
              },
            },
          ],
        },

        // ── DAY 7 · 7/18 Sat ──────────────────────
        {
          date: '7/18', dow: 'Sat', dayNum: 7, title: 'Gröna Lund 遊樂園',
          events: [
            {
              time: '上午', type: 'sight',
              evType: '主題樂園',
              title: 'Gröna Lund 遊樂園',
              spot: {
                nameEn: 'Gröna Lund',
                img: 'img/gronalund.jpg',
                desc: '擁有百年歷史的主題樂園，夏天常舉辦戶外演唱會，充滿歡樂的復古氛圍。',
                tip: '傍晚入園可同時看日夜美景。',
                url: 'https://www.gronalund.com/en',
              },
            },
          ],
        },

        // ── DAY 8 · 7/19 Sun ──────────────────────
        {
          date: '7/19', dow: 'Sun', dayNum: 8, title: '市政廳・運河遊船',
          events: [
            {
              time: '13:30', type: 'sight',
              evType: '地標・已預約',
              title: 'Stockholm City Hall・諾貝爾獎晚宴場地',
              spot: {
                nameEn: 'Stockholm City Hall',
                img: 'img/stockholm-city-hall.jpg',
                desc: '每年諾貝爾獎晚宴的舉辦地點，以紅磚建築聞名。',
                tip: '需參加官方導覽才能入內，登塔頂可俯瞰老城全景。',
                url: 'https://maps.app.goo.gl/2kxbouojNXFt57bH9',
              },
            },
            {
              time: '下午', type: 'sight',
              evType: '遊船・TBD',
              title: '運河遊船',
              hint: '市政廳參觀後安排，時間與航線待確認（TBD）',
              spot: {
                nameEn: 'Stockholm Canal Cruise',
                img: 'img/stockholm-canal.jpg',
                desc: '從水上角度欣賞「北方威尼斯」的城市風光。',
                tip: '有多種航線可選，建議提早上網劃位。',
                url: null,
              },
            },
          ],
        },

        // ── DAY 9 · 7/20 Mon ──────────────────────
        {
          date: '7/20', dow: 'Mon', dayNum: 9, title: 'Vasa Museum・地鐵藝術',
          events: [
            {
              time: '上午', type: 'sight',
              evType: '博物館',
              title: 'Vasa Museum 沈船博物館',
              spot: {
                nameEn: 'Vasa Museum',
                img: 'img/vasa-museum.jpg',
                desc: '展示世界上唯一保存完好的 17 世紀戰艦「瓦薩號」，瑞典最熱門博物館。',
                tip: '建議一開館就入場避開人潮，館內導覽影片非常值得觀看。',
                url: 'https://maps.app.goo.gl/ZW6etCVYhuhiSaY37',
              },
            },
            {
              time: '下午', type: 'sight',
              evType: '地鐵藝術',
              title: 'Stockholm Subway Art',
              spot: {
                nameEn: 'Stockholm Subway Art',
                img: 'img/subway-art.jpg',
                desc: '世界最長地下藝術長廊，多個地鐵站充滿獨特藝術裝置與壁畫。',
                tip: '最著名車站：T-Centralen、Solna Centrum、Stadion。買一張車票專程拍照即可。',
                url: null,
              },
            },
            {
              type: 'family',
              title: 'E 家今日離隊，前往挪威 Geirangerfjord 自行遊覽',
            },
          ],
        },

        // ── DAY 10 · 7/21 Tue ─────────────────────
        {
          date: '7/21', dow: 'Tue', dayNum: 10, title: 'Gamla Stan 古城',
          events: [
            {
              time: '下午', type: 'sight',
              evType: '老城漫步',
              title: 'Gamla Stan 古城',
              spot: {
                nameEn: 'Gamla Stan',
                img: 'img/gamla-stan.jpg',
                desc: '斯德哥爾摩老城，保留中世紀鵝卵石街道、王宮與古老教堂。',
                tip: '適合漫步逛文創小店與咖啡廳，巷弄較窄，建議穿好走的鞋。',
                url: 'https://maps.app.goo.gl/uUr23K3ckjBRHqq68',
              },
            },
          ],
        },

      ], // end stockholm days
    },

    // ══════════════════════════════════════════════
    //  🇩🇰  COPENHAGEN  ·  紅 + 白
    // ══════════════════════════════════════════════
    {
      id: 'copenhagen',
      name: '哥本哈根',
      flag: '🇩🇰',
      country: '丹麥',
      dates: '7/22 – 7/29',
      theme: 'copenhagen',
      days: [

        // ── DAY 11 · 7/22 Wed ─────────────────────
        {
          date: '7/22', dow: 'Wed', dayNum: 11, title: '前往哥本哈根',
          events: [
            {
              time: '10:00', type: 'default',
              evType: '退房',
              title: 'Mysig Villa 退房',
            },
            {
              time: '11:00', type: 'drive',
              evType: '還車',
              title: '還 Stockholm 租車・Sixt Stockholm Central Station',
            },
            {
              time: '12:10', type: 'flight',
              evType: '高鐵・SJ X2000',
              title: 'Stockholm Central → Malmö Central（換車）→ Köpenhamn H',
              hint: '抵達 17:58・全程 5 hr 48 min',
              spot: {
                nameEn: 'Stockholm–Copenhagen X2000',
                img: 'img/sj-x2000.webp',
                desc: 'SJ 旗艦高速列車，車廂寬敞、行駛平穩，配有免費 Wi-Fi 與充足行李空間。',
                tip: null,
                url: 'https://www.sj.se/en',
              },
            },
            {
              time: '18:30', type: 'drive',
              evType: '取車',
              title: '取 Copenhagen 租車・Sixt Copenhagen City Centre',
              hint: '→ 民宿約 1 hr 20 min，約 22:00 抵達',
            },
            {
              time: '住宿', type: 'hotel',
              evType: '住宿',
              title: 'Sæbygaard Estate',
              spot: {
                nameEn: 'Sæbygaard Estate',
                img: 'img/saebygaard.webp',
                desc: '哥本哈根西方一小時車程的湖邊度假別墅，古色古香裝潢與寬敞餐廳。',
                tip: '前往哥本哈根可開車至市區 Park & Ride 再換電車進城。',
                url: 'https://maps.app.goo.gl/P783P8qxmtx6jKAe6',
              },
            },
          ],
        },

        // ── DAY 12 · 7/23 Thu ─────────────────────
        {
          date: '7/23', dow: 'Thu', dayNum: 12, title: 'Nyhavn・設計博物館・電動船',
          events: [
            {
              type: 'family',
              title: 'E 家今日抵達哥本哈根，四家全員再次集合！',
            },
            {
              time: '上午', type: 'sight',
              evType: '運河漫步',
              title: 'Nyhavn 新港',
              spot: {
                nameEn: 'Nyhavn',
                img: 'img/nyhavn.jpg',
                desc: '哥本哈根最具代表性的歷史運河，兩側排滿 17–18 世紀彩色濱海磚房，曾是安徒生的居住地。',
                tip: '運河兩旁開滿露天餐廳與酒吧，上午人較少，適合拍照。',
                url: 'https://maps.app.goo.gl/hkgL2cLxQVVjCURB6',
              },
            },
            {
              time: '上午', type: 'sight',
              evType: '博物館',
              title: '丹麥設計博物館',
              spot: {
                nameEn: 'Designmuseum Danmark',
                img: 'img/designmuseum.jpg',
                desc: '展示丹麥設計的歷史與未來，包含經典的丹麥家具設計。',
                tip: '博物館商店非常值得一逛，有許多精緻設計良品。',
                url: 'https://designmuseum.dk/en/',
              },
            },
            {
              time: '下午', type: 'sight',
              evType: '自駕遊船',
              title: 'FriendShips 自駕電動野餐船',
              spot: {
                nameEn: 'FriendShips',
                img: 'img/friendships.jpg',
                desc: '免駕照自駕野餐電動船，沿 Christianshavn 精緻運河風景遊覽。',
                tip: '租 2 小時最能享受，自備肉桂捲與飲料在船上野餐，需提前預約。',
                url: 'https://friendships.dk/',
              },
            },
          ],
        },

        // ── DAY 13 · 7/24 Fri ─────────────────────
        {
          date: '7/24', dow: 'Fri', dayNum: 13, title: 'Strøget・丹麥設計購物・Torvehallerne',
          events: [
            {
              time: '上午', type: 'sight',
              evType: '設計購物',
              title: 'Illums Bolighus & Hay House',
              hint: 'Strøget 購物大街',
              spot: {
                nameEn: 'Illums Bolighus & Hay House',
                img: 'img/illums-hay.jpg',
                desc: '哥本哈根最頂級設計百貨 Illums 與 Hay 旗艦店，設計控必訪。',
                tip: '兩間店位於購物大街上，Hay House 在三樓，景觀極佳。',
                url: 'https://www.illumsbolighus.com/',
              },
            },
            {
              time: '下午', type: 'food',
              evType: '美食市場',
              title: 'Torvehallerne 市場',
              spot: {
                nameEn: 'Torvehallerne',
                img: 'img/torvehallerne.jpg',
                desc: '高級美食市集，有全哥本哈根最好吃的開放式三明治（Smørrebrød）與精品咖啡，也有 Coffee Collective 分店。',
                tip: '兩個室內大廳聚集許多攤位，推薦傳統開放式三明治。',
                url: 'https://maps.app.goo.gl/3ZCn45SC3StjnJN68',
              },
            },
          ],
        },

        // ── DAY 14 · 7/25 Sat ─────────────────────
        {
          date: '7/25', dow: 'Sat', dayNum: 14, title: 'Forest Tower・Villa Hesnæs',
          events: [
            {
              time: '上午', type: 'default',
              evType: '退房',
              title: 'Sæbygaard Estate 退房',
            },
            {
              time: '上午', type: 'sight',
              evType: '景觀塔',
              title: 'Forest Tower（Skovtårnet）',
              spot: {
                nameEn: 'Forest Tower',
                img: null,
                desc: null,
                tip: null,
                url: 'https://maps.app.goo.gl/PRkQuygo7JTkAmHy9',
              },
            },
            {
              time: '下午', type: 'drive',
              evType: '自駕',
              title: '前往 Villa Hesnæs',
              hint: '車程約 1 hr 40 min',
            },
            {
              time: '住宿', type: 'hotel',
              evType: '住宿',
              title: 'Villa Hesnæs',
              spot: {
                nameEn: 'Villa Hesnæs',
                img: 'img/villa-hesnaes.jpg',
                desc: '丹麥東南海岸的質感設計度假別墅，極度寧靜私密，適合家庭放鬆聚會。',
                tip: '廚房設備完善，建議提早買好食材，享受純粹的丹麥 Hygge 度假感。',
                url: 'https://maps.app.goo.gl/6oTCVHahHgmJL87v8',
              },
            },
          ],
        },

        // ── DAY 15 · 7/26 Sun ─────────────────────
        {
          date: '7/26', dow: 'Sun', dayNum: 15, title: '安徒生博物館・前往 Aarhus',
          events: [
            {
              time: '上午', type: 'drive',
              evType: '自駕',
              title: 'Hesnæs → Odense',
              hint: '車程約 1 hr 45 min',
            },
            {
              time: '13:30', type: 'sight',
              evType: '博物館（約 3–4 hr）・已預約',
              title: 'H.C. Andersens Hus 安徒生博物館',
              spot: {
                nameEn: 'H.C. Andersens Hus',
                img: 'img/andersens-hus.jpg',
                desc: '2021 年開幕，隈研吾設計。沉浸式音效與多媒體裝置，將童話意象與地景建築完美結合。',
                tip: '需官網預約；參觀時需佩戴隨附耳機，體驗故事與空間交織的感官之旅。',
                url: 'https://hcandersenshus.dk/en/',
              },
            },
            {
              time: '下午', type: 'drive',
              evType: '自駕',
              title: 'Odense → Aarhus',
              hint: '車程約 1 hr 30 min',
            },
            {
              time: '住宿', type: 'hotel',
              evType: '住宿',
              title: 'Comwell Aarhus Dolce by Wyndham',
              spot: {
                nameEn: 'Comwell Aarhus Dolce by Wyndham',
                img: 'img/comwell-aarhus.webp',
                desc: '位於 Aarhus 市中心的現代化設計酒店，客房全由丹麥品牌 HAY 操刀設計，步行可達 ARoS 藝術博物館。',
                tip: '飯店提供設計感十足的舒適空間，步行即可抵達市中心與中央車站。',
                url: 'https://maps.app.goo.gl/A4MhKrCSSHKWGVWD6',
              },
            },
          ],
        },

        // ── DAY 16 · 7/27 Mon ─────────────────────
        {
          date: '7/27', dow: 'Mon', dayNum: 16, title: '分流日・各家自選路線',
          events: [
            {
              type: 'split',
              routes: [
                {
                  label: '路線一',
                  summary: 'JL Møller → LEGO House → Copenhagen',
                  eta: '約 20:30 抵達哥本哈根',
                  steps: [
                    '🚗 Aarhus → JL Møller（20 min）',
                    '🏭 JL Møller 工廠參觀（1–2 hr）',
                    '🚗 → LEGO House, Billund（1 hr 15 min）',
                    '🧱 LEGO House 參觀（3 hr）',
                    '🚗 → Copenhagen（全公路，約 3 hr）',
                  ],
                  spots: [
                    {
                      name: 'JL Møller 傢俱廠',
                      nameEn: 'JL Møller',
                      img: 'img/jl-moller.jpg',
                      desc: '丹麥國寶級手工椅品牌，以精湛木工與編織工藝聞名，北歐設計愛好者的朝聖地。',
                      tip: '感受丹麥工匠精神的絕佳機會。',
                      url: 'https://www.jlm.dk/',
                    },
                    {
                      name: '樂高之家',
                      nameEn: 'LEGO House',
                      img: 'img/lego-house.jpg',
                      desc: '樂高品牌的精神中心，設有互動體驗區與微型工廠生產線。',
                      tip: null,
                      url: 'https://legohouse.com/en-gb/',
                    },
                  ],
                },
                {
                  label: '路線二',
                  summary: 'JL Møller → Aarhus 市區 → 渡輪 → Copenhagen',
                  eta: '約 21:30 抵達哥本哈根',
                  steps: [
                    '🚗 Aarhus → JL Møller（20 min）',
                    '🏭 JL Møller 工廠參觀（1–2 hr）',
                    '🚗 → Aarhus 市區（20 min）',
                    '🎨 ARoS 現代藝術博物館（2 hr）',
                    '⛴ 18:30 Mols-Linjen 渡輪 Aarhus → Odden（70 min）',
                    '🚗 Odden → Copenhagen（1 hr 30 min）',
                  ],
                  spots: [
                    {
                      name: 'JL Møller 傢俱廠',
                      nameEn: 'JL Møller',
                      img: 'img/jl-moller.jpg',
                      desc: '丹麥國寶級手工椅品牌，以精湛木工與編織工藝聞名，北歐設計愛好者的朝聖地。',
                      tip: '感受丹麥工匠精神的絕佳機會。',
                      url: 'https://www.jlm.dk/',
                    },
                    {
                      name: 'ARoS 現代藝術博物館',
                      nameEn: 'ARoS Aarhus Art Museum',
                      img: 'img/aros.webp',
                      desc: 'Aarhus 地標現代藝術博物館，頂樓「彩虹全景天際圈」是不可錯過的視覺盛宴。',
                      tip: '走在懸空的彩虹玻璃隧道裡可 360 度俯瞰城市美景。',
                      url: 'https://maps.app.goo.gl/ESb9MKLsXaccDg4r6',
                    },

                    {
                      name: 'Mols-Linjen 渡輪',
                      nameEn: 'Mols-Linjen Ferry',
                      img: 'img/mols-linjen.jpg',
                      desc: 'Aarhus ↔ Odden 高速汽車渡輪，航程約 70 分鐘，船上有餐廳與兒童遊樂區。',
                      tip: '自駕車隊需提前訂妥車位，開船前 20–30 分鐘抵達碼頭排隊。',
                      url: 'https://www.molslinjen.com/',
                    },
                  ],
                },
              ],
            },
            {
              time: '住宿', type: 'hotel',
              evType: '住宿',
              title: 'Kastrup Airbnb',
              spot: {
                nameEn: 'Kastrup Airbnb',
                img: 'img/kastrup-airbnb.avif',
                desc: '鄰近哥本哈根機場的寬敞包棟民宿，自駕取還車與搭機前後的理想落腳點。',
                tip: null,
                url: 'https://maps.app.goo.gl/RJqnW4LrEhYDPQ4U8',
              },
            },
          ],
        },

        // ── DAY 17 · 7/28 Tue ─────────────────────
        {
          date: '7/28', dow: 'Tue', dayNum: 17, title: '路易斯安那現代藝術博物館',
          events: [
            {
              time: '全天', type: 'sight',
              evType: '博物館',
              title: '路易斯安那現代藝術博物館',
              spot: {
                nameEn: 'Louisiana Museum of Modern Art',
                img: 'img/louisiana.jpg',
                desc: '被譽為世界最美的博物館之一，藝術、建築與海岸景觀完美融合。',
                tip: '從哥本哈根搭火車約 40 分鐘。建議預留至少三小時參觀。',
                url: 'https://louisiana.dk/en/',
              },
            },
          ],
        },

        // ── DAY 18 · 7/29 Wed ─────────────────────
        {
          date: '7/29', dow: 'Wed', dayNum: 18, title: 'Tivoli Gardens',
          events: [
            {
              time: '下午', type: 'sight',
              evType: '主題樂園',
              title: 'Tivoli Gardens 遊樂園',
              spot: {
                nameEn: 'Tivoli Gardens',
                img: 'img/tivoli.jpg',
                desc: '全球最古老遊樂園之一，夏日晚上燈光美得像夢境，是華特迪士尼樂園的靈感來源。',
                tip: '建議傍晚入場，可看到白天與夜晚點燈後的不同氛圍。',
                url: 'https://www.tivoli.dk/en',
              },
            },
          ],
        },

      ], // end copenhagen days
    },

    // ══════════════════════════════════════════════
    //  ✈  回程  ·  中性
    // ══════════════════════════════════════════════
    {
      id: 'return',
      name: '回程',
      flag: '✈',
      country: '',
      dates: '7/30 – 8/2',
      theme: 'return',
      days: [

        // ── DAY 19 · 7/30 Thu ─────────────────────
        {
          date: '7/30', dow: 'Thu', dayNum: 19, title: '各自返程',
          events: [
            {
              time: '上午', type: 'drive',
              evType: 'R, M',
              title: 'R, M 移動至哥本哈根市區',
            },
            {
              time: '17:00', type: 'drive',
              evType: 'R, M · 還車',
              title: 'R, M 還 Copenhagen 租車・Sixt',
            },
            {
              time: '住宿', type: 'hotel',
              evType: 'R, M · 住宿',
              title: 'The Square Copenhagen',
              spot: {
                nameEn: 'The Square Copenhagen',
                img: 'img/the-square.jpg',
                desc: '哥本哈根市中心市政廳廣場旁的設計酒店，鄰近 Tivoli 與中央車站。',
                tip: null,
                url: 'https://www.thesquarecopenhagen.com/',
              },
            },
            {
              time: '—', type: 'flight',
              evType: 'E · 返程',
              title: 'E 家還車後飛往 Amsterdam（轉機）',
            },
            {
              time: '—', type: 'flight',
              evType: 'S · 返程',
              title: 'S 家還車後直飛 TPE',
            },
          ],
        },

        // ── DAY 20 · 7/31 Fri ─────────────────────
        {
          date: '7/31', dow: 'Fri', dayNum: 20, title: 'R, M 飛 AMS・E 出發返台',
          events: [
            {
              time: '11:00', type: 'flight',
              evType: 'E · 回程航班 · CI74',
              title: 'E Depart AMS → TPE',
            },
            {
              time: '16:30', type: 'flight',
              evType: 'R, M · 航班 · KLM KL1274',
              title: 'R, M CPH → AMS',
              hint: '抵達 17:55',
            },
            {
              time: '住宿', type: 'hotel',
              evType: 'R, M · 住宿',
              title: 'Radisson Blu Hotel Amsterdam Airport',
              spot: {
                nameEn: 'Radisson Blu Hotel Amsterdam Airport',
                img: 'img/radisson-blu.jpg',
                desc: '阿姆斯特丹史基浦機場附近的連鎖酒店，適合回程中繼。',
                tip: null,
                url: 'https://www.radissonhotels.com/',
              },
            },
            {
              time: '—', type: 'flight',
              evType: 'S · 抵達',
              title: 'S 家 Arrive TPE',
            },
          ],
        },

        // ── DAY 21 · 8/1 Sat ──────────────────────
        {
          date: '8/1', dow: 'Sat', dayNum: 21, title: 'R, M 出發返台・E 抵台',
          events: [
            {
              time: '06:15', type: 'flight',
              evType: 'E · 抵達',
              title: 'E Arrive TPE・歡迎回家！',
            },
            {
              time: '11:00', type: 'flight',
              evType: 'R, M · 回程航班 · CI74',
              title: 'R, M Depart AMS → TPE',
            },
          ],
        },

        // ── DAY 22 · 8/2 Sun ──────────────────────
        {
          date: '8/2', dow: 'Sun', dayNum: 22, title: '全員平安返台',
          events: [
            {
              time: '06:15', type: 'flight',
              evType: 'R, M · 抵達 · CI74',
              title: 'R, M Arrive TPE 🏠',
              hint: '北歐設計、單車、咖啡文化之旅圓滿結束！',
            },
          ],
        },

      ], // end return days
    },

  ], // end sections
}; // end TRIP
