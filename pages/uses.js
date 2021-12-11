import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

const uses = [
  {
    title: "Gadgets",
    children: [
      {
        text: "MacBook Pro 13” with M1 (ex 15.4”)",
      },
      {
        text: "No extra monitor because it makes harder the process of working from anywhere.",
      },
      {
        text: "iPhone 12 (I don't like its size so I’d recommend looking for smth bigger)",
      },
      {
        text: "AirPods Pro (I’m in love with noise cancellation mode and you’re going to)",
      },
      {
        text: "Tons of type-c => * connectors",
      },
    ],
  },
  {
    title: "Coding Tools",
    children: [
      {
        text: "VSCode | Light Theme",
      },
      {
        text: "Terminal: zsh / powerlevel10k",
      },
    ],
  },
  {
    title: "Productivity Tools and Apps",
    children: [
      {
        text: "Pocket for saving and reading articles",
      },
      {
        text: "iPad (as a Reader, but will switch to kindle very soon)",
      },
      {
        text: "Notion (for notes regarding everything starting from the grocery list and ending with startup plans)",
      },
    ],
  },
  {
    title: "Lecturing",
    children: [
      {
        text: "Slack for communication",
      },
      {
        text: "Google Classroom for keeping all the content",
      },
      {
        text: "Google Drive for storing and publishing video content",
      },
      {
        text: "Google Doc for the course syllabus and homework",
      },
      {
        text: "Github Gist for small chunks of code or tasks",
      },
      {
        text: '<a href="https://repl.it">repl.it</a> — sharing small chunks of code',
      },
      {
        text: '<a href="https://codesandbox.io">codesandbox.io</a> — for very fast react and next.js applications',
      },
    ],
  },
];

export default function Uses() {
  return (
    <Layout>
      <NextSeo
        title="Uses – Vrezh Oganisyan"
        canonical="https://oganisyan.com/uses"
        openGraph={{
          url: "https://oganisyan.com/uses",
          title: "Uses – Vrezh Oganisyan",
          images: [
            {
              url: "https://oganisyan.com/images/uses.png",
              alt: "Uses – Vrezh Oganisyan",
            },
          ],
        }}
      />
      <div className="flex w-full flex-col justify-center items-start max-w-xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          What I use?
        </h1>
        {/* <div className="flex justify-center w-full my-8">
          <Image
            width="960"
            height="640"
            alt="Vrezh Oganisyan"
            src="/images/burnout.jpg"
          />
        </div> */}
        <div className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
          {uses.map(({ title, children }) => (
            <div key={title} className="mb-16">
              <p className="text-lg font-bold">{title}</p>
              <ul>
                {children.map(({ text }) => (
                  <li key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
