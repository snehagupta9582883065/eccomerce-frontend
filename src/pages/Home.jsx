import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://eccomerce-g27f.onrender.com/api/products')
      .then(res => { setProducts(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#fcfcfc]">
      {/* SECTION 1: THE LUXURY HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-emerald-500"></div>
              <span className="text-emerald-600 font-black tracking-[0.4em] text-[10px] uppercase">Religare Digital 2025</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Premium <br /> <span className="text-emerald-500 italic">Hardware.</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-md leading-relaxed mb-10 font-medium">
              Authorized L1 Biometric solutions for modern banking. Precision technology, delivered Pan-India.
            </p>
            <div className="flex items-center gap-8">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-black flex items-center gap-3 hover:bg-emerald-500 transition-all shadow-2xl shadow-slate-200">
                Shop Catalogue <ArrowRight size={20} />
              </button>
              <div className="hidden sm:block">
                <p className="text-2xl font-black text-slate-900 leading-none">9758950611</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Support Line</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-[4rem] p-12 aspect-square flex items-center justify-center relative shadow-inner">
              <motion.div
                animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-white rounded-[3rem] shadow-2xl flex items-center justify-center p-12"
              >
                <img
                  src="./images/biometric.jpg"
                  alt="Featured"
                  className="w-full h-full object-cover rounded-[3rem]"
                />

              </motion.div>
              {/* Floating Badges */}
              <div className="absolute top-10 right-0 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="bg-emerald-500 p-2 rounded-full text-white"><Zap size={16} /></div>
                <span className="font-black text-sm uppercase">L1 Setup Free</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 tracking-widest">Authorized Collection</span>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Certified Devices</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;