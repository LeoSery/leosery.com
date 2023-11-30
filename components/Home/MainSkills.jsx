import VisualStudio from "../../public/assets/images/Home/skills/visual-studio.png";
import UnityLogo from "../../public/assets/images/Home/skills/unity.png";
import CSharp from "../../public/assets/images/Home/skills/c-sharp.png";
import GitHub from "../../public/assets/images/Home/skills/github.png";
import cpluplus from "../../public/assets/images/Home/skills/c-plusplus.png";
import unreal5 from "../../public/assets/images/Home/skills/Unreal-engine-5.png";
import plastic from "../../public/assets/images/Home/skills/plastic-scm.png";
import rider from "../../public/assets/images/Home/skills/rider.png";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

export default function MainSkills() {
  const router = useRouter();

  return (
    <>
      <div className="w-full lg:h-15 p-2 pb-32">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#ff9f1c] text-center">
            Some of my skills
          </p>
          <h2 className="py-4 text-gray-700 dark:text-[#BDB7AF] text-center">
            What I Can Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="dark:bg-[#1E1E1E] p-6 shadow-xl dark:shadow-lg dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={UnityLogo} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Unity3D</h3>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1E1E1E] p-6 shadow-xl dark:shadow-lg dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={CSharp} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>C-Sharp</h3>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1E1E1E] p-6 shadow-xl dark:shadow-lg dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={plastic}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Plastic SCM</h3>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1E1E1E] p-6 shadow-xl dark:shadow-lg dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={VisualStudio}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Visual Studio</h3>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1E1E1E] p-6 shadow-xl dark:shadow-lg dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={unreal5}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Unreal Engine</h3>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1E1E1E] p-6 shadow-xl dark:shadow-lg dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={cpluplus}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>C++</h3>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1E1E1E] p-6 shadow-xl dark:shadow-lg dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={GitHub} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GitHub</h3>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1E1E1E] p-6 shadow-xl dark:shadow-lg dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={rider}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Rider</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4 pt-6">
          <button
            onClick={() => router.push("/CV")}
            className="cursor-pointer bg-blue-600 dark:bg-blue-800 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 px-3 py-2 hover:bg-[#ff9f1c] rounded-md text-sm font-medium text-justify"
          >
            Check out all my skills
          </button>
        </div>
      </div>
    </>
  );
}
