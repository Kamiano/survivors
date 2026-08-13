"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Heart, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track exactly WHICH dropdown is active by storing its name string (or null if closed)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync mobile state closed if the full drawer closes
  useEffect(() => {
    if (!isMobileMenuOpen) setActiveMobileDropdown(null);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "Who We Are", href: "/who-we-are" },
        { name: "Our Team", href: "#" }
      ],
    },
    {
      name: "Priorities",
      dropdown: [
        { name: "Expand Health and Wellness Response", href: "/health" },
        { name: "Promote and Protect the Rights of Key Population", href: "/rights" },
        { name: "Expand Livelihoods Options for Key Population", href: "/livelihoods" },
        { name: "Organizational Strengthening and Sustainability", href: "/organizational" },
      ],
    },
    { name: "Our Strategic Plan", href: "/plan" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveRoute = (link: typeof navLinks[0]) => {
    if (link.href === pathname) return true;
    if (link.dropdown) {
      return link.dropdown.some((item) => item.href === pathname);
    }
    return false;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? "bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-gray-100"
          : "bg-white/15 backdrop-blur-md py-6 border-b border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="h-12 w-auto transition-transform duration-300 group-hover:scale-102">
              <img
                src="/images/logo.png"
                alt="Survivors org logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative py-2"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 font-body text-sm font-semibold transition-colors duration-300 cursor-pointer ${isActiveRoute(link) ? "text-primary font-bold" : "text-gray-800 hover:text-primary"
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/4 mt-2 w-80 bg-white/95 backdrop-blur-2xl rounded-2xl border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden p-2 flex flex-col"
                      >
                        {/* Decorative Top Accent Bar */}
                        <div className="h-1 w-12 bg-primary/20 rounded-full mx-auto mb-2 mt-1" />

                        {link.dropdown.map((item) => {
                          const isDropdownActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`group/item flex items-center justify-between px-4 py-3.5 text-sm rounded-xl transition-all duration-300 ${isDropdownActive
                                ? "bg-primary/5 text-primary font-bold"
                                : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                                }`}
                            >
                              <span>{item.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-primary" />
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-body text-sm font-semibold transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${isActiveRoute(link)
                    ? "text-primary font-bold after:w-full"
                    : "text-gray-800 hover:text-primary after:w-0 hover:after:w-full"
                    }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/support"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-opacity-90 text-white font-heading font-bold px-6 py-3 rounded-full shadow-md hover:shadow-primary/10 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Support Us</span>
              <Heart className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-800 hover:text-primary transition-colors duration-300 p-2 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-45 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white z-50 p-8 flex flex-col shadow-2xl border-l border-gray-100 lg:hidden"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="h-10 w-auto">
                  <img src="/images/logo.png" alt="Survivors org Logo" className="h-full w-auto object-contain" />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-800 hover:text-primary cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 overflow-y-auto grow pr-2">
                {navLinks.map((link, idx) =>
                  link.dropdown ? (
                    <div key={link.name} className="flex flex-col">
                      {/* Tappable Header Option for Accordion */}
                      <button
                        onClick={() =>
                          setActiveMobileDropdown(
                            activeMobileDropdown === link.name ? null : link.name
                          )
                        }
                        className={`font-heading text-lg font-bold flex items-center justify-between transition-colors duration-300 cursor-pointer ${isActiveRoute(link) ? "text-primary" : "text-gray-800"
                          }`}
                      >
                        {/* Dynamic name instead of hardcoded word "Priorities" */}
                        <span>{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-gray-500 ${activeMobileDropdown === link.name ? "rotate-180 text-primary" : ""
                          }`} />
                      </button>

                      {/* Smooth Collapsible Section */}
                      <AnimatePresence initial={false}>
                        {activeMobileDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden pl-4 border-l-2 border-gray-100 space-y-4"
                          >
                            {link.dropdown.map((item) => {
                              const isDropdownActive = pathname === item.href;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`block text-base transition-colors ${isDropdownActive ? "text-primary font-bold" : "text-gray-600 hover:text-primary"
                                    }`}
                                >
                                  {item.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-heading text-lg font-bold transition-colors duration-300 flex items-center justify-between group ${isActiveRoute(link) ? "text-primary" : "text-gray-800 hover:text-primary"
                          }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary" />
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <Link
                  href="/support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-opacity-95 text-white font-heading font-bold py-4 rounded-full"
                >
                  <span>Support Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}