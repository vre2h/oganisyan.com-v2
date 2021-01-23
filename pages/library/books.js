import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "../../components/Layout";
import BooksTimeline from "../../components/BooksTimeline";

export default function Books() {
  return (
    <Layout>
      <NextSeo
        title="Books – Vrezh Oganisyan"
        canonical="https://oganisyan.com/library/books"
        openGraph={{
          url: "https://oganisyan.com/library/books",
          title: "Books – Vrezh Oganisyan",
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Books
        </h1>
        <div className="flex justify-center w-full my-8">
          <Image
            width="800"
            height="600"
            alt="Vrezh Oganisyan"
            src="/images/about-avatar.jpg"
          />
        </div>

        <BooksTimeline />
      </div>
    </Layout>
  );
}
