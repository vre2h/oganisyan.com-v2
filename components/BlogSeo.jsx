import { ArticleJsonLd, NextSeo } from "next-seo";

const BlogSeo = ({ title, description, date, url, featuredImage }) => {
  const isoDate = new Date(date).toISOString();
  const blogImage = {
    url: `https://oganisyan.com/images/blog/${featuredImage}`,
    alt: title,
  };

  const defaultImage = {
    url: `https://oganisyan.com/images/seo-image.png`,
    alt: title,
  };

  const seoImages = featuredImage ? [blogImage] : [defaultImage];

  return (
    <>
      <NextSeo
        title={`${title} – Vrezh Oganisyan`}
        description={description}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: isoDate,
          },
          url,
          title,
          description: description,
          images: seoImages,
        }}
      />
      <ArticleJsonLd
        authorName="Vrezh Oganisyan"
        dateModified={isoDate}
        datePublished={isoDate}
        description={description}
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
