import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Bed, 
  Image as ImageIcon, 
  Building2, 
  UploadCloud, 
  ExternalLink, 
  LogOut, 
  Menu, 
  X, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useData } from '../context/DataContext';
import { CLOUDINARY_CONFIG } from '../utils/cloudinary';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminRooms from '../components/admin/AdminRooms';
import AdminGallery from '../components/admin/AdminGallery';
import AdminResortInfo from '../components/admin/AdminResortInfo';
import AdminMedia from '../components/admin/AdminMedia';

export default function Admin() {
  const { isAuthenticated, logout } = useAdminAuth();
  const { siteConfig } = useData();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setActiveTab('dashboard')} />;
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'rooms', label: 'Rooms & Suites', icon: Bed },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'resort', label: 'Resort & Contact Info', icon: Building2 },
    { id: 'media', label: 'Cloudinary CDN & Backup', icon: UploadCloud },
  ];

  return (
    <div className="h-screen w-full bg-slate-100 flex font-sans text-slate-800 overflow-hidden">
      {/* SIDEBAR (Desktop) */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 bg-slate-900 text-white border-r border-slate-800 shrink-0 h-full select-none">
        {/* Brand header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-forest-800 to-forest-600 flex items-center justify-center text-gold-400 font-serif font-bold text-lg shadow-md border border-forest-500/30">
              CG
            </div>
            <div>
              <h1 className="font-serif font-bold text-sm tracking-tight text-white leading-tight">
                Cloudgreen Resort
              </h1>
              <p className="text-[11px] text-gold-400/90 font-medium">
                Admin Control Panel
              </p>
            </div>
          </div>
        </div>

        {/* Cloudinary Status Pill */}
        <div className="px-6 py-3 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium text-[11px]">Cloudinary:</span>
          </div>
          <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
            {CLOUDINARY_CONFIG.cloudName}
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-forest-800 text-white shadow-lg shadow-forest-950/50 border border-forest-600/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              <span>View Live Website</span>
            </span>
            <span className="text-[10px] bg-forest-900/80 text-forest-300 px-1.5 py-0.5 rounded font-mono">
              Live
            </span>
          </Link>

          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-72 bg-slate-900 text-white flex flex-col h-full z-10">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <span className="font-serif font-bold text-sm">Cloudgreen Admin</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-4 space-y-2 flex-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold ${
                      isActive ? 'bg-forest-800 text-white' : 'text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
            <div className="p-4 border-t border-slate-800 space-y-2">
              <Link
                to="/"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 py-2 text-xs bg-slate-800 rounded-xl"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Site</span>
              </Link>
              <button
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-rose-400 hover:bg-rose-950/50 rounded-xl"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto">
        {/* Top Navbar */}
        <header className="bg-white border-b border-slate-200/80 px-6 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-30 shadow-xs w-full shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="font-serif text-lg font-bold text-forest-950 capitalize">
                {navItems.find(n => n.id === activeTab)?.label || 'Dashboard'}
              </h1>
              <p className="text-[11px] text-slate-500">
                {siteConfig.name} &bull; Panchgani - Mahabaleshwar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-forest-50 hover:bg-forest-100 text-forest-900 border border-forest-200 rounded-xl text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Preview Live Site</span>
            </Link>

            <button
              onClick={logout}
              title="Sign Out"
              className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors border border-slate-200"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Tab Content */}
        <main className="p-6 sm:p-8 w-full space-y-6">
          {activeTab === 'dashboard' && <AdminDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'rooms' && <AdminRooms />}
          {activeTab === 'gallery' && <AdminGallery />}
          {activeTab === 'resort' && <AdminResortInfo />}
          {activeTab === 'media' && <AdminMedia />}
        </main>
      </div>
    </div>
  );
}
