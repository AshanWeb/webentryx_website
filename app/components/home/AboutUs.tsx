"use client";

import { Box, TrendingUp, Users, Award } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const boxes = [
    {
      icon: <Box size={30} className="text-white" />,
      title: "AI-Ready Marketing",
      desc: "Strategies built to thrive in the era of AI-powered search and discovery.",
    },
    {
      icon: <Users size={30} className="text-white" />,
      title: "Transparent Reporting",
      desc: "Real-time dashboards and insights keep you in control of performance.",
    },
    {
      icon: <TrendingUp size={30} className="text-white" />,
      title: "ROI-First Approach",
      desc: "Every campaign is tied to measurable metrics.",
    },

    {
      icon: <Award size={30} className="text-white" />,
      title: "Proven Track Record",
      desc: "Trusted by leading resorts and global B2B brands to deliver results.",
    },
  ];

  return (
    <section className="relative w-full pb-20 md:pb-0 pt-16  bg-white overflow-hidden">
      {/* Right bottom background shape */}
      <Image
        src="/images/shape3-home.png"
        alt="Shape Background"
        width={237}
        height={311}
        className="absolute bottom-28 right-0 -z-0"
      />

      <div className=" lg:max-w-4xl xl:max-w-6xl mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between gap-16 md:gap-36">
        {/* Left side boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-3/4 order-2 md:order-1">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`relative md:mb-3 bg-white rounded-xl p-5 flex flex-col items-center text-center justify-center shadow-lg border border-gray-100 transform transition-transform duration-300 hover:scale-100 hover:shadow-2xl cursor-pointer group
                            ${index === 0 ? "md:mt-20" : ""}
                            ${index === 0 ? "h-60 md:h-75" : ""} 
                            ${index === 1 ? "h-60 md:h-85" : ""}
                            ${index === 1 ? "md:mt-10" : ""}  
                            ${index === 2 ? "h-60 md:h-75" : ""} 
                            ${index === 3 ? "h-60 md:h-85" : ""}`}
            >
              {/* Icon in gradient circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#004be5] via-[#04c1ef] to-[#ffffff] mb-4">
                {box.icon}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-[#1a1b1e] group-hover:text-white mb-2">
                {box.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] text-[#606060] group-hover:text-white">
                {box.desc}
              </p>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#004be5] to-[#04c1ef] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Right side content */}
        <div className="md:w-1/2 flex flex-col justify-center order-1 md:order-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
            <span className="uppercase text-sm text-[#a5b7d2] font-bold">
              Why Webentryx
            </span>
            <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-[32px] xl:text-4xl font-bold text-[#1a1b1e] mb-6 max-w-md">
            Grow your business together with us
          </h2>
          <p className="text-[16px] text-[#606060] max-w-md text-justify md:text-start">
            We are passionate about delivering original ideas that highlight the
            uniqueness of individual brands. We strive to elevate their presence
            and optimize revenue options in the digital landscape.
          </p>

          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="flex flex-col gap-2 z-10">
              <span className="text-[17px] uppercase text-[#0160e7] font-bold">5+ Years</span>
              <span className="text-sm text-[#1a1b1e] font-normal">
                {" "}
                Driving digital growth across hospitality & B2B
              </span>
            </div>

            <div className="flex flex-col gap-2 z-10">
              <span className="text-[17px] uppercase text-[#0160e7] font-bold">30%+ Avg ROI Lift</span>
              <span className="text-sm text-[#1a1b1e] font-normal">
                {" "}
                From optimized <br />campaigns
              </span>
            </div>

            <div className="flex flex-col gap-2 z-10">
              <span className="text-[17px] uppercase text-[#0160e7] font-bold">20+ Global Brands</span>
              <span className="text-sm text-[#1a1b1e] font-normal">
                {" "}
                Trust Webentryx
              </span>
            </div>

            <div className="flex flex-col gap-2 z-10">
              <span className="text-[17px] uppercase text-[#0160e7] font-bold">15+ Experts</span>
              <span className="text-sm text-[#1a1b1e] font-normal">
                {" "}
                With cross-industry experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
