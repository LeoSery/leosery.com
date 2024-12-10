// import React, { useEffect, useState } from 'react';

// const TypeWriter = ({ 
//   text, 
//   cursorColor = "#ff9f1c", 
//   speed = 100, 
//   delay = 500,
//   showCursor = true,
//   keepCursor = false,
//   cursorTimeout = null // Nouvelle option pour faire disparaître le curseur après X ms
// }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [animationComplete, setAnimationComplete] = useState(false);
//   const [shouldShowCursor, setShouldShowCursor] = useState(true);

//   useEffect(() => {
//     // Delay before starting the animation
//     const startTimeout = setTimeout(() => {
//       setIsTyping(true);
//       let currentIndex = 0;

//       // Start typing animation
//       const typingInterval = setInterval(() => {
//         if (currentIndex < text.length) {
//           setDisplayText(text.slice(0, currentIndex + 1));
//           currentIndex++;
//         } else {
//           clearInterval(typingInterval);
//           setIsTyping(false);
//           setAnimationComplete(true);

//           // Si un timeout est défini pour le curseur, on le programme
//           if (cursorTimeout) {
//             setTimeout(() => {
//               setShouldShowCursor(false);
//             }, cursorTimeout);
//           }
//         }
//       }, speed);

//       return () => clearInterval(typingInterval);
//     }, delay);

//     return () => clearTimeout(startTimeout);
//   }, [text, speed, delay, cursorTimeout]);

//   // Détermine si le curseur doit être affiché
//   const displayCursor = showCursor && shouldShowCursor && (isTyping || (keepCursor && animationComplete));

//   return (
//     <span className="inline-flex items-center">
//       {displayText}
//       {displayCursor && (
//         <span 
//           className={`ml-1 w-[2px] h-[1em] bg-[${cursorColor}] dark:bg-[${cursorColor}] animate-terminal-cursor`}
//           aria-hidden="true"
//         />
//       )}
//     </span>
//   );
// };

// export default TypeWriter;

import React, { useEffect, useState } from 'react';

const TypeWriter = ({ 
  textParts = [], // Array of {text: string, color: string}
  speed = 100,
  showCursor = true,
  keepCursor = false,
  cursorTimeout = null
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [shouldShowCursor, setShouldShowCursor] = useState(true);

  // Calcule le texte total
  const fullText = textParts.map(part => part.text).join('');

  useEffect(() => {
    setIsTyping(true);
    
    const typingInterval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev < fullText.length) {
          return prev + 1;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setAnimationComplete(true);
          
          if (cursorTimeout) {
            setTimeout(() => {
              setShouldShowCursor(false);
            }, cursorTimeout);
          }
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(typingInterval);
  }, [fullText, speed, cursorTimeout]);

  // Détermine si le curseur doit être affiché
  const displayCursor = showCursor && shouldShowCursor && (isTyping || (keepCursor && animationComplete));

  // Rendu du texte avec coloration
  const renderText = () => {
    let renderedText = [];
    let currentPosition = 0;

    textParts.forEach((part, partIndex) => {
      const partEndPosition = currentPosition + part.text.length;
      const visibleText = part.text.slice(0, Math.max(0, currentIndex - currentPosition));
      
      if (visibleText) {
        renderedText.push(
          <span key={partIndex} className={part.className} style={{marginRight:"1rem"}}>
            {visibleText}
          </span>
        );
      }
      
      currentPosition = partEndPosition;
    });

    return renderedText;
  };

  return (
    <span className="relative inline-flex">
      {renderText()}
      {displayCursor && (
        <span 
          className="w-[2px] h-[1em] bg-[#ff9f1c] dark:bg-[#ff9f1c] animate-terminal-cursor"
          style={{minHeight: "65px"}}
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export default TypeWriter;