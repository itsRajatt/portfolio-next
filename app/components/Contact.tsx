"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { CONTACT_EMAIL } from "../constants/global";

type ContactProps = {
  theme?: "dark" | "light";
};

const Contact: React.FC<ContactProps> = ({ theme = "dark" }) => (
  <section
    id="contact"
    aria-labelledby="contact-title"
    className={`py-32 ${theme === "dark" ? "bg-[#0f0f0f] text-gray-300" : "bg-white text-gray-700"} relative overflow-hidden scroll-mt-28`}
  >
    <ParallaxSection offset={50}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${theme === "dark" ? "bg-orange-500/10" : "bg-orange-300/20"} rounded-full blur-3xl`}
        />
      </div>
    </ParallaxSection>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-5xl md:text-6xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Let's Build Something Amazing
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-xl mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-6 justify-center"
      >
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all hover:scale-105 flex items-center gap-2"
        >
          <Mail className="w-5 h-5" /> Get In Touch
        </a>
        <a
          href="tel:+919877249519"
          className={`px-8 py-4 rounded-full ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} font-semibold transition-all hover:scale-105 flex items-center gap-2`}
        >
          <Phone className="w-5 h-5" /> Call Me
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
