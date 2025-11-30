import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMail, HiLocationMarker, HiDocumentText } from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "contact-pro@leosery.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/leosery/',
      icon: FaLinkedin,
      hoverIconColor: 'group-hover:text-[#0077b5]'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/LeoSery',
      icon: FaGithub,
      hoverIconColor: 'group-hover:text-[#333] dark:group-hover:text-[#fff]'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@LeoSery',
      icon: FaYoutube,
      hoverIconColor: 'group-hover:text-[#ff0000]'
    },
    {
      name: 'X',
      url: 'https://x.com/leo_sery',
      icon: FaXTwitter,
      hoverIconColor: 'group-hover:text-[#000] dark:group-hover:text-[#1DA1F2]'
    }
  ];

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center py-8 sm:py-12">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <p className="text-xl tracking-wide uppercase text-[#ff9f1c] font-medium mb-2">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl text-gray-800 dark:text-[#BDB7AF] font-light mb-3">
            Let&apos;s Connect
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#B1AAA0] max-w-[600px] sm:max-w-[700px]">
            I&apos;m currently looking for new opportunities in game development.
            <br className="hidden sm:block" />
            Whether you have a question, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Info Card */}
          <div className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl p-6 border dark:border-[#363B3D] lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-medium text-gray-800 dark:text-[#BDB7AF] mb-2">
                  Léo Séry
                </h2>
                <p className="text-gray-600 dark:text-[#B1AAA0] mb-3">
                  Junior Game Programmer
                </p>
                <div className="flex items-center text-gray-600 dark:text-[#B1AAA0] text-sm">
                  <HiLocationMarker className="mr-2 text-[#ff9f1c]" />
                  <span>Bordeaux, France</span>
                </div>
              </div>
              <Link
                href="/cv"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                         bg-gray-100 dark:bg-[#2C2C2C] 
                         text-gray-700 dark:text-[#BDB7AF]
                         transition-all duration-300 group w-full sm:w-auto justify-center
                         hover:text-[#ff9f1c]"
              >
                <HiDocumentText className="text-lg group-hover:text-[#ff9f1c] transition-colors" />
                <span className="font-medium text-sm">View CV</span>
              </Link>
            </div>
          </div>

          {/* Email Section */}
          <div className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl p-6 border dark:border-[#363B3D]">
            <div className="flex items-center gap-3 mb-4">
              <HiMail className="text-2xl text-[#ff9f1c]" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-[#BDB7AF]">
                Email
              </h3>
            </div>
            
            <div className="bg-gray-100 dark:bg-[#2C2C2C] rounded-lg p-4 mb-4 border dark:border-[#363B3D]">
              <p className="font-mono text-gray-800 dark:text-[#BDB7AF] break-all">
                {email}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${email}`}
                className="flex-1 py-3 px-4 rounded-lg font-medium text-center
                         bg-gray-700 dark:bg-[#2C2C2C] 
                         text-white dark:text-[#BDB7AF]
                         hover:text-[#ff9f1c]
                         transition-all duration-300"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="sm:w-auto py-3 px-6 rounded-lg font-medium
                         bg-gray-100 dark:bg-[#2C2C2C]
                         text-gray-700 dark:text-[#BDB7AF]
                         hover:text-[#ff9f1c]
                         transition-all duration-300"
              >
                {emailCopied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl p-6 border dark:border-[#363B3D]">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-[#BDB7AF] mb-4">
              Connect Online
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 p-4 rounded-lg
                             bg-gray-100 dark:bg-[#2C2C2C]
                             border border-gray-200 dark:border-[#363B3D]
                             transition-all duration-300"
                  >
                    <Icon className={`text-2xl text-gray-600 dark:text-[#B1AAA0] 
                                   transition-colors ${social.hoverIconColor}`} />
                    <span className={`text-xs font-medium text-gray-700 dark:text-[#BDB7AF] 
                                  transition-colors ${social.hoverIconColor}`}>
                      {social.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;