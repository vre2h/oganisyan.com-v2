import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, summary, date, url, image }) => {
  const isoDate = new Date(date).toISOString();
  const featuredImage = {
    url: `https://oganisyan.com${image}`,
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
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Vrezh Oganisyan"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName="Vrezh Oganisyan"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
