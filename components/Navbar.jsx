import ProfilPicture from "../public/assets/profilePicture2.png";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { isDark, setIsDark } = useContext(ThemeContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="cursor-pointer text-2xl text-white"
          role="button"
          onClick={() => {
            setTheme("light");
            setIsDark(!isDark);
          }}
          alt="Switch to light theme"
        />
      );
    } else {
      return (
        <MdOutlineDarkMode
          className="cursor-pointer text-2xl"
          role="button"
          onClick={() => {
            setTheme("dark");
            setIsDark(!isDark);
          }}
          alt="Switch to dark theme"
        />
      );
    }
  };

  return (
    <>
      <nav className="shadow-sm sticky bg-white top-0 w-full z-10 dark:bg-[#212121]">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <button onClick={() => router.push("/")}>
                  <Image
                    src={ProfilPicture}
                    alt="profile piccture"
                    width="75"
                    height="75"
                    className="rounded-full"
                  />
                </button>
                <div className="websiteThemeMode cursor-pointer">
                  <button>{renderThemeChanger()}</button>
                </div>
              </div>
              <div className=" hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button
                    onClick={() => router.push("/")}
                    to="home"
                    offset={50}
                    duration={500}
                    className={"cursor-pointer hover:bg-blue-600 text-[#312f2f] dark:text-[#CAC5BE] dark:hover:text-white hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize".concat(
                      " ",
                      router.pathname == "/"
                        ? "border-b-4 border-[#E5E7EB] hover:border-blue-600 dark:border-[#363B3D] dark:hover:border-blue-800"
                        : "border-b-4 border-white hover:border-blue-600 dark:border-[#212121] dark:hover:border-blue-800"
                    )}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => router.push("/CV")}
                    to="cv"
                    offset={50}
                    duration={500}
                    className={"cursor-pointer hover:bg-blue-600 text-[#312f2f] dark:text-[#CAC5BE] dark:hover:text-white hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize".concat(
                      " ",
                      router.pathname == "/CV"
                        ? "border-b-4 border-[#E5E7EB] hover:border-blue-600 dark:border-[#363B3D] dark:hover:border-blue-800"
                        : "border-b-4 border-white hover:border-blue-600 dark:border-[#212121] dark:hover:border-blue-800"
                    )}
                  >
                    Curriculum vitae
                  </button>
                  <button
                    onClick={() => router.push("/Projects")}
                    to="projects"
                    offset={50}
                    duration={500}
                    className={"cursor-pointer hover:bg-blue-600 text-[#312f2f] dark:text-[#CAC5BE] dark:hover:text-white hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize".concat(
                      " ",
                      router.pathname.includes("/Projects")
                        ? "border-b-4 border-[#E5E7EB] hover:border-blue-600 dark:border-[#363B3D] dark:hover:border-blue-800"
                        : "border-b-4 border-white hover:border-blue-600 dark:border-[#212121] dark:hover:border-blue-800"
                    )}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => router.push("/Blog")}
                    to="blog"
                    offset={50}
                    duration={500}
                    className={"cursor-pointer hover:bg-blue-600 text-[#312f2f] dark:text-[#CAC5BE] dark:hover:text-white hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize".concat(
                      " ",
                      router.pathname.includes("/Blog")
                        ? "border-b-4 border-[#E5E7EB] hover:border-blue-600 dark:border-[#363B3D] dark:hover:border-blue-800"
                        : "border-b-4 border-white hover:border-blue-600 dark:border-[#212121] dark:hover:border-blue-800"
                    )}
                  >
                    Blog
                  </button>
                  <button
                    onClick={() => router.push("/Contact")}
                    to="contact"
                    offset={50}
                    duration={500}
                    className="cursor-pointer bg-blue-600 dark:bg-blue-800 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 px-3 py-2 hover:bg-[#ff9f1c] dark:hover:bg-[#BB6C00] rounded-md text-sm font-medium capitalize"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white dark:text-[#CAC5BE] focus:outline-none focus:ring-offset-2 focus-ring-blue-800 focus:ring-white capitalize"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                ref={ref}
                className="bg-white dark:bg-[#212121] px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"
              >
                <button
                  onClick={() => {
                    router.push("/");
                    setIsOpen(!isOpen);
                  }}
                  to="home"
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 dark:bg-[#212121] text-[#312f2f] hover:text-white dark:text-[#CAC5BE] hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    router.push("/CV");
                    setIsOpen(!isOpen);
                  }}
                  to="cv"
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 dark:bg-[#212121] text-[#312f2f] hover:text-white dark:text-[#CAC5BE] hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Curriculum vitae
                </button>
                <button
                  onClick={() => {
                    router.push("/Projects");
                    setIsOpen(!isOpen);
                  }}
                  to="projects"
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 dark:bg-[#212121] text-[#312f2f] hover:text-white dark:text-[#CAC5BE] hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    router.push("/Blog");
                    setIsOpen(!isOpen);
                  }}
                  to="blog"
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 dark:bg-[#212121] text-[#312f2f] hover:text-white dark:text-[#CAC5BE] hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Blog
                </button>
                <button
                  onClick={() => {
                    router.push("/Contact");
                    setIsOpen(!isOpen);
                  }}
                  to="contact"
                  offset={50}
                  duration={50}
                  className="cursor-pointer hover:bg-blue-600 dark:bg-[#212121] text-[#312f2f] hover:text-white dark:text-[#CAC5BE] hover:scale-105 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}
