import DigitalServices from "@/app/components/digital-marketing/DigitalServices";
import LogoSlider from "@/app/components/home/LogoSlider";
import SeoScore from "@/app/components/home/SeoScore";
import BlogHero from "@/app/components/reusable/BlogHero";

import React from "react";

export const metadata = {
  title: "Digital Marketing Services | SEO & Growth Strategies | Webentryx",
};
function page() {
  return (
    <div>
      <BlogHero
        title="Digital Marketing Consulting"
        backgroundImage="/images/blog_header.webp"
      />
      <DigitalServices />
      <div className="max-w-7xl mx-auto">
        <LogoSlider />
      </div>
      <div className="pb-20">
        <SeoScore />
      </div>
    </div>
  );
}

export default page;
