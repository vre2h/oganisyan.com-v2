import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { Step } from "../../components/CheckBoxStep";
import BasicLink from "../../components/BasicLink";
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
        title="Slides – Vrezh Oganisyan"
        canonical="https://oganisyan.com/about"
        openGraph={{
          url: "https://oganisyan.com/about",
          title: "Slides – Vrezh Oganisyan",
        }}
      />
      <div className="flex w-full flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          Slides
        </h1>

        <div className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Press "See Slides Checklist" to see and download checklist example.
          </p>
          <p>Scroll down to see my slides.</p>
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
            <button
              type="button"
              className="flex border items-center text-sm my-4 px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
            >
              Export PDF
            </button>
          )}
        </div>

        {checklist && (
          <div className="select-none">
            <Step defaultState={true} title="Find checklist" />
            <Step title="Send Materials before slide">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">— Books</p>
                <p className="mb-2">— Videos</p>
                <p className="mb-2">— Articles</p>
              </div>
            </Step>
            <Step title="Pick Platform for template">
              <div className="inline-flex items-start flex-col">
                <BasicLink
                  className="mb-2"
                  href="https://canva.com"
                  target="_blank"
                >
                  — Canva
                </BasicLink>
                <BasicLink
                  className="mb-2"
                  href="https://slides.google.com"
                  target="_blank"
                >
                  — Google Slides
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
              <p className="mb-2">
                Use small amount of visual content instead of text
              </p>
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">— Charts</p>
                <p className="mb-2">— Maps</p>
                <p className="mb-2">— Tables</p>
                <p className="mb-2">— Lists</p>
              </div>
            </Step>
            <Step title="Don't forget about Graphic content!">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">— Pictures</p>
                <p className="mb-2">— Emojis</p>
                <p className="mb-2">— Gifs</p>
              </div>
            </Step>
            <Step title="[Maybe there's a way to include interactive material?]">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">— Tests</p>
                <p className="mb-2">— Collect emails or other contacts 🙃</p>
              </div>
            </Step>
            <Step title="Contacts Section">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">— Website</p>
                <p className="mb-2">— Phone</p>
                <p className="mb-2">— Email</p>
                <p className="mb-2">— Github</p>
                <p className="mb-2">— Twitter</p>
                <p className="mb-2">— Facebook</p>
                <p className="mb-2">— Telegram</p>
              </div>
            </Step>
            <Step title="Credits for used resources" />
            <Step title="Additional Materials Section">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">— Books</p>
                <p className="mb-2">— Videos</p>
                <p className="mb-2">— Articles</p>
              </div>
            </Step>
            <Step title="Q & A section" />
            <Step title="Don't forget about number of slides / ∞">
              <p>
                Add total number of slides so audience can understand the
                progress!
              </p>
            </Step>
            <Step title="Prepare materials after the slide">
              <div className="inline-flex items-start flex-col">
                <p className="mb-2">— [Send thanks note]</p>
                <p className="mb-2">— [Send homework]</p>
                <p className="mb-2">— [Send form for collecting Responses]</p>
              </div>
            </Step>
          </div>
        )}
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
