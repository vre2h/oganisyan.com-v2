import { useState } from "react";
import BasicLink from "./BasicLink";
import { Step } from "./Step";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3
      id={children}
      className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100"
    >
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

export function Timeline2021() {
  return (
    <>
      <Year>2021</Year>
      <ul>
        <Step title="Obtained a Master's Degree in Psychology 🎓">
          I've obtained Master's Degree in Human Psychology and the topic of my
          thesis was "Internet Addiction". I hope I will publish the article in
          one of journals so you can read it.
        </Step>

        <Step title="Speaker at Dev Fest 📣">
          I had a talk regarding education in Armenia in Vanadzor.{" "}
          <BasicLink
            className="text-base"
            target="_blank"
            rel="noreferrer"
            href="https://devfest.am/2021/"
          >
            See more.
          </BasicLink>
        </Step>
        <Step title="Speaker at BarCamp Gyumri 📣">
          <BasicLink className="text-base" href="/talks#barcamp-gyumri">
            Burnout vs IT. How we suffer in comfortable offices.
          </BasicLink>
        </Step>
        <Step title="Started Tech for Non-tech Course and taught 200+ people">
          I've taught Tech for Non-Tech course for more than 200 students.
          Included:
          <ul className="list-disc">
            <li className="mt-2">
              Employees of{" "}
              <BasicLink
                className="text-base"
                target="_blank"
                href="https://krisp.ai/"
              >
                Krisp
              </BasicLink>
            </li>
            <li>
              Employees of{" "}
              <BasicLink
                className="text-base"
                target="_blank"
                href="https://hti.am/"
              >
                Ministry of High-Tech Industry of Armenia
              </BasicLink>
            </li>
            <li>
              Product Managers of different IT Companies — CoinStats, InecoBank,
              SoloLearn, etc.
            </li>
          </ul>
        </Step>
        <Step title="Speaker at BarCamp Vanadzor 📣">
          <BasicLink className="text-base" href="/talks#barcamp-vanadzor">
            How to become an Engineer?
          </BasicLink>
        </Step>
        <Step title="Launched Frontend BootCamp with ACA">
          We've started Frontend BootCamp with ISA agreement and taught 45+
          people. As a result we have around 70% rate of employment for
          different IT companies. <br />
          <br />
          Included: Krisp, SoloLearn, SoftConstruct, MentorCliq, Innoma.
        </Step>
        <Step title="Speaker at BarCamp Dilijan 📣">
          <BasicLink className="text-base" href="/talks#barcamp-dilijan">
            First 100 days as a Junior. How to survive?
          </BasicLink>
        </Step>
        <Step title="Launched HyeBox">
          My brother and I developed and launched{" "}
          <BasicLink
            className="text-base"
            href="https://www.hyebox.com/"
            target="_blank"
            rel="noreferrer"
          >
            HyeBox
          </BasicLink>{" "}
          website.
        </Step>
        <Step title="Launched aca.am">
          Launched{" "}
          <BasicLink
            className="text-base"
            href="https://aca.am"
            target="_blank"
          >
            aca.am
          </BasicLink>{" "}
          website.
        </Step>
        <Step title="Speaker at Tech Week in Artsakh 📣">
          <BasicLink className="text-base" href="/talks#tech-week">
            How to become an engineer: most common mistakes by learners.
          </BasicLink>
        </Step>

        <Step title="Taught Advanced Frontend Course">
          Frontend Course for 15+ people.
        </Step>

        <Step title="use-react-screenshot Become Popular 🎊">
          <BasicLink
            className="text-base"
            href="https://github.com/vre2h/use-react-screenshot#readme"
            target="_blank"
            rel="noreferrer"
          >
            `use-react-screenshot`
          </BasicLink>
          is library I created back in the 2019. Now it's become popular and
          around 1500+ people using it weekly.
        </Step>
        <Step title="Created use-react-countries open-source Library">
          <BasicLink
            className="text-base"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vre2h/use-react-countries#readme"
          >
            `use-react-countries`
          </BasicLink>{" "}
          is a open-source tiny fully customizable react library(hook) which
          gives you full list of countries with their flags, emojis, country
          calling codes, postal codes and many more...
        </Step>
        <Step title="Had a webinar 'How to choose a programming language'">
          I've hosted a webinar on picking a programming infrastructure with
          100+ people.
        </Step>
      </ul>
      <Step title="Started Series of Articles 'Unpopular Opinion'">
        Unpopular Opinions' is a series of controversial articles which tries to
        open a dialogue regarding different traditional views on life,
        education, management. (Find them on blog.)
      </Step>
      <Divider />
    </>
  );
}

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Timeline2021 />

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
