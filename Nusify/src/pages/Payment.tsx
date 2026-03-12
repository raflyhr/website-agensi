import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  CreditCard, 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  ArrowLeft,
  ChevronRight,
  Package,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openMayarPopup, createMayarSession } from "../utils/mayar";

interface SelectedPlan {
  name: string;
  price: string;
}

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const selectedPlan: SelectedPlan = location.state || {
    name: "Enterprise",
    price: "Custom",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Live Mayar Integration
    try {
      const amount = selectedPlan.price === "Custom" ? 0 : parseInt(selectedPlan.price.replace(/\./g, ''));
      
      // User provided API Key
      const MAYAR_API_KEY = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmYWNjMTY4Ni0wOTYxLTRiYjctOTdjOS1hYjE4ZmNlZjkxYjciLCJhY2NvdW50SWQiOiJmZjM1MTBkOC0yMzE4LTQ0YWEtOGQ2ZS04ZWY2MjYxNDU5NTEiLCJjcmVhdGVkQXQiOiIxNzczMzIxMDk0OTY5Iiwicm9sZSI6ImRldmVsb3BlciIsInN1YiI6InJhZmx5aGVybWFuc3lhaDU2NUBnbWFpbC5jb20iLCJuYW1lIjoiTnVzaWZ5IiwibGluayI6InJhZmx5LWhyLTQ2NDg0IiwiaXNTZWxmRG9tYWluIjpudWxsLCJpYXQiOjE3NzMzMjEwOTR9.T0Dvd1oniW4QVkdIaVgr1JDBW_K1xgsuE1NXvkWNEJ9k4JAtbqwmBHZdy6XJxJHBHU5rdLUYFlIsMhbG0ckKfcOmx1jCiKCSK2F3f7cPNqvnhKpJ04QyZ6FFTZEoKtXbCcqsVwvxiUm_stXc-i4O9xhqKcds2GYNqAnElT4EW7OvHtyE1ycSLWM3Tw1d_B3kpjCHzE1UA4q7BMahPK0jhNm7uGEues6qR_G0RIMhxjCc67zi7SnwU4xENwsyIC7jntujx051tjUH03eRIfnXNYQWy-Npg1Ihmcni-sq0J5Z0MrIbN-VFDyOksQDC2cxJq_zdDvjNSRFS7JsQr9bBYQ";

      // 1. Create a session (Usually done by your backend)
      const session = await createMayarSession({
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        amount: amount,
        description: `Pembayaran Paket ${selectedPlan.name} - Nusify`,
      }, MAYAR_API_KEY);

      if (session.status === "success") {
        // 2. Open the Mayar Popup (with redirect fallback)
        await openMayarPopup(session.data.token, session.data.redirect_url);
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      alert(error.message || "Terjadi kesalahan saat memulai pembayaran. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm">Kembali ke Pricing</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
               {/* Decorative background blur */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                  Complete Your <span className="text-blue-600">Order</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mb-10">
                  Silakan isi detail kontak Anda untuk melanjutkan ke proses pembayaran aman melalui Mayar.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                      <User size={16} className="text-blue-500" /> Nama Lengkap
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                      <Mail size={16} className="text-blue-500" /> Alamat Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="email@perusahaan.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                      <Phone size={16} className="text-blue-500" /> Nomor WhatsApp
                    </label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 font-bold">+62</span>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="812 xxxx xxxx"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-16 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      disabled={loading}
                      type="submit"
                      className="relative w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-[0.98] transition-all overflow-hidden group/btn"
                    >
                      <AnimatePresence mode="wait">
                        {loading ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-3"
                          >
                            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-3"
                          >
                            <span>Bayar Sekarang (via Mayar)</span>
                            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </button>
                  </div>
                </form>

                <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 grayscale opacity-50">
                  <span className="text-xs font-bold uppercase tracking-widest">Powered By</span>
                  {/* Mock Mayar Logo */}
                  <div className="flex items-center gap-1 font-black text-lg">
                    <span className="text-indigo-600">M</span>
                    <span className="text-slate-900 dark:text-white">AYAR</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6 sticky top-32">
              <div className="bg-slate-900 dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Package size={120} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <Zap size={20} className="fill-white" />
                    </div>
                    <span className="font-black text-xl tracking-tight">Order Summary</span>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Package Name</p>
                        <h3 className="text-lg font-black">{selectedPlan.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Price</p>
                        <h3 className="text-lg font-black text-blue-400">{selectedPlan.price === "Custom" ? "Consultation" : `Rp ${selectedPlan.price}`}</h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 border-b border-white/10 pb-2">What you get:</h4>
                      <ul className="space-y-3">
                         {["Prioritas Support", "Desain Premium", "Teknologi Terbaru", "Gratis Domain & Hosting"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                            <CheckCircle2 size={16} className="text-blue-500" />
                            {item}
                          </li>
                         ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-400">Total Payable</p>
                      <p className="text-3xl font-black text-white">{selectedPlan.price === "Custom" ? "FREE Quote" : `Rp ${selectedPlan.price}`}</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                      <CreditCard className="text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-sm">Secure Checkout</h4>
                  <p className="text-xs text-slate-500">Transaksi dienkripsi dan aman bersama Mayar Indonesia.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
