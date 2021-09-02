import { NextSeo } from "next-seo";
import cn from "classnames";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";
import Bio from "../components/Bio";
import { getAllFilesFrontMatter } from "../lib/mdx";
import { useMemo, useState } from "react";

const ArticleTypes = {
  NonTech: "Non-Tech First",
  Technical: "Technical First",
};

export default function Home({ posts, technicalPosts }) {
  const [articlesType, setArticlesType] = useState(ArticleTypes.NonTech);

  const allPosts = useMemo(() => {
    return articlesType === ArticleTypes.NonTech ? posts : technicalPosts;
  }, [articlesType]);

  return (
    <Layout>
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
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-0 sm:mb-2 text-black dark:text-white">
          Hey, I’m Vrezh
        </h1>
        <Bio />{" "}
        <div className="w-full sm:flex mb-12 justify-between">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight  text-black dark:text-white">
            Articles
          </h3>
          <div className="flex items-center justify-center mt-4 sm:mt-0">
            {Object.values(ArticleTypes).map((type) => (
              <button
                key={type}
                type="button"
                className={cn(
                  {
                    "focus:outline-none border-gray-900 dark:border-gray-300 dark:text-gray-100":
                      articlesType === type,
                    "focus:outline-none dark:border-gray-700 dark:text-gray-400":
                      articlesType !== type,
                  },
                  "flex border items-center text-sm px-4 py-2 font-medium text-gray-900"
                )}
                onClick={() => setArticlesType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {allPosts.map(({ title, description, slug, date }) => {
          return (
            <BlogPost
              key={title}
              title={title}
              summary={description}
              slug={slug}
              date={date}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  const technicalPosts = await getAllFilesFrontMatter("technical-blog");

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedTechPosts = technicalPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return {
    props: {
      posts: [...sortedPosts, ...sortedTechPosts].filter((p) => p.date),
      technicalPosts: [...sortedTechPosts, ...sortedPosts].filter(
        (p) => p.date
      ),
    },
  };
}
