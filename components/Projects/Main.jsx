import React, { useMemo, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { projectsData } from "./ProjectsData";
import ProjectItem from "./ProjectItem";
import ScrollToTop from "../Common/ScrollToTop";
import { FiX, FiSliders } from "react-icons/fi";

const TYPES = [
  { value: "professional", label: "Professional" },
  { value: "personal", label: "Personal" },
  { value: "school", label: "School" },
  { value: "gamejam", label: "Game jam" },
];

const YEARS = ["2026", "2025", "2024", "2023", "2022", "2021", "2019"];

const TOP_TECHS = [
  "C++", "C#", "Unity3D", "Unreal Engine 5",
  "OpenGL", "Vulkan",
];

const SELECTIONS = {
  "real-time-xr-applications":  { label: "Real-Time & XR Applications", ids: [8, 10, 12, 22, 23] },
  "low-level-performance":      { label: "Low-Level & Performance",      ids: [14, 15, 19, 20, 25, 26] },
  "gameplay-systems":           { label: "Gameplay & Systems",            ids: [13, 16, 17, 18, 20, 21, 24] },
  "engine-tools-programming":   { label: "Engine & Tools Programming",   ids: [8, 10, 15, 19, 25, 26] },
};

function projectMatchesYear(project, year) {
  const y = parseInt(year);
  const start = parseInt(project.Period.start?.slice(0, 4));
  const end = project.Period.end ? parseInt(project.Period.end.slice(0, 4)) : new Date().getFullYear();
  return start <= y && y <= end;
}

function FilterSection({ label, activeLabel, children, clickable = false, activeKey, expandedKey, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const leaveTimer = React.useRef(null);

  const isExpanded = clickable ? expandedKey === activeKey : hovered;

  const handleEnter = () => {
    if (clickable) return;
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHovered(true);
  };

  const handleLeave = () => {
    if (clickable) return;
    leaveTimer.current = setTimeout(() => setHovered(false), 120);
  };

  const handleClick = () => {
    if (!clickable) return;
    onToggle(activeKey);
  };

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div
        className={`flex items-baseline gap-1.5 px-2 py-2 ${clickable ? "cursor-pointer select-none" : "cursor-default"}`}
        onClick={handleClick}
      >
        <span className="text-[11px] uppercase tracking-[0.1em] font-medium text-gray-500 dark:text-[#8f8a82]">
          {label}
        </span>
        {activeLabel && !isExpanded && (
          <span className="text-xs text-[#ff9f1c] font-medium truncate max-w-[80px]">
            {activeLabel}
          </span>
        )}
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col gap-0.5 pb-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Main() {
  const router = useRouter();

  const [activeIds, setActiveIds] = useState(null);
  const [idsLabel, setIdsLabel] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [yearFilter, setYearFilter] = useState(null);
  const [techFilter, setTechFilter] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (key) => {
    setExpandedSection(prev => prev === key ? null : key);
  };

  useEffect(() => {
    if (!router.isReady) return;
    const sel = router.query.selection;
    if (sel && SELECTIONS[sel]) {
      const { label, ids } = SELECTIONS[sel];
      setActiveIds(new Set(ids));
      setIdsLabel(label);
    } else if (sel) {
      router.replace("/projects", undefined, { shallow: true });
      setActiveIds(null);
      setIdsLabel(null);
    } else {
      setActiveIds(null);
      setIdsLabel(null);
    }
  }, [router.isReady, router.query.selection]);

  const sortedProjects = useMemo(() => {
    return [...projectsData].sort((a, b) => {
      if (a.Period.end === null && b.Period.end !== null) return -1;
      if (a.Period.end !== null && b.Period.end === null) return 1;
      return new Date(b.Period.end) - new Date(a.Period.end);
    });
  }, []);

  const filteredProjects = useMemo(() => {
    let result = sortedProjects;
    if (activeIds) result = result.filter((p) => activeIds.has(p.Id));
    if (typeFilter) result = result.filter((p) => p.Type === typeFilter);
    if (yearFilter) result = result.filter((p) => projectMatchesYear(p, yearFilter));
    if (techFilter) result = result.filter((p) => p.Technologies.includes(techFilter));
    return result;
  }, [sortedProjects, activeIds, typeFilter, yearFilter, techFilter]);

  const hasActiveFilter = activeIds || typeFilter || yearFilter || techFilter;

  const clearAll = useCallback(() => {
    router.replace("/projects", undefined, { shallow: true });
    setTypeFilter(null);
    setYearFilter(null);
    setTechFilter(null);
    setActiveIds(null);
    setIdsLabel(null);
  }, [router]);

  const typeCounts = useMemo(() => {
    const counts = {};
    TYPES.forEach(({ value }) => {
      counts[value] = sortedProjects.filter((p) => p.Type === value).length;
    });
    return counts;
  }, [sortedProjects]);

  const typeActiveLabel = typeFilter
    ? TYPES.find((t) => t.value === typeFilter)?.label
    : null;

  const activeChips = [
    activeIds && {
      key: "ids",
      label: idsLabel || "Selection",
      onRemove: clearAll,
    },
    typeFilter && {
      key: "type",
      label: typeActiveLabel,
      onRemove: () => setTypeFilter(null),
    },
    yearFilter && {
      key: "year",
      label: yearFilter,
      onRemove: () => setYearFilter(null),
    },
    techFilter && {
      key: "tech",
      label: techFilter,
      onRemove: () => setTechFilter(null),
    },
  ].filter(Boolean);

  // Rendu inline pour éviter le remontage à chaque render de Main
  const renderFilterPanel = ({ inDrawer = false } = {}) => (
    <div className={`flex flex-col ${inDrawer ? "gap-1" : "gap-0.5"}`}>
      <FilterSection
        label="Type"
        activeLabel={typeActiveLabel}
        clickable={inDrawer}
        activeKey="type"
        expandedKey={expandedSection}
        onToggle={toggleSection}
      >
        <button
          onClick={() => setTypeFilter(null)}
          className={`text-left px-2 py-1.5 rounded-lg text-sm transition-colors ${
            !typeFilter && !activeIds
              ? "bg-[#ff9f1c]/10 text-[#ff9f1c] font-medium"
              : "text-gray-500 dark:text-[#8f8a82] hover:text-gray-800 dark:hover:text-gray-200"
          }`}
        >
          All <span className="text-xs opacity-70">({sortedProjects.length})</span>
        </button>
        {TYPES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setTypeFilter(typeFilter === value ? null : value)}
            className={`text-left px-2 py-1.5 rounded-lg text-sm transition-colors ${
              typeFilter === value
                ? "bg-[#ff9f1c]/10 text-[#ff9f1c] font-medium"
                : "text-gray-500 dark:text-[#8f8a82] hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            {label} <span className="text-xs opacity-70">({typeCounts[value]})</span>
          </button>
        ))}
      </FilterSection>

      <div className="h-px bg-gray-200 dark:bg-[#2a2a2a] my-1" />

      <FilterSection
        label="Year"
        activeLabel={yearFilter}
        clickable={inDrawer}
        activeKey="year"
        expandedKey={expandedSection}
        onToggle={toggleSection}
      >
        {YEARS.map((year) => (
          <button
            key={year}
            onClick={() => setYearFilter(yearFilter === year ? null : year)}
            className={`text-left px-2 py-1.5 rounded-lg text-sm transition-colors ${
              yearFilter === year
                ? "bg-[#ff9f1c]/10 text-[#ff9f1c] font-medium"
                : "text-gray-500 dark:text-[#8f8a82] hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            {year}
          </button>
        ))}
      </FilterSection>

      <div className="h-px bg-gray-200 dark:bg-[#2a2a2a] my-1" />

      <FilterSection
        label="Technology"
        activeLabel={techFilter}
        clickable={inDrawer}
        activeKey="tech"
        expandedKey={expandedSection}
        onToggle={toggleSection}
      >
        {TOP_TECHS.map((tech) => (
          <button
            key={tech}
            onClick={() => setTechFilter(techFilter === tech ? null : tech)}
            className={`text-left px-2 py-1.5 rounded-lg text-sm transition-colors ${
              techFilter === tech
                ? "bg-[#ff9f1c]/10 text-[#ff9f1c] font-medium"
                : "text-gray-500 dark:text-[#8f8a82] hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            {tech}
          </button>
        ))}
      </FilterSection>
    </div>
  );

  return (
    <div className="w-full min-h-screen py-8 px-4 sm:px-6 lg:px-8">

      {/* Panneau latéral fixe desktop */}
      <nav
        className="hidden xl:block fixed z-40 w-44"
        style={{ top: 'calc(var(--navbar-height, 80px) + 80px)', left: '8px' }}
        aria-label="Project filters"
      >
        {renderFilterPanel()}
      </nav>

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

        {/* Bouton Filters mobile */}
        <div className="xl:hidden flex justify-end mb-4">
          <button
            onClick={() => {
              setExpandedSection(null);
              setDrawerOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5
                       text-sm text-gray-600 dark:text-[#BDB7AF] border border-gray-300 dark:border-[#2a2a2a]
                       rounded-lg hover:border-[#ff9f1c] hover:text-[#ff9f1c] transition-colors"
          >
            <FiSliders className="w-4 h-4" />
            Filters
            {hasActiveFilter && (
              <span className="w-2 h-2 rounded-full bg-[#ff9f1c]" />
            )}
          </button>
        </div>

        {/* Bandeau chips actifs */}
        {activeChips.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredProjects.length} of {sortedProjects.length} projects
            </span>
            {activeChips.map(({ key, label, onRemove }) => (
              <button
                key={key}
                onClick={onRemove}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                           bg-[#ff9f1c]/10 text-[#ff9f1c] border border-[#ff9f1c]/30
                           hover:bg-[#ff9f1c]/20 transition-colors"
              >
                {label}
                <FiX className="w-3 h-3" />
              </button>
            ))}
            {activeChips.length > 1 && (
              <button
                onClick={clearAll}
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors underline"
              >
                Clear all
              </button>
            )}
          </div>
        )}

        {/* Grille projets */}
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 dark:text-[#8f8a82] text-lg mb-2">No projects match your current filters.</p>
            <button
              onClick={clearAll}
              className="mt-2 text-sm text-[#ff9f1c] hover:underline transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
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
      </div>

      {/* Drawer mobile */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 xl:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 xl:hidden
                          bg-white dark:bg-[#1A1A1A] rounded-t-2xl
                          border-t border-gray-200 dark:border-[#2a2a2a]
                          max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-[#2a2a2a]">
              <span className="font-medium text-gray-800 dark:text-[#ECE7DF]">Filters</span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-lg text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-4">
              {renderFilterPanel({ inDrawer: true })}
            </div>
            <div className="px-5 pb-6 pt-2">
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-full py-2.5 rounded-xl text-sm font-medium
                           bg-[#ff9f1c] text-black transition-colors hover:bg-[#e8900f]"
              >
                Show {filteredProjects.length} projects
              </button>
            </div>
          </div>
        </>
      )}

      <ScrollToTop />
    </div>
  );
}