import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, Trash2, ArrowRight } from 'lucide-react';

const Cart = () => {
  // Mock cart data (in a real app, this would come from a Context/State)
  const cartItems = [
    { id: 1, name: "Mantra MFS100", price: 2400, image: "https://via.placeholder.com/150", qty: 1 },
    { id: 2, name: "Morpho MSO 1300 E3", price: 4200, image: "https://via.placeholder.com/150", qty: 2 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">Your Cart</h1>
          <span className="text-slate-400 font-bold text-sm">{cartItems.length} Items</span>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT: Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-emerald-200 transition-all"
                >
                  <div className="w-24 h-24 bg-slate-50 rounded-2xl shrink-0 flex items-center justify-center">
                    <ShoppingBag size={24} className="text-slate-300" />
                    {/* <img src={item.image} alt={item.name} className="w-full h-full object-contain" /> */}
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">{item.name}</h3>
                    <p className="text-slate-400 text-sm font-medium mb-2">L1 Device</p>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">Qty: {item.qty}</span>
                      <button className="text-red-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-black text-xl text-slate-900">₹{item.price * item.qty}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT: Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-32">
                <h3 className="font-black text-xl text-slate-900 mb-6">Order Summary</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm font-medium text-slate-500">
                    <span>Subtotal</span>
                    <span className="text-slate-900 font-bold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-slate-500">
                    <span>Shipping</span>
                    <span className="text-emerald-500 font-bold">Free</span>
                  </div>
                  <div className="h-px bg-slate-100 my-4" />
                  <div className="flex justify-between text-lg font-black text-slate-900">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-emerald-500 transition-all active:scale-95 shadow-lg">
                  Checkout Now <ArrowRight size={20} />
                </button>

                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-6">
                  Secured by Razorpay
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
            <ShoppingBag size={64} className="mx-auto text-slate-200 mb-6" />
            <h2 className="text-2xl font-black text-slate-900 mb-2">Your Cart is Empty</h2>
            <p className="text-slate-400 mb-8">Looks like you haven't added any biometric devices yet.</p>
            <Link to="/" className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-xl font-bold items-center gap-2 hover:bg-emerald-500 transition-colors">
              Start Shopping <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;