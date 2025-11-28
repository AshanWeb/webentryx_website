import LogoSlider from "@/app/components/home/LogoSlider";
import SeoScore from "@/app/components/home/SeoScore";
import BlogHero from "@/app/components/reusable/BlogHero";
// import ExpectGreat from "@/app/components/services-detail/ExpectGreat";
import ServicesSec from "@/app/components/services-detail/ServicesBanner";
import React from "react";

export const metadata = {
  title: "Webentryx Services | Digital Solutions for Business Growth",
  description:
    "Webentryx offers customized digital solutions designed to improve performance, strengthen online visibility, and support long-term business growth.",
  alternates: {
    canonical: "https://www.webentryx.com/services/services-detail",
  },
};

function page() {
  return (
    <div>
      <BlogHero
        title="Search Engine Optimization"
        backgroundImage="/images/blog_header.webp"
      />
      <ServicesSec />
      <div className="max-w-7xl mx-auto">
        <LogoSlider />
      </div>
      <div className="pb-20">
        <SeoScore />
      </div>
      {/* <ExpectGreat /> */}
    </div>
  );
}

export default page;
