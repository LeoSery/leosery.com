import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <>
      <div className="bg-white w-full sticky flex md:flex-row flex-col justify-evenly items-start px-5 py-2 dark:bg-[#202020]">
        <div className="self-center">
          <p className="text-gray-800 dark:text-white font-bold text-3xl">
            Léo<span className="text-blue-600"> Séry</span>
          </p>
        </div>
        <div>
          <p className="text-gray-800 dark:text-[#BDB7AF] font-bold text-3xl pb-6">
            Contact me
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start space-x-3">
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600"></FaLinkedin>
              <Link
                href="https://www.linkedin.com/in/leosery/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-500 dark:text-[#B1AAA0] text-md pb-2 font-semibold hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer">
                  leosery
                </p>
              </Link>
            </div>
            <div className="flex justify-start space-x-3">
              <IoIosMail className="text-2xl cursor-pointer hover:text-blue-600"></IoIosMail>
              <Link
                href="mailto:leo.sery@ynov.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-500 dark:text-[#B1AAA0] text-md pb-2 font-semibold hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer">
                  leo.sery@ynov.com
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-800 dark:text-[#BDB7AF] font-bold text-3xl pb-6">
            My school
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start space-x-3">
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600"></FaLinkedin>
              <Link
                href="https://www.linkedin.com/school/bordeaux-ynov-campus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-500 dark:text-[#B1AAA0] text-md pb-2 font-semibold hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer">
                  Ynov Bordeaux
                </p>
              </Link>
            </div>
            <div className="flex justify-start space-x-3">
              <CgWebsite className="text-2xl cursor-pointer hover:text-blue-600"></CgWebsite>
              <Link
                href="https://ynov-bordeaux.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-500 dark:text-[#B1AAA0] text-md pb-2 font-semibold hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer">
                  ynov-bordeaux.com
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* <div>
          <p className="text-gray-800 dark:text-[#BDB7AF] font-bold text-3xl pb-6">
            My work-study company
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start space-x-3">
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600"></FaLinkedin>
              <Link
                href="https://www.linkedin.com/company/yzar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-500 dark:text-[#B1AAA0] text-md pb-2 font-semibold hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer">
                  YZAR
                </p>
              </Link>
            </div>
            <div className="flex justify-start space-x-3">
              <CgWebsite className="text-2xl cursor-pointer hover:text-blue-600"></CgWebsite>
              <Link
                href="https://yzar.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-500 dark:text-[#B1AAA0] text-md pb-2 font-semibold hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer">
                  yzar.fr
                </p>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
