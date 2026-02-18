"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const NavBar: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation sections
  const navSections = ["about", "experience", "skills", "projects", "contact"];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        } ${theme === "dark" ? "bg-black/50" : "bg-white/50"} border-b ${
          theme === "dark" ? "border-white/10" : "border-black/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#hero"
              className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
              aria-label="Go to homepage"
            >
              RT
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navSections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize text-sm lg:text-base ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"} transition-colors`}
                >
                  {section}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} transition-all hover:scale-110`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} transition-all`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg ${theme === "dark" ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10"} transition-colors`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${theme === "dark" ? "bg-black/95" : "bg-white/95"} backdrop-blur-lg`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <span
              className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-2 rounded-lg ${theme === "dark" ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10"} transition-colors`}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-4">
            {navSections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={handleNavClick}
                className={`block py-3 px-4 rounded-lg capitalize text-lg font-medium ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-black hover:bg-black/10"
                } transition-all`}
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;