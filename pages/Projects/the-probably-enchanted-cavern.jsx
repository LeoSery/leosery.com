import ProjectImg from "/public/assets/images/projects/TheProbablyEnchantedCavern.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function earthSaver() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-9" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ProjectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">The Probably Enchanted Cavern</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#ff9f1c]">
            Project
          </p>
          <h2 className="py-2 text-gray-700 dark:text-[#BDB7AF]">Overview</h2>
          <p className="text-justify py-2 text-gray-600 dark:text-[#B1AAA0]">
            You play as a spirit named Goutie whose goal is to cross an probably
            enchanted cave. To help her in her quest, she will be able to use
            different power orbs: the Fire, Ice and Poison orb. Each of these
            orbs gives her a specific power to continue progressing through the
            level. But be careful, each power orb brings its counterpart. Make
            the best use of the available powers to reach the end of the level
            as quickly as possible. Find the power orbs to acquire new skills
            and allow Goutie to overcome the obstacles to reach the end of the
            level.
          </p>
          <a
            href="https://github.com/LeoSery/TheProbablyEnchantedCavern--UnrealEngine5-2023"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex text-2xl">
              <button className="px-8 py-2 mt-4 mr-8 cursor-pointer bg-blue-600 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 hover:bg-[#ff9f1c] rounded-md text-sm font-medium capitalize">
                <p>View on GitHub</p>
              </button>
            </div>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl dark:bg-[#1E1E1E] shadow-gray-400 dark:shadow-gray-800 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-[#BDB7AF]">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-800 py-2 flex items-center dark:text-[#B1AAA0]">
                <RiRadioButtonFill className="pr-1" /> C++
              </p>
              <p className="text-gray-800 py-2 flex items-center dark:text-[#B1AAA0]">
                <RiRadioButtonFill className="pr-1" /> C#
              </p>
              <p className="text-gray-800 py-2 flex items-center dark:text-[#B1AAA0]">
                <RiRadioButtonFill className="pr-1" /> Unreal Engine 5
              </p>
              <p className="text-gray-800 py-2 flex items-center dark:text-[#B1AAA0]">
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
