import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#202020] w-full min-w-[320px] overflow-hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-12 gap-y-6 sm:gap-y-8">
          
          {/* Name & Copyright */}
          <div className="flex flex-col">
            <h2 className="text-gray-700 dark:text-white font-bold text-xl sm:text-2xl md:text-3xl whitespace-nowrap">
              Léo<span className="text-blue-600"> Séry</span>
            </h2>
            <p className="text-gray-500 dark:text-[#B1AAA0] text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
            
            {/* Availability */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start space-x-2">
                <HiLocationMarker className="text-lg text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600 dark:text-[#B1AAA0]">
                  <p className="font-medium">Bordeaux, France</p>
                  <p className="text-green-600 dark:text-green-400 font-medium mt-1">
                    🟢 Open to opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="min-w-0">
            <h3 className="text-gray-700 dark:text-[#BDB7AF] font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              Contact me
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <FooterLink 
                icon={<FaLinkedin />}
                href="https://www.linkedin.com/in/leosery/"
                text="leosery"
                ariaLabel="Visit my LinkedIn profile"
              />
              <FooterLink 
                icon={<IoIosMail />}
                href="mailto:sery.leo0704@gmail.com"
                text="sery.leo0704@gmail.com"
                ariaLabel="Send me an email"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="min-w-0">
            <h3 className="text-gray-700 dark:text-[#BDB7AF] font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              Follow me
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <FooterLink 
                icon={<FaGithub />}
                href="https://github.com/LeoSery"
                text="LeoSery"
                ariaLabel="Visit my GitHub profile"
              />
              <FooterLink 
                icon={<FaXTwitter />}
                href="https://x.com/leo_sery"
                text="@leo_sery"
                ariaLabel="Visit my Twitter/X profile"
              />
              <FooterLink 
                icon={<FaYoutube />}
                href="https://www.youtube.com/@leosery"
                text="@leosery"
                ariaLabel="Visit my YouTube channel"
              />
            </div>
          </div>

          {/* Company Section */}
          {/* <div className="min-w-0">
            <h3 className="text-gray-700 dark:text-[#BDB7AF] font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 whitespace-nowrap">
              My work-study company
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <FooterLink 
                icon={<FaLinkedin />}
                href="https://www.linkedin.com/company/simforhealth/"
                text="SimforHealth"
                ariaLabel="Visit SimforHealth LinkedIn profile"
              />
              <FooterLink 
                icon={<CgWebsite />}
                href="https://simforhealth.fr/"
                text="simforhealth.fr"
                ariaLabel="Visit SimforHealth website"
              />
            </div>
          </div> */}
          
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ icon, href, text, ariaLabel }) {
  return (
    <div className="flex items-center space-x-3 min-w-0 group">
      <div className="flex-shrink-0 text-xl sm:text-2xl text-gray-700 dark:text-white transition-all duration-300 ease-in-out transform group-hover:text-blue-600 group-hover:scale-110">
        {icon}
      </div>
      <Link 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="text-gray-500 dark:text-[#B1AAA0] transition-colors duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-600 font-semibold truncate focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-sm"
      >
        {text}
      </Link>
    </div>
  );
}