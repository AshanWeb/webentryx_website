"use client";

import React, { useState } from "react";
import { Globe, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactMain() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  //Submit form → Cloudflare Worker
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://example-contact-form.example.workers.dev", // ← your worker URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success(result.message || "Message sent successfully ✅");
        reset();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* === Left Side - Contact Details === */}
          <div className="bg-gradient-to-b from-[#211651] via-[#002cae] to-[#04b2ef] text-white rounded-3xl py-16 px-10 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-white/70 rounded-full" />
                <span className="uppercase text-sm font-semibold tracking-wide">
                  Contact Details
                </span>
                <div className="w-2 h-2 bg-white/70 rounded-full" />
              </div>

              <h2 className="text-4xl font-extrabold mb-4">Our Contacts</h2>
              <p className="text-white/90 mb-10 text-justify md:text-start">
                Give us a call or drop by anytime. We endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Globe className="w-7 h-7 text-white flex-shrink-0" />
                <div>
                  <p className="uppercase text-sm font-semibold text-white/80">
                    Our Address:
                  </p>
                  <p className="text-lg md:text-xl font-semibold">
                    {`47/3, St Rita's Road, Mount Lavinia`}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-7 h-7 text-white flex-shrink-0" />
                <div>
                  <p className="uppercase text-sm font-semibold text-white/80">
                    Our Mailbox:
                  </p>
                  <p className="text-lg md:text-xl font-semibold hover:text-[#EB0029] cursor-pointer">
                    enquiries@webentryx.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-7 h-7 text-white flex-shrink-0" />
                <div>
                  <p className="uppercase text-sm font-semibold text-white/80">
                    Our Phones:
                  </p>
                  <p className="text-lg md:text-xl font-semibold hover:text-[#EB0029] cursor-pointer">
                    Mobile: +94 77 230 67 65
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === Right Side - Contact Form === */}
          <div className="bg-white rounded-3xl py-16 px-10 shadow-lg">
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
              <span className="uppercase text-sm font-bold text-gray-500">
                Get in Touch
              </span>
              <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
            </div>

            <h2 className="text-[28px] md:text-4xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  {...register("name")}
                  className="w-full rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email *"
                  {...register("email")}
                  className="w-full rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Message..."
                  rows={4}
                  {...register("message")}
                  className="w-full rounded-2xl p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-[#EB0029] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#211651] transition disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMain;
