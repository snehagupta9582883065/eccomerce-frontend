import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ShieldCheck, Truck, Zap, Smartphone, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://eccomerce-g27f.onrender.com/api/products/${id}`)
      .then(res => { setProduct(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-slate-400">Loading Prestige Hardware...</div>;

  return (
    <div className="pt-32 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-all font-bold mb-10 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalogue
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image Stage */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center">
            <img src={product?.image_url} alt={product?.name} className="max-h-[500px] object-contain" />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="flex gap-2 mb-6">
              <span className="bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Authorized L1</span>
              <span className="bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">GST Ready</span>
            </div>

            <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">{product?.name}</h1>
            <p className="text-5xl font-black text-emerald-600 mb-8 tracking-tighter">₹{product?.price}<span className="text-xl text-slate-400 font-medium">/-</span></p>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] mb-10">
              <h3 className="font-black text-slate-900 mb-2 flex items-center gap-2 text-lg"><Zap className="text-emerald-500 fill-emerald-500" size={18} /> Tech Specification</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{product?.description || "High-end biometric security device for banking, Aadhaar, and corporate authentication."}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
                <Truck className="text-emerald-500" />
                <span className="text-sm font-bold text-slate-700">Pan-India Shipping</span>
              </div>
              <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
                <Smartphone className="text-blue-500" />
                <span className="text-sm font-bold text-slate-700">Remote RD Setup</span>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl hover:bg-emerald-600 transition-all shadow-2xl flex items-center justify-center gap-3">
              Order on WhatsApp <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;