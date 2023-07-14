"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, DeviceTabletIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Work from "../components/Work";
import Modal from "../components/Modal";
import WorkDetail from "../components/WorkDetail";
import { Icon } from "@iconify/react";
import Fade from "react-reveal/Fade";
import projects from "../data/projects.json";
import careers from "../data/careers.json";
import skills from "../data/skills.json";
import VideoBackground from "@/components/VideoBackground";
import TypeWriterEffect from "react-typewriter-effect";

const navigation = [
  { name: "About", href: "#about-me" },
  { name: "Experiences", href: "#career" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "#resume" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [work, setWork] = useState(1);
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(1);

  // const handleClick = (id) => {
  //   setWork(id);
  // };

  const handleProjectClick = (id) => {
    setProject(id);
    setOpen(true);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
              <b>AJS</b>
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900"></a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">AJS</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  ></a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <VideoBackground />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-xl sm:-top-80"
          aria-hidden="true"
        >
          {/* <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          /> */}
        </div>
        <div className="ml-8 md:ml-16 lg:ml-24 max-w-2xl py-16 sm:py-32 lg:py-24">
          <div className="text-left">
            <p className="text-medium my-8 text-gray-600">
              Hi, my name is <span className="text-indigo-600 font-medium">Aziz Jabbar Shiddiq</span>,
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">I'm a</h1>
            <TypeWriterEffect
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
            />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am a fresh graduate of the University of Indonesia, majoring in Information Systems. Having interest in
              front end development and android development.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                CHECK OUT MY WORK
              </a>
              <a href="#about-me" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more about me<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <h1 id="about-me" className="text-4xl font-bold text-gray-900">
            About Me
          </h1>
          <Fade right>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am a fresh graduate of the University of Indonesia, majoring in Information Systems with interest in
              front end development and android development. I am a fast learner and want to learn as much as I can
              about exciting new things.
            </p>
          </Fade>
        </div>

        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="skills" className="text-4xl font-bold text-gray-900">
              There are More Fun Things to Learn!
            </h1>
            <p className="mt-6 mb-4 text-lg leading-8 text-gray-600">
              In my whole life, I keep learning to be a better version of me. Here's what I've learned so far.
            </p>
          </div>
          <div className="justify-center justify-items-start flex flex-wrap">
            {skills.map((item) => (
              <Skill name={item.name} icon={item.icon} color={item.color} />
            ))}
          </div>
        </div>

        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="projects" className="text-4xl font-bold text-gray-900">
              The Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything I have learned goes into these amazing stuffs I created.
            </p>

            <div className="justify-center justify-items-start flex flex-wrap mt-6">
              {projects.map((item, index) => (
                <Fade top delay={index * 100}>
                  <Project onClick={() => handleProjectClick(item.id)} pic={item.img} title={item.title}></Project>
                </Fade>
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

        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="career" className="text-4xl font-bold text-gray-900">
              My Career
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">It ain't much, but it's honest work.</p>
            <div className=" grid grid-cols-4 mx-auto mt-6 w-100 rounded-lg drop-shadow-xl border border-gray-100">
              <div class="col-span-1 bg-gray-200 rounded-l-lg">
                {careers.map((item, index) => (
                  <div className={work === index + 1 ? "bg-white" : ""}>
                    <Work logo={item.logo} name={item.company} onItemClick={() => setWork(index + 1)} />
                  </div>
                ))}
              </div>
              <div class="col-span-3 bg-white h-96 rounded-r-lg">
                <WorkDetail
                  desc={careers.find((career) => career.id === work).desc}
                  title={careers.find((career) => career.id === work).title}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="contacts" className="text-4xl font-bold text-gray-900">
              Contacts
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              You've come all the way here, why don't you take some time to have a chat with me?
            </p>
            <div className="justify-center justify-items-start flex flex-wrap gap-10 mt-6">
              <Skill name="+6285888549929" icon="logos:whatsapp-icon"></Skill>
              <Fade top>
                <div className="text-center mx-8 my-8">
                  <img src="/img/LINE_Brand_icon.png" width="80" height="80" className="inline"></img>
                  <div className="mt-6 text-sm text-gray-600">aziz_js</div>
                </div>
              </Fade>
              <Fade top>
                <div className="text-center mx-8 my-8">
                  <Icon icon={"skill-icons:instagram"} width="80" height="80" className="inline" />
                  <div className="mt-6 text-sm text-gray-600">aziz_js</div>
                </div>
              </Fade>
              <Skill name="azizjabbar1412@gmail.com" icon="logos:google-gmail"></Skill>
            </div>
          </div>
        </div>

        <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 id="resume" className="text-4xl font-bold text-gray-900">
              Resume
            </h1>
            <p className="my-6 text-lg leading-8 text-gray-600">
              If you are a recruiter, you can download my resume here:
            </p>
            <div className="flex flex-col items-center justify-center">
              <a
                className="w-64 m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="/pdf/ResumeAzizJabbarShiddiq.pdf"
                download
              >
                Download PDF
              </a>
              <a
                href="/pdf/ResumeAzizJabbarShiddiq.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className="w-64 m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
