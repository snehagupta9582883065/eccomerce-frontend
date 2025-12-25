import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-32 pb-12 rounded-t-[5rem] relative overflow-hidden mt-20">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* TOP SECTION: THE BIG BRANDING */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="bg-emerald-500 p-3 rounded-2xl group-hover:rotate-[15deg] transition-transform duration-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Zap className="text-slate-900 fill-slate-900" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter leading-none">RELIGARE</span>
                <span className="text-[11px] font-bold tracking-[0.4em] text-emerald-400 uppercase mt-1">Digital Prestige</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Architecting the future of biometric security. India's premier destination for L1 hardware and professional RD setup.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
            <div className="flex flex-col gap-6">
              <h4 className="text-emerald-400 font-black text-xs uppercase tracking-[0.2em]">Curation</h4>
              <nav className="flex flex-col gap-4 text-slate-300 font-bold text-sm">
                <Link to="/" className="hover:text-white transition-colors">Premium Shop</Link>
                <Link to="/support" className="hover:text-white transition-colors">RD Services</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Bulk Inquiry</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-emerald-400 font-black text-xs uppercase tracking-[0.2em]">Protocol</h4>
              <nav className="flex flex-col gap-4 text-slate-300 font-bold text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
              </nav>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: CONTACT ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { icon: <Phone size={20}/>, title: 'Voice Support', value: '+91 9758950611', color: 'bg-emerald-500' },
            { icon: <Mail size={20}/>, title: 'Email Desk', value: 'support@religaredigital.in', color: 'bg-blue-500' },
            { icon: <MapPin size={20}/>, title: 'HQ Location', value: 'New Delhi, India', color: 'bg-purple-500' }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group">
              <div className={`${item.color} w-10 h-10 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h5 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">{item.title}</h5>
              <p className="text-lg font-bold text-white tracking-tight">{item.value}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: THE TRUST HORIZON */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-slate-500 text-[10px] font-black tracking-widest uppercase">
              © 2025 Religare Digital Prestige Hardware.
            </p>
            <div className="flex items-center gap-2 text-emerald-500/60 font-bold text-[10px] uppercase">
              <ShieldCheck size={12} /> Encrypted Transactions & GST Verified
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:z-10 hover:border-emerald-500 transition-all cursor-pointer">
                  <Icon size={18} className="text-slate-400 hover:text-white" />
                </div>
              ))}
            </div>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-xs uppercase flex items-center gap-2 hover:bg-emerald-500 transition-all"
            >
              Back to Top <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;