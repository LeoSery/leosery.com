import React, { useState, useCallback, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { useTheme } from "next-themes";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Optimisation avec useCallback pour éviter des re-renders inutiles
  const handleScroll = useCallback(() => {
    const scrollThreshold = 300;
    setIsVisible(window.scrollY > scrollThreshold);
  }, []);

  useEffect(() => {
    // Vérifier la position initiale du scroll
    handleScroll();
    
    // Throttle l'événement de scroll pour de meilleures performances
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
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg
                 bg-blue-600 dark:bg-blue-800 text-white
                 transition-all duration-300 ease-in-out transform
                 hover:bg-[#ff9f1c] dark:hover:bg-[#ff9f1c]
                 hover:scale-110 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 active:scale-95
                 disabled:opacity-0 disabled:translate-y-20 disabled:cursor-default
                 z-50
                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
      aria-label="Retourner en haut de la page"
      title="Retourner en haut de la page"
      disabled={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <IoIosArrowUp 
        className={`text-2xl transform transition-transform 
                   group-hover:animate-bounce`}
        aria-hidden="true"
      />
    </button>
  );
};

export default ScrollToTop;