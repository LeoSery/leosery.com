// import { useRouter } from "next/router";
// import React from "react";

// export default function About() {
//   const router = useRouter();

//   return (
//     <div className="w-full py-6 sm:py-8 lg:py-12">
//       <div className="max-w-[90rem] md:grid grid-cols-7 gap-8 lg:gap-12 mx-auto px-3 sm:px-6 lg:px-8">
//         {/* Contenu textuel */}
//         <div id="home/about" className="col-span-full md:col-span-4">
//           <div className="flex flex-col items-center md:items-start">
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
            
//             <div className="flex flex-wrap items-start gap-3 mt-6">
//               <button
//                 onClick={() => router.push("/Projects")}
//                 className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium
//                          hover:bg-[#ff9f1c] transition-all duration-200 hover:shadow-md
//                          hover:scale-105"
//               >
//                 Check out my projects
//               </button>
//               <button
//                 onClick={() => router.push("/CV")}
//                 className="px-5 py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-[#BDB7AF] 
//                          rounded-lg text-sm font-medium hover:border-blue-600 dark:hover:border-blue-800
//                          transition-all duration-200 hover:shadow-sm"
//               >
//                 Check out my CV
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Image container */}
//         <div className="col-span-full md:col-span-3 w-full h-auto mt-6 md:mt-0">
//           <div className="relative w-full h-0 pb-[45%] md:pb-[70%] bg-[#1E1E1E]/5 dark:bg-[#1E1E1E] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
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

// function ActionButton({ onClick, label }) {
//   return (
//     <button
//       onClick={onClick}
//       className="relative px-6 md:px-4 py-2.5 md:py-2 text-sm font-medium text-white
//                 bg-blue-600 dark:bg-blue-800 rounded-lg
//                 transition-all duration-200 ease-in-out
//                 hover:bg-[#ff9f1c] hover:shadow-md
//                 hover:scale-105 hover:shadow-[#312f2f]
//                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//     >
//       {label}
//     </button>
//   );
// }

import React from "react";

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
              I am Léo Séry, I discovered computer science very young and I
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
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              src="/../assets/images/Home/About-me-image.jpg"
              alt="About me"
            />
          </div>
        </div>
      </div>
    </div>
  );
}