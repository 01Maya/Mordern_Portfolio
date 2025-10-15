import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-6 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Ricardo. All rights reserved.
      </small>
            <div className="flex justify-center gap-3 mb-4">
        <a
          className="bg-white p-2.5 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.1] hover:scale-[1.1] active:scale-105 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60 dark:border-white/20"
          href="https://linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="text-[1.1rem]" />
        </a>

        <a
          className="bg-white p-2.5 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.1] hover:scale-[1.1] active:scale-105 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60 dark:border-white/20"
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="text-[1.1rem]" />
        </a>
      </div>
    </footer>
  );
}
