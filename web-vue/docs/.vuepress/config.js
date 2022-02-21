const alias = require("../../alias");

module.exports = {
  title: "UPFOS DESIGN", // 顶部左侧标题
  description: "基于 Vue3.x 的组件库",
  bundler: "@vuepress/vite",
  alias,
  themeConfig: {
    sidebar: {
      // 侧边栏
      "/": [
        {
          text: "介绍",
          children: [
            { text: "快速上手", link: "/guide/start" },
            { text: "色彩", link: "/guide/color" },
          ],
        },
        {
          text: "组件",
          children: [
            { text: "Button 按钮", link: "/components/button" },
            { text: 'Icon 图标', link: '/components/icon'},
            { text: "Label 按钮", link: "/components/label" },
          ],
        },
      ],
    },
    // nav: [
    //   // 顶部右侧导航栏
    //   { text: "介绍", link: "/", activeMatch: "^/$|^/guide/" },
    //   {
    //     text: "组件",
    //     link: "/components/button.html",
    //     activeMatch: "^/$|^/components/"
    //   }
    // ],
  },
  plugins: ["demoblock-plus"],
};
