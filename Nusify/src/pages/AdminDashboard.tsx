import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Settings,
  LogOut,
  TrendingUp,
  Eye,
  MessageSquare,
  Star,
  Menu,
  X,
  Zap,
  Bell,
} from 'lucide-react';

const stats = [
  { label: 'Total Visitors', value: '12,430', change: '+14%', icon: Eye, color: 'from-blue-500 to-blue-600' },
  { label: 'Active Projects', value: '8', change: '+2', icon: Briefcase, color: 'from-purple-500 to-purple-600' },
  { label: 'New Messages', value: '24', change: '+5', icon: MessageSquare, color: 'from-pink-500 to-pink-600' },
  { label: 'Client Rating', value: '4.9', change: '+0.1', icon: Star, color: 'from-amber-400 to-orange-500' },
];

const recentActivity = [
  { name: 'PT. Maju Bersama', action: 'Submitted a new project inquiry', time: '2 min ago', avatar: 'M' },
  { name: 'CV. Kreatif Nusantara', action: 'Left a 5-star review', time: '15 min ago', avatar: 'K' },
  { name: 'Toko Online Sejahtera', action: 'Approved project proposal', time: '1 hour ago', avatar: 'T' },
  { name: 'Restoran Bahari', action: 'Requested a revision', time: '3 hours ago', avatar: 'R' },
];

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Clients', icon: Users, active: false },
  { label: 'Projects', icon: Briefcase, active: false },
  { label: 'Blog', icon: FileText, active: false },
  { label: 'Settings', icon: Settings, active: false },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 font-sans">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 z-30 flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:z-auto`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Zap className="text-white w-5 h-5" fill="currentColor" />
          </div>
          <div>
            <p className="font-extrabold text-slate-900 dark:text-white leading-none">DevCraft</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mt-0.5">Admin Panel</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-slate-100 dark:border-slate-800">
          <Link
            to="/login"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h1 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">Dashboard</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Welcome back, Admin!</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20 cursor-pointer">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map(({ label, value, change, icon: Icon, color }) => (
              <div key={label} className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <Icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{label}</p>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">{value}</p>
                  <p className="text-xs font-semibold text-emerald-500 flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-3 h-3" /> {change} this month
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Recent Activity</h2>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">View all</span>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentActivity.map(({ name, action, time, avatar }) => (
                <div key={name} className="flex items-center gap-4 px-6 py-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{action}</p>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl p-4">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">
              ⚠️ <strong>Note:</strong> This dashboard currently uses hardcoded credentials for testing only. Authentication will be connected to the backend when it is ready.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
