import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import path from "path";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";
import { Locales } from "../helpers/locale.helpers";

const root = process.cwd();

export function getPostsFolders() {
  // Get all posts folders located in `content/blog`
  const postsFolders = fs
    .readdirSync(path.join(root, "content", "blog"))
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.mdx`,
    }));

  return postsFolders;
}

export async function getFileBySlug(typeOfContent, slug, locale) {
  const localeInPath = locale === Locales.en ? "" : ".am";

  let source;

  try {
    source = fs.readFileSync(
      path.join(
        root,
        "content",
        typeOfContent,
        slug,
        `${slug}${localeInPath}.mdx`
      ),
      "utf8"
    );
  } catch (e) {
    source = fs.readFileSync(
      path.join(root, "content", typeOfContent, slug, `${slug}.mdx`),
      "utf8"
    );
  }

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(typeOfContent) {
  const folders = getPostsFolders();

  return folders.reduce((allPosts, { directory, filename }) => {
    const source = fs.readFileSync(
      path.join(root, "content", typeOfContent, directory, filename),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: filename.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
