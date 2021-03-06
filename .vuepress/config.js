module.exports = {
  title: "Milk Hall",
  description: "blog",
  dest: "public",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  headerBackgroundImg: "/logo.png",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "联系方式",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/tosins/Milk-Hall-Blog",
            icon: "reco-github",
          },
        ],
      },
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "Milk Hall",
        desc: "Enjoy when you can, and endure when you must.",
        email: "gkinxin@gmail.com",
        link: "https://blog.lalilali.com",
      },
    ],
    logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "xg",
    authorAvatar: "/avatar.jpg",
    record: "Milk Hall",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ["@vuepress-reco/vuepress-plugin-kan-ban-niang"],
    ["vuepress-plugin-auto-sidebar"],
    [
      "@vuepress-reco/vuepress-plugin-pagation",
      {
        perPage: 2,
      },
    ],
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: ($page) => $page.frontmatter.tags,
        twitterCard: (_) => "summary_large_image",
        type: ($page) =>
          ["articles", "posts", "blog"].some((folder) =>
            $page.regularPath.startsWith("/" + folder)
          )
            ? "article"
            : "website",
        url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith("http")) ||
            "") + $page.frontmatter.image,
        publishedAt: ($page) =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
  ],
};
