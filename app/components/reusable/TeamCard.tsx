"use client";

import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

interface TeamCardProps {
  name: string;
  role?: string;
  description: string;
  image: string;
}

export default function TeamCard({ name, description, image }: TeamCardProps) {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-cyan-400 rounded-2xl px-5 py-24 flex flex-col items-center text-center shadow-lg max-w-xs ">
      
      {/* Profile Image */}
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h3 className="text-white text-xl font-bold mb-2">{name}</h3>

      {/* Description */}
      <p className="text-white text-sm mb-4">{description}</p>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a href="#" className="p-2 bg-white rounded-full text-blue-400 hover:bg-blue-100 transition-colors">
          <Twitter size={18} />
        </a>
        <a href="#" className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-100 transition-colors">
          <Facebook size={18} />
        </a>
        <a href="#" className="p-2 bg-white rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="#" className="p-2 bg-white rounded-full text-pink-400 hover:bg-pink-100 transition-colors">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  );
}
