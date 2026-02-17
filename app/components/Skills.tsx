"use client";

import React from "react";
import { skills } from "../constants/global";
import { motion } from "framer-motion";

type Props = { theme: "dark" | "light" };

const Skills: React.FC<Props> = ({ theme }) => {
  return (
    <section
      id="skills"
      className={`py-32 ${theme === "dark" ? "bg-[#0f0f0f]" : "bg-white"} relative`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`text-5xl font-bold mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"} border ${theme === "dark" ? "border-white/10" : "border-black/10"} hover:border-orange-500/50 transition-all`}
            >
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(items as unknown as string[]).map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${theme === "dark" ? "bg-white/10 text-gray-300" : "bg-black/10 text-gray-700"}`}
                  >
                    {skill}
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

export default Skills;
