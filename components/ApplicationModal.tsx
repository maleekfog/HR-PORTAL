
import React, { useState } from 'react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, jobTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity">
      <div className="glass w-full max-w-xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in duration-300">
        <div className="bg-blue-600 p-8 md:p-10 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 block mb-1">Applying for the House</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">{jobTitle}</h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white hover:scale-110 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-8 md:p-14 bg-zinc-950/50">
          {isSuccess ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl shadow-lg shadow-blue-900/30">✓</div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">Application Received</h3>
              <p className="text-gray-400 font-light">The Atelier will review your portfolio. Stay original.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="e.g. Tunde Ade" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="name@luxury.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="+234..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">LinkedIn (Optional)</label>
                  <input type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="linkedin.com/in/..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Resume / Portfolio (PDF)</label>
                <div className="relative group">
                  <input required type="file" accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="w-full bg-zinc-900/80 border border-dashed border-white/10 p-8 text-center group-hover:border-blue-500/50 transition-colors rounded-2xl">
                    <span className="text-sm text-gray-500 font-light block mb-2">Drag and drop or <span className="text-blue-500 font-bold">click to upload</span></span>
                    <span className="text-[10px] text-gray-600 uppercase">Max size: 10MB</span>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black font-black text-sm uppercase tracking-[0.3em] py-6 mt-4 hover:bg-blue-600 hover:text-white transition-all disabled:opacity-50 flex items-center justify-center space-x-3 shadow-2xl"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
