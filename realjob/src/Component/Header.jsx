import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Shared responsive logic for NavLinks to maintain matching clean design
  const getNavLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 w-full md:w-auto text-center ${
      isActive
        ? "bg-cyan-200 text-cyan-950 border border-cyan-500 shadow-sm backdrop-blur-sm"
        : "text-slate-700 hover:bg-slate-100 md:hover:bg-white hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors hover:text-cyan-700"
        >
          RealJob.pk
        </Link>

        {/* Desktop Navigation Menu */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-medium text-slate-700 sm:gap-2">
            <li>
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" className={getNavLinkClass}>
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className={getNavLinkClass}>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getNavLinkClass}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Desktop Call To Action Button */}
        <div className="hidden md:block">
          <button
            type="button"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
          >
            Post a Job
          </button>
        </div>

        {/* Mobile Menu Action Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {isMenuOpen ? (
              // Close "X" Icon
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Menu Icon
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu Panel */}
      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-xl md:hidden animate-fade-in animate-duration-150">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/jobs" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass}>
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass}>
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
          
          <div className="mt-4 border-t border-slate-100 pt-4">
            <button
              type="button"
              className="w-full h-11 rounded-xl bg-slate-900 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-cyan-700 focus:outline-none"
            >
              Post a Job
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;