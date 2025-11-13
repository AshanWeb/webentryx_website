"use client";

import Image from "next/image";
import {
  Search,
  Code,
  Megaphone,
  PenTool,
  Users,
  Smartphone,
} from "lucide-react";

const servicesLeft = [
  {
    title: "Google Ads",
    desc: "Search, Display, Performance Max, YouTube.",
    icon: Search,
  },
  {
    title: "Meta Ads",
    desc: "Facebook & Instagram for travelers and lifestyle segments.",
    icon: Code,
  },
  {
    title: "LinkedIn Ads",
    desc: "Lead generation and B2B campaigns.",
    icon: Megaphone,
  },
];

const servicesRight = [
  {
    title: "Programmatic",
    desc: "Reach in-market audiences globally.",
    icon: PenTool,
  },
  {
    title: "Retargeting",
    desc: " Re-engage users who didn’t convert.",
    icon: Users,
  },
  {
    title: "ROAS Optimization",
    desc: "Monitor how your brand appears in AI-generated responses and optimize continuously.",
    icon: Smartphone,
  },
];

export default function PaidService() {
  return (
    <section className="relative py-16 bg-white px-4 lg:px-8 xl:px-12 2xl:px-0">
      <div className="text-center mb-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-[#1a1b1e]">
          Turn Ad Spend into Revenue
        </h2>
        <p className="text-base text-[#606060] text-justify md:text-center mt-4 max-w-5xl mx-auto px-4 md:px-0">
          {`Online advertising delivers the ability to drive immediate results when done systematically and approached scientifically.  The Webentryx approach to Pay Per Click  and Social Media advertising is built around crafting result oriented campaigns. We design these campaigns upon careful analysis of each brand’s USPs. By matching these USPs with the right audience and channels we build a foundation for cost effective online advertising campaigns`}
        </p>

        {/* <p className="text-base text-[#606060] mt-4 max-w-5xl mx-auto ">
          Our strength is in the ability to execute campaigns that are
          meticulously planned and constantly monitored to drive optimal
          results.
        </p> */}
      </div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

         <div className="flex md:hidden justify-center">
          <Image
            src="/images/paid_media.webp"
            alt="Services Illustration"
            width={523}
            height={501}
            className="rounded-lg"
          />
        </div>

        {/* Left Side Services */}
        <div className="space-y-8">
          {servicesLeft.map((service, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 bg-white  p-5 ${
                i === 1 ? "md:-ml-8" : ""
              }`}
            >
              <div className="p-4 rounded-full shadow-md bg-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#211651] hover:to-[#ccc4ea] hover:text-white cursor-pointer">
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#1a1b1e]">
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#606060]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="hidden md:flex justify-center">
          <Image
            src="/images/paid_media.webp"
            alt="Services Illustration"
            width={523}
            height={501}
            className="rounded-lg"
          />
        </div>

        {/* Right Side Services */}
        <div className="space-y-8">
          {servicesRight.map((service, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 bg-white p-5 ${
                i === 1 ? "md:ml-8" : ""
              }`}
            >
              <div className="p-4 rounded-full shadow-md bg-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#211651] hover:to-[#ccc4ea] hover:text-white cursor-pointer">
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#1a1b1e]">
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#606060]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
