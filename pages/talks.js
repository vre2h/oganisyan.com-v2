import { NextSeo } from "next-seo";
import React from "react";

import BasicLink from "../components/BasicLink";
import ColoredTag from "../components/ColoredTag";
import Layout from "../components/Layout";

const talks = [
  {
    video: function video() {
      return (
        <iframe
          className="rounded-md grow w-full"
          style={{ maxWidth: 560 }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aujkYpEPmxI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    },
    title: "BarCamp Gyumri",
    description:
      "🔥 Burnout vs IT. <br /> How we suffer in comfortable offices.",
    links: [
      { title: "Download Slides", link: "/static/slides/talks/burnout.pdf" },
    ],
    tags: ["am", "📍 Gyumri"],
    date: "Sep 26, 2021",
  },
  {
    video: function video() {
      return (
        <iframe
          className="rounded-md grow w-full"
          style={{ maxWidth: 560 }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/blxpW_4ZjJg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    },
    title: "BarCamp Dilijan",
    description: "🏄🏻‍♂️ First 100 days as a Junior. <br /> How to survive?",
    links: [
      { title: "Download Slides", link: "/static/slides/talks/100-days.pdf" },
    ],
    tags: ["am", "📍 Dilijan"],
    date: "Sep 18, 2021",
  },
  {
    video: function video() {
      return (
        <iframe
          className="rounded-md grow w-full"
          style={{ maxWidth: 560 }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vNC_0n9Nl1k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    },
    title: "BarCamp Vanadzor",
    description: "👶 How to become an Engineer?",
    links: [
      {
        title: "Download Slides",
        link: "/static/slides/talks/how-to-become.pdf",
      },
    ],
    tags: ["am", "📍 Vanadzor"],
    date: "Oct 2, 2021",
  },
  {
    video: function video() {
      return (
        <iframe
          className="rounded-md grow"
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
      );
    },
    title: "Tech Week",
    description:
      "👶 How to become an engineer: most common mistakes by learners.",
    links: [
      {
        title: "Download Slides",
        link: "/static/slides/talks/how-to-become.pdf",
      },
    ],
    tags: ["am", "📍 Artsakh"],
    date: "Jul 4, 2021",
  },
];

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
      <div className="flex w-full flex-col justify-center items-start max-w-4xl mx-auto mb-8">
        {talks.map(
          ({ title, video: Video, description, links, date, tags }) => {
            return (
              <section
                key={title}
                id={title.toLowerCase().split(" ").join("-")}
                className="w-full mt-4"
              >
                <div className="w-full flex flex-col md:flex-row mt-8">
                  <Video />
                  <div
                    style={{ flexShrink: 10 }}
                    className="mt-4 md:ml-4 md:mt-0"
                  >
                    <h3 className="text-2xl md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                      {title}
                    </h3>
                    <h3
                      dangerouslySetInnerHTML={{ __html: description }}
                      className="text-xl md:text-xl mb-4 tracking-tight text-gray-900 dark:text-gray-100"
                    />

                    {links.map(({ title, link }) => (
                      <BasicLink
                        key={link}
                        className="text-base"
                        download
                        href={link}
                      >
                        {title}
                      </BasicLink>
                    ))}
                    <div className="text-gray-400 text-sm mt-4">
                      {tags.map((t) => (
                        <ColoredTag key={t}>{t}</ColoredTag>
                      ))}
                      {date}
                    </div>
                  </div>
                </div>
              </section>
            );
          }
        )}
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
