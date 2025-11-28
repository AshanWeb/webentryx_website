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
    title: "Market Benchmarking",
    desc: "Competitor and channel audits.",
    icon: Search,
  },
  {
    title: "Core Audience Personas",
    desc: " Understand and segment target audiences and markets",
    icon: Code,
  },
  {
    title: "Channel Mix Planning",
    desc: " SEO, PPC, social, programmatic balance.",
    icon: Megaphone,
  },
];

const servicesRight = [
  {
    title: "AI Readiness",
    desc: "Strategies for visibility in AI-driven search",
    icon: PenTool,
  },
  {
    title: "Lead Gen Frameworks",
    desc: " For exporters and B2B growth.",
    icon: Users,
  },
  {
    title: "Attribution & KPIs",
    desc: "Clear performance tracking models.",
    icon: Smartphone,
  },
];

export default function DigitalServices() {
  return (
    <section className="relative py-16 bg-white px-4 lg:px-8 xl:px-12 2xl:px-0">
      <div className="text-center mb-20 max-w-7xl mx-auto px-4 md:px-0">
        <h1 className="text-4xl font-bold text-[#1a1b1e]">
          Clarity and Strategy for Scalable Growth
        </h1>
        <p className="text-base text-[#606060] mt-4 max-w-5xl mx-auto text-justify md:text-center px-4 md:px-0">
          {`At Webentryx, we take time to understand the core values of every brand we work with, then craft strategies that amplify them in the digital space. In a landscape shaped by AI and shifting customer behaviors, our consulting service merges brand insight with performance-driven strategy to strengthen awareness, protect equity, and drive measurable growth.
`}
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
            src="/images/digital_marketing.webp"
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
            src="/images/digital_marketing.webp"
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
