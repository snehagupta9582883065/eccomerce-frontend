import { ShoppingBag, Phone, Menu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[100]">
      <div className="glass-panel rounded-[2rem] px-8 py-5 flex justify-between items-center shadow-2xl shadow-slate-200/50">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-slate-900 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <Zap className="text-emerald-400 fill-emerald-400" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none">RELIGARE</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400">DIGITAL</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <Link to="/" className="hover:text-emerald-500 transition">Shop</Link>
          <Link to="/support" className="hover:text-emerald-500 transition">RD Services</Link>
          <Link to="/contact" className="hover:text-emerald-500 transition">Bulk Inquiry</Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
            <Phone size={14} className="text-emerald-600" />
            <span className="text-xs font-black text-slate-900">9758950611</span>
          </div>
          <Link to="/cart" className="relative p-2 text-slate-900 hover:scale-110 transition">
            <ShoppingBag size={24} />
            <span className="absolute top-0 right-0 bg-emerald-500 w-4 h-4 rounded-full text-[10px] text-white flex items-center justify-center font-bold border-2 border-white">2</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}