import React from "react";
import { projectsData } from "./ProjectsData";
import ProjectItem from "./ProjectItem";

export default function Main() {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1240px] mx-auto px-12 py-16 w-full h-full">
        <p className="text-xl tracking-widest uppercase text-[#ff9f1c]">
          Projects
        </p>
        <h2 className="py-4 text-gray-700 dark:text-[#BDB7AF]">
          What I&apos;ve Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectItem
              key={project.Id}
              title={project.Title}
              backgroundImg={project.CardImage}
              technos={project.Technologies}
              projectUrl={project.Url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
