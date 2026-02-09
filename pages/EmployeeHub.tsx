
import React, { useState } from 'react';
import { CORE_VALUES, MISSION, VISION_STATEMENT } from '../constants';

type PortalSection = 'dashboard' | 'directory' | 'attendance' | 'requests' | 'handbook' | 'kpis' | 'payroll';

const SidebarLink: React.FC<{ active: boolean; label: string; onClick: () => void; icon: React.ReactNode }> = ({ active, label, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-4 px-6 py-4 transition-all duration-300 ${
      active 
        ? 'bg-blue-600 text-white rounded-none md:rounded-l-full -mr-px z-10 font-bold shadow-lg shadow-blue-900/20' 
        : 'text-gray-500 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    <span className="text-[10px] uppercase tracking-widest">{label}</span>
  </button>
);

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border-l-2 border-blue-600 pl-8 space-y-2">
    <h4 className="text-lg font-bold uppercase tracking-tight text-white">{title}</h4>
    <div className="text-gray-500 text-sm leading-relaxed font-light">{children}</div>
  </div>
);

const KPIRole: React.FC<{ title: string; metrics: string[] }> = ({ title, metrics }) => (
  <div className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/20 transition-all">
    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-6">{title}</h4>
    <ul className="space-y-3">
      {metrics.map((m, i) => (
        <li key={i} className="flex items-center space-x-3 text-sm text-gray-400">
          <span className="text-blue-600 font-black tracking-tighter">/</span>
          <span>{m}</span>
        </li>
      ))}
    </ul>
  </div>
);

const DashboardView = () => (
  <div className="space-y-12 animate-in fade-in duration-700">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-2 italic text-white">The Originals <span className="text-blue-500">Workspace</span></h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-2xl text-sm">
          Welcome to the FOG Originals Command Center. Stay aligned, stay original.
        </p>
      </div>
      <div className="flex space-x-4">
        <div className="glass px-4 py-2 rounded-xl text-center border-white/5">
          <div className="text-[8px] text-gray-500 uppercase font-black">Attendance</div>
          <div className="text-sm font-bold text-blue-400">98%</div>
        </div>
        <div className="glass px-4 py-2 rounded-xl text-center border-white/5">
          <div className="text-[8px] text-gray-500 uppercase font-black">Kudos</div>
          <div className="text-sm font-bold text-blue-300">12</div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 bg-blue-600/5 border border-blue-500/10 p-8 rounded-[2rem]">
        <div className="flex justify-between items-start mb-6">
          <h4 className="text-blue-500 text-xs font-black uppercase tracking-[0.2em]">Latest Announcement</h4>
          <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">New</span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">Shopify Manager & Logistics Expansion</h3>
        <p className="text-sm text-gray-400 font-light leading-relaxed">
          We are officially opening the search for our new Shopify Manager and Dispatch Team. Referrals from "The Originals" are prioritized. Check the Careers page for details.
        </p>
      </div>
      <div className="glass p-8 rounded-[2rem] flex flex-col justify-center text-center border-white/5">
        <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Core Philosophy</h4>
        <p className="text-lg italic font-medium leading-tight text-white">"Excellence is our standard — not our exception."</p>
      </div>
    </div>

    <div className="border-t border-white/10 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-4">Our Mission</h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed">{MISSION}</p>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-4">Our Vision</h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed">{VISION_STATEMENT}</p>
        </div>
      </div>
    </div>
  </div>
);

const EmployeeHub: React.FC = () => {
  const [activeSection, setActiveSection] = useState<PortalSection>('dashboard');

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex flex-col space-y-1">
        <div className="mb-10 px-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-1">Staff House</h2>
          <p className="text-xs text-gray-500 italic">Victoria Island Hub</p>
        </div>
        
        <SidebarLink 
          active={activeSection === 'dashboard'} 
          onClick={() => setActiveSection('dashboard')} 
          label="Dashboard" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} 
        />
        <SidebarLink 
          active={activeSection === 'directory'} 
          onClick={() => setActiveSection('directory')} 
          label="Directory" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} 
        />
        <SidebarLink 
          active={activeSection === 'attendance'} 
          onClick={() => setActiveSection('attendance')} 
          label="Attendance" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
        />
        <SidebarLink 
          active={activeSection === 'payroll'} 
          onClick={() => setActiveSection('payroll')} 
          label="Pay Slips" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} 
        />
        <SidebarLink 
          active={activeSection === 'requests'} 
          onClick={() => setActiveSection('requests')} 
          label="Leave Requests" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} 
        />
        <SidebarLink 
          active={activeSection === 'handbook'} 
          onClick={() => setActiveSection('handbook')} 
          label="Handbook" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} 
        />
        <SidebarLink 
          active={activeSection === 'kpis'} 
          onClick={() => setActiveSection('kpis')} 
          label="KPIs" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>} 
        />
      </aside>

      {/* Content Area */}
      <main className="flex-1 min-h-[600px] glass rounded-[3rem] p-8 md:p-14 overflow-hidden shadow-2xl border-white/5">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeSection === 'dashboard' && <DashboardView />}
          {/* Use standard sub-components as defined in previous versions but updated with blue styling */}
          {activeSection === 'directory' && <DirectoryView />}
          {activeSection === 'attendance' && <AttendanceView />}
          {activeSection === 'payroll' && <PayrollView />}
          {activeSection === 'requests' && <RequestsView />}
          {activeSection === 'handbook' && <HandbookView />}
          {activeSection === 'kpis' && <KPIView />}
        </div>
      </main>
    </div>
  );
};

// Sub-views are updated to use the Blue/Grey/Black palette

const DirectoryView = () => (
  <div className="space-y-4">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-white">Contact Directory</h2>
    {[
        { name: 'Adekunle S.', role: 'Store Manager', contact: '+234 812 345 6789' },
        { name: 'Tunde A.', role: 'Lead Designer', contact: '+234 901 234 5678' },
        { name: 'Chisom O.', role: 'Inventory Manager', contact: '+234 802 345 6789' },
        { name: 'Femi D.', role: 'Logistics Lead', contact: '+234 703 111 2222' },
    ].map((staff, idx) => (
      <div key={idx} className="glass p-5 rounded-2xl flex justify-between items-center group hover:bg-white/[0.05] transition-all border-white/5">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-black text-xs text-white">
            {staff.name[0]}
          </div>
          <div>
            <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">{staff.name}</h4>
            <p className="text-[9px] text-gray-500 uppercase tracking-widest">{staff.role}</p>
          </div>
        </div>
        <button className="text-[10px] text-blue-500 uppercase tracking-widest font-black">Call</button>
      </div>
    ))}
  </div>
);

const AttendanceView = () => (
  <div className="text-center">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 italic text-white">Attendance Log</h2>
    <div className="glass p-12 rounded-[3rem] border-white/5 inline-block mx-auto min-w-[300px]">
      <div className="text-6xl font-black text-white mb-2">09:41</div>
      <div className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Status: Active</div>
      <button className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 rounded-none font-black text-xs uppercase tracking-widest transition-all">
        Clock Out
      </button>
    </div>
  </div>
);

const PayrollView = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-white">Payroll Slips</h2>
    {[1, 2, 3].map(i => (
      <div key={i} className="glass p-6 rounded-2xl flex justify-between items-center border-white/5 hover:border-blue-500/20 transition-all">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-600/10 text-blue-500 rounded-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <div>
            <h4 className="font-bold text-white">Slip_October_23.pdf</h4>
            <p className="text-[10px] text-gray-500 uppercase font-black">Status: Paid</p>
          </div>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors">View</button>
      </div>
    ))}
  </div>
);

const RequestsView = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-white">Leave Requests</h2>
    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-4 max-w-lg">
      <input type="text" placeholder="Reason for leave" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white text-xs outline-none focus:border-blue-500 transition-colors" />
      <div className="grid grid-cols-2 gap-4">
        <input type="date" className="bg-white/5 border border-white/10 p-4 rounded-xl text-gray-400 text-xs outline-none" />
        <input type="date" className="bg-white/5 border border-white/10 p-4 rounded-xl text-gray-400 text-xs outline-none" />
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-[0.3em] py-5 transition-all">
        Submit Request
      </button>
    </div>
  </div>
);

const HandbookView = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-white">The Originals Handbook</h2>
    <div className="space-y-12">
      <SectionCard title="👔 Dress Code & Grooming">
        Maintain a polished, professional appearance. Grey, Black, and Blue boutique-approved attire. Hair, nails, and accessories should reflect the FOG elegance.
      </SectionCard>
      <SectionCard title="🔒 Social Media Policy">
        No disclosure of internal pricing or disputes. Positive brand representation only. Breach leads to immediate review.
      </SectionCard>
      <SectionCard title="✨ Excellence Standard">
        Every interaction is an opportunity for brand building. Consistency is our currency.
      </SectionCard>
    </div>
  </div>
);

const KPIView = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <KPIRole title="Shopify Manager" metrics={['Conversion Rate', 'Site Uptime', 'Inventory Accuracy']} />
    <KPIRole title="Social Media Assistant" metrics={['Follower Growth', 'Engagement Rate', 'Content Output']} />
    <KPIRole title="Dispatch Rider" metrics={['Delivery Time', 'Package Care', 'Customer Feedback']} />
    <KPIRole title="Store Manager" metrics={['Sales Targets', 'Team Morale', 'Visual Merchandising']} />
  </div>
);

export default EmployeeHub;
