
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="glass w-full max-w-xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in duration-300">
        <div className="bg-orange-600 p-8 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 block mb-1">Applying for</span>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">{jobTitle}</h2>
          </div>
          <button onClick={onClose} className="text-white hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-10 animate-in fade-in zoom-in">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl">✓</div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Application Received</h3>
              <p className="text-gray-400 font-light">The House will review your portfolio shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:border-orange-500 outline-none transition-colors" placeholder="e.g. Tunde Ade" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:border-orange-500 outline-none transition-colors" placeholder="name@luxury.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:border-orange-500 outline-none transition-colors" placeholder="+234..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">LinkedIn (Optional)</label>
                  <input type="url" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:border-orange-500 outline-none transition-colors" placeholder="linkedin.com/in/..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Resume / Portfolio (PDF)</label>
                <div className="relative group">
                  <input required type="file" accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="w-full bg-zinc-900 border border-dashed border-white/20 p-6 text-center group-hover:border-orange-500 transition-colors">
                    <span className="text-sm text-gray-400 font-light">Drag and drop or <span className="text-orange-500 font-bold">click to upload</span></span>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black font-black text-sm uppercase tracking-[0.3em] py-5 mt-4 hover:bg-orange-600 hover:text-white transition-all disabled:opacity-50 flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>Submitting...</span>
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
