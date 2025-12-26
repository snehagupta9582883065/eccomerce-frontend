import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_sf25p8w', 'template_p8vahyl', form.current, 'inh4dcUSuj3ndBnGX')
      .then(() => {
        setStatus('success');
        form.current.reset();
      }, () => {
        setStatus('error');
      })
      .finally(() => setLoading(false));
  };


  return (
    <div className="min-h-screen bg-gray-100 text-white pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <button onClick={() => window.history.back()} className="text-sm font-bold text-slate-500 hover:text-white transition-colors">
            ← Return to Home
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >
          {/* LEFT: INFO */}
          <div>
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-[#0f172a]">
              Let's Talk <br /><span className="text-emerald-500">Business.</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12 max-w-lg">
              Require bulk pricing for CSP points or Bank Kiosks? Our sales team responds within 15 minutes.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Phone size={24} />, title: "Call Direct", val: "+91 9758950611", sub: "Priority Support Line" },
                { icon: <Mail size={24} />, title: "Email Us", val: "support@religaredigital.in", sub: "For Quotations" },
                { icon: <MapPin size={24} />, title: "Headquarters", val: "New Delhi, India", sub: "Main Distribution Center" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0f172a]">{item.val}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-black/50 text-slate-900">
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <MessageSquare className="text-emerald-500" /> Send Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                  <input type="text" name="user_name" required className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold focus:ring-2 focus:ring-emerald-500" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                  <input type="text" name="user_lastname" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold focus:ring-2 focus:ring-emerald-500" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                <input type="email" name="user_email" required className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold focus:ring-2 focus:ring-emerald-500" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-emerald-500" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-500 hover:shadow-xl transition-all flex items-center justify-center gap-3"
              >
                {loading ? 'Sending...' : <>Send Request <Send size={20} /></>}
              </button>

              {status === 'success' && <p className="text-emerald-600 font-bold text-center">Message sent successfully!</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;