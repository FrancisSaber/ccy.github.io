module.exports = {
  "title": "ccy's blogs",
  "description": "",
  "base": "/ccyblog/",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  "themeConfig": {
    "type": "blog",
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "covers": [
      'https://pan.zealsay.com/zealsay/cover/7.jpg',
      'https://pan.zealsay.com/zealsay/cover/1.jpg',
      'https://pan.zealsay.com/zealsay/cover/2.jpg',
      'https://pan.zealsay.com/zealsay/cover/3.jpg',
      'https://pan.zealsay.com/zealsay/cover/4.jpg',
      'https://pan.zealsay.com/zealsay/cover/5.jpg',
      'https://pan.zealsay.com/zealsay/cover/6.jpg'
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017",
    "codeTheme": "tomorrow"
  },
  
  
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    //看板人物
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang', {
        theme: [
          'whiteCat', 'miku', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: {
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
        },
        messageStyle: { right: '50px', bottom: '230px' },
        width: 200,
        height: 270
      }
    ],
    //音乐
    [
      '@vuepress-reco/vuepress-plugin-bgm-player', {
        audios: [
          // 本地文件示例
          {
            name: '好久不见',
            artist: '陈奕迅',
            url: 'http://freetyst.nf.migu.cn/public/product5th/product34/2019/07/2220/2019%E5%B9%B401%E6%9C%8829%E6%97%A512%E7%82%B935%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E6%AD%A3%E4%B8%9C100%E9%A6%96-2/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005661JPBP.mp3?channelid=02&msisdn=ae8d4281-ff5f-4231-9b90-17b99750e091&Tim=1636731925203&Key=d360b3df663282b5',
            cover: 'http://d.musicapp.migu.cn/prod/file-service/file-down/8121e8df41a5c12f48b69aea89b71dab/0fa38b527a1dbf97ea97eda17d6eaaa0/f473cd8b1863ccb411c86ba13511fff4'
          }
        ],
        position: { left: '10px', bottom: '10px', 'z-index': '999999' },
        autoplay: true,
        autoShrink: true,    //自动缩小
        floatPoition: 'left',
        floatStyle: {
          bottom: '10px',
          'z-index': '999999'
        }
      }
    ]
  ],
}