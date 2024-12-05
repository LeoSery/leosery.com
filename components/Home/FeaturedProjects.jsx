import { projectsData } from "../Projects/ProjectsData";
import ProjectItem from "../Projects/ProjectItem";
import { useRouter } from "next/router";
import React from "react";

export default function FeaturedProjects() {
  const router = useRouter();
  
  // On prend les deux projets les plus récents
  const featuredProjects = projectsData
    .sort((a, b) => new Date(b.Period.start) - new Date(a.Period.start))
    .slice(0, 2);

  return (
    <div className="w-full py-12">
      <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-[#BDB7AF] font-light mb-2">
              Recent Work
            </h2>
            <p className="text-sm text-gray-600 dark:text-[#B1AAA0]">
              My latest game development projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectItem
                key={project.Id}
                title={project.Title}
                backgroundImg={project.CardImage}
                technologies={project.Technologies}
                projectUrl={project.Url}
                description={project.Description}
                type={project.Type}
                period={project.Period}
                myRoles={project.MyRoles}
                collaborators={project.Collaborators}
              />
            ))}
          </div>

          {/* View All Button */}
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