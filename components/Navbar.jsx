import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../context/themeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProfilPicture from "../public/assets/profilePicture2.png";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyles, setIndicatorStyles] = useState({ left: 0, width: 0 });
  const router = useRouter();
  const { isDark, setIsDark } = useContext(ThemeContext);

  const navRefs = useRef({
    '/': React.createRef(),
    '/CV': React.createRef(),
    '/Projects': React.createRef(),
    '/Contact': React.createRef()
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    const currentRef = navRefs.current[router.pathname] || 
                     (router.pathname.includes('/Projects') ? navRefs.current['/Projects'] : null);
    
    if (currentRef?.current) {
      const { offsetLeft, offsetWidth } = currentRef.current;
      setIndicatorStyles({
        left: offsetLeft,
        width: offsetWidth
      });
    }
  }, [router.pathname]);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="text-2xl text-white cursor-pointer transition-transform hover:scale-110"
          role="button"
          onClick={() => {
            setTheme("light");
            setIsDark(false);
          }}
          aria-label="Switch to light theme"
        />
      );
    }

    return (
      <MdOutlineDarkMode
        className="text-2xl text-gray-700 cursor-pointer transition-transform hover:scale-110"
        role="button"
        onClick={() => {
          setTheme("dark");
          setIsDark(true);
        }}
        aria-label="Switch to dark theme"
      />
    );
  };

  const NavButton = ({ href, children, isContact = false }) => {
    return (
      <button
        onClick={() => router.push(href)}
        className={`
          relative
          cursor-pointer
          px-3 py-2
          text-sm font-medium
          capitalize
          transition-all
          duration-200
          ${isContact ? `
            bg-blue-600 
            dark:bg-blue-800 
            text-white
            hover:bg-[#ff9f1c] 
            dark:hover:bg-[#BB6C00]
            rounded-md
            hover:shadow-lg 
            hover:shadow-[#312f2f] 
            hover:scale-105
          ` : `
            text-gray-700 
            dark:text-[#CAC5BE]
            hover:text-white
            dark:hover:text-white
            rounded-md
            hover:bg-blue-600
            dark:hover:bg-blue-800
            hover:shadow-lg 
            hover:shadow-[#312f2f]
            hover:scale-105
          `}
        `}
      >
        {children}
      </button>
    );
  };

  const MobileNavButton = ({ href, children }) => {
    const isActive = router.pathname === href || 
      (href === "/Projects" && router.pathname.includes("/Projects"));
      
    return (
      <button
        onClick={() => {
          router.push(href);
          setIsOpen(false);
        }}
        className={`
          w-full
          text-left
          cursor-pointer
          px-3 py-3
          text-sm font-medium
          capitalize
          transition-all
          duration-200
          rounded-md
          ${isActive ? 
            'bg-blue-600 dark:bg-blue-800 text-white' : 
            'text-gray-700 dark:text-[#CAC5BE] hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white'
          }
          hover:translate-x-1
        `}
      >
        {children}
      </button>
    );
  };

  return (
    <nav className="shadow-md sticky top-0 w-full min-w-[320px] z-50 bg-gray-50 dark:bg-[#212121] border-b border-gray-200 dark:border-gray-800">
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          {/* Version Desktop */}
          <div className="hidden md:flex items-center justify-between w-full px-4 lg:px-20">
            <div className="flex items-center flex-shrink-0">
              <button 
                onClick={() => router.push("/")}
                className="relative w-[75px] h-[75px] rounded-full overflow-hidden transition-transform hover:scale-105"
              >
                <Image
                  src={ProfilPicture}
                  alt="Profile picture"
                  layout="fill"
                  objectFit="cover"
                />
              </button>
              <div className="websiteThemeMode cursor-pointer ml-4">
                {renderThemeChanger()}
              </div>
            </div>
            
            <div className="flex items-baseline gap-2 lg:gap-4 relative">
              <div 
                className="absolute bottom-0 h-1 bg-[#E5E7EB] dark:bg-[#363B3D] rounded-t-md transition-all duration-500 ease-in-out"
                style={{
                  left: `${indicatorStyles.left}px`,
                  width: `${indicatorStyles.width}px`
                }}
              />
              <div ref={navRefs.current['/']}>
                <NavButton href="/">Home</NavButton>
              </div>
              <div ref={navRefs.current['/CV']}>
                <NavButton href="/CV">CV</NavButton>
              </div>
              <div ref={navRefs.current['/Projects']}>
                <NavButton href="/Projects">Projects</NavButton>
              </div>
              <div ref={navRefs.current['/Contact']}>
                <NavButton href="/Contact" isContact={true}>Contact</NavButton>
              </div>
            </div>
          </div>

          {/* Version Mobile */}
          <div className="flex md:hidden items-center justify-between w-full px-4 min-w-[320px]">
            <button 
              onClick={() => router.push("/")}
              className="relative w-12 h-12 rounded-full overflow-hidden transition-transform hover:scale-105 flex-shrink-0"
            >
              <Image
                src={ProfilPicture}
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
              />
            </button>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {renderThemeChanger()}
              </div>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-md focus:outline-none bg-transparent flex-shrink-0"
                aria-expanded={isOpen}
              >
                <div className="relative w-6 h-6">
                  <svg
                    className={`absolute inset-0 w-6 h-6 transition-all duration-700 transform ${
                      isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    }`}
                    stroke={theme === "light" ? "#212121" : "#FDFDFD"}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`absolute inset-0 w-6 h-6 transition-all duration-700 transform ${
                      isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                    }`}
                    stroke={theme === "light" ? "#212121" : "#FDFDFD"}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Déroulant */}
        <div className="relative min-w-[320px]">
          <Transition
            show={isOpen}
            enter="transition-all duration-500 ease-out"
            enterFrom="transform -translate-y-full opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition-all duration-500 ease-in"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-full opacity-0"
          >
            <div className="absolute top-0 left-0 right-0 md:hidden bg-gray-50 dark:bg-[#212121] px-2 pt-2 pb-3 space-y-1 shadow-lg border-t dark:border-gray-800">
              <MobileNavButton href="/">Home</MobileNavButton>
              <MobileNavButton href="/CV">Curriculum vitae</MobileNavButton>
              <MobileNavButton href="/Projects">Projects</MobileNavButton>
              <MobileNavButton href="/Contact">Contact</MobileNavButton>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  );
}