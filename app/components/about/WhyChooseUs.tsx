import React from "react";
import Image from "next/image";
import Banner from "./Banner";
import Blocks from "../reusable/Blocks";
import { Bot, Handshake, Rocket, TrendingUp } from "lucide-react";

function WhyChooseUs() {
  return (
    <div className="bg-[#f0f6ff] relative md:mt-20 md:pb-16 pt-16 md:pt-0">
      <div className="mx-auto max-w-7xl hidden md:flex justify-center items-start -translate-y-22">
        <Blocks />
      </div>
      <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32 pb-40">
        <div className="max-w-6xl mx-auto px-6 md:px-0 text-start">
          {/* Section Heading */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
            <span className="uppercase text-sm text-[#a5b7d2] font-bold">
              Why Partner with Webentryx
            </span>
            <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-3xl xl:text-4xl font-bold text-[#1a1b1e] mb-4">
            Work with a Digital Agency Built for the AI Era
          </h2>
          <p className="text-[16px] text-[#606060] max-w-lg mb-12 text-justify md:text-start">
            From SEO and paid media to consulting and analytics, our team
            combines creativity and data to deliver measurable growth
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 md:gap-4">
              <Bot size={28} className="text-[#a5b7d2] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-base font-bold text-[#24283e]">
                  AI-Ready Strategies
                </h2>
                <span className="text-base text-[#606060]">
                  Future-proofing visibility in the age of LLMs
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <Handshake
                size={28}
                className="text-[#a5b7d2] flex-shrink-0 mt-1"
              />
              <div>
                <h2 className="text-base font-bold text-[#24283e]">
                  Hospitality DNA
                </h2>
                <span className="text-base text-[#606060]">
                  Proven results with global resorts and DMCs
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <TrendingUp
                size={28}
                className="text-[#a5b7d2] flex-shrink-0 mt-1"
              />
              <div>
                <h2 className="text-base font-bold text-[#24283e]">
                  B2B Growth
                </h2>
                <span className="text-base text-[#606060]">
                  Lead generation for exporters and industrial brands
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <Rocket size={28} className="text-[#a5b7d2] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-base font-bold text-[#24283e]">
                  Performance Marketing
                </h2>
                <span className="text-base text-[#606060]">
                  ROI-first campaigns across search, social, and programmatic
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/images/about-image2.webp"
            alt="Background Shape"
            width={660}
            height={617}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full mx-auto absolute right-0 -bottom-62 -translate-y-1/2 hidden md:block">
        <Banner />
      </div>
    </div>
  );
}

export default WhyChooseUs;
