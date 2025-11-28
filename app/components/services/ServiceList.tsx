"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Megaphone, Search, Share2, Smartphone } from "lucide-react";

function ServiceList() {
//   const offerServices = [
//     {
//       name: "SEO & AI Visibility",
//       img: "/images/digi_stratergty.webp",
//       // slug: "services-detail",
//     },
//     {
//       name: "Paid Media/ Performance Marketing",
//       img: "/images/pay_per.webp",
//       // slug: "ppc",
//     },
//     {
//       name: "Analytics & Dashboards",
//       img: "/images/social_media.webp",
//       // slug: "social-media",
//     },
//     {
//       name: "Digital Marketing Consulting",
//       img: "/images/seo.webp",
//       // slug: "cro",
//     },
//   ];

  const services = [
    {
        icon: <Megaphone size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
        title: "SEO & AI Visibility",
        desc: "Future-proof your search presence with strategies built for both search engines and AI-powered platforms",
        href: "/services/services-detail"
    },
    {
        icon: <Share2 size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
        title: "Paid Media",
        desc: "Maximize ROI across Google, Meta, LinkedIn, and programmatic campaigns with precision targeting and continuous optimization.",
        href: "/services/paid-media"
    },
    {
        icon: <Smartphone size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
        title: "Analytics & Optimization",
        desc: "Turn data into decisions with smart dashboards, funnel testing, and CRO that boost conversion rates.",
        href: "/services/analytics"
    },
    {
        icon: <Search size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
        title: "Digital Marketing Consulting",
        desc: "Shape a digital strategy that drives direct bookings and qualified leads. We guide brands on positioning, channel mix, and performance frameworks to maximize visibility and revenue.",
        href: "/services/digital-marketing"
    },
];

  return (
    <section className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-0 text-center md:text-start flex flex-col items-center justify-between pt-20 pb-36">
      {/* === Section Header === */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-4">
          <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
          <span className="uppercase text-sm text-[#a5b7d2] font-bold">
            Our solutions
          </span>
          <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
        </div>
        <h1 className="text-4xl lg:text-3xl xl:text-4xl font-bold text-[#1a1b1e] mb-3 md:mb-4">
          Turning Digital Investment into Measurable Growth
        </h1>
        <p className="text-[16px] text-[#606060] md:max-w-3/4 mx-auto md:mx-0 mb-6 text-justify md:text-center">
          {`At Webentryx, we deliver revenue-driven digital marketing that blends creativity with data. Our core expertise lies in hospitality and travel, helping resorts, hotels, and travel agents stand out in competitive markets.
                    We’ve also partnered with brands across diverse industries, applying the same data-driven strategies to achieve measurable growth.
                    From SEO and performance marketing to digital consultancy, our services are designed to elevate visibility, attract the right audiences, and convert intent into results.
                    `}
        </p>
      </div>

      {/* === Services Grid === */}
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-8">
                {offerServices.map((service, index) => (
                    <Link
                        key={index}
                        href='/services-detail/'
                        className="relative group cursor-pointer"
                    >
                        
                        <Image
                            src={service.img}
                            alt={service.name}
                            width={600}
                            height={600}
                            className="object-cover rounded-xl shadow-md aspect-square 
                                transition-transform duration-300 group-hover:scale-105"
                        />

                       
                        <div
                            className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white shadow-lg 
                                rounded-xl w-4/5 py-8 px-6 flex flex-col items-center text-center
                                transition-transform duration-300 transform 
                                group-hover:-translate-y-2 group-hover:scale-105"
                        >
                            <h3 className="text-[20px] font-bold text-[#1a1b1e] max-w-[200px] md:max-w-none">
                                {service.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 relative z-10">
        {services.map((service, index) => (
          <Link
            href={service.href}
            key={index}
            className="relative bg-white border border-gray-300 md:border-none transition-all rounded-xl hover:shadow-2xl hover:scale-105 duration-300 flex flex-col items-center justify-center text-center  p-10 group cursor-pointer"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-[22px] font-bold text-[#1a1b1e] mb-4">
              {service.title}
            </h3>
            <p className="text-[16px] text-[#606060]">{service.desc}</p>

            {/* Hidden images, appear on hover */}
            <Image
              src="/images/bg1-box-1.png"
              alt="Rocket SEO"
              width={184}
              height={65}
              className="absolute top-0 left-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <Image
              src="/images/bg2-box-1.png"
              alt="Rocket SEO"
              width={184}
              height={65}
              className="absolute bottom-0 right-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServiceList;
