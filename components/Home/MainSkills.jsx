import VisualStudio from "../../public/assets/images/Home/skills/visual-studio.png";
import UnityLogo from "../../public/assets/images/Home/skills/unity.png";
import CSharp from "../../public/assets/images/Home/skills/c-sharp.png";
import GitHub from "../../public/assets/images/Home/skills/github.png";
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
          <h2 className="py-4 text-gray-700 text-center">What I Can Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={UnityLogo} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Unity3D</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={CSharp} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>C-Sharp</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={GitHub} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GitHub</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
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
          </div>
        </div>
        <div className="flex justify-center py-4">
          <button
            onClick={() => router.push("/CV")}
            className="cursor-pointer bg-blue-600 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 px-3 py-2 hover:bg-[#ff9f1c] rounded-md text-sm font-medium text-justify"
          >
            Check out all my skills
          </button>
        </div>
      </div>
    </>
  );
}
