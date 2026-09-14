import { useRouter } from "next/router";
import Link from "next/link";
import React from 'react';
import { FiTool, FiZap, FiCode, FiLayers } from 'react-icons/fi';
import { FaGamepad, FaVrCardboard } from 'react-icons/fa';

const groups = [
  {
    category: "Software Development",
    categoryIcon: FiCode,
    items: [
      {
        icon: FaVrCardboard,
        title: "Real-Time & XR Applications",
        description: "3 years of professional experience building cross-platform AR/VR/XR applications, developing real-time systems, custom editor tools, and multi-platform builds across WebGL, iOS, Android and PC.",
        tags: ["Unity3D", "C#", "Vuforia", "Oculus SDK"],
        selectionKey: "real-time-xr-applications",
      },
      {
        icon: FiZap,
        title: "Low-Level & Performance",
                description: "Low-level programming and optimization are what excites me most, now the focus of my professional work. Building systems where every cycle counts, from memory management to data-oriented design.",
        tags: ["C++", "Vulkan", "GLSL", "Data-Oriented"],
        selectionKey: "low-level-performance",
      },
    ],
  },
  {
    category: "Game Development",
    categoryIcon: FaGamepad,
    items: [
      {
        icon: FiLayers,
        title: "Gameplay & Systems",
        description: "Through my game programming studies and personal projects, I've built gameplay systems and game architecture, from solo experiments to team productions.",
        tags: ["C++", "C#", "UE5", "Blueprint"],
        selectionKey: "gameplay-systems",
      },
      {
        icon: FiTool,
        title: "Engine & Tools Programming",
        description: "Engine and tools programming is where I want to take my career, building the systems and pipelines other developers rely on.",
        tags: ["C++", "Vulkan", "OpenGL", "ImGui"],
        selectionKey: "engine-tools-programming",
      },
    ],
  },
];

export default function MainSkills() {
  const router = useRouter();

  return (
    <div className="w-full py-6 sm:py-8 lg:py-12">
      <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-6 lg:mb-8">
          <p className="text-xl uppercase tracking-wider text-[#ff9f1c] font-medium">
            Some of my skills
          </p>
          <h2 className="py-2 text-lg sm:text-2xl text-gray-600 dark:text-[#BDB7AF] font-light">
            What I Can Do
          </h2>
        </div>

        {groups.map((group) => (
          <div key={group.category} className="mb-7 last:mb-6">
            <CategoryHeader icon={group.categoryIcon} label={group.category} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {group.items.map((item) => (
                <CapabilityCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => router.push("/cv")}
            className="px-6 md:px-4 py-2.5 md:py-2 text-sm font-medium text-white
                     bg-blue-600 dark:bg-blue-800 rounded-lg
                     transition-all duration-200 ease-in-out
                     hover:bg-[#ff9f1c] hover:shadow-md
                     hover:scale-105 hover:shadow-[#312f2f]"
          >
            Check out all my skills
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryHeader({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2.5 mb-3.5">
      <Icon className="w-[18px] h-[18px] text-[#ff9f1c] flex-shrink-0" />
      <span className="text-[13px] uppercase tracking-[0.08em] font-medium text-gray-700 dark:text-[#BDB7AF]">
        {label}
      </span>
      <span className="flex-1 h-px bg-gray-200 dark:bg-[#2a2a2a]" />
    </div>
  );
}

function CapabilityCard({ icon: Icon, title, description, tags, selectionKey }) {
  return (
    <Link
      href={`/projects?selection=${selectionKey}`}
      aria-label={`See ${title} projects`}
      className="bg-gray-50 dark:bg-[#1E1E1E] p-5 sm:p-6 rounded-xl
                  border border-gray-200 dark:border-[#2a2a2a]
                  shadow hover:shadow-md
                  transition-all duration-200 ease-in-out
                  hover:scale-[1.02] group flex flex-col gap-3 cursor-pointer
                  hover:border-[#ff9f1c]/30"
    >
      <div className="w-11 h-11 rounded-[11px] bg-[#ff9f1c]/10
                      flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#ff9f1c] transition-transform duration-200 group-hover:scale-110" />
      </div>
      <h3 className="text-base sm:text-lg font-medium text-gray-800 dark:text-[#ECE7DF]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-[#8f8a82]">
        {description}
      </p>
      <div className="mt-auto pt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-gray-700 dark:text-[#BDB7AF]
                       bg-gray-100 dark:bg-[#2a2a2a] px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}