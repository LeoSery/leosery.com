import VisualStudio from "../../public/assets/images/Home/skills/visual-studio.png";
import UnityLogo from "../../public/assets/images/Home/skills/unity.png";
import CSharp from "../../public/assets/images/Home/skills/c-sharp.png";
import GitHub from "../../public/assets/images/Home/skills/github.png";
import cpluplus from "../../public/assets/images/Home/skills/c-plusplus.png";
import unreal5 from "../../public/assets/images/Home/skills/Unreal-engine-5.png";
import plastic from "../../public/assets/images/Home/skills/plastic-scm.png";
import rider from "../../public/assets/images/Home/skills/rider.png";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

export default function MainSkills() {
  const router = useRouter();

  return (
    <div className="w-full py-6 sm:py-8 lg:py-12">
      <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-6 lg:mb-8">
          <p className="text-sm uppercase tracking-wider text-[#ff9f1c] font-medium">
            Some of my skills
          </p>
          <h2 className="py-2 text-xl sm:text-2xl text-gray-600 dark:text-[#BDB7AF] font-light">
            What I Can Do
          </h2>
        </div>

        {/* Grid des compétences */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6">
          <SkillCard image={UnityLogo} name="Unity3D" />
          <SkillCard image={CSharp} name="C-Sharp" />
          <SkillCard image={plastic} name="Plastic SCM" />
          <SkillCard image={VisualStudio} name="Visual Studio" />
          <SkillCard image={unreal5} name="Unreal Engine" />
          <SkillCard image={cpluplus} name="C++" />
          <SkillCard image={GitHub} name="GitHub" />
          <SkillCard image={rider} name="Rider" />
        </div>

        {/* Bouton */}
        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => router.push("/CV")}
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

// Composant de carte de compétence extrait
function SkillCard({ image, name }) {
  return (
    <div className="bg-gray-50 dark:bg-[#1E1E1E] p-3 sm:p-4 rounded-lg
                    shadow hover:shadow-md
                    transition-all duration-200 ease-in-out
                    hover:scale-[1.02] group">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-200 group-hover:scale-110"
          />
        </div>
        <h3 className="text-sm sm:text-base font-medium text-gray-700 dark:text-[#CAC5BE] text-center sm:text-left">
          {name}
        </h3>
      </div>
    </div>
  );
}