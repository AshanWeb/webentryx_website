import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Send,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="md:res-con bg-gradient-to-r from-[#211651] via-[#002cae] to-[#04b2ef]  relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-12 2xl:px-0 py-20 md:py-32 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link href="/">
            <Image
              src={"/images/logo-white.png"}
              alt="Webentry"
              width={112}
              height={28}
              className="w-auto h-5 mt-2"
            />
          </Link>
          <h3 className="footer-link mt-7 ">
            Elevate brand performances by enabling cutting edge digital &
            analytical platforms.
          </h3>
          <ul className="flex gap-4 mt-10">
            {/* <li className="footer-social">
              <X className="w-4 h-4 text-[#78dafb]" />
            </li> */}
            {/* <li className="footer-social">
              <FacebookIcon className="w-4 h-4 text-[#2255ee]" />
            </li> */}
            <a
              href="https://www.linkedin.com/company/webentryx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="footer-social">
                <LinkedinIcon className="w-4 h-4" />
              </li>
            </a>
            {/* <li className="footer-social">
              <InstagramIcon className="w-4 h-4 text-[#ffb14c]" />
            </li> */}
          </ul>
        </div>

        <div>
          <h4 className="footer-title mb-7">Services</h4>
          <ul className="footer-link space-y-3 text-white/80">
            <li>Digital Marketing Consulting</li>
            <li>Search Engine Optimization</li>
            <li>Online advertising</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title mb-7">Quick Links</h4>
          <ul className="footer-link text-white/80">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div>
          <h4 className="footer-title mb-7">Contacts</h4>
          <ul className="footer-link space-y-3 ">
            <li>
              Address: 47/3, St Rita&apos;s Road,
              <br />
              Mount Lavinia
            </li>

            <li>Email: enquiries@webentryx.com</li>
            <li>Phone: +94 77 230 67 65</li>
            <li>Open: Mon 8:00 am - 18:00 pm</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 2xl:px-0 flex flex-col md:flex-row items-center justify-center text-[#acebff] pb-8 gap-1 md:gap-5 pt-8 border-t border-white/20">
        {/* <span className="order-2 md:order-1">Design and developed by HRock Digital</span> */}
        © {new Date().getFullYear()} Webentryx. All Rights Reserved.
      </div>
    </footer>
  );
}
