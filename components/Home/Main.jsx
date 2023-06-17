import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <div className="w-full pt-20 text-center mt-20">
      <div className="max-w[1240px] w-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="text-black dark:text-white">
            Hi, I&apos;m
            <span className="text-[#ff9f1c] dark:text-[#FFA62D] cursor-auto">
              {" "}
              Léo
            </span>
          </h1>
          <h2 className="py-4 text-gray-700 dark:text-[#BDB7AF] max-w-[70%] m-auto cursor-auto">
            A student in Game programming
          </h2>
          <p className="py-4 text-gray-600 dark:text-[#B1AAA0] max-w-[62%] m-auto text-justify cursor-auto">
            I am a 4rd year game programming student at Ynov Informatique
            Ingésup, located in Bordeaux, France. i am fond of development of
            video games, especialy by Virtual reality. I like object languages
            such as C# and C++, i develop games on Unity3D as a hobby.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/leosery/">
              <div className="rounded-[20px] shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-800 dark:bg-[#1E1E1E] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin className="text-black dark:text-white" />
              </div>
            </Link>
            <Link href="https://github.com/LeoSery">
              <div className="rounded-[20px] shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-800 dark:bg-[#1E1E1E] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-black dark:text-white" />
              </div>
            </Link>
            <Link href="/Contact">
              <div className="rounded-[20px] shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-800 dark:bg-[#1E1E1E] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-black dark:text-white" />
              </div>
            </Link>
            <Link href="#home/about">
              <div className="rounded-[20px] shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-800 dark:bg-[#1E1E1E] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill className="text-black dark:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
