import React, { useRef, useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  // ... inside your sendEmail function
  const sendEmail = (e) => {
    e.preventDefault();

    // IMPORTANT: Replace these with your actual IDs from EmailJS Dashboard
    const SERVICE_ID = "service_sf25p8w";   // Your Service ID
    const TEMPLATE_ID = "template_p8vahyl"; // Your Template ID
    const PUBLIC_KEY = "inh4dcUSuj3ndBnGX";      // Your Public Key

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setSent(true);
        form.current.reset();
      }, (error) => {
        console.log("FAILED...", error.text);
        // This will help you see the specific error message in the console
        alert("Error: " + error.text);
      });
  };
  return (
    <div className="pt-40 pb-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-emerald-600 font-black tracking-[0.4em] uppercase text-[10px]">Get in Touch</span>
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter mt-2 mb-8">Let's Talk <br /> <span className="text-emerald-500 italic">Hardware.</span></h1>
          <p className="text-slate-500 text-lg font-medium max-w-md mb-12 leading-relaxed">Need bulk pricing or technical help? Our specialist team is ready to assist your banking business.</p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="bg-white shadow-xl p-4 rounded-2xl"><Phone className="text-emerald-500" /></div>
              <p className="text-2xl font-black text-slate-900 tracking-tight">+91 9758950611</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-white shadow-xl p-4 rounded-2xl"><Mail className="text-blue-500" /></div>
              <p className="text-xl font-bold text-slate-600 tracking-tight">support@religaredigital.in</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <CheckCircle size={80} className="text-emerald-500 mb-6 animate-bounce" />
              <h2 className="text-3xl font-black text-slate-900 mb-2">Message Sent!</h2>
              <p className="text-slate-500 font-bold">We will contact you shortly on your email.</p>
              <button onClick={() => setSent(false)} className="mt-8 text-emerald-600 font-black underline">Send another message</button>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* 'name' attribute zaroori hai EmailJS ke liye */}
                <input name="from_name" type="text" placeholder="First Name" required className="w-full bg-slate-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 font-bold" />
                <input name="mobile" type="text" placeholder="Mobile No" required className="w-full bg-slate-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 font-bold" />
              </div>
              <input name="reply_to" type="email" placeholder="Business Email" required className="w-full bg-slate-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 font-bold" />
              <textarea name="message" placeholder="Tell us about your requirement..." rows="4" required className="w-full bg-slate-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 font-bold"></textarea>

              <button type="submit" className="w-full bg-emerald-500 text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-emerald-100 active:scale-95">
                Send Message <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;