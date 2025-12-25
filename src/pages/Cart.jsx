import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // This would normally come from your Context or Redux state
  const cartItems = [
    { id: 1, name: 'Mantra MFS100 L1', price: 2499, qty: 1, image_url: 'https://m.media-amazon.com/images/I/41O3Ld6Y3dL.jpg' }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <div className="bg-slate-50 p-10 rounded-[3rem] text-center">
          <ShoppingBag size={64} className="mx-auto text-slate-200 mb-6" />
          <h2 className="text-3xl font-black text-slate-900 mb-2">Your bag is empty</h2>
          <p className="text-slate-500 mb-8 font-medium">Add some world-class hardware to get started.</p>
          <Link to="/" className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-emerald-100 hover:bg-slate-900 transition-all">
            Browse Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 bg-[#fcfcfc] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end gap-4 mb-12">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter">Your Bag</h1>
          <span className="text-emerald-600 font-bold text-xl mb-2">({cartItems.length})</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDE: ITEMS LIST */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-white border border-slate-100 p-6 rounded-[2.5rem] flex flex-col sm:flex-row items-center gap-8 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-32 h-32 bg-slate-50 rounded-3xl flex-shrink-0 p-4">
                    <img src={item.image_url} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-2xl font-black text-slate-900 mb-1">{item.name}</h3>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">L1 Hardware • In Stock</p>
                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <div className="flex items-center bg-slate-100 rounded-xl p-1">
                        <button className="p-2 hover:bg-white rounded-lg transition-all"><Minus size={16}/></button>
                        <span className="px-4 font-black">{item.qty}</span>
                        <button className="p-2 hover:bg-white rounded-lg transition-all"><Plus size={16}/></button>
                      </div>
                      <button className="text-slate-300 hover:text-red-500 transition-colors">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">₹{item.price}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Per Unit</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: FLOATING SUMMARY */}
          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-slate-300 relative overflow-hidden">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
              
              <h2 className="text-2xl font-black mb-8 border-b border-white/10 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between font-medium text-slate-400">
                  <span>Subtotal</span>
                  <span className="text-white">₹{subtotal}</span>
                </div>
                <div className="flex justify-between font-medium text-slate-400">
                  <span>GST (18%)</span>
                  <span className="text-white">₹{gst}</span>
                </div>
                <div className="flex justify-between font-medium text-slate-400">
                  <span>Shipping</span>
                  <span className="text-emerald-400 font-bold uppercase text-xs">Free</span>
                </div>
                <div className="h-[1px] bg-white/10 my-4" />
                <div className="flex justify-between items-end">
                  <span className="font-bold">Total Amount</span>
                  <span className="text-4xl font-black text-emerald-400 tracking-tighter">₹{total}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-emerald-500 text-slate-900 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white transition-all">
                  Checkout Now <ArrowRight size={20} />
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  Secure SSL Encrypted Transaction
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-start gap-4">
              <CreditCard className="text-emerald-600 shrink-0" />
              <p className="text-xs font-bold text-emerald-800 leading-relaxed">
                We accept all Major Cards, UPI, and Netbanking. Bulk orders are eligible for extra discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;