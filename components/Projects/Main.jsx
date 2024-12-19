import React, { useMemo } from "react";
import { projectsData } from "./ProjectsData";
import ProjectItem from "./ProjectItem";
import ScrollToTop from "../Common/ScrollToTop";

export default function Main() {
  const sortedProjects = useMemo(() => {
    return [...projectsData].sort((a, b) => 
      new Date(b.Period.start) - new Date(a.Period.start)
    );
  }, []);

  return (
    <div className="w-full min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-700 dark:text-white mb-4">
            My <span className="text-[#ff9f1c]">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-[#B1AAA0] max-w-2xl mx-auto">
            A collection of my game development projects, ranging from game engines to complete games,
            showcasing my expertise in various technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sortedProjects.map((project) => (
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
      </div>
      <ScrollToTop />
    </div>
  );
}