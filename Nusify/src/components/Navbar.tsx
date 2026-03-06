import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronRight, Zap, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = theme === "dark";

  // Handle scroll effect for glassmorphism and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg shadow-xl border-b border-white/20 dark:border-slate-800/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left Section: Nusify Logo (Home Button) */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-brand-blue via-indigo-600 to-brand-purple rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  <Zap className="text-white w-6 h-6" fill="currentColor" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                  Nusify
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mt-1">
                  Studio
                </span>
              </div>
            </Link>
          </div>

          {/* Center Section: Desktop Navigation (No Home Link) */}
          <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/30 px-6 py-2 rounded-full border border-slate-200/50 dark:border-slate-700/30 backdrop-blur-sm">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 relative group ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-700 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Section: CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-blue-400 transition-all duration-300 hover:rotate-12 active:scale-90"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/login"
              className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full group hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-blue to-brand-purple"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative flex items-center gap-2">
                Start Project
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-all duration-200"
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-4 text-base font-bold rounded-2xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 font-bold"
            >
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
              {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-blue-500" />}
            </button>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-6 py-4 text-white font-bold bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl shadow-lg"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
