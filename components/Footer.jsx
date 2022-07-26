import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import React from "react";

function footer() {
  return (
    <>
      <div className="bg-gray-50 w-full flex md:flex-row flex-col justify-evenly items-start px-5 py-2">
        <div className="self-center">
          <p className="text-gray-800 font-bold text-3xl">
            Léo<span className="text-blue-600"> Séry</span>
          </p>
        </div>
        <div>
          <p className="text-gray-800 font-bold text-3xl pb-6">Contact me</p>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start space-x-3">
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600"></FaLinkedin>
              <Link href="https://www.linkedin.com/in/leosery/">
                <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                  leosery
                </p>
              </Link>
            </div>
            <div className="flex justify-start space-x-3">
              <IoIosMail className="text-2xl cursor-pointer hover:text-blue-600"></IoIosMail>
              <Link href="mailto:leo.sery@ynov.com">
                <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                  leo.sery@ynov.com
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
