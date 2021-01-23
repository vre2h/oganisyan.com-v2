import hydrate from "next-mdx-remote/hydrate";

import { getFileBySlug, getPostsFolders } from "../../lib/mdx";
import BlogLayout from "../../layouts/BlogLayout";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {});

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = getPostsFolders("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.filename.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);

  return { props: post };
}
