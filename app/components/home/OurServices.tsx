"use client";

import {
    Megaphone,
    Share2,
    Smartphone,
    Search,
} from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: <Megaphone size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
        title: "SEO & AI Visibility",
        desc: "Future-proof your search presence with strategies built for both search engines and AI-powered platforms",
    },
    {
        icon: <Share2 size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
        title: "Paid Media",
        desc: "Maximize ROI across Google, Meta, LinkedIn, and programmatic campaigns with precision targeting and continuous optimization.",
    },
    {
        icon: <Smartphone size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
        title: " Analytics & Dashboards",
        desc: "From GA4 setups to Looker Studio dashboards, we give you real-time clarity on what’s working and where to optimize",
    },
    {
        icon: <Search size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
        title: "Digital Marketing Consulting",
        desc: "Clarity for growth. We help you shape strategies, choose the right channels, and build frameworks that scale bookings or leads.",
    },
    // {
    //     icon: <Globe size={40} strokeWidth={1.5} className="text-[#0049e5]" />,
    //     title: "Web Development",
    //     desc: "Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated.",
    // },
    // {
    //     icon: (
    //         <MousePointerClick size={40} strokeWidth={1.5} className="text-[#0049e5]" />
    //     ),
    //     title: "PPC Advertising",
    //     desc: "Target your ideal search phrases and get found at the top of Google’s search results. PPC allows you.",
    // },
];

export default function OurServices() {
    return (
        <section className="w-full py-20 bg-white relative">

            {/* Heading */}
            <div className="text-center mb-20 relative z-10">
                <div className="max-w-2xs mx-auto flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                    <span className="uppercase text-sm text-[#a5b7d2] font-bold">Our Core Services</span>
                    <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                </div>
                <h2 className=" text-[#1a1b1e] text-3xl md:text-[36px] font-bold ">
                    From AI-powered <br className="hidden md:block"/> search visibility to performance-driven campaigns
                </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 relative z-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative bg-white border border-gray-300 md:border-none transition-all rounded-xl hover:shadow-2xl hover:scale-105 duration-300 flex flex-col items-center justify-center text-center  p-10 group"
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
                    </div>
                ))}
            </div>




        </section>
    );
}
