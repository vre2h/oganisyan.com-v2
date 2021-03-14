import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";
import Bio from "../components/Bio";
import { getAllFilesFrontMatter } from "../lib/mdx";

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
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-0 sm:mb-2 text-black dark:text-white">
          Hey, I’m Vrezh
        </h1>
        <Bio />{" "}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white">
          Articles
        </h3>
        {posts.map(({ title, description, slug, date }) => (
          <BlogPost
            key={title}
            title={title}
            summary={description}
            slug={slug}
            date={date}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return { props: { posts: sortedPosts } };
}
