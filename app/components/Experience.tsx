"use client";

import React from "react";
import { experiences } from "../constants/global";
import { motion } from "framer-motion";

type Props = { theme: "dark" | "light" };

const Experience: React.FC<Props> = ({ theme }) => {
  return (
    <section
      id="experience"
      className={`py-32 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-[#fafafa]"} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`text-5xl font-bold mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Experience
        </motion.h2>
        <div className="space-y-12 relative">
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}
          />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-20"
            >
              <div
                className={`absolute left-6 top-2 w-5 h-5 rounded-full border-4 ${theme === "dark" ? "border-orange-500 bg-[#0a0a0a]" : "border-orange-600 bg-[#fafafa]"}`}
              />
              <div
                className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5" : "bg-white"} border ${theme === "dark" ? "border-white/10" : "border-black/10"} hover:border-orange-500/50 transition-all`}
              >
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <div>
                    <h3
                      className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-1`}
                    >
                      {exp.title}
                    </h3>
                    <div className="text-orange-500 font-semibold">
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                  <div
                    className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} font-mono text-sm`}
                  >
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      <span className="text-orange-500">▹</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
