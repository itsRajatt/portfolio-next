"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

import NavBar from "./components/NavBar";
import ProgressBar from "./components/ProgressBar";
import TypeWriter from "./components/TypeWriter";
import ParallaxSection from "./components/ParallaxSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import {
  NAME,
  HERO_TITLE,
  HERO_SUBTITLE,
  socialLinks,
  CONTACT_EMAIL,
  footerText,
} from "./constants/global";

export default function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div
      ref={containerRef}
      className={`min-h-screen transition-colors duration-500 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-[#fafafa]"}`}
    >
      <ProgressBar scaleX={smoothProgress} />

      <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
      </motion.div>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <ParallaxSection offset={100}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className={`absolute top-1/4 -left-1/4 w-96 h-96 ${theme === "dark" ? "bg-orange-500/20" : "bg-orange-300/30"} rounded-full blur-3xl`}
            />
            <div
              className={`absolute bottom-1/4 -right-1/4 w-96 h-96 ${theme === "dark" ? "bg-amber-500/20" : "bg-amber-300/30"} rounded-full blur-3xl`}
            />
          </div>
        </ParallaxSection>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {HERO_TITLE || NAME}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`text-2xl md:text-4xl mb-8 ${theme === "dark" ? "text-orange-400" : "text-orange-600"}`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <TypeWriter
              text={HERO_SUBTITLE || "Senior Frontend Engineer"}
              speed={80}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            Crafting scalable, high-performance web applications with React,
            Next.js, and TypeScript. Specialized in frontend architecture,
            design systems, and performance optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            {[
              {
                href: socialLinks[0]?.href ?? "https://github.com/itsRajatt",
                icon: <Github className="w-6 h-6" />,
              },
              {
                href: socialLinks[1]?.href ?? "https://www.linkedin.com/in/rajat-thakur-ab68111b9",
                icon: <Linkedin className="w-6 h-6" />,
              },
              {
                href: socialLinks[2]?.href ?? `mailto:${CONTACT_EMAIL}`,
                icon: <Mail className="w-6 h-6" />,
              },
              {
                href: socialLinks[3]?.href ?? "tel:+919877249519",
                icon: <Phone className="w-6 h-6" />,
              },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} transition-all hover:scale-110`}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown
            className={`w-8 h-8 ${theme === "dark" ? "text-white/50" : "text-black/50"}`}
          />
        </motion.div>
      </section>

      <About theme={theme} />
      <Experience theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />

      <footer className="py-8 bg-black text-center">
        <p className="text-gray-400">{footerText}</p>
      </footer>
    </div>
  );
}
