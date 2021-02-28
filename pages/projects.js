import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout>
      <NextSeo
        title="Projects – Vrezh Oganisyan"
        canonical="https://oganisyan.com/about"
        openGraph={{
          url: "https://oganisyan.com/about",
          title: "Projects – Vrezh Oganisyan",
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p>
          Hey, I’m Vrezh, Software Engineer and Lecturer with a keen interest in
          design, management and education.
        </p>
      </div>
    </Layout>
  );
}
