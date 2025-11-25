"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-teal-400" onClick={closeMenu}>
            EquiBank
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/") ? "text-teal-400" : "text-slate-300 hover:text-teal-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className={`transition-colors ${
                isActive("/how-it-works") ? "text-teal-400" : "text-slate-300 hover:text-teal-400"
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/financial-impact"
              className={`transition-colors ${
                isActive("/financial-impact") ? "text-teal-400" : "text-slate-300 hover:text-teal-400"
              }`}
            >
              Financial Impact
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActive("/about") ? "text-teal-400" : "text-slate-300 hover:text-teal-400"
              }`}
            >
              About
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/coming-soon"
              className="px-4 py-2 rounded-full bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors text-sm"
            >
              Download Whitepaper
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/") ? "bg-teal-400/10 text-teal-400" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                onClick={closeMenu}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/how-it-works") ? "bg-teal-400/10 text-teal-400" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                How It Works
              </Link>
              <Link
                href="/financial-impact"
                onClick={closeMenu}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/financial-impact") ? "bg-teal-400/10 text-teal-400" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                Financial Impact
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/about") ? "bg-teal-400/10 text-teal-400" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                About
              </Link>
              <Link
                href="/coming-soon"
                onClick={closeMenu}
                className="mx-4 px-4 py-2 rounded-full bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors text-sm text-center"
              >
                Download Whitepaper
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
