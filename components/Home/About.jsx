import React, { useState  } from 'react';
import Image from "next/image";
import LoadingSkeleton from '../Common/LoadingSkeleton';
import Spinner from '../Common/Spinner';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full py-8 lg:py-12">
      <div className="max-w-[90rem] md:grid grid-cols-5 gap-6 lg:gap-8 mx-auto px-3 sm:px-6 lg:px-8">
        {/* Contenu textuel */}
        <div id="home/about" className="col-span-3">
          <div className="flex flex-col items-start">
            <p className="text-xl uppercase tracking-wider text-[#ff9f1c] font-medium">
              About me
            </p>
            <h2 className="py-2 text-lg sm:text-2xl text-gray-600 dark:text-[#BDB7AF] font-light">
              Who I Am
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-[#B1AAA0] text-justify leading-relaxed max-w-[90ch]">
              Immersed in the video game universe from an early age thanks to a family environment connected to the industry, I 
              naturally directed my path towards development. Recently graduated as valedictorian from Ynov Campus Bordeaux with 
              a Master&apos;s degree in game programming, I develop in C++ and C# with Unity3D and Unreal Engine 5. Engine programming 
              and tools development are the game programming fields that particularly appeal to me and where I aim to work professionally.
            </p>
          </div>
        </div>

        {/* Image container */}
        <div className="col-span-2 w-full h-auto mt-6 md:mt-0">
              <div className="relative w-full h-0 pb-[70%] bg-[#1E1E1E]/5 dark:bg-[#1E1E1E] rounded-xl overflow-hidden">
            {!imageLoaded && (
              <>
                <LoadingSkeleton variant="rect" className="absolute inset-0 rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Spinner size="md" />
                </div>
              </>
            )}
            <Image
              src="/assets/images/Home/About-me-image.webp"
              alt="About me"
              fill
              className={`object-cover rounded-xl transition-transform duration-300 hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}