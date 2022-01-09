import ReactDOMServer from "react-dom/server";
import fs from "fs";
import { Feed } from "feed";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MDXRemote } from "next-mdx-remote";
import { mdxComponents } from "../pages/_app";

export const generateRSSFeed = async (articles) => {
  const baseUrl = "https://oganisyan.com";
  const author = {
    name: "Oganisyan Vrezh",
    email: "vrezh@oganisyan.com",
    link: "https://twitter.com/vre2h",
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: "Articles by Oganisyan Vrezh",
    description:
      "I’m a software engineer, lecturer, and rebel. Here I write about education, management, and the art of non-conformity.",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  });

  // Add each article to the feed
  // eslint-disable-next-line no-undef
  await Promise.all(
    articles.map(async (post) => {
      const { content, slug, date, description, title } = post;
      const url = `${baseUrl}/blog/${slug}`;

      const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [
            require("remark-slug"),
            require("remark-code-titles"),
          ],
          rehypePlugins: [mdxPrism, rehypeAutolinkHeadings],
        },
      });

      const mdx = <MDXRemote {...mdxSource} components={mdxComponents} />;
      feed.addItem({
        title,
        id: url,
        link: url,
        description,
        content: ReactDOMServer.renderToStaticMarkup(mdx)
          .replaceAll(/srcSet=".+?"/g, "")
          .replaceAll(
            /<button .+?>See Slides Checklist<\/button>/g,
            "<a href='https://oganisyan.com/library/slides?checklist=show'>See Slides Checklist</a>"
          ),
        author: [author],
        date: new Date(date),
      });
    })
  );

  // Write the RSS output to a public file, making it
  // accessible at oganisyan.com/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
};
