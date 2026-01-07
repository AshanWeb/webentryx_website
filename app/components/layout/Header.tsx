"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "SEO & AI Visibility", href: "/services/services-detail" },
      { label: "Paid Media", href: "/services/paid-media" },
      { label: "Analytics & Optimization", href: "/services/analytics" },
      {
        label: "Digital Marketing Consulting",
        href: "/services/digital-marketing",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside closes dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`md:res-con fixed bg-transparent border-b border-white/30 md:border-none inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white md:bg-white/95 border-b border-gray-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={scrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="Webentry"
              width={112}
              height={28}
              className="h-5 w-auto hidden md:block"
              priority
            />
            <Image
              src={scrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="Webentry"
              width={112}
              height={28}
              className="h-5 w-auto md:hidden"
              priority
            />

            {/* <Image
              src={scrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="Webentry"
              width={112}
              height={28}
              className="w-full h-5 hidden md:block"
            />
            <Image
              src={scrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="Webentry"
              width={112}
              height={28}
              className="w-full h-5 md:hidden"
            /> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {NAV.map((n) =>
              n.children ? (
                <div
                  key={n.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    setActiveDropdown(n.label);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 150);
                  }}
                >
                  <Link
                    href={n.href}
                    className={`flex items-center gap-1 navlink-fonts transition-colors ${
                      scrolled
                        ? "text-[#1a1b1e] hover:text-[#EB0029]"
                        : "text-white hover:text-[#EB0029]"
                    }`}
                  >
                    {n.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === n.label ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {activeDropdown === n.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 flex flex-col bg-white shadow-md rounded-md mt-2 w-72 z-50 p-2"
                      >
                        {n.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="relative block px-6 py-2 text-sm text-gray-700 hover:text-[#eb0029] hover:font-bold group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="inline-flex items-center">
                              <span className="w-2 h-2 rounded-full mr-2 transition-all duration-300 bg-transparent group-hover:bg-[#EB0029]" />
                              {child.label}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={n.label}
                  href={n.href}
                  className={`navlink-fonts transition-colors ${
                    scrolled
                      ? "text-[#1a1b1e] hover:text-[#EB0029]"
                      : "text-white hover:text-[#EB0029]"
                  }`}
                >
                  {n.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#1a1b1e] bg-blue-200 p-2 rounded-full"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0.8, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:hidden bg-white border-t border-white/10 overflow-hidden w-[90%] h-screen"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              {NAV.map((n, navIndex) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 1, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navIndex * 0.1, duration: 0.8 }}
                >
                  {n.children ? (
                    <div className="overflow-hidden">
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === n.label ? null : n.label
                          )
                        }
                        className="flex justify-between w-full py-4 border-b border-[#0b1b50] text-[#1a1b1e] hover:text-[#ff5e14] transition-all duration-300"
                      >
                        <span>{n.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            activeDropdown === n.label
                              ? "rotate-180 text-[#ff5e14]"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === n.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="pl-4 py-2"
                          >
                            {n.children.map((child, index) => (
                              <motion.div
                                key={child.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: index * 0.08,
                                  duration: 0.8,
                                }}
                              >
                                <Link
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="block py-3 border-b border-[#0b1b50] text-[#1a1b1e] text-sm hover:text-[#ff5e14]"
                                >
                                  {child.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 border-b border-[#0b1b50] hover:text-[#ff5e14] text-[#1a1b1e]"
                    >
                      {n.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
