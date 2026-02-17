"use client";

import React from "react";
import { projects } from "../constants/global";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = { theme: "dark" | "light" };

const Projects: React.FC<Props> = ({ theme }) => {
  return (
    <section
      id="projects"
      className={`py-32 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-[#fafafa]"} relative`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`text-5xl font-bold mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5" : "bg-white"} border ${theme === "dark" ? "border-white/10" : "border-black/10"} hover:border-orange-500/50 transition-all group`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"} flex items-center gap-2`}
              >
                {project.name}
                {/* <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" /> */}
              </h3>
              <p
                className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${theme === "dark" ? "bg-orange-500/20 text-orange-400" : "bg-orange-100 text-orange-700"}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
