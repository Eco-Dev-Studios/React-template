import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleDarkMode } from "../features/darkMode/dark-mode-slice";

export default function Header() {
  const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useAppDispatch();

  return (
    <div className="pb-14">
      <nav className="bg-white border-b bg-opacity-30 border-gray-200 w-full top-0 z-10 fixed backdrop-filter backdrop-blur-lg">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <span className="font-semibold text-2xl text-gray-900"></span>
            <div className="flex space-x-4 text-gray-900">
              <button className="" onClick={() => dispatch(toggleDarkMode())}>
                {isDarkMode ? (
                  <svg
                    className="h-8 fill-current text-yellow-300 w-8"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-8 fill-current w-8 dark:text-yellow-300"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className=""></div>
    </div>
  );
}
