import Image from "next/image";
import Link from "next/link";

export default function NextLevel() {
    return (
        <section className="relative  lg:max-w-4xl xl:max-w-6xl mx-6 md:mx-auto h-[260px] flex items-center justify-center">
            {/* Background image */}
            <Image
                src="/images/bg_counter.webp"
                alt="Next Level Background"
                fill
                className="object-cover rounded-xl"
                priority
            />

            {/* Overlay for content */}
            <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col  items-center justify-between max-w-6xl w-full px-6 ">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left mb-6 leading-[100%] md:leading-normal">
                    Take Website to Next Level!
                </h2>

                {/* CTA Button */}
                <Link
                    href="/contact"
                    className="px-6 py-3 text-white text-[16px] font-medium rounded-lg shadow-lg bg-[#EB0029] hover:bg-[#211651]/90
                     transition-colors duration-300"
                >
                    Book Your Appointment
                </Link>
            </div>
        </section>
    );
}
