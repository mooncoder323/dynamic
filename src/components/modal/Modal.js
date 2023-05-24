import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import useModal from "@contexts/LoginModalContext";
import Profile from "./Profile";
import LoginSection from "./LoginSection";
import useAuth from "@contexts/AuthContext";

export default function Modal() {
  const { open, closeModal, mode } = useModal();
  const { user } = useAuth();
  let completeButtonRef = useRef(null);

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          initialFocus={completeButtonRef}
          as="div"
          className="fixed inset-0 z-[300] overflow-y-auto"
          onClose={closeModal}
        >
          {/* <button
            className="sr-only"
            ref={completeButtonRef}
            onClick={closeModal}
          /> */}
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-10" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-[420px] p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl border-t-8 min-h-[400px] border-dynamic-red rounded-b-none md:rounded-b-lg rounded-lg ">
                <div className="absolute  top-0 left-0  bg-white shadow-inner flex mt-[-48px] md:mt-4 ml-4 md:ml-[-40px] p-1 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
                  <button
                    onClick={closeModal}
                    ref={completeButtonRef}
                    className="close-modal focus:outline-none"
                    aria-label="close login modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {user ? <Profile user={user} /> : <LoginSection mode={mode} />}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
