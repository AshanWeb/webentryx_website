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
    title: "Technical SEO",
    desc: "Fix crawl issues, improve site speed, and build a foundation for search success.",
    icon: Search,
  },
  {
    title: "AI Search Optimization",
    desc: "Structure content and schema for visibility across AI-driven platforms like Google AI Overviews.",
    icon: Code,
  },
  {
    title: "Content for Search Intent",
    desc: "Create landing pages and blogs that match traveler and buyer search intent.",
    icon: Megaphone,
  },
];

const servicesRight = [
  {
    title: "Backlink Authority",
    desc: "Build high-quality links that strengthen your credibility and ranking power.",
    icon: PenTool,
  },
  {
    title: "Schema & Entity SEO",
    desc: "Help search engines and AI models understand your brand with advanced structured data.",
    icon: Users,
  },
  {
    title: "AI Visibility Tracking",
    desc: "Monitor how your brand appears in AI-generated responses and optimize continuously.",
    icon: Smartphone,
  },
];

export default function ServicesSec() {
  return (
    <section className="relative py-16 bg-white px-4 lg:px-8 xl:px-12 2xl:px-0">
      <div className="text-center mb-20 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold text-[#1a1b1e]">
          Stay Visible in the Age of AI-Powered Search
        </h1>
        <p className="text-base text-[#606060] mt-4 max-w-5xl mx-auto text-justify md:text-center px-4 md:px-0">
          {`Search is no longer just about keywords — it’s about context,
          entities, citations and how AI models surface results. Our SEO & AI
          Visibility service ensures your brand stays discoverable across both
          traditional search and emerging AI-driven platforms.`}
        </p>
      </div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:hidden">
          <Image
            src="/images/serices_sec.webp"
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
                i === 1 ? "ml-0 md:-ml-8" : ""
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
            src="/images/serices_sec.webp"
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
