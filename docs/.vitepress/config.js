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
      }, {
        text: "Unity学习",
        items: [
          { text: "C#学习", link: "/unity/csharp/" },
          { text: "unity学习", link: "/unity/unity/" },
        ]
      }, {
        text: "Java技术学习",
        items: [
          { text: "java基础", link: "/java/basic/" },
          { text: "java进阶", link: "/java/more/" },
        ]
      }, {
        text: "webgl技术",
        items: [
          { text: "webgl基础 ", link: "/webgl/basic/" },
          { text: "cesium", link: "/webgl/cesium/" },
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
        }, {
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
        }, {
          text: "Unity学习",
          link: "/unity/unity/",
          collapsed: true,
          items: [
            { text: "unity1", link: "/unity/unity/unity1" },
            { text: "unity2", link: "/unity/unity/unity2" },
          ],
        },
      ],
      "/java/": [
        {
          text: "java基础",
          collapsed: true,
          link: "/java/basic/",
          items: [
            { text: "Java程序设计", link: "/java/basic/java01" },
            { text: "java程序设计2", link: "/java/basic/java02" },
          ],
        }, {
          text: "java进阶",
          link: "/java/more/",
          collapsed: true,
          items: [
            { text: "java进阶1", link: "/java/more/java01" },
            { text: "java进阶2", link: "/java/more/java02" },
          ],
        },
      ],
      "/webgl/": [
        {
          text: "webgl基础",
          collapsed: true,
          link: "/webgl/basic/",
          items: [
            {text: "glsl语言基础", link: "/webgl/basic/1glsl"},
            {text: "矩阵", link: "/webgl/basic/2"}
          ]

        }, {
          text: "webgl中级",
          collapsed: true,
          link: "/webgl/basic/",
          items: [
            {text: "glsl语言语法", link: "/webgl/basic/1"},
            {text: "矩阵", link: "/webgl/basic/2"}
          ]

        }
      ]
    },
  },
};
