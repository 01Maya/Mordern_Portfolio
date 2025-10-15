"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

// Experience data
export const experiencesData = [
  {
    title: "Graduated Bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying and immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 3 years across two roles, while upskilling to full stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "Currently working as a full-stack freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
] as const;

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="group" // Group class for hover effects
            contentStyle={{
              background:
                theme === "light"
                  ? "#f3f4f6"
                  : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "none",
              textAlign: "left",
              padding: "1rem 1.5rem",
              borderRadius: "0.75rem",
              position: "relative",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Tilt icon on hover */}
            <style global jsx>{`
              .vertical-timeline-element.group:hover .vertical-timeline-element-icon {
                transform: rotate(15deg) scale(1.1);
              }
            `}</style>

            {/* Card wrapper with gradient border */}
            <div className="relative group rounded-xl p-1 transition-transform duration-300 hover:scale-[1.02]">
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div className="relative rounded-lg bg-white dark:bg-white/5 p-5">
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
