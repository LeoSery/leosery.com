import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#ff9f1c]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../assets/Test_Image.png"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Léo Séry</h2>
                <p>Game programming student</p>
                <p className="py-4">
                  Contact me for any questions, suggestions or to work together
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-around py-4">
                  <Link href="https://www.linkedin.com/in/leosery/">
                    <div className="rounded-[20px] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-blue-600 ease-in duration-300">
                      <FaLinkedin />
                    </div>
                  </Link>
                  <Link href="https://github.com/LeoSery">
                    <div className="rounded-[20px] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-blue-600 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="7"
                  ></textarea>
                </div>
                <button className="w-full p-4 bg-blue-600 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:hidden py-12">
          <Link href="/Contact">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#ff9f1c]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
