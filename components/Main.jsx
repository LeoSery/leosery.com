import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Main() {
  return (
    <div className="w-full pt-20 text-center">
        <div className="max-w[1240px] w-full mx-auto p-2 flex justify-center items-center">
            <div>
                <h1>
                  Hi, I'm<span className="text-[#ff9f1c] cursor-auto"> Léo</span>
                </h1>
                <h2 className="py-4 text-gray-700 max-w-[70%] m-auto cursor-auto">
                  A student in Game programming 
                </h2>
                <p className="py-4 text-gray-600 max-w-[62%] m-auto text-justify cursor-auto">
                  I am a 3rd year game programming student at Ynov Informatique Ingésup, located in Bordeaux, France.
                  I am passionate about the development of video games, more particularly by Virtual reality and the metaverse. I like object languages such as C# and C++,
                  in my free time I develop games on Unity3D.
                </p>
                <p className="text-gray-600 max-w-[70%] m-auto text-center cursor-auto">
                  I am currently looking for an apprenticeship in the field of development.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-[20px] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin/>
                  </div>
                  <div className="rounded-[20px] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub/>
                  </div>
                  <div className="rounded-[20px] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail/>
                  </div>
                  <div className="rounded-[20px] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main