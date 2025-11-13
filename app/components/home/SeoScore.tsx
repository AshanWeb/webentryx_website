"use client";

import Image from "next/image";
import MainButton from "../reusable/MainButton";

export default function SeoScore() {
  return (
    <div className="lg:max-w-4xl xl:max-w-6xl mx-6 md:mx-auto bg-gradient-to-r from-[#211651] via-[#3b2894] to-[#03c4ef] py-10 md:mt-20 md:py-24 relative overflow-hidden rounded-2xl">
      {/* Rocket Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
        <Image
          src="/images/rocket_service_new.webp"
          alt="Rocket SEO"
          width={1071}
          height={350}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-white text-[32px] md:text-[48px] font-bold mb-8 text-center leading-tight">
          Know your Visibility Score!
        </h2>

        {/* Mobile Inputs */}
        <div className="flex flex-col items-center w-full md:hidden">
          <input
            type="text"
            placeholder="Your Website URL"
            className="text-gray-500 text-lg bg-white px-6 py-3 w-full max-w-2xl rounded-full mb-5 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-gray-500 text-lg bg-white px-6 py-3 w-full max-w-2xl rounded-full mb-5 focus:outline-none"
          />
          <MainButton text="Explore" href="contact"/>
        </div>

        {/* Desktop Inputs */}
        <div className="bg-white rounded-full hidden md:flex items-center px-6 py-2 w-full max-w-2xl shadow-md">
          <input
            type="text"
            placeholder="Your Website URL"
            className="flex-grow text-gray-500 text-lg bg-transparent focus:outline-none"
          />

          <span className="mx-4 text-gray-300">|</span>

          <input
            type="email"
            placeholder="Email"
            className="flex-grow text-gray-500 text-lg bg-transparent focus:outline-none"
          />

          <div>
            <MainButton text="Explore" href="contact"/>
          </div>
        </div>
      </div>
    </div>
  );
}
