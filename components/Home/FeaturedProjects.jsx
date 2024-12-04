import { projectsData } from "../Projects/ProjectsData";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

export default function FeaturedProjects() {
  const router = useRouter();
  
  // On prend les deux premiers projets
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="w-full py-12">
      <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-[#BDB7AF] font-light mb-2">
            Recent Work
            </h2>
            <p className="text-sm text-gray-600 dark:text-[#B1AAA0]">
            My latest game development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.Id}
                className="bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-sm
                         hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => router.push(project.Url)}
              >
                <div className="relative w-full pb-[56.25%]">
                  <Image
                    src={project.CardImage}
                    alt={project.Title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-[#CAC5BE] mb-2">
                    {project.Title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-[#B1AAA0] mb-3">
                    {project.Description.split('.')[0]}.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.Technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#2C2C2C] text-gray-600 dark:text-[#B1AAA0] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => router.push("/Projects")}
              className="px-6 py-2.5 bg-blue-600 dark:bg-blue-800 text-white rounded-lg text-sm font-medium
                       hover:bg-[#ff9f1c] transition-all duration-200 hover:shadow-md
                       hover:scale-105"
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}