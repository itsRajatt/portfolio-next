"use client";

import React from "react";
import { aboutText } from "../constants/global";
import { motion } from "framer-motion";

type Props = { theme: "dark" | "light" };

const About: React.FC<Props> = ({ theme }) => {
  return (
    <section
      id="about"
      className={`py-32 ${theme === "dark" ? "bg-[#0f0f0f]" : "bg-white"} relative`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`text-5xl font-bold mb-12 ${theme === "dark" ? "text-white" : "text-black"}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"} space-y-6`}
        >
          <p>{aboutText.intro}</p>
          <p>{aboutText.highlights}</p>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            {aboutText.stats.map(({ stat, label }) => (
              <div
                key={label}
                className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"} border ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat}
                </div>
                <div
                  className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          <p>
            <span className="text-orange-500 font-semibold">Education:</span>{" "}
            {aboutText.education}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
