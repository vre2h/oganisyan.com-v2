import React, { useState } from "react";
import { NextSeo } from "next-seo";
import cn from "classnames";
import { useRouter } from "next/router";

import BasicLink from "../../components/BasicLink";
import Layout from "../../components/Layout";
import { Step } from "../../components/CheckBoxStep";
import { Locales } from "../../helpers/locale.helpers";

const tfnt2021slides = [
  {
    link: "https://www.canva.com/design/DAEY3DpreIY/8el0Zg5d86I7Fc1nkNyJFg/view?utm_content=DAEY3DpreIY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "General Computer Architecture",
  },
  {
    link: "https://www.canva.com/design/DAEZtBOq8uI/oox6T5yadq3fgR9XSIqHLg/view?utm_content=DAEZtBOq8uI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "The Anatomy of the Internet",
  },
  {
    link: "https://www.canva.com/design/DAEcMmOQ4gI/caJ9qQ_uF6QKPuGp-DykTA/view?utm_content=DAEcMmOQ4gI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "Basic Concepts of Programming and Machine Learning",
  },
  {
    text: "Frontend",
    link: "https://www.canva.com/design/DAEa08YcjuY/ajHloPhH5bmgtbD4pOxmKw/view?utm_content=DAEa08YcjuY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
  {
    link: "https://www.canva.com/design/DAEczL83bDU/m-dy0ltLDY1ifbWNEDddgg/view?utm_content=DAEczL83bDU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "Terminal, GIT, Github",
  },
  {
    link: "https://www.canva.com/design/DAEYKbtLjZg/eiBcT49TqWmrjvtoNLYdXQ/view?utm_content=DAEYKbtLjZg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "What are databases?",
  },
  {
    link: "https://www.canva.com/design/DAEg_oLNq2g/l8ug0lMEY-qkim1P1qkWwA/view?utm_content=DAEg_oLNq2g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "Backend",
  },
  {
    link: "https://www.canva.com/design/DAEj_ixOGZc/wB9xtR6libkGGkrdvFAcBA/view?utm_content=DAEj_ixOGZc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "Testing",
  },
  {
    link: "https://www.canva.com/design/DAEdsQZvFDI/GJE5n_U5NF4_bcjA__qhEw/view?utm_content=DAEdsQZvFDI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "APIs, VMs and other interesting words",
  },
  {
    link: "https://www.canva.com/design/DAEbh7cd7Og/__Z_YM-sCN2F6fZB6UdMIQ/view?utm_content=DAEbh7cd7Og&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    text: "Developer Experience",
  },
];

export default function Slides({ isCheckListVisible }) {
  const [checklist, showChecklist] = useState(isCheckListVisible);
  const router = useRouter();

  const toggleChecklist = () => {
    showChecklist((c) => !c);
    router.push(`?checklist=${checklist ? "hide" : "show"}`);
  };

  return (
    <Layout pageUrl="/slides">
      <NextSeo
        title="Slides – Vrezh Oganisyan"
        canonical="https://oganisyan.com/library/slides"
        openGraph={{
          url: "https://oganisyan.com/library/slides",
          title: "Slides – Vrezh Oganisyan",
          images: [
            {
              url: `https://oganisyan.com/images/seo-image.png`,
              alt: "Slides – Vrezh Oganisyan",
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
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          Slides
        </h1>

        <div className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Press "See Slides Checklist" to see and download checklist example.
          </p>
          <p>
            Scroll down to see{" "}
            <BasicLink className="mb-2" href="#my-slides">
              my slides
            </BasicLink>{" "}
            for different courses.
          </p>
        </div>

        <div className="flex flex-wrap">
          <button
            type="button"
            className="flex border items-center text-sm my-4 px-4 py-2 mr-4 rounded-md font-medium text-gray-900 dark:text-gray-100"
            onClick={toggleChecklist}
          >
            {checklist ? "Hide Slides Checklist" : "See Slides Checklist"}
            <span
              className={cn("h-4 w-4 ml-1 transform", {
                "-rotate-180": checklist,
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>

          {checklist && (
            <a
              download
              href="/static/slides/Slides Checklist.pdf"
              target="_blank"
              className="flex border items-center text-sm my-4 px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
            >
              Export PDF
            </a>
          )}
        </div>

        {checklist && (
          <div className="">
            <p className="text-gray-400">— Click on item to make it done</p>

            <Step defaultState={true} title="Find checklist" />
            <Step title="Send Materials before slide">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">Books / Videos / Articles</p>
              </div>
            </Step>
            <Step title="Pick template platform">
              <div className="">
                <BasicLink
                  className="mb-2"
                  href="https://canva.com"
                  target="_blank"
                >
                  Canva
                </BasicLink>{" "}
                /{" "}
                <BasicLink
                  className="mb-2"
                  href="https://slides.google.com"
                  target="_blank"
                >
                  Google Slides
                </BasicLink>
              </div>
            </Step>
            <Step title="Add Main Content" />
            <Step title="Remove half of the text!">
              <p className="mb-2">
                Audience wants to hear you. If you're going to add tons of text,
                they won't be able to concentrate on listening.
              </p>
            </Step>
            <Step title="Maybe some data visualization?">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">Charts / Maps / Tables / Lists</p>
              </div>
            </Step>
            <Step title="Don't forget about Graphic content!">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">Pictures / Emojis / Gifs</p>
              </div>
            </Step>
            <Step title="[Maybe there's a way to include interactive material?]">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">Tests / Quizes</p>
                <p className="mb-2">Collect emails or other contacts 🙃</p>
              </div>
            </Step>
            <Step title="Contacts Section">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">
                  Website / Phone / Email / Github / Twitter / Facebook /
                  Telegram
                </p>
              </div>
            </Step>
            <Step title="Credits for used resources" />
            <Step title="Additional Materials Section">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">Books / Videos / Articles</p>
              </div>
            </Step>
            <Step title="Q & A section" />
            <Step title="Don't forget about number of slides / ∞">
              <p>
                Add total number of slides so audience can understand the
                progress!
              </p>
            </Step>
            <Step title="Maybe some fun?">
              <p>
                Add some mems, videos or even sarcastic quotes about the topic.
                That'll make the topic more interesting.
              </p>
            </Step>
            <Step title="Prepare materials after the slide">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">
                  [Send thanks note] / [Send homework] / [Send form for
                  collecting Responses]
                </p>
              </div>
            </Step>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            Tech for non-tech (2021)
          </h3>
          <div className="flex flex-col items-start">
            {tfnt2021slides.map(({ link, text }, idx) => {
              return (
                <BasicLink
                  key={idx}
                  target="_blank"
                  href={link}
                  className="mb-2"
                >
                  Lecture #{idx + 1}. {text}
                </BasicLink>
              );
            })}
          </div>
        </div>

        <section id="my-slides" className="mt-4">
          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
              Talks (2021)
            </h3>
            <BasicLink
              className="inline-block mb-2"
              download
              href="/static/slides/talks/how-to-become.pdf"
            >
              July 3-5: How to become an engineer: most common mistakes by
              learners.
            </BasicLink>
            <BasicLink
              className="inline-block mb-2"
              download
              href="/static/slides/talks/100-days.pdf"
            >
              Aug 18: First 100 days as a Junior. How to survive?
            </BasicLink>
            <BasicLink
              className="inline-block mb-2"
              download
              href="/static/slides/talks/burnout.pdf"
            >
              Aug 26: Burnout vs IT. How we suffer in comfortable offices.
            </BasicLink>
          </div>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
              Webinars (2021)
            </h3>
            <BasicLink
              download
              href="/static/slides/how-to-choose-language.pdf"
            >
              March 27: How to choose a programming language?
            </BasicLink>
          </div>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
              Tech for non-tech for Product Managers (2020)
            </h3>
            <div className="flex flex-col items-start">
              <BasicLink
                download
                href="/static/slides/tfnt/General_Computer_Architecture.pdf"
                className="mb-2"
              >
                Lecture #1. General Computer Architecture
              </BasicLink>
              <BasicLink
                download
                href="/static/slides/tfnt/Basic_Concepts_of_Programming.pdf"
                className="mb-2"
              >
                Lecture #2. Basic Concepts of Programming
              </BasicLink>
              <BasicLink
                download
                href="/static/slides/tfnt/Different_Types_of_Software_Applications.pdf"
                className="mb-2"
              >
                Lecture #3. Different Types of Software Applications
              </BasicLink>
              <BasicLink
                download
                href="/static/slides/tfnt/The_Anatomy_of_the_Internet.pdf"
                className="mb-2"
              >
                Lecture #4. The Anatomy of the Internet
              </BasicLink>
              <BasicLink
                download
                href="/static/slides/tfnt/What_are_Databases.pdf"
                className="mb-2"
              >
                Lecture #5. What Are Databases?
              </BasicLink>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
              HTML / CSS Workshop (2019)
            </h3>
            <BasicLink download href="/static/slides/HTML_CSS.pdf">
              Intro to HTML/CSS
            </BasicLink>
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
