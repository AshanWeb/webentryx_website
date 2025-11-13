"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Expert() {
  return (
    <section
      className="relative bg-[#f0f6ff] bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/images/bg-expert.png')" }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
        {/* Left Side Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/expert.sec.png"
            alt="Expert"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 text-white">
          <p className="text-[#a5b7d2] text-[14px] uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1b1e] max-w-xl">
            Expert in Search Engine Optimization Strategy
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full mb-6">
            Development
          </button>

          <p className="mb-6 text-[#606060] text-[16px] max-w-md">
            We help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers,
            and growing overall sales. Give us a call.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
              <span className="text-[#606060] text-[16px] max-w-md">
                We provide a revolutionary level of transparency into our
                campaigns - from backlink acquisition.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
              <span className="text-[#606060] text-[16px] max-w-md">
                Want to test our process before ramping up the budget? We&apos;ll
                prove our model and you&apos;ll see revenue soar.
              </span>
            </div>
          </div>

          {/* Rating Image */}
          <Image
            src="/images/rating.png"
            alt="Rating"
            width={200}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
