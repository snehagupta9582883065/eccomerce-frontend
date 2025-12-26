import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Zap, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
             flex items-center justify-between px-6 py-3 rounded-3xl transition-all duration-300
             ${scrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-slate-100'
              : 'bg-white/70 backdrop-blur-md shadow-sm border border-white/50'
            }
          `}>

            {/* BRAND */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-slate-900 text-white p-1.5 rounded-lg group-hover:bg-emerald-500 transition-colors">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-lg font-black tracking-tighter text-slate-900">
                RELIGARE<span className="text-emerald-500">.</span>
              </span>
            </Link>

            {/* NAV LINKS */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/support', label: 'Drivers' },
                { path: '/contact', label: 'Contact' },
                { path: '/admin', label: 'Admin' }
              ].map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                     text-xs font-bold uppercase tracking-widest transition-colors relative
                     ${isActive(link.path) ? 'text-emerald-600' : 'text-slate-500 hover:text-slate-900'}
                   `}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                <Search size={16} />
              </button>

              <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-slate-200">
                <ShoppingBag size={16} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full text-[9px] font-bold flex items-center justify-center">2</span>
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden text-slate-900 hover:text-emerald-600 transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-0 z-[110] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-black tracking-tighter text-slate-900">MENU</span>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { path: '/', label: 'Home' },
                { path: '/support', label: 'Drivers' },
                { path: '/contact', label: 'Contact' },
                { path: '/admin', label: 'Admin' }
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-slate-900 hover:text-emerald-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-slate-100">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Support</p>
              <p className="text-xl font-black text-slate-900">+91 9758950611</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}