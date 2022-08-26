import { useRouter } from "next/router";
import React from "react";

export default function About() {
  const router = useRouter();

  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-end py-20 mb-32">
        <div className="max-w-[1500px] md:grid grid-cols-3 gap-8 m-left ml-5 mr-5 mb-2">
          <div id="home/about" className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#ff9f1c]">
              About me
            </p>
            <h2 className="py-4 text-gray-700">Who I Am</h2>
            <p className="text-justify text-gray-600">
              I am Léo Séry, I discovered computer science very young and I
              quickly knew that it was the field towards which I wanted to go.
              The development sector caught my attention during my childhood. A
              family environment and more particularly uncles working in the
              field of video games have allowed me for several years to
              consolidate my choice of orientation. It is obvious that I
              continue my studies in the development&apos;s ground.
            </p>
            <div className="flex justify-center space-x-10 py-3">
              <button
                onClick={() => router.push("/Projects")}
                className="cursor-pointer bg-blue-600 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 px-3 py-2 hover:bg-[#ff9f1c] rounded-md text-sm font-medium text-justify"
              >
                Check out my projects
              </button>
              <button
                onClick={() => router.push("/CV")}
                className="cursor-pointer bg-blue-600 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 px-3 py-2 hover:bg-[#ff9f1c] rounded-md text-sm font-medium text-justify"
              >
                Check out my CV
              </button>
            </div>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
            <img
              className="rounded-md"
              src="/../assets/images/Home/About-me-image.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
