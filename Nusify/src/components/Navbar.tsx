import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Star,
  HelpCircle,
} from "lucide-react";
import { useTheme } from "../context/theme-core";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [aboutTimeout, setAboutTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [servicesTimeout, setServicesTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const isDark = theme === "dark";

  // Helper to check if a path is active
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

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
      title: "Online Shop Website",
      description:
        "Bangun toko online profesional yang siap meningkatkan penjualan dan kepercayaan pelanggan.",
      path: "/service/online-shop",
      icon: "🛍️",
    },
    {
      title: "Website Redesign",
      description:
        "Perbarui tampilan website lama Anda menjadi lebih modern, cepat, dan profesional.",
      path: "/services/redesign",
      icon: "✨",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#020617]/80 backdrop-blur-xl border-white/10 shadow-lg shadow-blue-900/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
            N
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Nusify Studio
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* About Dropdown Trigger */}
          <div
            className="relative group h-20 flex items-center"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button className="flex items-center gap-1 text-sm font-medium transition-all duration-300 relative group-hover:-translate-y-0.5">
              <span
                className={`${
                  isActive("/about")
                    ? "text-white"
                    : "text-slate-300 group-hover:text-white"
                }`}
              >
                About
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isAboutDropdownOpen ? "rotate-180" : ""
                } ${
                  isActive("/about")
                    ? "text-white"
                    : "text-slate-300 group-hover:text-white"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 translate-y-2 rounded-full ${
                  isActive("/about")
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              ></span>
            </button>

            {/* About Dropdown Menu */}
            <div
              className={`absolute top-full left-0 pt-4 w-56 transition-all duration-300 transform origin-top ${
                isAboutDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0 visible"
                  : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
              }`}
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <div className="bg-[#020617] border border-white/10 rounded-2xl shadow-xl p-2 backdrop-blur-md">
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/5 transition-all group text-left"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300">
                    <Star className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    Testimonial
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/5 transition-all group text-left"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    FAQ
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Service Dropdown Trigger */}
          <div
            className="relative group h-20 flex items-center"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button className="flex items-center gap-1 text-sm font-medium transition-all duration-300 relative group-hover:-translate-y-0.5">
              <span
                className={`${
                  isActive("/service") || isActive("/services")
                    ? "text-white"
                    : "text-slate-300 group-hover:text-white"
                }`}
              >
                Services
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isServicesDropdownOpen ? "rotate-180" : ""
                } ${
                  isActive("/service") || isActive("/services")
                    ? "text-white"
                    : "text-slate-300 group-hover:text-white"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 translate-y-2 rounded-full ${
                  isActive("/service") || isActive("/services")
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              ></span>
            </button>

            {/* Services Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] transition-all duration-300 transform origin-top ${
                isServicesDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0 visible"
                  : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
              }`}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <div className="bg-[#020617] border border-white/10 rounded-2xl shadow-xl p-2 backdrop-blur-md">
                <div className="grid grid-cols-2 gap-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.title}
                      to={service.path}
                      className="group relative flex flex-col p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          {service.icon}
                        </span>
                        <div className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                          {service.title}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          {navLinks
            .filter((link) => link.path !== "/contact")
            .map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group h-20 flex items-center hover:-translate-y-0.5 ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 translate-y-2 rounded-full ${
                    isActive(link.path)
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                ></span>
              </Link>
            ))}

          {/* CTA Button */}
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300"
          >
            Konsultasi Sekarang
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-colors backdrop-blur-sm"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#020617] z-40 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-bold text-white hover:text-blue-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-center mt-auto mb-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Konsultasi Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
