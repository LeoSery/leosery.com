import ProjectImg from "/public/assets/projects/PongGame.png";
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
          <h2 className="py-2">Pong on an STM32</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#ff9f1c]">
            Project
          </p>
          <h2 className="py-2 text-gray-700">Overview</h2>
          <p className="text-justify py-2 text-gray-600">
            Game made during my bachelor year 2 (2021/2022) for an IOT course at
            Ynov. The goal of the project was to create an application that
            could be controlled from an STM32 programmable card. So I decided to
            make a Pong game, controllable with 2 joysticks. on the card a
            script written in C makes it possible to recover the values returned
            by the joysticks and the game is made under Unity3D with C# which
            reads the values of the joysticks to move the paddles
          </p>
          <a
            href="https://github.com/LeoSery/Pong-Game-on-an-STM32"
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
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> C#
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> C
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> STM32 Card
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Unity3D
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CubeMX
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Visual Studio
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Eclipse IDE
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
