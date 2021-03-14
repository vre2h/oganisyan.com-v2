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
        url: "https://oganisyan.com/images/seo-image.png",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@vre2h",
    site: "@vre2h",
    cardType: "summary_large_image",
    title: title,
    ImageData: {
      url: "https://oganisyan.com/images/seo-image.png",
      alt: title,
      width: 1200,
      height: 630,
    },
  },
};

export default SEO;
