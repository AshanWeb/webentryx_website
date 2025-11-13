"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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

export default function InnerHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close desktop dropdown on outside click
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
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto container max-w-7xl px-6 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={140}
              height={40}
              className="w-full h-5"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-10"
            ref={dropdownRef}
          >
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
                  <div className="inline-block">
                    <Link
                      href={n.href}
                      className="flex items-center gap-1 text-[16px] font-bold text-[#1A1B1E] hover:text-[#EB0029] transition-colors"
                    >
                      {n.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === n.label ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </div>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === n.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 flex flex-col bg-white shadow-md rounded-md w-72 z-50 p-2"
                        onMouseEnter={() => {
                          if (timeoutRef.current)
                            clearTimeout(timeoutRef.current);
                          setActiveDropdown(n.label);
                        }}
                        onMouseLeave={() => {
                          timeoutRef.current = setTimeout(() => {
                            setActiveDropdown(null);
                          }, 150);
                        }}
                      >
                        {n.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="relative block px-6 py-2 text-sm text-gray-700 hover:text-[#EB0029] hover:font-bold group"
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
                  className="text-[16px] font-bold text-[#1A1B1E] hover:text-[#EB0029] transition-colors"
                >
                  {n.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA (Desktop only) */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="rounded-full bg-[#EB0029] text-white text-[16px] font-semibold px-7 py-3 transition-all hover:bg-[#211651] shadow-2xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-0 text-[#1A1B1E]"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0.8, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden bg-[#211651] border-t border-gray-200 shadow-md"
          >
            <div className="flex flex-col">
              {NAV.map((n, i) =>
                n.children ? (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center w-full px-6 py-4 border-b border-gray-200/30">
                      <Link
                        href={n.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-[16px] font-semibold text-white/90 hover:text-[#EB0029]"
                      >
                        {n.label}
                      </Link>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === n.label ? null : n.label
                          )
                        }
                        className="text-white"
                      >
                        <ChevronRight
                          size={20}
                          className={`transition-transform ${
                            mobileDropdown === n.label ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {mobileDropdown === n.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="pl-6 bg-[#1a1240]"
                        >
                          {n.children.map((child, index) => (
                            <motion.div
                              key={child.label}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.05,
                                duration: 0.5,
                              }}
                            >
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-3 text-sm text-white/90 hover:text-[#ff5e14] border-b border-gray-200/30"
                              >
                                {child.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                  >
                    <Link
                      href={n.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-6 py-4 text-[16px] font-semibold text-white/90 hover:text-[#EB0029] border-b border-gray-200/30"
                    >
                      <span>{n.label}</span>
                      <ChevronRight size={20} className="text-gray-400" />
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
