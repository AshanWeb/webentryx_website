import React from 'react'
import Image from 'next/image'

function WhoWeAre() {
    return (
        <section className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-0 xl:px-12 py-5 md:py-20 flex flex-col xl:flex-row xl:items-center gap-12 xl:gap-36">
            {/* Left Image */}
            <div className="flex-shrink-0 lg:mx-auto xl:mx-0">
                <Image
                    src="/images/about_section.webp"
                    alt="About Image"
                    width={596}
                    height={647}
                    className="rounded-xl object-cover w-full max-w-md md:max-w-lg"
                />
            </div>

            {/* Right Content */}
            <div className="text-start flex-1 ">
                {/* Section Heading */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                    <span className="uppercase text-xs md:text-sm text-[#a5b7d2] font-bold tracking-wide">
                        who we are
                    </span>
                    <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                </div>

                <h2 className="text-2xl lg:text-3xl xl:text-4xl  font-bold text-[#1a1b1e] leading-snug mb-4 max-w-lg">
                    {`Beyond Marketing – Driving Measurable Growth`}
                </h2>

                <h3 className="text-lg md:text-xl font-medium text-[#1a1b1e] mb-4 max-w-md">
                    Empowering brands to stay visible, relevant, and profitable in a digital world reshaped by AI
                </h3>

                <p className="text-base  text-[#606060] max-w-[470px] lg:max-w-4xl xl:max-w-[570px] leading-relaxed mb-8 text-justify md:text-start">
                    {`We are passionate about delivering original ideas that resonate with individual brands in order to elevate their presence and optimizing revenue options in the digital landscape.With a solid grounding in traditional marketing we are able to call on our passion in digital marketing to create synergies between online and offline marketing. Our forte is in the hospitality industry where we have a proven record of delivering revenue centric ecommerce and digital strategies that have resulted in continued growth in digital revenue.`}
                </p>
            </div>
        </section>
    )
}

export default WhoWeAre