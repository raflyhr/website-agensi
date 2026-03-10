import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portofolio from "./pages/Portofolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ServiceOnlineShop from "./pages/service/OnlineShop";
import Redesign from "./pages/service/Redesign";
import { ThemeProvider } from "./context/ThemeContext";

const OnlineShopUnavailable = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
        Halaman Online Shop sementara tidak tersedia
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Silakan kembali lagi nanti atau hubungi kami melalui halaman Kontak.
      </p>
    </div>
  );
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

function AppContent() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      {!isAuthPage && <Navbar />}
      <AnimatePresence mode="wait">
        <main
          className={`flex-grow ${!isAuthPage ? "w-full overflow-x-hidden" : "w-full"}`}
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/portfolio"
              element={
                <PageTransition>
                  <Portofolio />
                </PageTransition>
              }
            />
            <Route
              path="/pricing"
              element={
                <PageTransition>
                  <Pricing />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/services/online-shop"
              element={
                <PageTransition>
                  <OnlineShopUnavailable />
                </PageTransition>
              }
            />
            <Route
              path="/service/online-shop"
              element={
                <PageTransition>
                  <ServiceOnlineShop />
                </PageTransition>
              }
            />
            <Route
              path="/service/redesign"
              element={
                <PageTransition>
                  <Redesign />
                </PageTransition>
              }
            />
            <Route
              path="/services/redesign"
              element={
                <PageTransition>
                  <Redesign />
                </PageTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <Blog />
                </PageTransition>
              }
            />
            <Route
              path="/login"
              element={
                <PageTransition>
                  <Login />
                </PageTransition>
              }
            />
            <Route
              path="/register"
              element={
                <PageTransition>
                  <Register />
                </PageTransition>
              }
            />
            <Route
              path="/admin"
              element={
                <PageTransition>
                  <AdminDashboard />
                </PageTransition>
              }
            />
          </Routes>
        </main>
      </AnimatePresence>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <WhatsAppWidget />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
