import BlogHero from "@/app/components/reusable/BlogHero";
import ServiceList from "@/app/components/services/ServiceList";
import React from "react";

export const metadata = {
  title: "Digital Services by Webentryx | Marketing, Analytics & Growth",
  description:
    "Explore Webentryx’s full range of digital services, including analytics, digital marketing, paid media & data-driven strategies designed to accelerate growth.",
  alternates: {
    canonical: "https://www.webentryx.com/services",
  },
};

function page() {
  return (
    <div>
      <BlogHero title="Services" backgroundImage="/images/blog_header.webp" />
      <ServiceList />
    </div>
  );
}

export default page;
