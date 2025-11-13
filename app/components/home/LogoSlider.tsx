"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

const logos = [
  "/images/client-01.png",
  "/images/client-02.png",
  "/images/client-03.png",
  "/images/client-04.png",
  "/images/client-05.png",
  "/images/client-06.png",
  "/images/client-07.png",
  "/images/client-08.png",
  "/images/client-09.png",
];

export default function LogoSlider() {
  return (
    <div className="w-full bg-white md:pt-15 pb-4 md:pb-0">
      <div className="w-full mx-auto">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          freeMode={true} // smooth continuous scrolling
          speed={4000} // higher = slower scroll
          autoplay={{
            delay: 0, // no pause
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 3, spaceBetween: 25 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 35 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
            1280: { slidesPerView: 4, spaceBetween: 50 },
          }}
          className="w-full"
        >
          {logos.concat(logos).map((logo, index) => (
            <SwiperSlide
              key={index}
              className="!flex justify-center items-center h-24"
            >
              <div className="flex justify-center items-center w-full h-full px-4">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={200}
                  height={60}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
