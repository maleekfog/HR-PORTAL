
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_VALUES, JOB_OPENINGS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-32 relative overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-white/5 p-8 md:p-20">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px]"></div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Atelier of the Bold</span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter uppercase">
            LAGOS <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent italic">STREET LUXURY</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed">
            FOG Originals is redefining the African fashion landscape. We are looking for creators to join our house of design, retail, and cultural storytelling.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/careers" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold transition-all uppercase text-sm tracking-widest shadow-xl shadow-orange-900/20">
              Join the House
            </Link>
            <Link to="/culture" className="glass hover:bg-white/10 px-10 py-4 rounded-full font-bold transition-all uppercase text-sm tracking-widest">
              The Brand Story
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {COMPANY_VALUES.map((val, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="text-orange-500 font-black text-6xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                /0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{val.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Jobs Preview */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-5xl font-black mb-2 tracking-tighter uppercase">Vacancies</h2>
            <p className="text-gray-500 font-light">Join the most influential creative team in Nigeria.</p>
          </div>
          <Link to="/careers" className="mt-4 md:mt-0 text-orange-500 font-bold uppercase tracking-widest text-xs flex items-center group">
            All Opportunities 
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        <div className="space-y-2">
          {JOB_OPENINGS.slice(0, 3).map((job) => (
            <div key={job.id} className="group p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-all border-b border-white/5 last:border-0">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-[10px] bg-white/5 px-3 py-1 rounded-full text-gray-400 font-bold uppercase tracking-widest">{job.department}</span>
                  <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">{job.type}</span>
                </div>
                <h4 className="text-3xl font-bold group-hover:text-orange-500 transition-colors tracking-tight">{job.title}</h4>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="bg-white text-black text-xs font-black uppercase tracking-[0.2em] px-8 py-3 rounded-none hover:bg-orange-600 hover:text-white transition-all">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
