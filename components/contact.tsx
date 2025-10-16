"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 🔑 Add required Web3Forms fields
    formData.append("access_key", "YOUR_PUBLIC_KEY_HERE"); // replace with your key
    formData.append("subject", "New Contact Form Submission");
    formData.append("from_name", formData.get("name") as string);
    formData.append("replyto", formData.get("email") as string);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData, // Must use FormData
      });

      const json = await res.json();

      if (json.success) {
        toast.success("✅ Message sent successfully!");
        form.reset();
      } else {
        console.log("Web3Forms response:", json); // debug info
        toast.error(json.message || "❌ Something went wrong. Check console.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("❌ Error sending message. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Toaster position="top-right" reverseOrder={false} />

      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col space-y-4" onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="relative group rounded-xl p-1 transition-transform duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>
          <input
            className="relative rounded-lg w-full h-14 px-4 bg-white dark:bg-white/80 focus:outline-none"
            name="name"
            type="text"
            required
            placeholder="Your name"
          />
        </div>

        {/* Email input */}
        <div className="relative group rounded-xl p-1 transition-transform duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>
          <input
            className="relative rounded-lg w-full h-14 px-4 bg-white dark:bg-white/80 focus:outline-none"
            name="email"
            type="email"
            required
            placeholder="Your email"
          />
        </div>

        {/* Message textarea */}
        <div className="relative group rounded-xl p-1 transition-transform duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>
          <textarea
            className="relative rounded-lg w-full h-52 px-4 py-3 bg-white dark:bg-white/80 focus:outline-none"
            name="message"
            placeholder="Your message"
            required
          />
        </div>
        <div className="flex justify-center mt-4">
          <SubmitBtn/>
        </div>
      </form>
    </motion.section>
  );
}
