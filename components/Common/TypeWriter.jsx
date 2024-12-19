import React, { useEffect, useState } from 'react';

const TypeWriter = ({ 
  textParts = [],
  speed = 100,
  showCursor = true,
  keepCursor = false,
  cursorTimeout = null
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [shouldShowCursor, setShouldShowCursor] = useState(true);

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

  const displayCursor = showCursor && shouldShowCursor && (isTyping || (keepCursor && animationComplete));

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