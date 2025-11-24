import ProfessionalTeam from "@/app/components/about/ProfessionalTeam";
import WhoWeAre from "@/app/components/about/WhoWeAre";
import WhyChooseUs from "@/app/components/about/WhyChooseUs";
import LogoSlider from "@/app/components/home/LogoSlider";
import BlogHero from "@/app/components/reusable/BlogHero";
import React from "react";

export const metadata = {
  title: "About Webentryx | Our Vision, Team & Digital Expertise",
};

function page() {
  return (
    <>
      <BlogHero
        title="About Company"
        backgroundImage="/images/blog_header.webp"
      />
      <WhoWeAre />
      <WhyChooseUs />
      <ProfessionalTeam />
      <div className="max-w-7xl mx-auto pt-12 md:pt-4  pb-10 md:pb-16">
        <LogoSlider />
      </div>
    </>
  );
}

export default page;
