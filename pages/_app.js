import "../styles/globals.css";

import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import { Books2021, Books2022 } from "../components/BooksTimeline";
import ColoredTag from "../components/ColoredTag";
import SEO from "../next-seo.config";
import Tag from "../components/Tag";
import { Timeline2021, Timeline2022 } from "../components/Timeline";

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (
      Object.prototype.toString.call(str).toLowerCase() === "[object regexp]"
    ) {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, "g"), newStr);
  };
}

export const mdxComponents = {
  Tag,
  Timeline2021,
  Timeline2022,
  Books2021,
  Books2022,
  ColoredTag,
  Link,
  Image,
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={mdxComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
