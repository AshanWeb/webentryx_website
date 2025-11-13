"use client";

import { Search } from "lucide-react";




export default function SearchBar() {

    return (
        <div className="flex items-center w-full max-w-sm bg-white rounded-full shadow border border-gray-100 px-5 py-2">
            <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="ml-2 bg-[#FF4B2B] hover:bg-[#e63e1f] text-white p-2 rounded-full transition-colors">
                <Search size={18} />
            </button>
        </div>
    );
}
