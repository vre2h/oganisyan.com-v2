import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { shuffle } from "lodash";

import { Locales } from "../../helpers/locale.helpers";

import {
  getAllFilesFrontMatter,
  getFileBySlug,
  getPostsFolders,
} from "../../lib/mdx";
import BlogLayout from "../../layouts/BlogLayout";

const components = {
  Link,
  Image,
};

export default function Blog({
  post: { mdxSource, frontMatter },
  popularPosts,
}) {
  return (
    <BlogLayout popularPosts={popularPosts} frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={components} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = getPostsFolders("blog");
  const technicalPosts = getPostsFolders("technical-blog");
  const draftPosts = getPostsFolders("draft");

  const mapPostToLocale = (locale) => (post) => {
    return {
      params: {
        slug: post.filename.replace(/\.mdx/, ""),
        locale,
      },
      locale,
    };
  };
  const paths = [
    ...posts.map(mapPostToLocale(Locales.en)),
    ...posts.map(mapPostToLocale(Locales.am)),
    ...technicalPosts.map(mapPostToLocale(Locales.en)),
    ...technicalPosts.map(mapPostToLocale(Locales.am)),
    ...draftPosts.map(mapPostToLocale(Locales.en)),
    ...draftPosts.map(mapPostToLocale(Locales.am)),
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const posts = await getAllFilesFrontMatter("blog");
  const technicalPosts = await getAllFilesFrontMatter("technical-blog");

  let post;
  try {
    post = await getFileBySlug("blog", params.slug, locale);
  } catch (e) {
    try {
      post = await getFileBySlug("technical-blog", params.slug, locale);
    } catch (e) {
      post = await getFileBySlug("draft", params.slug, locale);
    }
  }

  const randomPosts = shuffle(
    [...posts, ...technicalPosts].filter((p) => p.slug !== params.slug)
  ).slice(0, 3);

  return { props: { post, popularPosts: randomPosts } };
}
