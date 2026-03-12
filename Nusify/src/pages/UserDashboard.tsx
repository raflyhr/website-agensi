import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Settings, 
  LogOut, 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare,
  Clock,
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Mock data for user activities
  const userProjects = [
    { name: 'Website Portofolio', status: 'In Progress', progress: 65, color: 'bg-blue-500' },
    { name: 'E-Commerce Nusify', status: 'Testing', progress: 90, color: 'bg-green-500' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Header */}
        <div className="bg-white dark:bg-slate-900 rounded-4xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-linear-to-br from-brand-blue to-brand-purple rounded-3xl flex items-center justify-center text-white shadow-2xl">
              <User size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Selamat Datang, {user?.name}!
                </h1>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck size={12} /> User Client
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                Kelola proyek Anda, hubungi tim support, dan pantau perkembangan website Anda di sini.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
              <button 
                onClick={() => navigate('/settings')}
                className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                <Settings size={20} />
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-4 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-2xl font-bold hover:bg-red-100 dark:hover:bg-red-900/20 transition-all active:scale-95"
              >
                <LogOut size={20} /> Logout
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Project Status */}
            <div className="bg-white dark:bg-slate-900 rounded-4xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <Briefcase className="text-blue-600" /> Proyek Berjalan
                </h2>
                <button className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">Lihat Semua</button>
              </div>

              <div className="space-y-6">
                {userProjects.map((project, idx) => (
                  <div key={idx} className="group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{project.name}</h3>
                        <p className="text-sm text-slate-500">{project.status}</p>
                      </div>
                      <span className="text-sm font-bold text-slate-400">{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full ${project.color} transition-all duration-1000`} style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-4xl p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <MessageSquare size={32} />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-1">Butuh Bantuan?</h3>
                  <p className="text-blue-100 text-sm">Konsultasikan kendala atau request fitur baru dengan tim kami.</p>
                </div>
                <button className="px-6 py-3 bg-white text-blue-700 rounded-xl font-bold text-sm shadow-lg hover:bg-blue-50 transition-colors active:scale-95">
                  Chat Team Support
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            
            {/* Stats Card */}
            <div className="bg-white dark:bg-slate-900 rounded-4xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Clock className="text-orange-500" /> Aktivitas Terakhir
              </h2>
              <div className="space-y-6">
                {[
                  { time: '2 Jam lalu', text: 'Invoice #2024-001 Lunas', icon: <CheckCircle2 className="text-green-500" /> },
                  { time: 'Kemarin', text: 'Update revisi Landing Page', icon: <Zap className="text-blue-500" /> },
                  { time: '10 Mar 2024', text: 'Upload Aset Konten', icon: <ExternalLink className="text-slate-400" /> }
                ].map((act, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{act.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{act.text}</p>
                      <p className="text-xs text-slate-500">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-slate-900 rounded-4xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Akses Cepat</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-slate-100 transition-colors text-center group">
                  <LayoutDashboard className="mx-auto mb-2 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Invoice</span>
                </button>
                <button className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-slate-100 transition-colors text-center group">
                  <ShieldCheck className="mx-auto mb-2 text-slate-400 group-hover:text-green-600 transition-colors" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Security</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
