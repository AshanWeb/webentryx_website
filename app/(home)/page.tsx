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
  title: "Webentryx | Innovative Digital Solutions for Modern Businesses",
  description:
    "Webentryx delivers innovative digital solutions to enhance performance, increase visibility & drive sustainable business growth across all digital channels.",
  openGraph: {
    title: "Webentryx | Innovative Digital Solutions for Modern Businesses",
    description:
      "Webentryx delivers innovative digital solutions to enhance performance, increase visibility & drive sustainable business growth across all digital channels.",
    url: "https://www.webentryx.com",
    siteName: "Webentryx",
    images: [
      {
        url: "https://www.webentryx.com/webentryx_main.jpg",
        width: 1200,
        height: 630,
        alt: "Webentryx homepage preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
   other: {
    'google-site-verification': 'uhPQ1JOfk0Ihsmae78MFAL9HSnvO_8IX0a7dhQ7mdls',
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
