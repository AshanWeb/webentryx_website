"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Plus } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  { name: "David Ferri", role: "General Manager", img: "/images/mem1-1.jpg" },
  { name: "Sarah Lee", role: "Project Manager", img: "/images/mem2-1.jpg" },
  { name: "John Smith", role: "UI/UX Designer", img: "/images/mem3-1.jpg" },
  { name: "Emma Watson", role: "Marketing Head", img: "/images/mem6-1.jpg" },
  { name: "James Brown", role: "Developer", img: "/images/mem5-1.jpg" },
];

export default function ProfessionalTeam() {
  return (
    <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-16 px-6 md:px-0">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-32"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="relative group cursor-pointer">
              {/* Team Member Image */}
              <Image
                src={member.img}
                alt={member.name}
                width={750}
                height={750}
                className="object-cover rounded-xl shadow-md aspect-square 
                           transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay Rectangle */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl w-4/5 py-8 px-6 flex flex-col items-center text-center 
                              transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:scale-105">
                <h3 className="text-[24px] font-bold text-[#1a1b1e]">
                  {member.name}
                </h3>
                <p className="text-[16px] text-[#606060]">{member.role}</p>

                {/* Plus Button */}
                <div className="absolute -bottom-5 left-[80%] -translate-x-1/2 flex justify-center">
                  <div className="w-10 h-10 bg-[#211651] rounded-full flex items-center justify-center shadow-md">
                    <Plus className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
