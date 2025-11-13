import Image from "next/image";
import MainButton from "../reusable/MainButton";
import BlogCard from "../reusable/BlogCard";
import BlogGridWithSearch from "../blog/BlogGridWithSearch";
import { getBlogPosts } from "@/lib/contentful";


export default async function Blog() {

    const posts = await getBlogPosts();

    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">
            {/* Background shape */}
            {/* <Image
                src="/images/shape3-home.png"
                alt="Background Shape"
                width={237}
                height={311}
                className="absolute top-36 right-0 z-10 w-auto h-[270px] hidden md:block"
            /> */}

            <div className="lg:max-w-4xl xl:max-w-6xl mx-auto px-6 md:px-0 text-center md:text-start flex flex-col md:flex-row items-center justify-between">

                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center justify-center md:justify-start  gap-2 mb-2 md:mb-4">
                        <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                        <span className="uppercase text-sm text-[#a5b7d2] font-bold">our blog</span>
                        <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                    </div>
                    <h2 className="text-4xl font-bold text-[#1a1b1e] mb-2 md:mb-4">
                        Our Latest Media
                    </h2>
                    <p className="text-[16px] text-[#606060] max-w-2xl mx-auto md:mx-0 mb-6 md:mb-12 text-justify md:text-start">
                        Our campaigns get your business in front of the right people at the
                        right time to increase organic traffic and boost engagement.
                    </p>
                </div>

                {/* Blog Slider */}
                <div className="mb-6 md:mb-0">
                    <MainButton text="All News" href="/blog" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto lg:px-12 xl:px-8 1440xl:px-4 2xl:px-16">
                <BlogGridWithSearch posts={posts} />
            </div>
        </section>
    );
}
