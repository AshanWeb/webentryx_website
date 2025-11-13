import Image from "next/image";
import TestimonialSlider from "../reusable/TestimonialSlider";


export default function Testimonial() {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">
            {/* Background shape */}
            <Image
                src="/images/shape3-home.png"
                alt="Background Shape"
                width={237}
                height={311}
                className="absolute top-36 right-0 z-10 w-auto h-[270px] hidden md:block"
            />

            <div className="lg:max-w-4xl xl:max-w-6xl mx-auto px-6 md:px-0 text-center">
                {/* Section Heading */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                    <span className="uppercase text-sm text-[#a5b7d2] font-bold">our happy cutomers</span>
                    <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                </div>
                <h2 className="text-4xl font-bold text-[#1a1b1e] mb-4">
                    Hear From Our Clients
                </h2>
                <p className="text-[16px] text-[#606060] max-w-2xl mx-auto mb-12">
                    Our campaigns get your business in front of the right people at the
                    right time to increase organic traffic and boost engagement.
                </p>

                {/* Testimonial Slider */}
                <TestimonialSlider />
            </div>
        </section>
    );
}
