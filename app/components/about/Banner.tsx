"use client";
import React from "react";

const bannerData = [
  { label: "LIVE", value: "330+" },
  { label: "BREATHE", value: "850+" },
  { label: "CREATE", value: "25+" },
  { label: "DIGITAL", value: "15+" },
];

export default function Banner() {
  return (
    <div
      className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto h-[260px] flex flex-col md:flex-row items-center justify-around py-16 md:py-20 bg-cover bg-center rounded-2xl"
      style={{ backgroundImage: "url('/images/bg_counter.webp')" }}
    >
      {bannerData.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center ">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-white rounded-full"/>
            <span className="text-3xl font-bold text-white tracking-wide">{item.label}</span>
          </div>
          {/* <span className="text-3xl md:text-5xl font-bold text-white">{item.value}</span> */}
        </div>
      ))}
    </div>
  );
}

