import React from "react";
import Image from "next/image";

function ProfessionalTeam() {
  return (
    <section className="pt-20 md:pt-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-16 1440xl:px-36 2xl:px-20">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10 md:mb-20">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-4">
          <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
          <span className="uppercase text-sm text-[#a5b7d2] font-bold">
            Our Story
          </span>
          <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
        </div>

        <p className="text-[16px] text-[#606060] text-justify md:text-center max-w-5xl">
          Founded in 2020, Webentryx began with a focus on helping hotels and
          hospitality brands compete in increasingly digital-first markets. By
          2025, our expertise has expanded across industries, combining
          hospitality DNA with B2B and industrial projects worldwide.
        </p>
      </div>

      {/* Optional content placeholder */}
      <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-0 text-center md:text-start flex flex-col"></div>

      {/* Team Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/images/ashan.jpg"
            alt="Ashan Wijewickrema"
            width={450}
            height={600}
            className="object-cover w-full max-w-[425px] h-auto md:h-[425px]"
          />
        </div>

        <div className="px-0 md:px-6 flex-1">
          <h3 className="text-2xl font-bold text-[#1a1b1e]">
            Ashan Wijewickrema
          </h3>
          <span className="text-sm text-[#1a1b1e]">
            Founder and Chief Strategist
          </span>

          <p className="mt-4 text-[#606060] text-justify md:text-start">
            Ashan is the Founder & CEO of Webentryx and a digital marketing
            strategist with a passion for helping brands grow in a fast-changing
            landscape. With 15+ years of experience across hospitality and B2B
            industries, he specializes in SEO, paid media, and AI-driven
            visibility. Before founding Webentryx, Ashan held senior roles at
            Minor Hotels and Uga Escapes, where he built revenue-focused digital
            strategies that continue to shape his work today.
          </p>

          <br />

          <p className="text-[#606060] text-justify md:text-start">
            At Webentryx, we go beyond traditional digital marketing. We partner
            with brands to create visibility, drive conversions, and
            future-proof growth in a rapidly changing digital world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalTeam;
