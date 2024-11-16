import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ProjectForm from './ProjectForm'
// import {
//   Card,
//   Grid,
//   CardHeader,
//   IconButton,
//   Slide,
//   Dialog,
// } from "@mui/material";
import { useLanguageContext } from "@/context/languageContext";

export default function ContactModal({isOpen ,closeModal}) {


  const { language } = useLanguageContext();

  return (
    <>
      <div dir='' className="">
       
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                {language === "en" ? "Contact form" : "Formulaire de contact"}

                  </Dialog.Title>
                  <div className="mt-2">
                <ProjectForm/>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary2 text-white px-4 py-2 text-sm font-medium   focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     {language === "en" ? "Close" : "Fermer"} 
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
