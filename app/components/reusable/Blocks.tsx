"use client";

import Image from "next/image";

export default function Blocks() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 1440xl:px-24 2xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-7 lg:gap-6 xl:gap-10">
        {/* === Block 01 === */}
        <div className="relative rounded-2xl bg-white 
            p-6 md:p-8 lg:p-4 xl:p-8  
            shadow-lg hover:shadow-xl hover:-translate-y-3 
            transition-transform duration-300 overflow-hidden">
          
          {/* shape top-right */}
          <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-28 xl:h-28 z-0 pointer-events-none">
            <Image
              src="/images/bg-service1-1.png"
              width={120}
              height={20}
              alt=""
              className="object-contain"
            />
          </div>

          <div className="relative z-10">
            {/* badge */}
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-4 font-extrabold bg-[#d9f6ff] text-[#0a66e8]">
              01
            </div>

            {/* title */}
            <h3 className="text-lg md:text-xl lg:text-base xl:text-xl font-bold text-[#1a1b1e] mb-3">
              Transparency
            </h3>

            {/* description */}
            <p className="text-sm md:text-base lg:text-sm xl:text-base text-[#606060]">
              Clear communication and honest results.
            </p>
          </div>
        </div>

        {/* === Block 02 === */}
        <div className="relative rounded-2xl bg-white 
            p-6 md:p-8 lg:p-4 xl:p-8  
            shadow-lg hover:shadow-xl hover:-translate-y-3 
            transition-transform duration-300 overflow-hidden">
          
          {/* shape bottom-right */}
          <div className="absolute -bottom-22 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-28 xl:h-28 opacity-100 pointer-events-none z-0">
            <Image
              src="/images/bg-service2-1.png"
              width={120}
              height={20}
              alt=""
              className="object-contain"
            />
          </div>

          <div className="relative z-10">
            {/* badge */}
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-4 font-extrabold bg-[#d8e7fb] text-[#0a66e8]">
              02
            </div>

            {/* title */}
            <h3 className="text-lg md:text-xl lg:text-base xl:text-xl font-bold text-[#1a1b1e] mb-3">
              Collaboration
            </h3>

            {/* description */}
            <p className="text-sm md:text-base lg:text-sm xl:text-base text-[#606060]">
              Working side by side with our clients.
            </p>
          </div>
        </div>

        {/* === Block 03 === */}
        <div className="relative rounded-2xl bg-white 
            p-6 md:p-8 lg:p-4 xl:p-8  
            shadow-lg hover:shadow-xl hover:-translate-y-3 
            transition-transform duration-300 overflow-hidden">
          
          {/* shape top-right */}
          <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-28 xl:h-28 opacity-100 pointer-events-none z-0">
            <Image
              src="/images/bg-service3-1.png"
              width={120}
              height={20}
              alt="shapes"
              className="object-contain"
            />
          </div>

          <div className="relative z-10">
            {/* badge */}
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-4 font-extrabold bg-[#ffe4dc] text-[#fe724c]">
              03
            </div>

            {/* title */}
            <h3 className="text-lg md:text-xl lg:text-base xl:text-xl font-bold text-[#1a1b1e] mb-3">
               Innovation
            </h3>

            {/* description */}
            <p className="text-sm md:text-base lg:text-sm xl:text-base text-[#606060]">
              Future-ready strategies for a changing world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
