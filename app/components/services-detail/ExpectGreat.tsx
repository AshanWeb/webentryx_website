"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

function ServicesSec() {
    const [isAfter, setIsAfter] = useState(false);

    const toggleHandler = useCallback(() => {
        setIsAfter(prev => !prev);
    }, []);

    const boxes = [
        {
            title: "SEO Optimization",
            before: "104,457",
            after: "314,297",
            color: "#00c3ff",
            bgImage: "/images/bg-chart1-1.png",
            
           
        },
        {
            title: "Content Marketing",
            before: "26,740",
            after: "34,369",
            color: "#0160e7",
            bgImage: "/images/bg-chart2-1.png",
           
        },
        {
            title: "Conversion Rate",
            before: "780%",
            after: "980%",
            color: "#EB0029",
            bgImage: "/images/bg-chart3-1.png",
        
        },
    ];

    // Type-safe variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-16 relative">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    See the Difference We Make
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our data-driven strategies deliver measurable results across all key performance indicators.
                </p>
            </div>

            {/* Toggle */}
            <div className="flex justify-center items-center gap-4 mb-12">
                <span className={`text-[14px] uppercase font-bold transition-colors duration-300 ${!isAfter ? "text-[#EB0029]" : "text-gray-400"}`}>
                    Before
                </span>

                <button
                    className="w-16 h-8 bg-gray-200 rounded-full p-1 cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-[#211651] focus:ring-opacity-50"
                    onClick={toggleHandler}
                    aria-pressed={isAfter}
                    aria-label={`Toggle to view ${isAfter ? "before" : "after"} results`}
                >
                    <motion.div
                        className="w-6 h-6 bg-[#211651] rounded-full shadow-lg"
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        animate={{ x: isAfter ? 32 : 0 }}
                    />
                </button>

                <span className={`text-[14px] uppercase font-bold transition-colors duration-300 ${isAfter ? "text-[#21165]" : "text-gray-400"}`}>
                    After
                </span>
            </div>

            {/* Boxes */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {boxes.map((box, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="relative bg-white rounded-2xl flex flex-col items-center pt-14 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 aspect-[1/1] overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Text */}
                        <div className="flex-1 z-10 text-center">

                            <div className="">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={isAfter ? "after" : "before"}
                                        className="block font-bold"
                                        style={{ color: box.color, fontSize: "36px", fontWeight: "bold" }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isAfter ? box.after : box.before}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">{box.title}</h3>
                        </div>

                        {/* Chart Image */}
                        <div className="absolute bottom-0 right-0 w-full h-2/5 flex justify-end pointer-events-none opacity-80">
                            <div className="relative w-full h-full">
                                <Image
                                    src={box.bgImage}
                                    alt={`Chart showing ${box.title} results`}
                                    fill
                                    className="object-contain object-right-bottom"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Decorative */}
            <Image src="/images/man.webp" alt="Decorative image" width={81} height={221} className="absolute bottom-20 right-0 -z-10" />
            <Image src="/images/women.webp" alt="Decorative image" width={81} height={221} className="absolute bottom-20 left-0 -z-10" />
        </section>
    );
}

export default ServicesSec;
