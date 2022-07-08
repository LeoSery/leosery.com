import React, {useState} from 'react'
import Link from 'next/link';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] md:grid grid-cols-3 gap-8 m-left ml-5 mr-5 mt-2 mb-2">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#ff9f1c]">About me</p>
            <h2 className="py-4 text-gray-700">Who I Am</h2>
            <p className="text-justify text-gray-600">
              I am Léo Séry, I discovered computer science very young and I quickly knew that it was the field towards which
              I wanted to go. The field of development has interested me since I was little. A family environment and more 
              particularly uncles working in the field of video games have allowed me for several years to consolidate my choice
              of orientation. It is naturally that I continue my studies in the field of development.
            </p>
            <div className="md:grid grid-cols-2 m-left">
              <div className="col-span-2">
                <nav className="shadow-sm sticky bg-white top-0 w-auto z-10">
                  <div className="w-auto">
                    <div className="flex items-center h-auto w-full">
                      <div className="flex items items-center mx-20 justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <Link
                            href="/CV"
                            activeClass="cv"
                            to="cv"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium">
                              Check out my Curriculum vitae
                          </Link>
                          <Link
                            href="/Projects"
                            activeClass="projects"
                            to="projects"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-blue-600 text-[#312f2f] hover:shadow-lg hover:shadow-[#312f2f] hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium">
                              Check out my Projects
                          </Link>
                        </div>
                      </div>
                    </div>  
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )}

export default About