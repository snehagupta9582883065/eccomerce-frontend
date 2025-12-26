import { motion } from 'framer-motion';
import { Plus, ShieldCheck, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="premium-card rounded-[2.5rem] p-6 group relative bg-white"
    >
      {/* Product Image Stage */}
      <div className="bg-[#f8fafc] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-8 mb-6 relative overflow-hidden group-hover:bg-emerald-50/50 transition-colors duration-500">
        <Link to={`/product/${product?.id}`} className="absolute inset-0 z-10" />

        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.15, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          src={product?.image_url}
          alt={product?.name}
          className="w-full h-full object-contain relative z-0 drop-shadow-xl"
        />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[9px] px-3 py-1.5 rounded-full font-black border border-slate-100 shadow-sm">
            IN STOCK
          </span>
        </div>

        {/* Quick Actions (Appear on Hover) */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={`/product/${product?.id}`}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:bg-emerald-500 hover:text-white transition-colors"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-2">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product?.id}`}>
            <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors line-clamp-1">{product?.name}</h3>
          </Link>
        </div>

        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-1.5">
          <ShieldCheck size={12} className="text-emerald-500" /> Authorized L1 Device
        </p>

        <div className="flex justify-between items-end border-t border-slate-50 pt-6">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Unit Price</p>
            <p className="text-3xl font-black text-slate-900 tracking-tighter">
              ₹{product?.price}<span className="text-sm font-bold text-slate-400">/-</span>
            </p>
          </div>
          <button
            className="group/btn relative overflow-hidden bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200 hover:shadow-emerald-200 transition-all active:scale-95"
          >
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <Plus size={24} className="relative z-10 group-hover/btn:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}