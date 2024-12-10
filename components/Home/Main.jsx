import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ScrollIndicator from "../Common/ScrollIndicator";
import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white text-center">
            Hi, I&apos;m
            <span className="text-[#ff9f1c] dark:text-[#FFA62D] ml-2 font-normal">
              Léo
            </span>
          </h1>
          
          <h2 className="pt-4 sm:pt-5 md:pt-8 text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-[#BDB7AF] text-center font-light tracking-wide">
            A student in Game programming
          </h2>

          {/* Social Buttons */}
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
              href="/Contact" 
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