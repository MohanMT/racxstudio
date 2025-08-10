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

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
        className={`fixed rounded-full top-2 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-glassmorphism shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-5 p-2">
          <div className=" flex items-center justify-between">
            <div className="animate-pulse-custom">
              <BrandIcon scrolled={scrolled} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => {
                let buttonClasses = "";
                if (isActive(item.path)) {
                  buttonClasses = "text-accent bg-accent/10 shadow-lg";
                } else if (scrolled) {
                  buttonClasses = "text-white hover:text-accent hover:bg-accent/5";
                } else {
                  buttonClasses = "text-primary hover:text-accent hover:bg-accent/5";
                }

                return (
                  <div key={item.path} className="nav-item">
                    <Button
                      type="link"
                      href={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${buttonClasses}`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span
                        className={`font-medium ${
                          scrolled ? "text-white" : "text-primary"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Button>
                  </div>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className={`lg:hidden hamburger ${
                isMenuOpen ? "open" : ""
              } p-2 rounded-lg nav-glassmorphism flex-shrink-0`}
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-menu ${
          isMenuOpen ? "open" : ""
        } fixed top-0 right-0 h-full w-80 z-50 lg:hidden`}
      >
        <div className="flex flex-col h-full px-8">
          {menuItems.map((item, index) => (
            <div
              key={item.path}
              className="nav-item mb-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                type="link"
                href={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-4 w-full px-6 py-4 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-accent bg-accent/20 shadow-lg"
                    : "text-white hover:text-accent hover:bg-accent/10"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xl font-semibold text-white">
                  {item.label}
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/50 z-40 lg:hidden cursor-pointer"
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}
    </>
  );
}
