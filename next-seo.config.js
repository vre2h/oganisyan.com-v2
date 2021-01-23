const title = "Vrezh Oganisyan – Software Engineer, lecturer, writer.";
const description = "Software Engineer, Lecturer, Writer.";

const SEO = {
  title,
  description,
  canonical: "https://oganisyan.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://oganisyan.com",
    title,
    description,
    images: [
      {
        url: "https://oganisyan.com/images/about-avatar.jpg",
        alt: title,
        width: 1264,
        height: 948,
      },
    ],
  },
  twitter: {
    handle: "@vre2h",
    site: "@vre2h",
    cardType: "summary_large_image",
  },
};

export default SEO;
