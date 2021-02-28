import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";
import { getAllFilesFrontMatter } from "../lib/mdx";

const ExternalLink = ({ href, children }) => (
  <a
    className="transition duration-500 inline-block text-base font-medium mt-4 text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Home({ posts }) {
  return (
    <Layout>
      <NextSeo
        title="Home – Vrezh Oganisyan"
        canonical="https://oganisyan.com"
        openGraph={{
          url: "https://oganisyan.com",
          title: "Home – Vrezh Oganisyan",
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-0 sm:mb-2 text-black dark:text-white">
          Hey, I’m Vrezh
        </h1>
        <div className="flex items-center mb-16 mt-4">
          <div className="flex-shrink-0 w-16 sm:w-24">
            <Image
              alt="Vrezh Oganisyan"
              height={110}
              width={110}
              src="/images/avatar.jpg"
              className="rounded-full cursor-pointer"
            />
          </div>
          <h2 className="ml-4 text-gray-600 dark:text-gray-400">
            I’m a software engineer, lecturer, and rebel. Here I write about
            education, management, and the art of non-conformity.
            <br />
            <ExternalLink href="https://t.me/oganisyancom">
              Follow Telegram channel
            </ExternalLink>
          </h2>
        </div>
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
