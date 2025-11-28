import AnalyticsServices from "@/app/components/analytics/AnalyticsServices";
import LogoSlider from "@/app/components/home/LogoSlider";
import SeoScore from "@/app/components/home/SeoScore";
import BlogHero from "@/app/components/reusable/BlogHero";
import React from "react";


export const metadata = {
  title: "Analytics Services by Webentryx | Data Insights & Tracking",
  description:
    "Unlock powerful data insights with Webentryx’s analytics services, helping you track performance, optimize decisions & drive meaningful business results.",
  alternates: {
    canonical: "https://www.webentryx.com/services/analytics",
  },
};

function page() {
  return (
    <div>
      <BlogHero
        title="Analytics & Dashboards"
        backgroundImage="/images/blog_header.webp"
      />
      <AnalyticsServices />
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
