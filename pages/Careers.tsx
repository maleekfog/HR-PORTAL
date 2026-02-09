
import React, { useState } from 'react';
import { JOB_OPENINGS } from '../constants';
import ApplicationModal from '../components/ApplicationModal';

const Careers: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const categories = ['All', 'Design', 'Retail', 'Marketing', 'Operations', 'Logistics'];

  const filteredJobs = filter === 'All' 
    ? JOB_OPENINGS 
    : JOB_OPENINGS.filter(j => j.department === filter);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-24 text-center">
        <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter italic uppercase opacity-90 leading-none text-white">
          CRAFT YOUR <br />
          <span className="text-blue-500">LEGACY</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          We don’t just hire employees; we recruit artisans of the modern age. Find your place in our growing Lagos fashion house.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-black uppercase tracking-[0.3em] transition-all border-b-2 pb-2 ${
              filter === cat 
                ? 'border-blue-500 text-blue-500' 
                : 'border-transparent text-gray-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="glass p-10 md:p-14 hover:bg-white/[0.02] transition-all flex flex-col group rounded-[2.5rem] border-white/5 hover:border-blue-500/20">
              <div className="flex justify-between items-start mb-8">
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/30 px-3 py-1">
                  {job.department}
                </span>
                <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{job.postedAt}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 leading-tight uppercase tracking-tight group-hover:text-blue-400 transition-colors text-white">{job.title}</h3>
              <div className="text-[10px] text-gray-500 mb-8 flex items-center space-x-4 font-bold uppercase tracking-[0.15em]">
                <span>{job.location}</span>
                <span className="w-1 h-1 bg-blue-900 rounded-full"></span>
                <span>{job.type}</span>
              </div>
              <p className="text-gray-500 text-sm mb-12 flex-1 leading-relaxed font-light">
                {job.description}
              </p>
              <button 
                onClick={() => setSelectedJob(job.title)}
                className="w-full bg-zinc-900 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] py-5 hover:bg-blue-600 hover:border-blue-600 transition-all"
              >
                Send Portfolio & CV
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center glass rounded-[2.5rem]">
            <p className="text-gray-600 uppercase tracking-widest text-xs">No active calls for {filter}.</p>
          </div>
        )}
      </div>

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
        jobTitle={selectedJob || ''} 
      />
    </div>
  );
};

export default Careers;
