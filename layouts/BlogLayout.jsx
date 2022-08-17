import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

import avatarImg from "../assets/img/general/avatar.jpg";
import Layout from "../components/Layout";
import ViewCounter from "../components/ViewCounter";
import BlogSeo from "../components/BlogSeo";
import ColoredTag from "../components/ColoredTag";
import { CommonTranslations } from "../constants/i18n/translations";
import { Locales } from "../helpers/locale.helpers";

const siteUrl = "https://oganisyan.com";

export default function BlogLayout({ children, frontMatter, popularPosts }) {
  const router = useRouter();
  const pageUrl = router.asPath;
  const language = router.locale === Locales.am ? `${Locales.am}/` : "";

  return (
    <Layout pageUrl={pageUrl}>
      <BlogSeo
        url={`https://oganisyan.com/${language}blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <article
        className={cn(
          "flex flex-col justify-center items-start mx-auto mb-16 w-full",
          {
            "max-w-2xl": router.locale === Locales.am,
            "max-w-xl": router.locale === Locales.en,
          }
        )}
      >
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-4">
          <div className="flex items-center">
            <Image
              alt="Vrezh Oganisyan"
              height={30}
              width={30}
              src={avatarImg}
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {CommonTranslations[router.locale].me.name}
              {" / "}
              {new Intl.DateTimeFormat(
                router.locale === Locales.am ? "hy-AM" : router.locale,
                {
                  dateStyle: "long",
                }
              ).format(new Date(frontMatter.date))}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text.replace(
              "min read",
              CommonTranslations[router.locale].readingTime
            )}
            {` • `}
            <ViewCounter
              postfix={CommonTranslations[router.locale].views}
              slug={frontMatter.slug}
            />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>

        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          <a
            className="inline-block mx-1 ml-0 mt-4 transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=${frontMatter.title} by @vre2h ${siteUrl}${pageUrl}`}
          >
            Tweet
          </a>
          {` • `}
          <a
            className="inline-block mx-1 mt-4 transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
            target="_blank"
            rel="noopener noreferrer"
            href={`http://www.facebook.com/sharer/sharer.php?u=${siteUrl}${pageUrl}`}
          >
            Share on FB
          </a>
          {` • `}
          <a
            className="inline-block mx-1 mt-4 transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/cws/share?url=${siteUrl}${pageUrl}`}
          >
            Post on Linkedin
          </a>
          {` • `}
          <a
            className="inline-block mx-1 mt-4 transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/oganisyancom"
          >
            Discuss on Telegram
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.buymeacoffee.com/vre2h"
          className="mt-8 flex border hover:border-black duration-200 items-center text-base mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
        >
          🎗 Support Author
        </a>

        <div className="mt-16">
          <h3 className="font-normal text-xl md:text-2xl tracking-tight mb-6 dark:text-white">
            You might also like
          </h3>
          <div className="flex flex-wrap">
            {popularPosts.map((post) => (
              <a
                target="_blank"
                rel="noreferrer"
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="w-full p-4 mb-4 bg-gray-100 transition duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
              >
                <h3 className="font-medium text-lg sm:text-xl tracking-tight mb-1 text-black dark:text-white">
                  {post.title}
                </h3>
                <p className="dark:text-white text-sm sm:text-base">
                  {post.description}
                </p>
                <div className="flex justify-between items-center text-gray-400 text-sm text-left mt-2 sm:mb-0">
                  <p className="hidden md:block">
                    {CommonTranslations[router.locale].published}{" "}
                    {new Intl.DateTimeFormat(
                      router.locale === Locales.am ? "hy-AM" : router.locale,
                      {
                        dateStyle: "long",
                      }
                    ).format(new Date(post.date))}
                  </p>
                  <div className="">
                    {post.tags &&
                      post.tags.split(", ").map((tag) => {
                        return <ColoredTag key={tag}>{tag}</ColoredTag>;
                      })}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}
