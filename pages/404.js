import Link from "next/link";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <NextSeo
        title="404 – Vrezh Oganisyan"
        canonical="https://oganisyan.com/404"
        openGraph={{
          url: "https://oganisyan.com/404",
          title: "404 – Vrezh Oganisyan",
          images: [
            {
              url: `https://oganisyan.com/images/seo-image.png`,
              alt: "404 – Vrezh Oganisyan",
            },
          ],
        }}
      />
      <div className="flex w-full flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
          404 – Not Found
        </h1>
        <div className="w-full flex justify-center my-16">
          <Image
            width="600"
            height="400"
            alt="Vrezh Oganisyan"
            src="/images/random-avatar.jpg"
          />
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you were looking for doesn't exist. At least you can enjoy
          this picture...
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
