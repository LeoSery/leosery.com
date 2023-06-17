import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, technos, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-full w-full dark:bg-[#1E1E1E] shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff9f1c] aspect-video">
      <div
        className="relative w-full h-full">
        <Image
          className="relative rounded-xl group-hover:opacity-30"
          src={backgroundImg}
          layout="fill"
          objectFit='cover'
          alt="/"
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#312f2f] dark:text-[#BDB7AF] tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-[#312f2f] dark:text-[#B1AAA0] text-center">
          {technos}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white dark:bg-[#2C2C2C] hover:bg-blue-600 text-gray-700 dark:text-[#BDB7AF] dark:hover:text-white hover:text-white hover:scale-105 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
