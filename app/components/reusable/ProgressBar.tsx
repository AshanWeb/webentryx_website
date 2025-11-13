"use client";

import React from "react";

interface ProgressBarProps {
  title: string;
  value: number; // 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, value }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-[#1a1b1e] font-semibold">{title}</span>
        <span className="text-[#1a1b1e] font-semibold">{value}%</span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-4 bg-[#211651] rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
