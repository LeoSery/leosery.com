import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import ScrollIndicator from "../Common/ScrollIndicator";
import TypeWriter from "../Common/TypeWriter";
import Link from "next/link";
import React from "react";

export default function Main() {

  const handleSocialClick = (platform) => {
    gtag.event({
      action: 'social_link_click',
      params: {
        platform: platform,
        location: 'home_hero'
      }
    });
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full">
          <div className="h-[80px] sm:h-[96px] md:h-[120px] relative w-full">
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
          
          <h2 className="pt-2 sm:pt-3 md:pt-4 text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-[#BDB7AF] text-center font-light tracking-wide">
            Junior Game Programmer
          </h2>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-3 w-full max-w-[380px] mt-4">
            <SocialButton 
              href="https://www.linkedin.com/in/leosery/" 
              icon={<FaLinkedin />}
              platform="linkedin"
              isExternal={true}
            />
            <SocialButton 
              href="https://github.com/LeoSery" 
              icon={<FaGithub />}
              platform="github"
              isExternal={true}
            />
            <SocialButton 
              href="https://www.youtube.com/@leosery"
              icon={<FaYoutube />}
              platform="youtube"
              isExternal={true}
            />
            <SocialButton 
              href="https://x.com/leo_sery"
              icon={<FaXTwitter />}
              platform="twitter"
              isExternal={true}
            />
            <SocialButton 
              href="/contact" 
              icon={<AiOutlineMail />}
              platform="contact"
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

function SocialButton({ href, icon, platform, isExternal = false }) {
  const LinkWrapper = ({ children }) => (
    <Link 
      href={href} 
      onClick={() => handleSocialClick(platform)}
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