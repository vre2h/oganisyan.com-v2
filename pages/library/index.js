import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

export default function Library() {
  return (
    <Layout>
      <NextSeo
        title="Library – Vrezh Oganisyan"
        canonical="https://oganisyan.com/library"
        openGraph={{
          url: "https://oganisyan.com/library",
          title: "Library – Vrezh Oganisyan",
        }}
      />
      <div className="flex flex-col max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl w-2xl tracking-tight mb-4 text-black dark:text-white">
          Library
        </h1>
        <div className="flex flex-col w-64 my-8">
          <ProjectCard href="/library/books" title="Books" />
          <ProjectCard
            isExternal
            href="https://letterboxd.com/vre2h"
            title="Movies"
          />
          <ProjectCard
            href="https://myshows.me/m/Vrezh10"
            isExternal
            title="TV Shows"
          />
        </div>
      </div>
    </Layout>
  );
}
