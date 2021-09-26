import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import BasicLink from "../components/BasicLink";

export default function Talks() {
  return (
    <Layout>
      <NextSeo
        title="Talks – Vrezh Oganisyan"
        canonical="https://oganisyan.com/talks"
        openGraph={{
          url: "https://oganisyan.com/talks",
          title: "Talks – Vrezh Oganisyan",
          images: [
            {
              url: `https://oganisyan.com/images/seo-image.png`,
              alt: "Talks – Vrezh Oganisyan",
            },
          ],
        }}
      />
      <div className="flex w-full flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          Talks
        </h1>

        <section id="my-slides" className="mt-4">
          <div className="flex flex-col md:flex-row mt-8">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Farmcodeacademy%2Fvideos%2F610528963271454%2F&show_text=false&width=267&t=0"
              width="320"
              height="476"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <div className="mt-4 md:ml-4 md:mt-0">
              <h3 className="text-2xl md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                Gyumri BarCamp 2021
              </h3>
              <h3 className="text-xl md:text-xl mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                Burnout vs IT. <br /> How we suffer in comfortable offices.
              </h3>
              <BasicLink
                className="text-base"
                download
                href="/static/slides/talks/burnout.pdf"
              >
                Slides
              </BasicLink>
            </div>
          </div>
        </section>

        <section id="my-slides" className="mt-4">
          <div className="flex flex-col md:flex-row mt-8">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvre2h%2Fposts%2F3108448829480669&show_text=false&width=500"
              width="320"
              height="476"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <div className="mt-4 md:ml-4 md:mt-0">
              <h3 className="text-2xl md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                Dilijan BarCamp 2021
              </h3>
              <h3 className="text-xl md:text-xl mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                First 100 days as a Junior. How to survive?
              </h3>
              <BasicLink
                className="text-base"
                download
                href="/static/slides/talks/100-days.pdf"
              >
                Slides
              </BasicLink>
            </div>
          </div>
        </section>

        <section id="my-slides" className="mt-4">
          <div className="flex flex-col md:flex-row mt-8">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Farmcodeacademy%2Fvideos%2F163543322499386%2F&show_text=false&width=267&t=0"
              width="320"
              height="476"
              style={{
                border: "none",
                overflow: "hidden",
              }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="mt-4 md:ml-4 md:mt-0">
              <h3 className="text-2xl md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                Artsakh Tech Week 2021
              </h3>
              <h3 className="text-xl md:text-xl mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                How to become an engineer: most common mistakes by learners.
              </h3>
              <BasicLink
                className="text-base"
                download
                href="/static/slides/talks/how-to-become.pdf"
              >
                Slides
              </BasicLink>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

Talks.getInitialProps = ({ query: { checklist } }) => {
  const isCheckListVisible = checklist === "show";

  return {
    isCheckListVisible,
  };
};
