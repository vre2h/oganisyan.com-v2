import Image from "next/image";
import { NextSeo } from "next-seo";
import cn from "classnames";
import { useRouter } from "next/router";

import BooksTimeline from "../../components/BooksTimeline";
import Layout from "../../components/Layout";
import booksImg from "../../assets/img/general/books.jpg";
import { Locales } from "../../helpers/locale.helpers";

export default function Books() {
  const router = useRouter();
  return (
    <Layout pageUrl="/books">
      <NextSeo
        title="Books – Vrezh Oganisyan"
        canonical="https://oganisyan.com/library/books"
        openGraph={{
          url: "https://oganisyan.com/library/books",
          title: "Books – Vrezh Oganisyan",
          images: [
            {
              url: `https://oganisyan.com/images/seo-image.png`,
              alt: "Books – Vrezh Oganisyan",
            },
          ],
        }}
      />
      <div
        className={cn(
          "flex w-full flex-col justify-center items-start mx-auto mb-16",
          {
            "max-w-2xl": router.locale === Locales.am,
            "max-w-xl": router.locale === Locales.en,
          }
        )}
      >
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Books
        </h1>
        <div className="flex justify-center w-full my-8">
          <Image
            width="680"
            height="343"
            alt="Vrezh Oganisyan"
            src={booksImg}
            placeholder="blur"
          />
        </div>

        <BooksTimeline />
      </div>
    </Layout>
  );
}
