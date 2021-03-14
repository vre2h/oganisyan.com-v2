import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, summary, date, url, featuredImage, hasOwnImage }) => {
  const isoDate = new Date(date).toISOString();
  const blogImage = {
    url: `https://oganisyan.com/images/blog/${featuredImage}`,
    alt: title,
  };

  const defaultImage = {
    url: `https://oganisyan.com/images/seo-image.png`,
    alt: title,
  };

  console.log(hasOwnImage);

  const seoImages = hasOwnImage ? [blogImage] : [defaultImage];

  return (
    <>
      <NextSeo
        title={`${title} – Vrezh Oganisyan`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: isoDate,
          },
          url,
          title,
          description: summary,
          images: seoImages,
        }}
      />
      <ArticleJsonLd
        authorName="Vrezh Oganisyan"
        dateModified={isoDate}
        datePublished={isoDate}
        description={summary}
        images={seoImages}
        publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName="Vrezh Oganisyan"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
