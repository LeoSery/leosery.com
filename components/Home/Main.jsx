import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ScrollIndicator from "../Common/ScrollIndicator";
import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 flex flex-col items-center px-3 sm:px-4 lg:px-6">
        <div className="max-w-[70rem] w-full flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white text-center">
              Hi, I&apos;m
              <span className="text-[#ff9f1c] dark:text-[#FFA62D] ml-2 font-normal">
                Léo
              </span>
            </h1>
            
            <h2 className="py-2 sm:py-3 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-[#BDB7AF] text-center font-light tracking-wide w-full sm:max-w-[60%]">
              A student in Game programming
            </h2>

            <p className="py-3 text-sm sm:text-base text-gray-600 dark:text-[#B1AAA0] w-full sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%] text-justify leading-relaxed">
              I&apos;m 5th-year game programming student at Bordeaux Ynov Campus,
              located in the city of Bordeaux in south-west France. I&apos;m
              passionate about video game development, especially in virtual
              reality. I like object languages like C# and C++, and I develop
              games on Unity3D and Unreal Engine 5 as a hobby.
            </p>

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
              <SocialButton 
                href="#home/about" 
                icon={<BsFillPersonLinesFill />} 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center">
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
      <div className="rounded-xl shadow-sm shadow-gray-400 dark:shadow-gray-800 dark:bg-[#1E1E1E] p-3 cursor-pointer hover:scale-105 ease-in duration-200 transition-all hover:shadow-md">
        <span className="text-black dark:text-white text-base sm:text-lg">
          {icon}
        </span>
      </div>
    </LinkWrapper>
  );
}