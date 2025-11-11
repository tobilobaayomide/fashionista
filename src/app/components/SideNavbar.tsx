"use client";
// Inject CSS for left-to-right text fill effect (only for overlay menu links)
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    .nav-fill-link {
      position: relative;
      overflow: hidden;
    }
    .nav-fill-link .nav-fill-text {
      position: relative;
      z-index: 2;
      color: transparent;
      WebkitTextStroke: 2px #000;
    }
    .nav-fill-link .nav-fill-clip {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .nav-fill-link .nav-fill-actual {
      color: #000;
      WebkitTextStroke: 2px #000;
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      clip-path: inset(0 100% 0 0);
      transition: clip-path 0.5s cubic-bezier(0.4,0,0.2,1);
      z-index: 3;
      pointer-events: none;
    }
    .nav-fill-link:hover .nav-fill-actual {
      clip-path: inset(0 0 0 0);
    }
  `;
  document.head.appendChild(style);
}
import { motion } from "framer-motion";
import { useEffect, useRef, createRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/credits", label: "Credits" },
];

import { useState } from "react";

export default function SideNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarHover, setSidebarHover] = useState(false);
  const menuLinksRef = useRef<Array<React.RefObject<HTMLAnchorElement>>>([]);
  useEffect(() => {
    if (menuLinksRef.current.length !== navLinks.length) {
      menuLinksRef.current = navLinks.map(() => createRef<HTMLAnchorElement>()) as React.RefObject<HTMLAnchorElement>[];
    }
  }, []);
  const labelRef = useRef<HTMLSpanElement>(null);
  // GSAP stagger animation for menu links
  useEffect(() => {
    if (menuOpen && menuLinksRef.current.length) {
      const linkEls = menuLinksRef.current.map(ref => ref.current).filter((el): el is HTMLAnchorElement => el !== null);
      if (linkEls.length) {
        gsap.fromTo(
          linkEls,
          { y: 40, opacity: 0, scale: 0.85 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.18, delay: 0.1, ease: "power2.out" }
        );
      }
      // Animate vertical label
      if (labelRef.current) {
        gsap.to(labelRef.current, { scale: 1.08, duration: 0.5, ease: "power2.out" });
      }
    } else {
      // Reset label
      if (labelRef.current) {
        gsap.to(labelRef.current, { scale: 1, duration: 0.4, ease: "power2.inOut" });
      }
    }
  }, [menuOpen]);

  return (
    <>
      {/* Top bar for mobile */}
  <nav className="flex md:hidden fixed top-0 left-0 w-full h-16 bg-white z-50 border-b border-black flex-row items-center justify-between px-4">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col items-center cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
          style={{ fontFamily: 'Arima, Bricolage Grotesque, Momo Trust Display, PT Sans, sans-serif', fontWeight: 700 }}
        >
          <span className="text-lg font-bold text-black tracking-wide">ME</span>
          <span className="text-lg font-bold text-black tracking-wide -mt-1">NU</span>
        </button>
        <div className="h-15 ml-6 w-px bg-black mx-2" />
        <div className="flex items-center justify-center flex-1">
          <span className="text-xl font-extrabold tracking-widest" style={{ fontFamily: 'Momo Trust Display, Arima, Bricolage Grotesque, PT Sans, sans-serif', fontWeight: 900 }}>
            <span>fashio</span><span className="text-red-900">nista</span>
          </span>
        </div>
      </nav>
      {/* Sidebar for md+ screens */}
      <motion.nav
        className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-between pt-2 pb-8 z-50 border-r border-gray-200"
        style={{ background: 'white', boxShadow: sidebarHover ? '0 8px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)' }}
        onMouseEnter={() => setSidebarHover(true)}
        onMouseLeave={() => setSidebarHover(false)}
        animate={{ width: sidebarHover ? 96 : 80 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* ME/NU Clickable Navbar */}
        <motion.button
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col items-center mt-0 mb-2 cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
          style={{ fontFamily: 'Arima, Bricolage Grotesque, Momo Trust Display, PT Sans, sans-serif', fontWeight: 700 }}
          whileTap={{ scale: 0.92, rotate: menuOpen ? 0 : 15 }}
          whileHover={{ scale: 1.08, rotate: menuOpen ? 0 : 10 }}
          animate={{ rotate: menuOpen ? 360 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <span className="text-2xl font-bold text-black tracking-wide">ME</span>
          <span className="text-2xl font-bold text-black tracking-wide -mt-2">NU</span>
        </motion.button>
        {/* Always-visible horizontal line */}
        <div className="w-full h-px bg-black mb-2" />
        {/* Animated vertical line on right when menu is open */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute right-0 top-0 w-px bg-black"
            style={{ zIndex: 51 }}
          />
        )}

        {/* App Name at Bottom */}
        <div className="flex-1 flex items-center justify-center">
          <span ref={labelRef} className="text-3xl font-extrabold tracking-widest" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontFamily: 'Momo Trust Display, Arima, Bricolage Grotesque, PT Sans, sans-serif', fontWeight: 900 }}>
            <span>fashio</span><span className="text-red-900">nista</span>
          </span>
        </div>
  </motion.nav>
      {/* Overlay Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -40 }}
          animate={{ opacity: 1, height: "100vh", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center"
          style={{ fontFamily: 'Arima, Bricolage Grotesque, Momo Trust Display, PT Sans, sans-serif' }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-20 right-8 group"
            aria-label="Close menu"
            style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <span
              className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-black bg-transparent transition-colors duration-300 group-hover:bg-black"
            >
              <span className="inline-flex items-center justify-center w-full h-full rounded-full transition-colors duration-300">
                <svg
                  className="block"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="18" x2="42" y2="42" stroke="#000" strokeWidth="2" strokeLinecap="round" className="group-hover:stroke-white" />
                  <line x1="42" y1="18" x2="18" y2="42" stroke="#000" strokeWidth="2" strokeLinecap="round" className="group-hover:stroke-white" />
                </svg>
              </span>
            </span>
          </button>
          <ul className="space-y-10 w-full flex flex-col items-start ml-20 md:ml-80">
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-fill-link text-7xl md:text-9xl font-extrabold"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 900, position: 'relative', overflow: 'hidden', WebkitTextStroke: '2px #000', color: 'transparent' }}
                  ref={menuLinksRef.current[idx]}
                  tabIndex={-1}
                >
                  <span className="nav-fill-text" style={{ position: 'relative', zIndex: 2 }}>{link.label}</span>
                  <span className="nav-fill-clip">
                    <span className="nav-fill-actual">{link.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
