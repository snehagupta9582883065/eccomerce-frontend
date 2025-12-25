import { motion } from 'framer-motion';
import { Plus, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <motion.div 
      className="premium-card rounded-[2.5rem] p-6 group"
    >
      {/* Product Image Stage */}
      <div className="bg-slate-50 rounded-[2rem] aspect-square flex items-center justify-center p-10 mb-8 relative overflow-hidden group-hover:bg-emerald-50 transition-colors">
        <img 
          src={product?.image_url} 
          alt={product?.name} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/80 backdrop-blur-sm text-slate-900 text-[9px] px-3 py-1 rounded-full font-black border border-slate-100">STOCK READY</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-2">
        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">{product?.name}</h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-1">
          <ShieldCheck size={12} className="text-emerald-500" /> RD Service Certified
        </p>
        
        <div className="flex justify-between items-center border-t border-slate-100 pt-6">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">With GST</p>
            <p className="text-3xl font-black text-slate-900 tracking-tighter">
              ₹{product?.price}<span className="text-sm font-medium">/-</span>
            </p>
          </div>
          <Link 
            to={`/product/${product?.id}`}
            className="bg-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-100 hover:bg-slate-900 transition-all active:scale-90"
          >
            <Plus size={24} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}