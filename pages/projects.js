import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Image from "next/image";
import cn from "classnames";
import confImg from "../assets/img/general/conf.jpg";

const ProjectTypes = {
  All: "All",
  Courses: "Courses",
  Projects: "Projects",
  Jobs: "Jobs",
};

const projects = [
  {
    title: "JavaScript Interview Kit",
    description:
      "JavaScript Interview Preparation Kit: questionnaire, reading materials, recommendations and roadmaps. The goal of the project is to help great people all over the world to prepare and successfully pass interviews.",
    link: "https://www.js-interview.com",
    image: "js-interview.png",
    role: "Creator",
    period: "July 2020 - ongoing",
    status: "Ongoing",
    customer: "",
    stack: "Next.js, Firebase",
    type: ProjectTypes.Projects,
  },
  {
    title: '"Tech For non-Tech" Movement',
    description:
      'TFNT is a mission that aims to make life much easier for tech and non-tech people around the world. Read our <a class="border-b-2" target="_blank" href="https://tfnt.org/manifesto">Manifesto</a>.',
    link: "https://www.tfnt.org",
    image: "tfnt.png",
    role: "Creator",
    period: "July 2020 - ongoing",
    status: "Ongoing",
    customer: "",
    stack: "Next.js, Firebase",
    type: ProjectTypes.Projects,
  },
  {
    title: "Building IT @ ACA",
    description:
      "I joined ACA at the start of the journey in building technical team. Now ACA has big technical team (both frontend and backend) with a modern stack (React, Next.js, Node.js, Java, Spring) and infrastructure (AWS, Lambda, Vercel, Firebase, etc). <br /><br /> My team was working on ACA's operations team processes automation and new website. <br /> <br /> I was also leading JavaScript Track and was responsible in creating course structure for different levels and courses for more than 1000 students during the year.",
    link: "https://www.aca.am/courses/js",
    image: "aca.png",
    role: "Chief Technology Officer",
    period: "August 2020 - ongoing",
    status: "Ongoing",
    customer: "More than 200 students",
    stack:
      "HTML/CSS, JS (React, Redux), Node.js, AWS (Lambda, S3, DynamoDB), Firebase",
    type: ProjectTypes.Jobs,
  },
  {
    title: "Frontend Advanced Course",
    description:
      "I'm teaching JavaScript (ES6+), React and ecosystem starting from 2019. I'm mainly responsible for reviewing students' code, creating homeworks, additional materials and course structure. <br /> <br /> Since 2020, I'm leading my own Advanced Javascript and React Course with a team of TA's who are helping in full cycle. <br /> <br /> I've been engaged in teaching more than 200 students directly and influencing in learning experience of more than 1000 students.",
    link: "https://www.aca.am/courses/js",
    image: "",
    role: "Principal Lecturer",
    period: "August 2019 - ongoing",
    status: "Ongoing",
    customer: "More than 200 students",
    stack: "HTML/CSS, JS (React, Redux)",
    type: ProjectTypes.Courses,
    reviews: [
      {
        author: "Karen Sharafyan (CEO at ACA)",
        text: "I know Vrezh since 2017 when he joined an internship program at Armenian Code Academy(ACA), where he was the best student in a group of 20 which we formed out of 1000 applicants. Despite that the course was on front-end development, Vrezh implemented a strong backend architecture using Node.JS during his final project. \n \n After gaining experience in the industry, in 2019 Vrezh started tutoring at ACA as a teaching assistant, conducting seminars, and doing code review for both complete newbies and students with some experience in JavaScript. The satisfaction level of students was among the highest, and currently, we have allocated a full JS Course to Vrezh (both seminars and lectures). \n I’m very excited to work with Vrezh both as a professional and as a friend. His devotion to project, company and values are among the highest I’ve ever met!",
      },
      {
        author: "Yervand Stepanyan (Student at ACA)",
        text: "Vrezh is highly motivated and motivates others to work hard. He is comprehensively developed and explains difficult things very easily. It is a really pleasure to work with him.",
      },
      {
        author: "Hovhannes Tonoyan (Student at ACA)",
        text: "Good lecturer and mentor. Vrezh is be able to find a way out of any situation at the expense of his deep knowledge. A professional in his field, which is worth following.",
      },
      {
        author:
          "Mihran Sahakyan (Intern (currently Software Engineer) at Simply Technologies)",
        text: "Vrezh is a young professional, always doing his job on a top level and what I value the most, he continues expanding his knowledge every day and keeps learning very advanced topics, which has a big impact for us, his colleagues, as we can learn many stuff from him.",
      },
      {
        author: "Gor Meshinyan (Student at ACA)",
        text: "Vrezh is a good specialist who manages to motivate work perfectly. He is ready to help at any time in case of any problem.",
      },
    ],
  },
  {
    title: "Tech for non-Tech Course",
    description:
      "TFNT is a course that was created in 2020 @ ACA. <br /> <br /> I developed course syllabus, structure and taught more than 200 students both online and offline.",
    link: "https://www.aca.am/courses/tfnt",
    image: "",
    role: "Principal Lecturer",
    period: "December 2020 - ongoing",
    status: "Ongoing",
    customer: "More than 200 students",
    stack: "",
    type: ProjectTypes.Courses,
  },
  {
    title: "use-react-screenshot",
    description:
      "React hook which allows you to make component screenshot and get an image in different extensions.      ",
    link: "https://github.com/vre2h/use-react-screenshot",
    image: "",
    role: "Creator",
    period: "March 2020",
    status: "Ongoing",
    customer: "",
    stack: "HTML/CSS, JS (React)",
  },
  {
    title: "Building Products @ Simply Technologies",
    description:
      "I’m working on various projects as a JS (TS, ReasonML) developer. I've worked primarily with Frontend stack:<br />— React and its ecosystem (Next.js, Gatsby, Redux, Redux-saga, Jest, Enzyme, etc)<br />— Vue (vuex),<br />— Reason-react.<br /><br />I've also experience with Backend technologies:<br />— Node (Express)<br />— Databases(MongoDB, PostgreSQL)<br /><br />Infrastructure:<br />— AWS: Lambda, S3<br />— Serverless<br />— Firebase (Cloud Functions, Authentication)<br />— Vercel<br />— Netlify<br /><br />Also, I’m responsible for:<br />— Frontend (React) applications architecture and code review<br />— Mentorship<br />I taught two generations of interns, and most of them now work as software developers",
    link: "https://simplytechnologies.net",
    image: "simply.png",
    imageHeight: "330",
    role: "Software Engineer",
    period: "December 2018 — August 2020",
    status: "",
    customer: "Simply Technologies",
    stack: "HTML/CSS, JS (React, Redux, jQuery), Node.js (Express)",
    type: ProjectTypes.Jobs,
    reviews: [
      {
        text: "Vrezh is a very creative and clever person who is never afraid of challenging tasks. I’ve been working with him for almost 2 years in several projects, and he has always met the deadlines with high quality and interesting solutions. He's a very kind and sociable person and it's a pleasure to work with him.\nIn addition, he's a great team player who enjoys helping his team members.",
        author: "Anna Grigoryan (Project Manager)",
      },
      {
        text: "Our company has been working on a complex multimedia web project that required a lot of effort, required constant changes and coordination, and non-conventional solutions “beyond the box”. Besides, we had to do all this in a short period of time. \n We were lucky to have Vrezh as our partner. He is competent, always delves into the problem, and suggests solutions. He is responsive, friendly, and calm. He was always willing to accept the necessary changes, thoughtfully implemented them without engaging into lengthy discussions. Vrezh managed to make this difficult process stress-free and concentrated on the output. It was impressive and simply great.",
        author:
          "Konstantin Geodakian (Technical Director at Media Initiatives Center)",
      },
    ],
  },
];

const allProjects = projects;
const jobs = projects.filter((p) => p.type === ProjectTypes.Jobs);
const courses = projects.filter((p) => p.type === ProjectTypes.Courses);
const myProjects = projects.filter((p) => p.type === ProjectTypes.Projects);

export default function Projects() {
  const [projectType, setProjectType] = useState(ProjectTypes.All);

  let filteredProjects = allProjects;

  switch (projectType) {
    case ProjectTypes.Jobs:
      filteredProjects = jobs;
      break;
    case ProjectTypes.Courses:
      filteredProjects = courses;
      break;
    case ProjectTypes.Projects:
      filteredProjects = myProjects;
      break;
    default:
      filteredProjects = allProjects;
      break;
  }

  return (
    <Layout>
      <NextSeo
        title="Projects – Vrezh Oganisyan"
        canonical="https://oganisyan.com/about"
        openGraph={{
          url: "https://oganisyan.com/about",
          title: "Projects – Vrezh Oganisyan",
          images: [
            {
              url: `https://oganisyan.com/images/seo-image.png`,
              alt: "Projects – Vrezh Oganisyan",
            },
          ],
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <div className="flex justify-center w-full mb-8">
          <Image
            width="960"
            height="640"
            alt="Vrezh Oganisyan"
            src={confImg}
            placeholder="blur"
          />
        </div>
        <h3
          className={cn(
            "font-bold text-xl md:text-2xl tracking-tight mb-8 dark:text-white"
          )}
        >
          👋 Ahoooy!
        </h3>
        <p className="dark:text-white">
          I’m Vrezh, Software Engineer with a huge experience in education,
          human psychology and building scalable products.
        </p>
        <p className="dark:text-white">
          I help turning ideas into finished working products with support at
          all stages.
        </p>

        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mt-14 mb-8 text-black dark:text-white">
          Projects (newest to oldest)
        </h1>

        <div className="w-full flex items-center justify-center mb-4">
          {Object.values(ProjectTypes).map((type) => (
            <button
              key={type}
              type="button"
              className={cn(
                {
                  "focus:outline-none border-gray-900 dark:border-gray-300 dark:text-gray-100":
                    projectType === type,
                  "focus:outline-none dark:border-gray-700 dark:text-gray-400":
                    projectType !== type,
                },
                "flex border items-center text-sm px-4 py-2 font-medium text-gray-900"
              )}
              onClick={() => setProjectType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {filteredProjects.map(
          ({
            title,
            description,
            link,
            role,
            period,
            customer,
            status,
            image,
            imageHeight,
            reviews,
          }) => {
            return (
              <section key={title} className="my-8">
                {image && (
                  <Image
                    width="1200"
                    height={imageHeight || "630"}
                    alt="Vrezh Oganisyan"
                    src={`/images/projects/${image}`}
                  />
                )}
                {link ? (
                  <a
                    rel="noreferrer"
                    className={cn("project py-2 duration-150", {
                      "mt-2 block": !!image,
                    })}
                    target="_blank"
                    href={link}
                  >
                    <h4 className="inline-block transition duration-500 text-lg md:text-xl font-medium mb-2 text-gray-900 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-700 hover:text-gray-900 dark:hover:text-gray-100">
                      {title}
                    </h4>
                  </a>
                ) : (
                  <h3
                    className={cn(
                      "text-xl tracking-tight mb-8 dark:text-white",
                      {
                        "mt-2": !!image,
                      }
                    )}
                  >
                    {title}
                  </h3>
                )}
                <p
                  className="mt-4 mb-8 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: description }}
                />

                <div className="project-positions mt-2 dark:text-gray-300">
                  {role && (
                    <>
                      <div>Roles</div>
                      <div>{role}</div>
                    </>
                  )}
                  {period && (
                    <>
                      <div>Period</div>
                      <div>{period}</div>
                    </>
                  )}
                  {status && (
                    <>
                      <div>Status</div>
                      <div>{status}</div>
                    </>
                  )}
                  {customer && (
                    <>
                      <div>Customer</div>
                      <div>{customer}</div>
                    </>
                  )}
                </div>

                <div className="mt-8">
                  {reviews?.length &&
                    reviews.length !== 0 &&
                    reviews.map(({ text, author }) => {
                      return (
                        <div
                          key={author}
                          className="mb-4 border-l-4 border-gray-300 pl-4 text-gray-500"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: text.replaceAll("\n", "<br />"),
                            }}
                          />
                          <br />
                          <div>{author}</div>
                        </div>
                      );
                    })}
                </div>
                <hr className="mt-8" />
              </section>
            );
          }
        )}
      </div>
    </Layout>
  );
}
