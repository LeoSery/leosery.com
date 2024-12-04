// import React from "react";

// export default function About() {
//   return (
//     <div className="w-full py-8 lg:py-12">
//       <div className="max-w-[90rem] md:grid grid-cols-5 gap-6 lg:gap-8 mx-auto px-3 sm:px-6 lg:px-8">
//         {/* Contenu textuel */}
//         <div id="home/about" className="col-span-3">
//           <div className="flex flex-col items-start">
//             <p className="text-sm uppercase tracking-wider text-[#ff9f1c] font-medium">
//               About me
//             </p>
//             <h2 className="py-2 text-xl sm:text-2xl text-gray-700 dark:text-[#BDB7AF] font-light">
//               Who I Am
//             </h2>
//             <p className="text-sm sm:text-base text-gray-600 dark:text-[#B1AAA0] text-justify leading-relaxed max-w-[90ch]">
//               I am Léo Séry, I discovered computer science very young and I
//               quickly knew that it was the field towards which I wanted to go.
//               The development sector caught my attention during my childhood. A
//               family environment and more particularly uncles working in the
//               field of video games have allowed me for several years to
//               consolidate my choice of orientation. It is obvious that I
//               continue my studies in the development&apos;s ground.
//             </p>
//           </div>
//         </div>

//         {/* Image container */}
//         <div className="col-span-2 w-full h-auto mt-6 md:mt-0">
//           <div className="relative w-full h-0 pb-[70%] bg-[#1E1E1E]/5 dark:bg-[#1E1E1E] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <img
//               className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
//               src="/../assets/images/Home/About-me-image.jpg"
//               alt="About me"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="max-w-[90rem] md:grid grid-cols-5 gap-6 lg:gap-8 mx-auto px-3 sm:px-6 lg:px-8">
        {/* Contenu textuel */}
        <div id="home/about" className="col-span-3">
          <div className="flex flex-col items-start">
            <p className="text-sm uppercase tracking-wider text-[#ff9f1c] font-medium">
              About me
            </p>
            <h2 className="py-2 text-xl sm:text-2xl text-gray-700 dark:text-[#BDB7AF] font-light">
              Who I Am
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-[#B1AAA0] text-justify leading-relaxed max-w-[90ch]">
              I&apos;m Léo Séry, I discovered computer science very young and I
              quickly knew that it was the field towards which I wanted to go.
              The development sector caught my attention during my childhood. A
              family environment and more particularly uncles working in the
              field of video games have allowed me for several years to
              consolidate my choice of orientation. It is obvious that I
              continue my studies in the development&apos;s ground.
            </p>
          </div>
        </div>

        {/* Image container */}
        <div className="col-span-2 w-full h-auto mt-6 md:mt-0">
          <div className="relative w-full h-0 pb-[70%] bg-[#1E1E1E]/5 dark:bg-[#1E1E1E] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/assets/images/Home/About-me-image.jpg"
              alt="About me"
              fill
              className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}