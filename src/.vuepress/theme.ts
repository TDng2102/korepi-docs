import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, ruNavbar, idNavbar, esNavbar, viNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar, ruSidebar, idSidebar, esSidebar, viSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://korepi.com/",

  author: {
    name: "Micah",
    url: "https://github.com/micah123321/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "Korepi/korepi-docs",

  docsDir: "src",

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Provides the best gaming experience for PC players in Genshin Impact.",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    "/ru/": {
      // navbar
      navbar: ruNavbar,

      // sidebar
      sidebar: ruSidebar,

      footer: "Обеспечивает лучший игровой опыт для игроков на ПК в Genshin Impact",

      displayFooter: true,

      metaLocales: {
        editLink: "Изменить эту страницу на GitHub",
      },
    },

    "/id/": {
      // navbar
      navbar: idNavbar,

      // sidebar
      sidebar: idSidebar,

      footer: "Memberikan pengalaman bermain game terbaik untuk pemain PC di Genshin Impact.",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit halaman ini di GitHub",
      },
    },
    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "为原神 PC 端玩家带来最好的游戏体验",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/es/": {
      // navbar
      navbar: esNavbar,

      // sidebar
      sidebar: esSidebar,

      footer: "Proporciona la mejor experiencia de juego para jugadores de PC en Genshin Impact.",

      displayFooter: true,

      metaLocales: {
        editLink: "Edita esta pagina en GitHub",
      },
    },
    "/vi/": {
      // navbar
      navbar: viNavbar,

      // sidebar
      sidebar: viSidebar,

      footer: "Cung cấp trải nghiệm chơi game tốt nhất cho người chơi Genshin Impact trên PC.",

      displayFooter: true,

      metaLocales: {
        editLink: "Chỉnh sửa trang này trên GitHub",
      },
    },
  },

  // encrypt: {
  //   config: {
  //     "/en/demo/encrypt.html": ["1234"],
  //     "/zh/demo/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    feed:{
      rss:true,
    },
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,

      // insert component easily
      // component: true,

      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/start/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
