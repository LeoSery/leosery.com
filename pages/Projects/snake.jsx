import ProjectImg from "/public/assets/images/projects/SnakeGame.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function flightSimulator() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-20" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ProjectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">Snake</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#ff9f1c]">
            Project
          </p>
          <h2 className="py-2 text-gray-700 dark:text-[#BDB7AF]">Overview</h2>
          <p className="text-justify py-2 text-gray-600 dark:text-[#B1AAA0]">
            Game made during the YDAYS Ynov of 2021-2022. This game was made for
            my end-of-year project to show what I was able to learn in C++
            during this course. it was made with the help of Qt. You can move
            the snake to eat the fruits that will appear randomly on the game
            grid, if you eat a fruit, the counter increases but if you eat
            yourself you lose.
          </p>
          <a
            href="https://github.com/LeoSery/SnakeGame--Qt-2022"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex text-2xl">
              <button className="px-8 py-2 mt-4 mr-8 cursor-pointer bg-blue-600 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 hover:bg-[#ff9f1c] rounded-md text-sm font-medium capitalize">
                <p>View on GitHub</p>
              </button>
            </div>
          </a>
          {/* <a href="" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Download</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl dark:bg-[#1E1E1E] shadow-gray-400 dark:shadow-gray-800 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-800 py-2 flex items-center dark:text-[#BDB7AF]">
                <RiRadioButtonFill className="pr-1" /> C++
              </p>
              <p className="text-gray-800 py-2 flex items-center dark:text-[#BDB7AF]">
                <RiRadioButtonFill className="pr-1" /> Qt
              </p>
              <p className="text-gray-800 py-2 flex items-center dark:text-[#BDB7AF]">
                <RiRadioButtonFill className="pr-1" /> Visual Studio
              </p>
            </div>
          </div>
        </div>
        <Link href="/Projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
