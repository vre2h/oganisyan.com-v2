import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { Step } from "../components/CheckBoxStep";
import BasicLink from "../components/BasicLink";
import cn from "classnames";
import { useRouter } from "next/router";

export default function Slides({ isCheckListVisible }) {
  const [checklist, showChecklist] = useState(isCheckListVisible);
  const router = useRouter();

  const toggleChecklist = () => {
    showChecklist((c) => !c);
    router.push(`?checklist=${checklist ? "hide" : "show"}`);
  };

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
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Farmcodeacademy%2Fvideos%2F163543322499386%2F&show_text=false&width=267&t=0"
              width="320"
              height="476"
              style={{
                border: "none",
                overflow: "hidden",
              }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen="true"
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

Slides.getInitialProps = ({ query: { checklist } }) => {
  const isCheckListVisible = checklist === "show";

  return {
    isCheckListVisible,
  };
};
