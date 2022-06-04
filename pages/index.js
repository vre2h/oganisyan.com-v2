import { NextSeo } from "next-seo";
import cn from "classnames";

import Bio from "../components/Bio";
import BlogPost from "../components/BlogPost";
import Layout from "../components/Layout";
import { generateRSSFeed } from "../lib/rss";
import { getAllFilesFrontMatter } from "../lib/mdx";
import { CommonTranslations } from "../constants/i18n/translations";
import { Locales } from "../helpers/locale.helpers";

export default function Home({ posts, locale }) {
  return (
    <Layout pageUrl="/home">
      <NextSeo
        title="Home – Vrezh Oganisyan"
        canonical="https://oganisyan.com"
        openGraph={{
          url: "https://oganisyan.com",
          title: "Home – Vrezh Oganisyan",
          images: [
            {
              url: `https://oganisyan.com/images/seo-image.png`,
              alt: "Vrezh",
            },
          ],
        }}
      />
      <div
        className={cn(
          "flex mt-4 flex-col justify-center items-start mx-auto mb-16",
          {
            "max-w-2xl": locale === Locales.am,
            "max-w-xl": locale === Locales.en,
          }
        )}
      >
        <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-0 sm:mb-2 text-black dark:text-white">
          {CommonTranslations[locale].me.title}
        </h1>
        <Bio
          description={CommonTranslations[locale].me.description}
          social={CommonTranslations[locale].me.social}
          socialDivider={CommonTranslations[locale].me.socialDivider}
        />{" "}
        <div className="w-full mb-8 justify-between">
          <h3 className="font-medium text-3xl tracking-tight text-black dark:text-white">
            {CommonTranslations[locale].articles}
          </h3>
          <h4 className="text-gray-400 mt-2">
            {locale === Locales.am &&
              CommonTranslations[locale].articlesWarning}
          </h4>
        </div>
        {posts.map(({ title, description, slug, date, tags }) => {
          return (
            <BlogPost
              key={title}
              title={title}
              summary={description}
              slug={slug}
              date={date}
              tags={tags || ""}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter("blog", locale);
  const technicalPosts = await getAllFilesFrontMatter("technical-blog", locale);

  const sortedPosts = [...posts, ...technicalPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  await generateRSSFeed(
    [...posts, ...technicalPosts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )
  );

  return {
    props: {
      posts: sortedPosts,
      technicalPosts: sortedPosts.filter((p) => p.date),
      locale,
    },
  };
}

Home.defaultProps = {
  locale: Locales.en,
};
