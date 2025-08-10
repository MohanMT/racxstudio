import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👥" },
    { path: "/project", label: "Portfolio", icon: "💼" },
    { path: "/team", label: "Team", icon: "🚀" },
    { path: "/contact", label: "Contact", icon: "📧" },
  ];

  const getButtonClass = (path) => {
    if (location.pathname === path) {
      return "text-accent bg-accent/10";
    }
    if (scrolled) {
      return "text-white hover:text-accent";
    }
    return "text-primary hover:text-accent";
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 ${scrolled ? "nav-glassmorphism" : "bg-transparent"}`}>
        <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
          
          <BrandIcon scrolled={scrolled} />

          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                type="link"
                href={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition ${getButtonClass(item.path)}`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg nav-glassmorphism"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-white transition ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>

        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
            onKeyDown={(e) => e.key === 'Escape' && setIsMenuOpen(false)}
            aria-label="Close menu"
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-primary p-6">
            <div className="flex justify-end mb-8">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-accent/20 text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                type="link"
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-4 w-full p-4 mb-4 rounded-xl text-white hover:bg-accent/10"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xl">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
