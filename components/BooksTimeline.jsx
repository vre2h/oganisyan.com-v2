import { useState } from "react";

const books2017 = [
  {
    title: "Benjamin Franklin",
    author: "Benjamin Franklin",
    review: "5",
  },
  {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    review: "5",
  },
  {
    title: "The Important Years",
    author: "Meg Jay",
    review: "3",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    review: "5",
  },
  {
    title: "How to Live on 24 Hours a Day",
    author: "Arnold Bennett",
    review: "5",
  },
  {
    title: "Essentialism: The Disciplined Pursuit of Less",
    author: "Greg McKeown",
    review: "4",
  },
  {
    title: "The Power of Habit: Why We Do What We Do in Life and Business",
    author: "Charles Duhigg, Mike Chamberlain",
    review: "5",
  },
  {
    title: "Women",
    author: "Charles Bukovski",
    review: "5",
  },
  {
    title: "Affiliate",
    author: "Sergei Dovlatov",
    review: "3",
  },
  {
    title:
      "Making up the Mind: How the Brain Creates Our Mental World 1st Edition",
    author: "Chris Frith",
    review: "4",
  },
  {
    title:
      "Start.: Punch Fear in the Face, Escape Average, and Do Work That Matters",
    author: "Jon Acuff",
    review: "3",
  },
];

const books2018 = [
  {
    title: "Somebody is wrong on the internet",
    author: "Asya Kazantseva",
    review: "5",
  },
  {
    title:
      "Deep Thinking: Where Machine Intelligence Ends and Human Creativity Begins",
    author: "Garry Kasparov",
    review: "4",
  },
  {
    title: "My Life and Work",
    author: "Henry Ford",
    review: "5",
  },
  {
    title: "The subtle art of not giving a fuck",
    author: "Mark Manson",
    review: "3",
  },
  {
    title: "The inner game of the tennis",
    author: "W. Timothy Gallwey",
    review: "4",
  },
  {
    title: "48 laws of power",
    author: "Robert Greene",
    review: "5",
  },
  {
    title: "The Naked Ape",
    author: "Desmond Morris",
    review: "5",
  },
  {
    title: "Series of books 'You don't know JavaScript'",
    author: "Kyle Simpson",
    review: "5",
  },
  {
    title: "Mostly Adequate Guide to FP",
    author: "Professor Frisby",
    review: "4",
  },
  {
    title: "Typography",
    author: "Artem Gorbunov",
    review: "4",
  },
  {
    title: "User Interface",
    author: "Ilya Birman",
    review: "4",
  },
];

const books2019 = [
  {
    title: "Об уме вообще, о русском уме в частности",
    author: "И. Павлов",
    review: "4",
  },
  {
    title: "Red pill",
    author: "Andrey Kurpatov",
    review: "5",
  },
  {
    title: "The Little Book of Hygge: Danish Secrets to Happy Living",
    author: "Meik Wiking",
    review: "4",
  },
];

const books2020 = [
  {
    title: "Remote",
    author: "Jason Fried and David Heinemeier Hansson",
    startDate: "19-08-2020",
    endDate: "19-09-2020",
    review: "4",
  },
  {
    title: "Пиши, Сокращай",
    author: "Ильяхов Максим и Сарычева Людмила",
    startDate: "14-08-2020",
    endDate: "24-07-2020",
    review: "4",
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan and Steve Schoger",
    startDate: "12-07-2020",
    endDate: "22-07-2020",
    review: "4",
  },
  {
    title: "Getting Real",
    author: "Jason Fried and David Heinemeier Hansson",
    link: "https://basecamp.com/gettingreal",
    startDate: "24-06-2020",
    endDate: "07-07-2020",
    review: "5",
  },
  {
    title: "Makebook",
    author: "Pieter Levels",
    link: "https://makebook.io/",
    startDate: "26-05-2020",
    endDate: "04-06-2020",
    review: "5",
  },
  {
    title: "The inner game of the tennis",
    author: "W. Timothy Gallwey",
    review: "4",
  },
  {
    title: "12 Rules for Life: An Antidote to Chaos",
    author: "Jordan B. Peterson",
    review: "4",
  },
  {
    title: "Jedi Way",
    author: "Maxim Dorofeev",
    review: "5",
  },
  {
    title: "No more Mr. Nice Guy",
    author: "Robert A. Glover",
    review: "5",
  },
  {
    title: "Jedi Techniques",
    author: "Maxim Dorofeev",
    review: "5",
  },
  {
    title: "Composing Software",
    author: "Eric Elliott",
    review: "3",
  },
  {
    title: "Grokking algorithms",
    author: "Aditya Bhargava",
    review: "5",
  },
  {
    title: "Optimization Guide",
    author: "Carlos Bueno",
    review: "3",
  },
];

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
    <Year>2018</Year>
    <ul>
      {books2018.map((b) => (
        <Step key={b.title} title={b.title}>
          {b.author}
        </Step>
      ))}
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      {books2017.map((b) => (
        <Step key={b.title} title={b.title}>
          {b.author}
        </Step>
      ))}
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
        {books2020.map((b) => (
          <Step key={b.title} title={b.title}>
            {b.author}
          </Step>
        ))}
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        {books2019.map((b) => (
          <Step key={b.title} title={b.title}>
            {b.author}
          </Step>
        ))}
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
