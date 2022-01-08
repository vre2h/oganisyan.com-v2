import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";
import Bio from "../components/Bio";
import { getAllFilesFrontMatter } from "../lib/mdx";
import { generateRSSFeed } from "../lib/rss";

export default function Home({ posts }) {
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
      <div className="flex mt-4 flex-col justify-center items-start max-w-xl mx-auto mb-16">
        <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-0 sm:mb-2 text-black dark:text-white">
          👋 Hey, I’m Vrezh
        </h1>
        <Bio />{" "}
        <div className="w-full sm:flex mb-8 justify-between">
          <h3 className="font-medium text-3xl tracking-tight text-black dark:text-white">
            Articles
          </h3>
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

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  const technicalPosts = await getAllFilesFrontMatter("technical-blog");

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
    },
  };
}
