import hydrate from "next-mdx-remote/hydrate";
import Link from "next/link";
import Image from "next/image";
import { Locales } from "../../helpers/locale.helpers";

import { getFileBySlug, getPostsFolders } from "../../lib/mdx";
import BlogLayout from "../../layouts/BlogLayout";

const components = {
  Link,
  Image,
};

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = getPostsFolders("blog");
  const paths = [
    ...posts.map((p) => ({
      params: {
        slug: p.filename.replace(/\.mdx/, ""),
      },
      locale: Locales.en,
    })),
    ...posts.map((p) => ({
      params: {
        slug: p.filename.replace(/\.mdx/, ""),
      },
      locale: Locales.am,
    })),
  ];

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const post = await getFileBySlug("blog", params.slug, locale);
  return { props: post };
}
