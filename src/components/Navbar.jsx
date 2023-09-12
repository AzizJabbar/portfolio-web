import { Dialog } from "@headlessui/react";
import { Bars3Icon, DeviceTabletIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

function Navbar(props) {
  const { currentTheme, mobileMenuOpen, setMobileMenuOpen, setTheme } = props;
  const [isHome, setIsHome] = useState(false);
  const controls = useAnimation();

  const toggleSwitch = () => {
    // setIsHome(!isHome);
    // controls.start({ left: isHome ? 0 : null, right: isHome ? null : 0 });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only"></span>
            <b>AJS</b>
            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="" /> */}
          </a>
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
        <div className="flex rounded-full p-1.5 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 border border-gray-400/50">
          <Link onClick={toggleSwitch} href="/" scroll={true}>
            <div
              className={
                window.location.pathname === "/"
                  ? "rounded-full text-sm px-6 py-2 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 hover:cursor-pointer"
                  : "text-sm rounded-full px-6 py-2 hover:cursor-pointer hover:backdrop-blur-sm bg-opacity-5"
              }
            >
              Work
            </div>
          </Link>
          <Link onClick={toggleSwitch} href="/about" scroll={true}>
            <div
              className={
                window.location.pathname === "/about"
                  ? "rounded-full text-sm px-6 py-2 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 hover:cursor-pointer"
                  : "text-sm rounded-full px-6 py-2 hover:cursor-pointer hover:backdrop-blur-sm bg-opacity-5"
              }
            >
              Info
            </div>
          </Link>

          {/* {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
              >
                {item.name}
              </a>
            ))} */}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DarkModeToggle currentTheme={currentTheme} setTheme={setTheme} />
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
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))} */}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100 hover:bg-gray-50"
                ></a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
