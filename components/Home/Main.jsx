import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ScrollIndicator from "../Common/ScrollIndicator";
import TypeWriter from "../Common/TypeWriter";
import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full">
          {/* Conteneur pour maintenir l'espace */}
          <div className="h-[80px] sm:h-[96px] md:h-[120px] relative w-full">
            {/* Texte animé en position absolue */}
            <div className="inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white text-center">
              <TypeWriter 
                textParts={[
                  {
                    text: "Hi, I'm ",
                    className: "text-gray-900 dark:text-white font-light"
                  },
                  {
                    text: "Léo",
                    className: "text-[#ff9f1c] dark:text-[#FFA62D] font-normal"
                  }
                ]}
                speed={100}
                showCursor={true}
                keepCursor={true}
                cursorTimeout={3000}
              />
            </h1>
            </div>
          </div>
          
          {/* Sous-titre avec espacement réduit */}
          <h2 className="pt-2 sm:pt-3 md:pt-4 text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-[#BDB7AF] text-center font-light tracking-wide">
            A student in Game programming
          </h2>

          {/* Social Buttons - garde le même espacement */}
          <div className="flex items-center justify-center gap-3 w-full max-w-[280px] mt-4">
            <SocialButton 
              href="https://www.linkedin.com/in/leosery/" 
              icon={<FaLinkedin />} 
              isExternal={true}
            />
            <SocialButton 
              href="https://github.com/LeoSery" 
              icon={<FaGithub />} 
              isExternal={true}
            />
            <SocialButton 
              href="/contact" 
              icon={<AiOutlineMail />} 
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-16 w-full flex justify-center">
        <ScrollIndicator />
      </div>
    </div>
  );
}

function SocialButton({ href, icon, isExternal = false }) {
  const LinkWrapper = ({ children }) => (
    <Link 
      href={href} 
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </Link>
  );

  return (
    <LinkWrapper>
      <div className="rounded-xl shadow shadow-gray-400 dark:shadow-gray-800 dark:bg-[#1E1E1E] p-3 cursor-pointer hover:scale-105 ease-in duration-200 transition-all hover:shadow-md">
        <span className="text-gray-900 dark:text-white text-base sm:text-lg">
          {icon}
        </span>
      </div>
    </LinkWrapper>
  );
}