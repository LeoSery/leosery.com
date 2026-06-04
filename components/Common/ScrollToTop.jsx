import React, { useState, useCallback, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { useTheme } from "next-themes";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const handleScroll = useCallback(() => {
    const scrollThreshold = 300;
    setIsVisible(window.scrollY > scrollThreshold);
  }, []);

  useEffect(() => {
    handleScroll();
    
    let timeoutId = null;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-md
           group flex items-center
           bg-gray-50 dark:bg-[#212121]
           border border-gray-200 dark:border-gray-800
           text-gray-700 dark:text-[#CAC5BE]
           hover:text-[#ff9f1c] dark:hover:text-[#ff9f1c]
           hover:border-[#ff9f1c] dark:hover:border-[#ff9f1c]
           transition-all duration-300 ease-in-out
           hover:scale-105 active:scale-95
           focus:outline-none focus:ring-2 focus:ring-[#ff9f1c]/30
           disabled:opacity-0 disabled:translate-y-20 disabled:cursor-default
           z-50
           ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
      aria-label="Retourner en haut de la page"
      title="Retourner en haut de la page"
      disabled={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap
                 group-hover:max-w-[100px]
                 transition-all duration-300 ease-in-out
                 text-sm font-medium normal-case mr-0 group-hover:mr-2">
        Back to top
      </span>
      <IoIosArrowUp className="text-2xl flex-shrink-0" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;