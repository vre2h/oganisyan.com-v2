import { useState } from "react";
import { Step } from "./Step";

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

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="First Internship">
        I was learning Web Design at Kojoyan Design Studio in Yerevan.
      </Step>
      <Step title="HTML / CSS">
        I was thinking that HTML / CSS is a programming language and started to
        learn it.
      </Step>
    </ul>
    <Divider />
    <Year>2015-2016</Year>
    <ul>
      <Step title="University">
        It was really hard for me to study Computer Science. We had a lot of
        math there. I was depressed and very close to give up and switch to
        another faculty. But after really hard work during the summer, I managed
        to pass exams and decided to give it a shot.
      </Step>
    </ul>

    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Reading 📚">
        Reading a lot of literature. Mostly, Russian.
      </Step>
      <Step title="Graduated High School">
        Graduated from school with honors.
      </Step>
      <Step title="Started at Moscow State university after Lomonosov">
        I was preparing for the admission to university for the last year and it
        was really hard because I decided switch from Management and Marketing
        to Computer Science.
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
      <Step title="Born on 11th of February 👶🏼🍼" />
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
          I joined Armenian Code Academy team as a Chief Technology Officer and
          Principal Lecturer.
        </Step>
        <Step title="Launched Blog">
          I launched this blog during the quarantine and wrote articles I was
          planning to write for years.
        </Step>
        <Step title="Taught Frontend Developer Course">
          Armenian Code Academy invited me to create and lead my own Advanced
          Frontend Developer Course (6 months). I taught more than 20 students
          and some of them are working as a Frontend Engineers in different
          companies.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Joined Armenian Code Academy as a TA">
          Armenian Code Academy invited me to join their team as a Teacher
          Assistant during the 6 months Advanced Javascript Course. I was
          leading seminars and helping students with coding.
        </Step>
        <Step title="Mentored Internship program at Simply Technologies">
          Simply Technologies organized an Internship program and I was selected
          as a mentor. I was leading the team of four trainees during their
          learning process and reviewing code of their final project.
        </Step>
        <Step title="Started Masters of Human Psychology">
          Past years I was really interested in Psychology and Neurobiology so I
          decided to take Masters in this field.
        </Step>
        <Step title="Interview Experience">
          I have interviewed a lot of Junior Developers and created my list of
          questions and tasks for interview process.
        </Step>
        <Step title="Moscow Urban.Tech">
          With the team of friends I've won "Moscow Urban.Tech" hackaton in
          Armenia.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Joined Simply Technologies">
          I joined Simply Technologies great team as a Junior Frontend
          Developer. I was writing code a loooooot.
        </Step>
        <Step title="Internship at Armenian Code Academy">
          I was selected to internship program (technical and hr interviews)
          among 800 applicants. I was learning Frontend Development for 6 months
          with really great lecturers who taught me how to code and how to love
          programming.
        </Step>
        <Step title="Graduated from University 👨🏻‍🎓">
          As I've mentioned I had really hard times at the beginning of the
          journey but at the end I managed to cope with all difficulties. I
          consider graduation as one of the best achievements in my life.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex border items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
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
