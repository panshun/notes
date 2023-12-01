module.exports = {
  title: "首页",
  lang: 'zh',
  base: "/notes",
  description: "学习笔记",
  i18nRouting: true,
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    nav: [
      {
        text: "首页",
        link: '/index'
      },
      {
        text: "GIS技术",
        items: [
          { text: "GIS算法", link: "/gis/algorithm/" },
          { text: "Leaflet", link: "/gis/leaflet/" },
          { text: "OpenLayers", link: "/gis/opengis/" },
          { text: "OpenGIS", link: "/gis/openlayers/" },
        ],
      },{
        text: "Unity学习",
        items: [
          { text: "C#学习", link: "/unity/csharp/" },
          { text: "unity学习", link: "/unity/unity/" },
        ]
      }
    ],
    sidebar: {
      "/gis/": [
        {
          text: "GIS算法",
          collapsed: true,
          link: "/gis/algorithm/",
          items: [
            { text: "算法1", link: "/gis/algorithm/算法1" },
            { text: "算法2", link: "/gis/algorithm/算法2" },
          ],
        },{
            text: "Leaflet",
            link: "/gis/leaflet/",
            collapsed: true,
            items: [
              { text: "Map", link: "/gis/leaflet/Map" },
              { text: "算法2", link: "/gis/leaflet/Layer" },
            ],
          },
        
      ],
      "/unity/": [
        {
          text: "C#",
          collapsed: true,
          link: "/unity/csharp/",
          items: [
            { text: "C#程序设计", link: "/unity/csharp/csharp01" },
            { text: "C#程序设计2", link: "/unity/csharp/csharp02" },
          ],
        },{
            text: "Unity学习",
            link: "/unity/unity/",
            collapsed: true,
            items: [
              { text: "unity1", link: "/unity/unity/unity1" },
              { text: "unity2", link: "/unity/unity/unity2" },
            ],
          },
      ]
    },
  },
};
