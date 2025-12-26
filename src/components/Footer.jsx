import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShieldCheck, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 mt-auto rounded-t-[3rem] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 text-white group">
              <div className="bg-emerald-500 p-2 rounded-lg text-slate-900">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tighter">RELIGARE.</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              India's premier L1 biometric hardware distributor. ISO 9001:2015 Certified.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-900 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">All Devices</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Fingerprint Scanners</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Iris Scanners</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/support" className="hover:text-emerald-400 transition-colors">Driver Downloads</Link></li>
              <li><Link to="/support" className="hover:text-emerald-400 transition-colors">RD Service Setup</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Warranty Claim</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3"><Phone size={16} className="text-emerald-500" /> +91 9758950611</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-emerald-500" /> support@religaredigital.in</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-emerald-500" /> New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">© 2025 Religare Digital. All rights reserved.</p>

          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">100% Secure Payments</span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-900 transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;