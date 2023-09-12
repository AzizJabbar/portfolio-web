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
import Navbar from "@/components/Navbar";

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
      <Navbar
        currentTheme={currentTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setTheme={setTheme}
      />

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
