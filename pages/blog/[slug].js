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
  const technicalPosts = getPostsFolders("technical-blog");
  const mapPostToLocale = (locale) => (post) => {
    return {
      params: {
        slug: post.filename.replace(/\.mdx/, ""),
        locale,
      },
      locale: Locales.en,
    };
  };
  const paths = [
    ...posts.map(mapPostToLocale(Locales.en)),
    ...posts.map(mapPostToLocale(Locales.am)),
    ...technicalPosts.map(mapPostToLocale(Locales.en)),
    ...technicalPosts.map(mapPostToLocale(Locales.am)),
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  let post;
  try {
    post = await getFileBySlug("blog", params.slug, locale);
  } catch (e) {
    post = await getFileBySlug("technical-blog", params.slug, locale);
  }

  return { props: post };
}
