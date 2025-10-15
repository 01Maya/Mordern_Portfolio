"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Figma",
  "Git",
  "Github",
  "Tailwind CSS",
  "SQL",
  "Python",
  "Framer Motion",
  "VercelV0",
] as const;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 dark:text-white/80">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              boxShadow: "0px 0px 12px rgba(100,100,255,0.4)",
            }}
            className="relative bg-white/80 border border-gray-200 dark:bg-white/10 dark:border-white/20 rounded-xl px-6 py-3 cursor-default select-none backdrop-blur-md transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20"
          >
            <span className="font-medium tracking-wide">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
