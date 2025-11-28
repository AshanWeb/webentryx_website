"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/contentful";
import { formatDate } from "../../../utils/helpers";
import { Clock } from "lucide-react";
import Image from "next/image";

interface Props {
  posts: BlogPost[];
}

export default function BlogGridWithSearch({ posts }: Props) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.fields.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-8 1440xl:px-12 2xl:px-0 py-10 md:py-16">
      {/* Optional Search Bar */}
      {/* <div className="flex justify-end mb-8">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/3 lg:w-1/4 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#74947f] transition"
        />
      </div> */}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {filteredPosts.map((post) => (
          <div
            key={post.sys.id}
            className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition bg-white flex flex-col"
          >
            {post.fields.image && (
              <Link href={`/blog/${post.fields.slug}`}>
                <Image
                  src={`https:${post.fields.image.fields.file.url}`}
                  alt={post.fields.title}
                  width={750}
                  height={500}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-60 xl:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
            )}

            <div className="p-6 flex flex-col gap-4 flex-grow">
              <div className="text-sm text-gray-500 flex justify-between items-center">
                <div className="flex items-center gap-1 group cursor-pointer">
                  <Clock
                    size={18}
                    className="text-[#a5b7d2] group-hover:text-[#fe4c1c]"
                  />
                  <span className="group-hover:text-black transition-colors">
                    {formatDate(post.fields.date)}
                  </span>
                </div>
              </div>

              <Link href={`/blog/${post.fields.slug}`}>
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1a1b1e] mb-2 hover:text-[#eb0029] cursor-pointer duration-300 line-clamp-2">
                  {post.fields.title}
                </h1>
              </Link>

              <p className="text-[#606060] text-[15px] sm:text-[16px] line-clamp-3 leading-relaxed">
                {post.fields.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No blog posts found.
        </p>
      )}
    </section>
  );
}
