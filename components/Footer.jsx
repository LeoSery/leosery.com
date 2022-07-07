import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'

function footer() {
  return (
    <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
            <ul>
                <p className="text-gray-800 font-bold text-3xl pb-6">
                    Léo<span className="text-blue-600"> Séry</span>
                </p>
            </ul>
        </div>
            <div className="p-5">
                <ul>
                    <p className="text-gray-800 font-bold text-3xl pb-6">Contact me</p>
                    <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600"></FaLinkedin>
                            leosery
                    </li>
                    <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <IoIosMail className="text-2xl cursor-pointer hover:text-blue-600"></IoIosMail>
                            leo.sery@ynov.com
                    </li>
                </ul>
            </div>
            <div className="p-5">
                <ul>
                    <p className="text-gray-800 font-bold text-3xl pb-6">Look my work</p>
                    <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <FaGithub className="text-2xl cursor-pointer hover:text-blue-600"></FaGithub>
                            LeoSery
                    </li>
                </ul>
            </div>
    </div>
    // <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
    //     <h1 className="text-gray-800 font-semibold">2021-2022 - Made by Léo Séry.</h1>
    // </div>
    );
}

export default footer
