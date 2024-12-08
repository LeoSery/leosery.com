import React, { useState, useMemo } from "react";
import { projectsData } from "./ProjectsData";
import ProjectItem from "./ProjectItem";
import ScrollToTop from "../Common/ScrollToTop";

export default function Main() {
  const [viewMode, setViewMode] = useState("default");
  const [selectedTechnos, setSelectedTechnos] = useState(new Set());
  const [timelineOrder, setTimelineOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");

  const projectYears = useMemo(() => {
    return [...new Set(projectsData.map(project => 
      new Date(project.Period.start).getFullYear()
    ))];
  }, []);

  const allTechnologies = useMemo(() => {
    return [...new Set(projectsData.flatMap(project => project.Technologies))];
  }, []);

  const filteredAndGroupedProjects = useMemo(() => {
    let filtered = projectsData.filter(project =>
      project.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.Keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (viewMode === "default") {
      return filtered;
    }

    if (viewMode === "timeline") {
      const byYear = filtered.reduce((acc, project) => {
        const year = new Date(project.Period.start).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(project);
        return acc;
      }, {});

      const sortedYears = Object.keys(byYear).sort((a, b) => 
        timelineOrder === "desc" ? b - a : a - b
      );

      return {
        groups: sortedYears.map(year => ({
          title: year,
          projects: byYear[year]
        }))
      };
    }

    if (viewMode === "tech") {
      if (selectedTechnos.size === 0) {
        return {
          groups: allTechnologies.map(tech => ({
            title: tech,
            projects: filtered.filter(project => 
              project.Technologies.includes(tech)
            )
          })).filter(group => group.projects.length > 0)
        };
      }

      return {
        groups: Array.from(selectedTechnos).map(tech => ({
          title: tech,
          projects: filtered.filter(project => 
            project.Technologies.includes(tech)
          )
        })).filter(group => group.projects.length > 0)
      };
    }

    return filtered;
  }, [viewMode, searchTerm, selectedTechnos, timelineOrder, allTechnologies]);

  const handleTechToggle = (tech) => {
    const newSelected = new Set(selectedTechnos);
    if (newSelected.has(tech)) {
      newSelected.delete(tech);
    } else {
      newSelected.add(tech);
    }
    setSelectedTechnos(newSelected);
  };

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

        {/* Controls */}
        <div className="mb-12 space-y-8">
          {/* Search Bar */}
          <div className="relative w-full max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search projects"
              role="searchbox"
              className="w-full px-5 py-3 text-base rounded-xl border-2 dark:border-gray-700 
                       bg-gray-50 dark:bg-[#2C2C2C] text-gray-700 dark:text-gray-200 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       placeholder-gray-400 dark:placeholder-gray-500 shadow"
            />
          </div>

          {/* View Mode Selection */}
          <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl shadow mx-4 sm:mx-0">
            <div className="p-4 sm:p-5 space-y-4">
              <h3 className="text-base font-medium text-gray-700 dark:text-gray-200">
                View Projects By
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    setViewMode("default");
                    setSelectedTechnos(new Set());
                  }}
                  aria-pressed={viewMode === "default"}
                  aria-label="View all projects"
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-medium 
                            transition-all duration-200 ${
                              viewMode === "default"
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-50 dark:bg-[#2C2C2C] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#363B3D]'
                            }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => {
                    setViewMode("timeline");
                    setSelectedTechnos(new Set());
                  }}
                  aria-pressed={viewMode === "timeline"}
                  aria-label="View projects by year"
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-medium 
                            transition-all duration-200 ${
                              viewMode === "timeline"
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-50 dark:bg-[#2C2C2C] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#363B3D]'
                            }`}
                >
                  By Year
                </button>
                <button
                  onClick={() => {
                    setViewMode("tech");
                    setTimelineOrder("desc");
                  }}
                  aria-pressed={viewMode === "tech"}
                  aria-label="View projects by technology"
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-medium 
                            transition-all duration-200 ${
                              viewMode === "tech"
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-50 dark:bg-[#2C2C2C] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#363B3D]'
                            }`}
                >
                  By Technology
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {(viewMode === "timeline" || viewMode === "tech") && (
              <>
                <div className="h-px bg-gray-200 dark:bg-gray-800" />
                <div className="p-4 sm:p-5 bg-gray-50 dark:bg-[#161616] rounded-b-xl">
                  <div className="ml-4 sm:ml-6">
                    {viewMode === "timeline" && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Sort Timeline
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          <button
                            onClick={() => setTimelineOrder("desc")}
                            aria-pressed={timelineOrder === "desc"}
                            className={`px-4 sm:px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                      ${timelineOrder === "desc"
                                        ? 'bg-[#ff9f1c] text-white shadow'
                                        : 'bg-gray-50 dark:bg-[#2C2C2C] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#363B3D]'
                                      }`}
                          >
                            Newest First
                          </button>
                          <button
                            onClick={() => setTimelineOrder("asc")}
                            aria-pressed={timelineOrder === "asc"}
                            className={`px-4 sm:px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                      ${timelineOrder === "asc"
                                        ? 'bg-[#ff9f1c] text-white shadow'
                                        : 'bg-gray-50 dark:bg-[#2C2C2C] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#363B3D]'
                                      }`}
                          >
                            Oldest First
                          </button>
                        </div>
                      </div>
                    )}

                    {viewMode === "tech" && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Select Technologies{' '}
                          {selectedTechnos.size > 0 && 
                            `(${filteredAndGroupedProjects.groups?.reduce((acc, group) => acc + group.projects.length, 0) || 0} of ${projectsData.length} projects)`
                          }
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {allTechnologies.map((tech) => (
                            <button
                              key={tech}
                              onClick={() => handleTechToggle(tech)}
                              aria-pressed={selectedTechnos.has(tech)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                        ${selectedTechnos.has(tech)
                                          ? 'bg-[#ff9f1c] text-white shadow'
                                          : 'bg-gray-50 dark:bg-[#2C2C2C] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#363B3D]'
                                        }`}
                            >
                              {tech}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Projects Display */}
        <div className="w-full transition-all duration-300">
          {viewMode === "default" && Array.isArray(filteredAndGroupedProjects) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
              {filteredAndGroupedProjects.map((project) => (
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
          )}

          {viewMode !== "default" && filteredAndGroupedProjects.groups && (
            <div className="space-y-12">
              {filteredAndGroupedProjects.groups.map(group => (
                <div key={group.title} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-700 dark:text-[#CAC5BE] border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
                    {group.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
                    {group.projects.map((project) => (
                      <ProjectItem
                        key={`${group.title}-${project.Id}`}
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
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {(viewMode === "default" ? 
          !filteredAndGroupedProjects?.length : 
          !filteredAndGroupedProjects?.groups?.length) && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
      <ScrollToTop />
    </div>
  );
}