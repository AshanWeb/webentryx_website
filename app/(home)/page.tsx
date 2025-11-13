import AboutUs from "../components/home/AboutUs";
import Blog from "../components/home/Blog";
import Hero from "../components/home/Hero";
import LogoSlider from "../components/home/LogoSlider";
import NextLevel from "../components/home/NextLevel";
import OurServices from "../components/home/OurServices";
// import RecentProjects from "../components/home/RecentProjects";
import SeoScore from "../components/home/SeoScore";
// import Testimonial from "../components/home/Testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wentry | Innovative Solutions for Modern Businesses",
  description:
    "Wentry provides cutting-edge digital solutions that help your business grow and thrive in the modern world.",
  openGraph: {
    title: "Wentry | Innovative Solutions for Modern Businesses",
    description:
      "Explore Wentry’s innovative digital solutions designed to help your business thrive.",
    url: "https://www.wentry.com",
    siteName: "Wentry",
    images: [
      {
        url: "/images/hero_banner_wentry.webp",
        width: 1200,
        height: 630,
        alt: "Wentry homepage preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <div className="pb-10 md:pb-0">
        <LogoSlider />
      </div>
      <SeoScore />
      <OurServices />
      <NextLevel />
      {/* <RecentProjects /> */}
      <Blog />
      {/* <Testimonial /> */}
    </>
  );
}
