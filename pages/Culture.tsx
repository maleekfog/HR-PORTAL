
import React from 'react';

const Culture: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="order-2 md:order-1">
          <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The House of FOG</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">STREET <br />SOUL. <br /><span className="italic">LUXURY</span> HEART.</h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
            FOG Originals was born in the vibrant streets of Lagos. We don't just sell clothes; we curate the visual identity of a generation. Our culture is one of obsession—obsession with quality, with detail, and with the narrative of African excellence.
          </p>
          <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-10">
            <div>
              <div className="text-5xl font-bold text-white mb-2 tracking-tighter">12+</div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Annual Collections</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2 tracking-tighter">VI</div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Flagship Location</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute inset-0 bg-orange-600/5 blur-[100px] rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" 
            alt="FOG Luxury Atelier" 
            className="relative rounded-[2rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5]"
          />
        </div>
      </div>

      {/* Perks */}
      <section className="mb-32">
        <h2 className="text-4xl font-black mb-20 text-center tracking-tighter uppercase">The <span className="text-orange-500 italic">Original</span> Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {[
            { title: 'Wardrobe Allowance', desc: 'Step into the brand with a generous annual budget for FOG drops.' },
            { title: 'Global Fashion Week', desc: 'Opportunities for key staff to attend Milan, Paris, and London shows.' },
            { title: 'Wellness & Health', desc: 'Premium private healthcare in Lagos best facilities.' },
            { title: 'Creative Studio', desc: 'Access to high-end photography and design tech at our HQ.' },
            { title: 'Cultural Fridays', desc: 'Early finishes and curated networking events with the Lagos elite.' },
            { title: 'Bespoke Training', desc: 'Specialized luxury retail and textile design mentorship.' }
          ].map((perk, idx) => (
            <div key={idx} className="bg-zinc-950 p-12 group hover:bg-orange-600/5 transition-colors">
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight group-hover:text-orange-500 transition-colors">{perk.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <div className="bg-white text-black rounded-[3rem] p-12 md:p-32 text-center">
        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12">The Manifesto</h4>
        <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 leading-none">
          "WE DON'T FOLLOW <br /> TRENDS. WE ARE THE <br /> <span className="text-orange-600">DIRECTION</span>."
        </p>
        <div className="h-20 w-px bg-black mx-auto"></div>
      </div>
    </div>
  );
};

export default Culture;
