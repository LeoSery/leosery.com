import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import LoadingSkeleton from 'components/Common/LoadingSkeleton';
import Spinner from 'components/Common/Spinner';

const Contact = () => {
  const [contactImageLoaded, setContactImageLoaded] = useState(false);

  useEffect(() => {
    document.getElementById("contactForm")?.reset();
  }, []);

  return (
    <div className="w-full py-6">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left mb-6">
          <p className="text-xl tracking-wide uppercase text-[#ff9f1c] font-medium">Contact</p>
          <h2 className="py-2 text-3xl text-gray-600 dark:text-[#BDB7AF] font-light">Get In Touch</h2>
          <p className="text-gray-600 dark:text-[#B1AAA0] max-w-[600px]">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Info Panel */}
          <div className="col-span-5 lg:col-span-2 h-full">
            <div className="h-full bg-gray-50 dark:bg-[#1E1E1E] rounded-2xl shadow-lg p-5">
              {/* Image */}
              <div className="relative w-full aspect-video mb-5 rounded-xl overflow-hidden">
                {!contactImageLoaded && (
                  <>
                    <LoadingSkeleton variant="rect" className="absolute inset-0 rounded-xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Spinner size="md" />
                    </div>
                  </>
                )}
                <Image
                  src="/assets/images/Contact/Contact-image.webp"
                  alt="Profile"
                  fill
                  className={`object-cover transition-transform duration-300 hover:scale-105 ${
                    contactImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setContactImageLoaded(true)}
                />
              </div>

              {/* Info */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-medium text-gray-700 dark:text-[#BDB7AF]">Léo Séry</h3>
                  <p className="text-gray-600 dark:text-[#B1AAA0]">Game Programming Student</p>
                </div>

                <div>
                  <div className="flex items-center space-x-3">
                    <HiMail className="text-xl text-gray-600 dark:text-[#B1AAA0]" />
                    <span className="text-gray-600 dark:text-[#B1AAA0]">leo.sery@ynov.com</span>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <p className="text-gray-700 dark:text-[#BDB7AF] font-medium mb-3">Connect With Me</p>
                  <div className="flex items-center space-x-3">
                    <Link 
                      href="https://www.linkedin.com/in/leosery/"
                      className="p-2.5 bg-gray-50 dark:bg-[#2C2C2C] rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="text-xl text-gray-600 dark:text-[#B1AAA0] group-hover:text-white" />
                    </Link>
                    <Link 
                      href="https://github.com/LeoSery"
                      className="p-2.5 bg-gray-50 dark:bg-[#2C2C2C] rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="text-xl text-gray-600 dark:text-[#B1AAA0] group-hover:text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-5 lg:col-span-3 h-full">
            <div className="h-full bg-gray-50 dark:bg-[#1E1E1E] rounded-2xl shadow-lg p-5">
              <form
                id="contactForm"
                method="POST"
                action="https://getform.io/f/48553dcc-187b-402d-bb91-6202bf37afa1"
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-medium text-gray-600 dark:text-[#BDB7AF] after:content-['*'] after:ml-0.5 after:text-red-500">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg border dark:border-[#363B3D] bg-transparent
                               focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
                               text-gray-700 dark:text-[#BDB7AF]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-medium text-gray-600 dark:text-[#BDB7AF]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2 rounded-lg border dark:border-[#363B3D] bg-transparent
                               focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
                               text-gray-700 dark:text-[#BDB7AF]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-medium text-gray-600 dark:text-[#BDB7AF] after:content-['*'] after:ml-0.5 after:text-red-500">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:border-[#363B3D] bg-transparent
                             focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
                             text-gray-700 dark:text-[#BDB7AF]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-medium text-gray-600 dark:text-[#BDB7AF] after:content-['*'] after:ml-0.5 after:text-red-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:border-[#363B3D] bg-transparent
                             focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
                             text-gray-700 dark:text-[#BDB7AF]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-medium text-gray-600 dark:text-[#BDB7AF] after:content-['*'] after:ml-0.5 after:text-red-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg border dark:border-[#363B3D] bg-transparent
                             focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
                             text-gray-700 dark:text-[#BDB7AF] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium
                             hover:bg-[#ff9f1c] transition-all duration-300 
                             hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-center text-gray-500 dark:text-[#918E8A] mt-2">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;