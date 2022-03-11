module.exports = {
  i18n: {
    locales: ["en-US", "am"],
    defaultLocale: "en-US",
  },
  async redirects() {
    return [
      {
        source: "/cv",
        destination:
          "https://vrezh.notion.site/Oganisyan-Vrezh-CV-47932133fefb45e8aa4b564572a12d87",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
