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
        <div className="w-full flex justify-center items-center mb-8">
          <div
            dangerouslySetInnerHTML={{
              __html: `<div id="toptal-widget"><style>@import"https://use.typekit.net/kmj5qkr.css";.a{box-sizing:border-box;width:fit-content;background:linear-gradient(244deg,#204ecf -4%,#0f256e 83.5%);box-shadow:0 24px 40px rgba(4,33,110,.35);color:#fff;font-family:proxima-nova,Arial,sans-serif;display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 26px}.b{display:flex;justify-content:center;gap:10px;margin:0}.c{width:16px;height:16px}.d{font-size:20px;font-weight:700;margin:0}.e{font-size:14px;font-weight:300;margin:0}.f{display:flex;align-items:center;gap:4px;margin:0 0 8px}.g{margin-top:3px;height:.9em}.h{display:inline-flex;align-items:center;justify-content:center;padding:4px 12px 8px;border-radius:6px;background:#296bff;color:#fff;font-size:12px;font-weight:500;text-decoration:underline;text-underline-offset:3px}.h:hover{opacity:.9}</style><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden"><defs><path id="widget-star" fill="#2ed6ff" d="M12 2l2.55 6.47 6.96.29-5.42 4.47 1.7 6.77L12 16.77l-5.77 3.23 1.7-6.77-5.42-4.47 6.96-.29z"/></defs></svg><div class="a"><div class="b"><svg class="c" viewBox="0 0 24 24"><use href="#widget-star"/></svg><svg class="c" viewBox="0 0 24 24"><use href="#widget-star"/></svg><svg class="c" viewBox="0 0 24 24"><use href="#widget-star"/></svg><svg class="c" viewBox="0 0 24 24"><use href="#widget-star"/></svg><svg class="c" viewBox="0 0 24 24"><use href="#widget-star"/></svg></div><h3 class="d">TOP 3% TALENT</h3><div class="f"><p class="e">Vetted by</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" class="g" viewBox="0 0 37 11"><g fill="#fff" fill-rule="evenodd" clip-rule="evenodd"><path d="M25.18 3.6a2.5 2.5 0 0 0-1.95-.89c-.75 0-1.48.53-1.94 1.05v-.98h-1.38l-.02 8v.1h1.4v-2.5c.42.48 1.09.76 1.83.76q1.23 0 2.04-.87c.54-.59.82-1.41.82-2.36q0-1.46-.8-2.32m-2.29.43q.7 0 1.2.53.48.52.48 1.35c0 .54-.16 1.04-.5 1.4a1.6 1.6 0 0 1-1.18.52q-.7 0-1.2-.53-.48-.56-.48-1.4t.5-1.34q.48-.54 1.18-.53Zm3.8-.06-.01 3.38q0 1.09.58 1.54.37.28.91.28c.28 0 .72-.12.72-.12l-.12-1.23s-.32.1-.48 0q-.21-.17-.22-.69V3.97h1.3V2.8h-1.29V1.12H26.7V2.8h-1.17zM15.26 1.03H8.39v1.4h2.74l-.01 6.51v.13h1.45V2.42h2.69zm-7.4 3.56L5.79 2.5 3.38.02 2.33 1.08l1.52 1.55L.5 6.03 5 10.6l1.04-1.04L4.5 8zm-4.3 2.25h-.09q-.03-.01-.1-.08l-.62-.62-.07-.11v-.1q0-.03.07-.11l1.92-1.94.1-.08h.1q.04.01.11.08l.6.62q.08.08.09.11v.1q0 .03-.08.11L3.67 6.76q-.06.07-.1.08Z"/><path d="M18.48 3.63a2.8 2.8 0 0 0-2.14-.9q-1.2 0-2.1.85a3 3 0 0 0-.9 2.35q0 1.49.9 2.35t2.1.86h.09c.75 0 1.49-.33 2.04-.9.4-.42.88-1.16.88-2.31s-.47-1.89-.87-2.31Zm-.44 2.31q0 .86-.5 1.41a1.6 1.6 0 0 1-1.21.54 1.6 1.6 0 0 1-1.2-.55 2 2 0 0 1-.48-1.41q0-.88.49-1.41.5-.54 1.2-.54.72 0 1.21.55.5.55.49 1.41m12.92-.97c0-.36.19-1.15 1.21-1.15.36 0 .57.12.75.27.17.14.25.49.25.78v.14l-1.7.27c-1.34.21-2.11.94-2.12 2.01q0 .85.58 1.38.57.52 1.49.53a2 2 0 0 0 1.74-.85v.72h1.41l.01-4.12c0-.67-.22-1.32-.64-1.68s-.97-.53-1.77-.53h-.01c-.61 0-1.26.16-1.69.55A2.4 2.4 0 0 0 29.71 5zm.64 3c-.5 0-.83-.29-.83-.74q-.01-.68 1-.85l1.39-.24v.01c0 1.07-.64 1.81-1.56 1.81h-.01Zm3.65-6.85-.01 7.9v.04h1.25l.01-7.9v-.04z"/></g></svg></div><a class="h" href="https://www.toptal.com/resume/vrezh-oganisyan#NgmZ85">Hire me on Toptal.com</a></div></div>`,
            }}
          />
        </div>
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
