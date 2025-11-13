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
    title: "GA4 Setup",
    desc: " Custom event tracking & migrations.",
    icon: Search,
  },
  {
    title: "Tag Manager",
    desc: " Streamlined tracking implementations.",
    icon: Code,
  },
  {
    title: "Custom Dashboards",
    desc: " Looker Studio for real-time insights.",
    icon: Megaphone,
  },
];

const servicesRight = [
  {
    title: "Attribution Models",
    desc: "Understand what drives conversions.",
    icon: PenTool,
  },
  {
    title: "AI Insights",
    desc: "Layer AI to spot trends & anomalies.",
    icon: Users,
  },
  {
    title: "KPI Frameworks",
    desc: "Focus on metrics that matter most.",
    icon: Smartphone,
  },
];

export default function AnalyticsServices() {
  return (
    <section className="relative py-16 bg-white px-4 lg:px-8 xl:px-12 2xl:px-0">
      <div className="text-center mb-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-[#1a1b1e]">
          Turn Ad Spend into Revenue
        </h2>
        <p className="text-base text-[#606060] mt-4 max-w-5xl mx-auto text-justify md:text-center px-4 md:px-0">
          {`We are strong believers that accurate and timely data plays an integral role in decision-making.  Web Analytics not only enables us to measure and gauge the progress of our campaigns accurately but also give valuable insights into areas we can further enhance these campaigns.`}
        </p>

        <p className="text-base text-[#606060] mt-4 max-w-5xl mx-auto text-justify md:text-center px-4 md:px-0 ">
          Analytics act as a lens through which we look into a websites’ overall
          health. It is only with an accurate analytical platform, a website and
          supporting digital marketing campaigns can be properly evaluated.
        </p>

        <p className="text-base text-[#606060] mt-4 max-w-5xl mx-auto text-justify md:text-center px-4 md:px-0 ">
          We transform raw data into clarity. From GA4 setups to Looker Studio
          dashboards, our analytics services ensure you have the visibility
          needed to make smarter decisions and scale confidently.
        </p>
      </div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        <div className="flex md:hidden justify-center">
          <Image
            src="/images/analys.webp"
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
            src="/images/analys.webp"
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
