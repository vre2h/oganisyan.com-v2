import Image from "next/image";
import { NextSeo } from "next-seo";
import cn from "classnames";

import Layout from "../components/Layout";
import Timeline from "../components/Timeline";
import burnoutImg from "../assets/img/general/burnout.jpg";
import { Locales } from "../helpers/locale.helpers";
import router from "next/router";

export default function About() {
  return (
    <Layout pageUrl="/about">
      <NextSeo
        title="About Me – Vrezh Oganisyan"
        canonical="https://oganisyan.com/about"
        openGraph={{
          url: "https://oganisyan.com/about",
          title: "About Me – Vrezh Oganisyan",
          images: [
            {
              url: `https://oganisyan.com/images/seo-image.png`,
              alt: "About Me – Vrezh Oganisyan",
            },
          ],
        }}
      />
      <div
        className={cn(
          "flex flex-col justify-center items-start mx-auto mb-16",
          {
            "max-w-2xl": router.locale === Locales.am,
            "max-w-xl": router.locale === Locales.en,
          }
        )}
      >
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="flex justify-center w-full my-8">
          <Image
            placeholder="blur"
            width="960"
            height="640"
            alt="Vrezh Oganisyan"
            src={burnoutImg}
            priority
          />
        </div>
        <div className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            I’m Vrezh, Software Engineer and Lecturer with a keen interest in
            design, management and education.
          </p>
          <p>
            As a Software Engineer I am working a lot with Javascript (React,
            Node.js and ecosystem). I have experience with designing big and
            scalable applications.
          </p>
          <p>
            As a Teacher, I have been lecturing and mentoring more than 50
            students during different courses and internship programs and most
            of them now working as a software Engineers.
          </p>
        </div>
        <Timeline />
      </div>
    </Layout>
  );
}
