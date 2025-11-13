"use client";

import React from "react";

interface BlogHeroProps {
    title: string;
    backgroundImage: string;
}

export default function BlogHero({ title, backgroundImage }: BlogHeroProps) {
    return (
        <div
            className="w-full h-[330px] flex items-center justify-center bg-cover bg-center mt-[100px]"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <h2 className="text-[42px] text-[#1a1b1e] font-bold text-center">{title}</h2>
        </div>
    );
}
