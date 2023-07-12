import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SkillCard from "./SkillCard";
import skills from "../data/skills.json";

export default function Modal(props) {
  const { open, onClose, onCancel, title, desc, repo, deploy, stacks } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{desc.replace(/\\n/g, "\n")}</p>
                      </div>
                      <p className="text-sm font-bold text-gray-900 mt-4 mb-2">Stacks:</p>
                      <div className="flex flex-wrap gap-2">
                        {stacks.map((item) => (
                          <SkillCard
                            name={item}
                            icon={skills.find((s) => s.name === item).icon}
                            color={skills.find((s) => s.name === item).color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-start mx-4 px-4 py-3 flex sm:px-6 gap-4">
                  <button
                    type="button"
                    disabled={repo === ""}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-md disabled:bg-gray-400 disabled:hover:cursor-not-allowed hover:bg-blue-600 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      window.open(repo, "_blank");
                    }}
                  >
                    Go to repo
                  </button>
                  <button
                    type="button"
                    disabled={deploy === ""}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-md disabled:bg-gray-400 disabled:hover:cursor-not-allowed hover:bg-blue-600 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      window.open(deploy, "_blank");
                    }}
                  >
                    Go to app
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onCancel}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
