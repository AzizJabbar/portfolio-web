"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import Skill from "../components/Skill";
import Project from "../components/Project";
import Work from "../components/Work";
import Modal from "../components/Modal";
import WorkDetail from "../components/WorkDetail";
import { Icon } from "@iconify/react";
import projects from "../data/projects.json";
import careers from "../data/careers.json";
import skills from "../data/skills.json";
import VideoBackground from "@/components/VideoBackground";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
// import TypeWriterEffect from "react-typewriter-effect";

const navigation = [
  { name: "About", href: "#about-me" },
  { name: "Experiences", href: "#career" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contacts" },
  { name: "Resume", href: "#resume" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [work, setWork] = useState(1);
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(1);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  // const handleClick = (id) => {
  //   setWork(id);
  // };

  const handleProjectClick = (id) => {
    setProject(id);
    setOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar
        currentTheme={currentTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setTheme={setTheme}
      />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <VideoBackground />

        {/* ANCHOR Hero section */}
        <div className="ml-8 md:ml-16 lg:ml-24 max-w-2xl py-16 sm:py-32 lg:py-24">
          <div className="text-left">
            <p className="text-medium my-8 text-slate-600 dark:text-slate-400">
              Hi, my name is <span className="text-blue-600 font-medium">Aziz Jabbar Shiddiq</span>,
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">I'm a</h1>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
              Web Developer
            </h1>
            {/* <TypeWriterEffect
              textStyle={{
                fontWeight: 700,
                fontSize: "3.75rem",
                lineHeight: "1",
                letterSpacing: "-0.025em",
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={["Web Developer", "Fast Learner", "Fresh Graduate", "Legend"]}
              multiTextDelay={1000}
              multiTextLoop={true}
              typeSpeed={30}
            /> */}
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              I am a fresh graduate of the University of Indonesia, majoring in Information Systems. Having interest in
              front end development and android development.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                CHECK OUT MY WORK
              </a>
              <a href="#about-me" className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
                Learn more about me<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* ANCHOR About me */}
        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <h1 id="about-me" className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            About Me
          </h1>
          <FadeInOnScroll direction="right">
            <p className="my-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              I am a fresh graduate of the University of Indonesia, majoring in Information Systems with interest in
              front end development and android development. I am a fast learner and want to learn as much as I can
              about exciting new things.
            </p>
          </FadeInOnScroll>

          <Link
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="/about"
            onClick={scrollToTop}
            scroll={true}
          >
            MORE ABOUT ME
          </Link>
        </div>

        {/* ANCHOR Skills */}
        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="skills" className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              There are More Fun Things to Learn!
            </h1>
            <p className="mt-6 mb-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              In my whole life, I keep learning to be a better version of me. Here's what I've learned so far.
            </p>
          </div>
          <div className="justify-center justify-items-start flex flex-wrap">
            {skills.map((item) => (
              <FadeInOnScroll direction="up">
                <Skill name={item.name} icon={item.icon} color={item.color} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>

        {/* ANCHOR Projects */}
        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="projects" className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              The Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Everything I have learned goes into these amazing stuffs I created.
            </p>

            <div className="justify-center justify-items-start flex flex-wrap mt-6">
              {projects.map((item, index) => (
                <FadeInOnScroll delay={index / 10}>
                  <Project onClick={() => handleProjectClick(item.id)} pic={item.img} title={item.title}></Project>
                </FadeInOnScroll>
              ))}
            </div>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              title={projects.find((p) => p.id === project).title}
              desc={projects.find((p) => p.id === project).desc}
              repo={projects.find((p) => p.id === project).repo}
              deploy={projects.find((p) => p.id === project).deploy}
              stacks={projects.find((p) => p.id === project).stacks}
            />
          </div>
        </div>

        {/* ANCHOR Career */}
        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="career" className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              My Career
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              It ain't much, but it's honest work.
            </p>
            <div className=" grid grid-cols-4 mx-auto mt-6 w-100 rounded-xl drop-shadow-xl">
              <div class="col-span-1 bg-gray-200 dark:bg-slate-700 rounded-l-xl">
                {careers.map((item, index) => (
                  <div className={work === index + 1 ? "bg-white dark:bg-slate-800 rounded-l-xl" : ""}>
                    <Work logo={item.logo} name={item.company} onItemClick={() => setWork(index + 1)} />
                  </div>
                ))}
              </div>
              <div class="col-span-3 bg-white dark:bg-slate-800 h-96 rounded-r-xl">
                <WorkDetail
                  desc={careers.find((career) => career.id === work).desc}
                  title={careers.find((career) => career.id === work).title}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ANCHOR Contacts */}
        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="contacts" className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              Contacts
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              You've come all the way here, why don't you take some time to have a chat with me?
            </p>
            <div className="justify-center justify-items-start flex flex-wrap gap-24 mt-16">
              <FadeInOnScroll>
                <Icon
                  icon={"logos:whatsapp-icon"}
                  width="80"
                  height="80"
                  className="inline transition duration-150 ease-out hover:ease-in hover:scale-110 hover:cursor-pointer"
                  onClick={() => window.open("https://wa.me/085888549929", "_blank")}
                />
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div onClick={() => window.open("https://line.me/ti/p/~aziz_js", "_blank")}>
                  <img
                    src="/img/LINE_Brand_icon.png"
                    width="80"
                    height="80"
                    className="inline transition duration-150 ease-out hover:ease-in hover:scale-110 hover:cursor-pointer"
                  />
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <Icon
                  icon={"logos:linkedin-icon"}
                  width="80"
                  height="80"
                  className="inline transition duration-150 ease-out hover:ease-in hover:scale-110 hover:cursor-pointer"
                  onClick={() => window.open("https://www.linkedin.com/in/aziz-jabbar-shiddiq-178360194/", "_blank")}
                />
              </FadeInOnScroll>
              <FadeInOnScroll>
                <Icon
                  icon={"skill-icons:instagram"}
                  width="80"
                  height="80"
                  className="inline transition duration-150 ease-out hover:ease-in hover:scale-110 hover:cursor-pointer"
                  onClick={() => window.open("https://instagram.com/aziz_js", "_blank")}
                />
              </FadeInOnScroll>
              <FadeInOnScroll>
                <Icon
                  icon={"logos:google-gmail"}
                  width="80"
                  height="80"
                  className="inline transition duration-150 ease-out hover:ease-in hover:scale-110 hover:cursor-pointer"
                  onClick={() => window.open("mailto:azizjabbar1412@gmail.com", "_blank")}
                />
              </FadeInOnScroll>
            </div>
          </div>
        </div>

        {/* ANCHOR Resume */}
        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="resume" className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              Resume
            </h1>
            <p className="my-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              If you are a recruiter, you can download my resume here:
            </p>
            <div className="flex flex-col items-center justify-center">
              <a
                className="w-64 m-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/pdf/ResumeAzizJabbarShiddiq.pdf"
                download
              >
                Download PDF
              </a>
              <a
                href="/pdf/ResumeAzizJabbarShiddiq.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className="w-64 m-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Open PDF in new tab
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          {/* <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
