"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const NavBar: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md ${theme === "dark" ? "bg-black/50" : "bg-white/50"} border-b ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          RT
        </div>
        <div className="flex items-center gap-6">
          {["about", "experience", "skills", "projects", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`capitalize ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"} transition-colors`}
              >
                {section}
              </a>
            ),
          )}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} transition-colors`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
