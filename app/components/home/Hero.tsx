"use client";

import HeroWithBubbles from "../reusable/HeroWithBubbles";
// import BubblesBackground from "../reusable/BubblesBackground";
import MainButton from "../reusable/MainButton";

export default function Hero() {
  return (
    <div className="relative w-full md:h-dvh bg-[url('/images/hero_banner_wentry.webp')] bg-cover bg-center md:bg-top  overflow-hidden">

      {/* <BubblesBackground /> */}
      <HeroWithBubbles />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-9 xl:px-11 2xl:px-0 pt-48 pb-28 md:pt-56 md:pb-0">
        <div className="space-y-5 max-w-3xl">
          <h2 className="text-4xl lg:text-4xl xl:text-[50px]  text-white font-extrabold leading-tight">
            Data-Driven <br className="hidden md:block" />
            Digital Marketing <br className="hidden md:block" />
            in the Age of AI
          </h2>

          <div className="flex items-center gap-6 mt-12">
            <MainButton text="Book a Consultation" href="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
