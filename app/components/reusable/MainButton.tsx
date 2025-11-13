import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MainButtonProps {
  text?: string; // optional, defaults to "Start Now"
  href?: string; // optional, defaults to "/"
}

export default function MainButton({ text = "", href = "/" }: MainButtonProps) {
  return (
    <div>
      <Link
        href={href}
        className="w-fit group flex items-center bg-[#EB0029] px-6 py-3 text-white font-semibold rounded-full hover:bg-[#211651]/90 transition-all"
      >
        {text}
        <span className="ml-3 flex items-center justify-center w-8 h-8 bg-white rounded-full transition-transform group-hover:translate-x-1">
          <ArrowRight className="text-[#EB0029] w-4 h-4" />
        </span>
      </Link>
    </div>
  );
}
