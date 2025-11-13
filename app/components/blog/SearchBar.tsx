"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  fields: {
    title: string;
    slug: string;
  };
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filtered, setFiltered] = useState<BlogPost[]>([]);

  // Fetch posts when the component mounts
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/blog-posts"); // We'll create this API route next
      const data = await res.json();
      setPosts(data);
      setFiltered(data);
    }
    fetchPosts();
  }, []);

  // Filter posts when user types
  useEffect(() => {
    if (query.trim() === "") {
      setFiltered(posts);
    } else {
      setFiltered(
        posts.filter((p) =>
          p.fields.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, posts]);

  return (
    <div className="space-y-3">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blog posts..."
          className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:ring-2 focus:ring-[#EB0029] outline-none"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>

      {query && filtered.length > 0 && (
        <ul className="bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto">
          {filtered.map((post) => (
            <li key={post.fields.slug}>
              <Link
                href={`/blog/${post.fields.slug}`}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                {post.fields.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {query && filtered.length === 0 && (
        <p className="text-sm text-gray-500">No posts found.</p>
      )}
    </div>
  );
}
