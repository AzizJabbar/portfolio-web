"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, DeviceTabletIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Modal from "../../components/Modal";
import { Icon } from "@iconify/react";
import VideoBackground from "@/components/VideoBackground";
import Link from "next/link";
import CardWithBackground from "@/components/CardWithBackground";

// import TypeWriterEffect from "react-typewriter-effect";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [work, setWork] = useState(1);
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(1);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="bg-white dark:bg-slate-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link
              className="r -m-1.5 p-1.5 px-3.5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-400 shadow-sm"
              href="/"
              scroll={false}
            >
              <b> &lt; Back</b>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
              {currentTheme === "dark" ? (
                <button
                  className="hover:bg-gray-800 border-2 border-blue-500 w-fit rounded-md p-2"
                  onClick={() => setTheme("light")}
                >
                  <img src="/moon.svg" alt="logo" height="20px" width="20px" className="-hue-rotate-60" />
                </button>
              ) : (
                <button className="bg-slate-50 w-fit rounded-md p-2 hover:bg-gray-300" onClick={() => setTheme("dark")}>
                  <img src="/sun.svg" alt="logo" height="20px" width="20px" className="-hue-rotate-60" />
                </button>
              )}
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">AJS</span>
                <b>AJS</b>
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                  alt=""
                /> */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <VideoBackground />
        <section className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center tracking-tight text-slate-900 dark:text-slate-100 sm:text-8xl">
            Hi There!
          </h1>
          <p className="mt-6 text-lg leading-8 text-center text-slate-600 dark:text-slate-400">
            This page will get you to know me deeper.
          </p>
          <a
            href="#about"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 m-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Get Started
          </a>
        </section>
        <section id="about">
          <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
            <h1 id="about-me" className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              Who Am I?
            </h1>
            <p className="my-6 text-lg leading-8 text-slate-600 w-2/4 dark:text-slate-400">
              I am a fresh graduate of the University of Indonesia, majoring in Information Systems with interest in
              front end development and android development. I am a fast learner and want to learn as much as I can
              about exciting new things.
            </p>
          </div>
        </section>
        <section className="hobby">
          <div className="mx-8 md:mx-16 lg:mx-24 py-16 sm:py-32 lg:py-24">
            <div className="text-center">
              <h1 id="resume" className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                Hobby
              </h1>
              <p className="my-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Some stuffs I love to do in my spare time.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-start">
              <CardWithBackground title="Games" image="/img/game.jpg" />
              <CardWithBackground title="Movies" image="/img/movie.jpg" />
              <CardWithBackground
                title="Series"
                image="https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg"
              />
              <CardWithBackground
                title="Anime"
                image="https://cdn.idntimes.com/content-images/duniaku/post/20230723/23016700-a487c15a62df2835c4e1bf6ed3316512.jpg"
              />
              <CardWithBackground
                title="Books"
                image="https://images.unsplash.com/photo-1608476268141-cb7054ceb2da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
