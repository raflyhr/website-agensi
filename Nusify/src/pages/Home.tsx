import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Rocket,
  Code,
  Layout,
  Cpu,
  MessageCircle,
} from "lucide-react";
import DigitalEraSection from "../components/DigitalEraSection";
import ProblemAwarenessSection from "../components/ProblemAwarenessSection";
import BenefitSection from "../components/BenefitSection";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Side Content */}
            <div className="flex flex-col space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center self-center lg:self-start px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide animate-fade-in">
                <Rocket className="w-4 h-4 mr-2" />
                Professional Web Development Service
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Build Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-indigo-500 to-brand-purple">
                  Professional Website
                </span>{" "}
                <br />
                With Nusify
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We help businesses, creators, and organizations build modern,
                fast, and scalable websites that drive results and elevate your
                digital presence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <a
                  href="https://wa.me/6288980840381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center group"
                >
                  Konsultasi Sekarang
                  <MessageCircle className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </a>

                <Link
                  to="/portfolio"
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center"
                >
                  View Portfolio
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 flex items-center justify-center lg:justify-start space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span className="font-semibold text-sm uppercase tracking-widest">
                    Clean Code
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Layout className="w-5 h-5" />
                  <span className="font-semibold text-sm uppercase tracking-widest">
                    Modern UI
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5" />
                  <span className="font-semibold text-sm uppercase tracking-widest">
                    Fast Performance
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Visual Content */}
            <div className="relative group lg:ml-4">
              {/* Main Visual Card */}
              <div className="relative z-10 bg-white dark:bg-slate-900 p-4 md:p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                <div className="aspect-video rounded-3xl bg-slate-50 dark:bg-slate-950 overflow-hidden border border-slate-100 dark:border-slate-800 relative">
                  {/* Simulated IDE / Design UI */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-slate-100 dark:bg-slate-800 flex items-center px-4 space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>

                  <div className="pt-12 p-6 flex flex-col space-y-4">
                    <div className="h-4 w-1/3 bg-blue-500/20 rounded-full"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse"></div>
                      <div className="h-24 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse delay-75"></div>
                      <div className="h-24 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse delay-150"></div>
                    </div>
                    <div className="h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center">
                      <Code className="w-12 h-12 text-blue-500/40" />
                    </div>
                  </div>
                </div>

                {/* Floating Element 1 */}
                <div className="absolute -top-6 -right-6 md:-right-12 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 animate-bounce-slow">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
                        Status
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Project Live
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 2 */}
                <div className="absolute -bottom-8 -left-6 md:-left-12 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 animate-float">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between space-x-8">
                      <span className="text-xs font-bold text-slate-500">
                        Performance
                      </span>
                      <span className="text-xs font-extrabold text-blue-600">
                        99%
                      </span>
                    </div>
                    <div className="w-32 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[99%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-[100px] -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Informational Section: Digital Era */}
      <DigitalEraSection />

      {/* Problem Awareness Section */}
      <ProblemAwarenessSection />

      {/* Benefit Section */}
      <BenefitSection />
    </div>
  );
};

export default Home;
