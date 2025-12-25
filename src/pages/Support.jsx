import React from 'react';
import { Download, HardDrive, ShieldCheck } from 'lucide-react';

const Support = () => {
  const drivers = [
    { name: 'Mantra MFS100 L1 Driver', size: '12MB', type: 'Official' },
    { name: 'Morpho MSO 1300 E3', size: '18MB', type: 'Certified' },
    { name: 'StarTek FM220 Support', size: '9MB', type: 'Utility' }
  ];

  return (
    <div className="pt-40 pb-20 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-emerald-600 font-black tracking-[0.4em] uppercase text-[10px]">Technical Hub</span>
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter mt-2">Drivers & RD Service</h1>
      </div>

      <div className="space-y-4">
        {drivers.map((d, i) => (
          <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center hover:shadow-2xl transition-all group">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-emerald-50 transition-colors">
                <HardDrive className="text-slate-400 group-hover:text-emerald-500" />
              </div>
              <div>
                <h3 className="font-black text-xl text-slate-900">{d.name}</h3>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{d.type} Software</span>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-500 transition-all">
              <Download size={18} /> Download {d.size}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;