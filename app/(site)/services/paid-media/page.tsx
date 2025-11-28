import LogoSlider from "@/app/components/home/LogoSlider";
import SeoScore from "@/app/components/home/SeoScore";
import PaidService from "@/app/components/paid-media/PaidService";
import BlogHero from "@/app/components/reusable/BlogHero";

import React from "react";

export const metadata = {
  title: "Paid Media by Webentryx | PPC, Display & Performance Ads",
  description:
    "Discover Webentryx’s paid media services, including PPC, display & performance campaigns designed to maximize ROI and accelerate business growth.",
  alternates: {
    canonical: "https://www.webentryx.com/services/paid-media",
  },
};
function page() {
  return (
    <div>
      <BlogHero title="Paid Media" backgroundImage="/images/blog_header.webp" />
      <PaidService />
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
