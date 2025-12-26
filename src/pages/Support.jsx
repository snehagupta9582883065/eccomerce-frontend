import React from 'react';
import { Download, HardDrive, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Support = () => {
  const drivers = [
    { name: 'Mantra MFS100 L1', size: '12MB', type: 'Official', v: '9.0.2', desc: 'Latest Rd Service for banking.' },
    { name: 'Morpho MSO 1300 E3', size: '18MB', type: 'Certified', v: '2.4.1', desc: 'Required for Ayushman Bharat.' },
    { name: 'StarTek FM220', size: '9MB', type: 'Utility', v: '1.0.5', desc: 'Legacy support driver.' }
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-6">
            <span className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">Technical Resources</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
            Drivers & <br /><span className="text-emerald-500 italic">RD Service.</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Download authorized drivers and RD service utilities for all supported L1 & L0 biometric devices.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Driver List */}
          <div className="lg:col-span-8 space-y-6">
            {drivers.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl hover:shadow-emerald-100/50 transition-all group"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors duration-500">
                  <Cpu size={32} className="text-slate-400 group-hover:text-white transition-colors" />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{d.name}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ver {d.v}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{d.type}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{d.desc}</p>
                </div>

                <button className="shrink-0 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl">
                  <Download size={18} /> <span>Download</span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full" />
              <ShieldCheck size={40} className="text-emerald-400 mb-6" />
              <h3 className="text-2xl font-black mb-4">Installation Help</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Facing issues with whitelisting? Our team can take remote access and setup the drivers for you.
              </p>
              <button className="w-full bg-emerald-500 text-slate-900 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-white transition-colors">
                Book Remote Setup <ArrowRight size={18} />
              </button>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2.5rem]">
              <h4 className="font-black text-emerald-800 uppercase tracking-widest text-xs mb-4">Compatibility</h4>
              <ul className="space-y-3">
                {['Windows 10/11 (64-bit)', 'Android 8.0+', 'Chrome OS', 'Linux Ubuntu'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-emerald-900 font-bold text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;