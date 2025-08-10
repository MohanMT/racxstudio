/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👥" },
    { path: "/project", label: "Portfolio", icon: "💼" },
    { path: "/team", label: "Team", icon: "🚀" },
    { path: "/contact", label: "Contact", icon: "📧" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-glassmorphism shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="animate-pulse-custom">
              <BrandIcon />
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.path} className="nav-item">
                  <Button
                    type="link"
                    href={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-accent bg-accent/10 shadow-lg"
                        : "text-background hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    <span className="text-lg animate-bounce-custom">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </div>
              ))}
            </nav>

            <button
              type="button"
              className={`lg:hidden hamburger ${
                isMenuOpen ? "open" : ""
              } p-2 rounded-lg nav-glassmorphism`}
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${
          isMenuOpen ? "open" : ""
        } fixed top-0 right-0 h-full w-80 z-40 lg:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          {menuItems.map((item, index) => (
            <div
              key={item.path}
              className="nav-item mb-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                type="link"
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-4 w-full px-6 py-4 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-accent bg-accent/20 shadow-lg animate-glow"
                    : "text-background hover:text-accent hover:bg-accent/10"
                }`}
              >
                <span className="text-2xl animate-float">{item.icon}</span>
                <span className="text-xl font-semibold">{item.label}</span>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/50 z-30 lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setIsMenuOpen(false)}
          aria-label="Close menu"
        />
      )}
    </>
  );
}
