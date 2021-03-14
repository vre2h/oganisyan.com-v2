import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, summary, date, url, featuredImage }) => {
  const isoDate = new Date(date).toISOString();
  const defaultImage = {
    url: `https://oganisyan.com/static/images/blog/${featuredImage}`,
    alt: title,
  };

  const blogImage = {
    url: `https://oganisyan.com/images/seo-image.png`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Vrezh Oganisyan`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [blogImage, defaultImage],
        }}
      />
      <ArticleJsonLd
        authorName="Vrezh Oganisyan"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[blogImage, defaultImage]}
        publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName="Vrezh Oganisyan"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
