import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import path from "path";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import { Locales } from "../helpers/locale.helpers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const root = process.cwd();

export function getPostsFolders(typeOfContent = "blog") {
  const removeHiddenFile = (folderName) => !(folderName[0] === ".");
  // Get all posts folders located in `content/${typeOfContent}`
  const postsFolders = fs
    .readdirSync(path.join(root, "content", typeOfContent))
    .filter(removeHiddenFile)
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
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-slug"), require("remark-code-titles")],
      rehypePlugins: [mdxPrism, rehypeAutolinkHeadings],
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
  const folders = getPostsFolders(typeOfContent);
  const isHiddenFile = ({ filename }) => !(filename[0] === ".");

  return folders
    .filter(isHiddenFile)
    .reduce((allPosts, { directory, filename }) => {
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
