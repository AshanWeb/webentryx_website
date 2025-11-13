"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    message: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "John Doe",
        role: "CEO, Example Inc.",
        message:
            "Working with this team has transformed our business. The ROI and growth are beyond!",
        image: "/images/client-1.jpg",
    },
    {
        name: "Sarah Smith",
        role: "Marketing Director, Brandify",
        message:
            "Their campaigns helped us reach the right people at the right time. Highly recommend!",
        image: "/images/client-2.jpeg",
    },
    {
        name: "Michael Johnson",
        role: "Founder, Startup Hub",
        message:
            "The professionalism and creativity brought into our marketing strategy were outstanding.",
        image: "/images/client-4.jpeg",
    },
    {
        name: "Emily Clark",
        role: "CTO, InnovateX",
        message:
            "Amazing support and fantastic execution. Our KPIs improved dramatically within months.",
        image: "/images/client-3.jpeg",
    },
];

export default function TestimonialSlider() {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop
                autoplay={{ delay: 5000 }}
                spaceBetween={30}
                breakpoints={{
                    0: { slidesPerView: 1, pagination: { clickable: true } },
                    768: { slidesPerView: 2, pagination: false },
                    1024: { slidesPerView: 3, pagination: false },
                }}
                navigation={{
                    prevEl: ".testimonial-prev",
                    nextEl: ".testimonial-next",
                }}
                className="w-full"
            >
                {testimonials.map((t, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 h-full flex flex-col justify-between text-center">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-[#04c1ef]"
                            />
                            <p className="text-lg text-gray-600 italic mb-4">“{t.message}”</p>
                            <h4 className="text-xl font-semibold text-[#1a1b1e]">{t.name}</h4>
                            <p className="text-sm text-[#606060]">{t.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons (Desktop only) */}
            <div className="hidden md:flex justify-center gap-6 mt-8">
                <button className="testimonial-prev bg-[#211651] hover:bg-[#EB0029] text-white px-3 py-3 rounded-full transition cursor-pointer">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <button className="testimonial-next bg-[#211651] hover:bg-[#EB0029] text-white px-3 py-3 rounded-full transition cursor-pointer">
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
