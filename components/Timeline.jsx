import { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="First Internship">
        Reading a lot of literature. Mostly, Russian.
      </Step>
      <Step title="Graduated High School">
        Reading a lot of literature. Mostly, Russian.
      </Step>
      <Step title="Started at Moscow State university after Lomonosov">
        Reading a lot of literature. Mostly, Russian.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Reading 📚">
        Reading a lot of literature. Mostly, Russian.
      </Step>
      <Step title="Graduated High School">
        Reading a lot of literature. Mostly, Russian.
      </Step>
      <Step title="Started at Moscow State university after Lomonosov">
        Reading a lot of literature. Mostly, Russian.
      </Step>
    </ul>
    <Divider />
    <Year>2007</Year>
    <ul>
      <Step title="First Computer">First Computer 👨🏻‍💻</Step>
    </ul>
    <Divider />
    <Year>2004</Year>
    <ul>
      <Step title="Football">
        Watching a lot of football and visiting games with grandfather.
      </Step>
    </ul>
    <Divider />
    <Year>1998</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Joined Armenian Code Academy as a CTO">
          I'm excited to help grow the Next.js community and continue building
          the optimal workflow for front-end developers.
        </Step>
        <Step title="Launched Blog">
          Building a real SaaS application, from zero to production.
        </Step>
        <Step title="Taught Advanced Javascript Course">
          I was extremely honored to be one of five finalists nominated for this
          award at the 2020 Prometheus Awards.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Joined Armenian Code Academy as a TA">
          Led design system architecture at Hy-Vee, building new components with
          React, Storybook, and styled-components.
        </Step>
        <Step title="Mentored Internship course at Simply Technologies">
          Led design system architecture at Hy-Vee, building new components with
          React, Storybook, and styled-components.
        </Step>
        <Step title="Started Masters of Human Psychology">
          Led design system architecture at Hy-Vee, building new components with
          React, Storybook, and styled-components.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Joined Simply Technologies">
          Reflecting on my recent job search, I realized there wasn't a
          centralized listing of all the Des Moines tech companies. So...I
          created it.
        </Step>
        <Step title="Finished Internship at Armenian Code Academy">
          It was time for a change in my career, and Hy-Vee came calling. The
          best part was reducing my commute time by an hour/day.
        </Step>
        <Step title="Graduated from University">
          It was time for a change in my career, and Hy-Vee came calling. The
          best part was reducing my commute time by an hour/day.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
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
        </button>
      )}
    </>
  );
}
