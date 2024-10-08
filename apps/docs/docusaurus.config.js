// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Connery SDK",
  url: "https://sdk.connery.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/connery-io/connery-sdk/tree/main/apps/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-R8J5J4L3DQ",
          anonymizeIP: false,
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Connery SDK",
        items: [
          {
            label: "Docs",
            docId: "introduction/index",
            type: "doc",
            position: "left",
          },
          {
            label: "Plugins",
            docId: "plugins/index",
            type: "doc",
            position: "left",
          },
          {
            label: "Clients",
            docId: "clients/index",
            type: "doc",
            position: "left",
          },
          {
            label: "Use cases",
            docId: "use-cases/index",
            type: "doc",
            position: "left",
          },
          {
            label: "⭐ GitHub",
            href: "https://github.com/connery-io/connery-sdk",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "NM2Q08XMHT",
        apiKey: "c1bc512e003f927e6a5bbe116e80a49c",
        indexName: "connery",
        insights: true,
      },
    }),
};

module.exports = config;
