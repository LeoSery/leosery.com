import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Gestion de l'apparition initiale
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsInitialLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (!isInitialLoad) {
        setIsVisible(scrollPosition < 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInitialLoad]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('home/about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Logique d'animation améliorée
  const animationClasses = isInitialLoad
    ? isVisible
      ? 'opacity-100 translate-y-0'  // Animation d'entrée depuis le bas
      : 'opacity-0 translate-y-16'
    : isVisible
      ? 'opacity-100 translate-y-0'  // État normal
      : 'opacity-0 -translate-y-16';  // Animation de sortie vers le haut

  return (
    <div 
      onClick={scrollToNextSection}
      className={`inline-flex flex-col items-center gap-2 cursor-pointer transition-all duration-500 ease-out ${animationClasses}`}
    >
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Scroll Down
      </span>
      
      {/* Mouse Container */}
      <div className="relative w-7 h-14 border-2 border-gray-500 dark:border-gray-400 rounded-[20px] flex items-start">
        {/* Mouse Scroll Dot */}
        <span className="w-3 h-3 bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 rounded-full mx-auto animate-[scrolling_1s_linear_infinite]" />
      </div>

      <style jsx>{`
        @keyframes scrolling {
          0% {
            opacity: 0;
            transform: translateY(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(28px);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;