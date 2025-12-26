import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import axios from 'axios';
import { ArrowRight, Zap, ShieldCheck, Truck, Smartphone, Star, Play } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    axios.get('https://eccomerce-g27f.onrender.com/api/products')
      .then(res => { setProducts(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-100 overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* SECTION 1: CLEAN LUXURY HERO - LIGHT & BRIGHT */}
      <section className="relative min-h-[90vh] pt-40 pb-20 px-6 flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-slate-50 to-white -z-20" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-[120px] -z-10 mix-blend-multiply animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-[120px] -z-10 mix-blend-multiply animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-slate-500">
                Officially Authorized
              </span>
              <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                <Zap size={10} fill="currentColor" /> Instant Activation
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Identity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600">Simplified.</span>
            </h1>

            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-md mb-10">
              India's most trusted source for L1 Biometric Hardware.
              Banking-grade security, delivered to your doorstep.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => document.getElementById('catalogue').scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
              >
                Start Shopping <ArrowRight size={16} />
              </button>
              <Link to="/contact" className="px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-all">
                <Play size={16} fill="currentColor" className="opacity-50" /> Bulk Orders
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <p>Trusted By 500+ Banks</p>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Decorative Circle */}
              <div className="absolute inset-0 border border-slate-200/60 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 border border-slate-200/40 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

              {/* Main Image Container */}
              <motion.div
                style={{ y: y1 }}
                className="absolute inset-10 bg-white rounded-[3rem] shadow-2xl shadow-emerald-100/50 flex items-center justify-center p-8 z-10"
              >
                <img src="./images/biometric.jpg" alt="Biometric Device" className="w-full h-full object-contain drop-shadow-2xl" />

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">100% Secure</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">RD Service Ready</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FEATURES STRIP */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Zap />, label: "Fastest Delivery" },
              { icon: <ShieldCheck />, label: "Official Warranty" },
              { icon: <Truck />, label: "All India Ship" },
              { icon: <Smartphone />, label: "Mobile Ready" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="text-emerald-500">{item.icon}</div>
                <span className="font-bold text-slate-700 text-sm">{item.label}</span>
              </div>
            ))
            }
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCTS */}
      <section id="catalogue" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Latest <span className="text-emerald-500">Inventory.</span>
          </h2>
          <Link to="/contact" className="hidden md:flex items-center gap-2 font-bold text-slate-500 hover:text-emerald-500 transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="font-bold text-slate-400">Loading Catalogue...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;