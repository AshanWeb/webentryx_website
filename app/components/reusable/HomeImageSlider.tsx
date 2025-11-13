"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const images = [
    "/images/project-1.jpg",
    "/images/project-2.jpg",
    "/images/project-3.jpg",
    "/images/project-4.jpg",
];

export default function HomeImageSlider() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerGroup={1} // slide one by one
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="mySwiper"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
            }}
        >
            {images.map((src, i) => (
                <SwiperSlide key={i}>
                    <div className="relative group overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src={src}
                            alt={`Project ${i + 1}`}
                            width={800}
                            height={557}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Hover overlay shape */}
                        <div className="absolute inset-y-16 right-0 h-1/2 w-2/3 rounded-l-2xl bg-gradient-to-r from-[#0153e6] to-[#04d3f1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6 text-white">
                            <h3 className="text-2xl font-bold">Your New Reality</h3>
                            <p className="text-sm mt-2">Marketing / Media</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

            {/* Pagination customization */}
            <div className="mt-16">
                <style jsx global>{`
        .swiper-pagination {
          bottom: 15px !important; /* pull pagination down */
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #00c3ff !important;
          opacity: 0.5;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
        background: #211651 !important;  
        opacity: 1;
        }
      `}</style>
            </div>
        </Swiper>
    );
}
