import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  Sun,
  Moon,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useTheme } from "../context/theme-core";
import { useAuth } from "../context/AuthContext";
import logoImg from "../assets/Logo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [aboutTimeout, setAboutTimeout] = useState<any>(null);
  const [servicesTimeout, setServicesTimeout] = useState<any>(null);
  const [profileTimeout, setProfileTimeout] = useState<any>(null);
  const isDark = theme === "dark";

  // Handle About dropdown hover logic
  const handleAboutMouseEnter = () => {
    if (aboutTimeout) clearTimeout(aboutTimeout);
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    const timeout = setTimeout(() => setIsAboutDropdownOpen(false), 300);
    setAboutTimeout(timeout);
  };

  // Handle Services dropdown hover logic
  const handleServicesMouseEnter = () => {
    if (servicesTimeout) clearTimeout(servicesTimeout);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => setIsServicesDropdownOpen(false), 300);
    setServicesTimeout(timeout);
  };

  // Handle Profile dropdown hover logic
  const handleProfileMouseEnter = () => {
    if (profileTimeout) clearTimeout(profileTimeout);
    setIsProfileDropdownOpen(true);
  };

  const handleProfileMouseLeave = () => {
    const timeout = setTimeout(() => setIsProfileDropdownOpen(false), 300);
    setProfileTimeout(timeout);
  };

  // Function to handle scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);

    // If we are on home page, scroll directly
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on home page, we would normally redirect to home with hash
      // But for now let's just use window.location
      window.location.href = `/#${sectionId}`;
    }
  };

  // Handle scroll effect for glassmorphism and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    {
      title: "Online Shop",
      description: "Full-featured e-commerce website solution.",
      path: "/service/online-shop",
    },
    {
      title: "Redesign",
      description: "Modern redesign for outdated websites.",
      path: "/service/redesign",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg shadow-xl border-b border-white/20 dark:border-slate-800/50 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left Section: Nusify Logo (Home Button) */}
          <div className="flex-shrink-0 relative w-32 h-10">
            <Link
              to="/"
              className="absolute top-1/2 -translate-y-1/2 -left-10 -bottom-10 flex items-center group"
            >
              <img
                src={logoImg}
                alt="Nusify Logo"
                className="h-[200px] w-auto max-w-none transform group-hover:scale-105 transition-all duration-300 drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Center Section: Desktop Navigation */}
          <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/30 px-6 py-2 rounded-full border border-slate-200/50 dark:border-slate-700/30 backdrop-blur-sm">
            <div className="flex items-center space-x-1">
              {/* About Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <button
                  className={`flex items-center px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isAboutDropdownOpen
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-slate-700/50"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  About
                  <ChevronDown
                    className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-300 ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* About Dropdown Menu Container with Hover Bridge */}
                <div
                  className={`absolute top-full left-0 pt-4 w-48 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform origin-top-left ${
                    isAboutDropdownOpen
                      ? "opacity-100 scale-100 translate-y-0 visible"
                      : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                  }`}
                >
                  <div
                    className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-2 space-y-1"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty("--x", `${x}px`);
                      e.currentTarget.style.setProperty("--y", `${y}px`);
                    }}
                    style={
                      {
                        "--x": "50%",
                        "--y": "50%",
                      } as React.CSSProperties
                    }
                  >
                    {/* Panel Glow Effect */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(400px circle at var(--x) var(--y), rgba(59, 130, 246, 0.05), transparent 40%)",
                      }}
                    />

                    <button
                      onClick={() => scrollToSection("testimonials")}
                      className="group relative w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-xl transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 overflow-hidden"
                    >
                      {/* Liquid Hover Background */}
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-blue-50/0 dark:from-blue-900/20 dark:to-blue-900/0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-xl translate-x-[-10px] group-hover:translate-x-0"></span>

                      {/* Content */}
                      <span className="relative z-10 flex items-center gap-2.5 transition-transform duration-300 group-hover:translate-x-1">
                        <MessageCircle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                        <span className="font-semibold tracking-wide">
                          Testimonials
                        </span>
                        <ChevronRight className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                      </span>
                    </button>
                    <button
                      onClick={() => scrollToSection("faq")}
                      className="group relative w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-xl transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 overflow-hidden"
                    >
                      {/* Liquid Hover Background */}
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-blue-50/0 dark:from-blue-900/20 dark:to-blue-900/0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-xl translate-x-[-10px] group-hover:translate-x-0"></span>

                      {/* Content */}
                      <span className="relative z-10 flex items-center gap-2.5 transition-transform duration-300 group-hover:translate-x-1">
                        <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                        <span className="font-semibold tracking-wide">FAQ</span>
                        <ChevronRight className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className={`flex items-center px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isServicesDropdownOpen
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-slate-700/50"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Service
                  <ChevronDown
                    className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Services Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 pt-4 w-72 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform origin-top-left ${
                    isServicesDropdownOpen
                      ? "opacity-100 scale-100 translate-y-0 visible"
                      : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                  }`}
                >
                  <div
                    className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-2 space-y-1 transform-gpu perspective-[1000px]"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty("--x", `${x}px`);
                      e.currentTarget.style.setProperty("--y", `${y}px`);
                    }}
                    style={
                      {
                        "--x": "50%",
                        "--y": "50%",
                      } as React.CSSProperties
                    }
                  >
                    {/* Panel Glow Effect */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(600px circle at var(--x) var(--y), rgba(59, 130, 246, 0.05), transparent 40%)",
                      }}
                    />

                    {serviceItems.map((service) => {
                      if (service.title === "Online Shop") {
                        return (
                          <Link
                            key={service.title}
                            to={service.path}
                            className="relative block w-full text-left p-3 rounded-2xl transition-all group overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                            onMouseMove={(e) => {
                              const rect =
                                e.currentTarget.getBoundingClientRect();
                              const x = e.clientX - rect.left;
                              const y = e.clientY - rect.top;

                              // Calculate subtle tilt rotation
                              const rotateX = (y / rect.height - 0.5) * -4; // Max 2 deg
                              const rotateY = (x / rect.width - 0.5) * 4; // Max 2 deg

                              e.currentTarget.style.setProperty(
                                "--item-x",
                                `${x}px`,
                              );
                              e.currentTarget.style.setProperty(
                                "--item-y",
                                `${y}px`,
                              );
                              e.currentTarget.style.setProperty(
                                "--rotate-x",
                                `${rotateX}deg`,
                              );
                              e.currentTarget.style.setProperty(
                                "--rotate-y",
                                `${rotateY}deg`,
                              );
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.setProperty(
                                "--rotate-x",
                                "0deg",
                              );
                              e.currentTarget.style.setProperty(
                                "--rotate-y",
                                "0deg",
                              );
                            }}
                            style={{
                              transform:
                                "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) scale3d(1, 1, 1)",
                              transition:
                                "transform 0.1s ease-out, box-shadow 0.3s ease",
                            }}
                          >
                            {/* Glass Background & Blur */}
                            <div className="absolute inset-0 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl transition-all duration-300 group-hover:border-blue-500/30"></div>

                            {/* Cursor Follow Glow Effect */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                              style={{
                                background:
                                  "radial-gradient(400px circle at var(--item-x) var(--item-y), rgba(59, 130, 246, 0.1), transparent 40%)",
                              }}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.02]">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all duration-300">
                                  {service.title}
                                </div>
                                {/* Animated Icon/Badge */}
                                <div className="p-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                  <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2.5}
                                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                                {service.description}
                              </p>
                            </div>

                            {/* Gradient Accent Bottom Border */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </Link>
                        );
                      }
                      return (
                        <Link
                          key={service.title}
                          to={service.path}
                          className="group relative block w-full text-left p-3 rounded-xl transition-all duration-300 overflow-hidden"
                          onMouseMove={(e) => {
                            // Magnetic Effect
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const moveX = (x - rect.width / 2) / 20; // Subtle movement
                            const moveY = (y - rect.height / 2) / 20;

                            e.currentTarget.style.transform = `translate(${moveX}px, ${moveY}px)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                              "translate(0px, 0px)";
                          }}
                        >
                          {/* Hover Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

                          <div className="relative z-10">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-bold text-slate-900 dark:text-white transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1">
                                {service.title}
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed transition-all duration-300 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

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
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {isAuthenticated ? (
              <div 
                className="relative"
                onMouseEnter={handleProfileMouseEnter}
                onMouseLeave={handleProfileMouseLeave}
              >
                <button className="flex items-center gap-3 p-1 pr-4 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group border border-slate-200/50 dark:border-slate-700/50">
                  <div className="w-9 h-9 bg-linear-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {user?.name.split(' ')[0]}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Profile Dropdown Menu */}
                <div className={`absolute top-full right-0 pt-3 w-56 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform origin-top-right ${
                  isProfileDropdownOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                }`}>
                  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl p-2 space-y-1">
                    <Link 
                      to={isAdmin ? "/admin" : "/dashboard"}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 rounded-xl transition-all group"
                    >
                      <LayoutDashboard size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                      Dashboard
                    </Link>
                    <div className="h-px bg-slate-100 dark:bg-slate-800 my-1 mx-2" />
                    <button 
                      onClick={() => { logout(); navigate('/login'); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all group"
                    >
                      <LogOut size={18} className="text-red-400 group-hover:text-red-600 transition-colors" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
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
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
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
          {/* Mobile About with Submenu */}
          <div className="space-y-1">
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className={`w-full flex items-center justify-between px-5 py-4 text-base font-bold rounded-2xl transition-all duration-200 ${
                isAboutDropdownOpen
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <span>About</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${isAboutDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isAboutDropdownOpen ? "max-h-40 opacity-100 mb-2" : "max-h-0 opacity-0"}`}
            >
              <div className="pl-8 pr-4 py-2 space-y-1">
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="w-full text-left px-5 py-3 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all"
                >
                  • Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="w-full text-left px-5 py-3 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all"
                >
                  • FAQ
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Services with Submenu */}
          <div className="space-y-1">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`w-full flex items-center justify-between px-5 py-4 text-base font-bold rounded-2xl transition-all duration-200 ${
                isServicesDropdownOpen
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <span>Service</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isServicesDropdownOpen ? "max-h-[400px] opacity-100 mb-2" : "max-h-0 opacity-0"}`}
            >
              <div className="pl-8 pr-4 py-2 space-y-1">
                {serviceItems.map((service) => (
                  <Link
                    key={service.title}
                    to={service.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-5 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {service.title}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

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
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </button>
            
            {isAuthenticated ? (
              <div className="space-y-2">
                <Link
                  to={isAdmin ? "/admin" : "/dashboard"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 font-bold"
                >
                  <div className="w-10 h-10 bg-linear-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center text-white font-bold">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{user?.name}</p>
                    <p className="text-xs text-slate-500 font-medium">View Dashboard</p>
                  </div>
                  <ChevronRight size={18} className="text-slate-400" />
                </Link>
                <button
                  onClick={() => { logout(); setIsMobileMenuOpen(false); navigate('/login'); }}
                  className="flex items-center justify-center w-full px-6 py-4 text-red-600 bg-red-50 dark:bg-red-900/10 font-bold rounded-2xl"
                >
                  <LogOut size={18} className="mr-2" /> Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-4 text-white font-bold bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl shadow-lg"
              >
                Start Project
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
