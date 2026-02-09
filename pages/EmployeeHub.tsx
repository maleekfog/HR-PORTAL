
import React, { useState } from 'react';
import { CORE_VALUES, MISSION, VISION_STATEMENT } from '../constants';

type PortalSection = 'dashboard' | 'directory' | 'attendance' | 'requests' | 'handbook' | 'kpis' | 'payroll';

const SidebarLink: React.FC<{ active: boolean; label: string; onClick: () => void; icon: React.ReactNode }> = ({ active, label, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-4 px-6 py-4 transition-all duration-300 ${
      active 
        ? 'bg-orange-600 text-white rounded-none md:rounded-l-full -mr-px z-10 font-bold' 
        : 'text-gray-500 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    <span className="text-[10px] uppercase tracking-widest">{label}</span>
  </button>
);

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border-l-2 border-orange-600 pl-8 space-y-2">
    <h4 className="text-lg font-bold uppercase tracking-tight">{title}</h4>
    <div className="text-gray-500 text-sm leading-relaxed font-light">{children}</div>
  </div>
);

const KPIRole: React.FC<{ title: string; metrics: string[] }> = ({ title, metrics }) => (
  <div className="glass p-8 rounded-3xl">
    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-6">{title}</h4>
    <ul className="space-y-3">
      {metrics.map((m, i) => (
        <li key={i} className="flex items-center space-x-3 text-sm text-gray-400">
          <span className="text-orange-600 font-black tracking-tighter">/</span>
          <span>{m}</span>
        </li>
      ))}
    </ul>
  </div>
);

const DashboardView = () => (
  <div className="space-y-12">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-2 italic">The Originals <span className="text-orange-500">Workspace</span></h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-2xl text-sm">
          Welcome to the FOG Originals Command Center. Stay aligned, stay original.
        </p>
      </div>
      <div className="flex space-x-4">
        <div className="glass px-4 py-2 rounded-xl text-center">
          <div className="text-[8px] text-gray-500 uppercase font-black">Attendance</div>
          <div className="text-sm font-bold text-green-500">98%</div>
        </div>
        <div className="glass px-4 py-2 rounded-xl text-center">
          <div className="text-[8px] text-gray-500 uppercase font-black">Kudos</div>
          <div className="text-sm font-bold text-orange-500">12</div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 bg-orange-600/10 border border-orange-500/20 p-8 rounded-[2rem]">
        <div className="flex justify-between items-start mb-6">
          <h4 className="text-orange-500 text-xs font-black uppercase tracking-[0.2em]">Latest Announcement</h4>
          <span className="text-[10px] bg-orange-600 text-white px-2 py-0.5 rounded-full font-bold">New</span>
        </div>
        <h3 className="text-2xl font-bold mb-3">Shopify Manager & Logistics Expansion</h3>
        <p className="text-sm text-gray-400 font-light leading-relaxed">
          We are officially opening the search for our new Shopify Manager and Dispatch Team. Referrals from "The Originals" are prioritized. Check the Careers page for details.
        </p>
      </div>
      <div className="glass p-8 rounded-[2rem] flex flex-col justify-center text-center">
        <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Core Philosophy</h4>
        <p className="text-lg italic font-medium leading-tight">"Excellence is our standard — not our exception."</p>
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

const DirectoryView = () => (
  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Contact Directory</h2>
    <div className="space-y-3">
      {[
        { name: 'Adekunle S.', role: 'Store Manager', contact: '+234 812 345 6789' },
        { name: 'Tunde A.', role: 'Lead Designer', contact: '+234 901 234 5678' },
        { name: 'Chisom O.', role: 'Inventory Manager', contact: '+234 802 345 6789' },
        { name: 'Femi D.', role: 'Logistics Lead', contact: '+234 703 111 2222' },
        { name: 'Admin/HR', role: 'Support', contact: 'hr@fogoriginals.com' },
      ].map((staff, idx) => (
        <div key={idx} className="glass p-5 rounded-2xl flex justify-between items-center group hover:bg-white/[0.02] transition-all border-white/5">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-black text-xs text-orange-500">
              {staff.name.split(' ')[0][0]}
            </div>
            <div>
              <h4 className="text-base font-bold group-hover:text-orange-500 transition-colors">{staff.name}</h4>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest">{staff.role}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 font-mono">{staff.contact}</p>
            <button className="text-[8px] text-orange-500 uppercase tracking-widest font-black mt-1">Direct Ping</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AttendanceView = () => (
  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Attendance Log</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass p-10 rounded-[2.5rem] text-center">
        <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Current Time</div>
        <div className="text-6xl font-black text-white mb-6 tracking-tighter">09:41<span className="text-orange-500 text-2xl"> AM</span></div>
        <p className="text-[10px] text-green-500 uppercase tracking-[0.3em] font-black mb-8 flex items-center justify-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span> Status: On Clock
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-zinc-800 border border-white/10 py-4 rounded-none text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Break Start
          </button>
          <button className="bg-orange-600 py-4 rounded-none text-[10px] font-black uppercase tracking-widest hover:bg-orange-700 transition-all">
            Clock Out
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-2">Workweek Summary</h4>
        <div className="space-y-2">
          {[
            { date: 'Mon, Oct 24', in: '08:30', out: '18:05', status: 'On-time' },
            { date: 'Tue, Oct 23', in: '08:25', out: '18:00', status: 'On-time' },
            { date: 'Wed, Oct 22', in: '08:45', out: '18:15', status: 'Late-5m' },
          ].map((log, i) => (
            <div key={i} className="flex justify-between items-center px-5 py-4 bg-white/[0.03] rounded-2xl border border-white/5">
              <span className="text-xs font-medium">{log.date}</span>
              <div className="text-right">
                <span className="text-[9px] text-gray-500 font-bold uppercase block">{log.in} — {log.out}</span>
                <span className={`text-[8px] font-black uppercase ${log.status === 'On-time' ? 'text-green-500' : 'text-orange-500'}`}>{log.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PayrollView = () => (
  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Payroll & Slips</h2>
    <div className="space-y-6">
      <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl flex justify-between items-center">
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Upcoming Payment</h4>
          <div className="text-3xl font-black">Oct 31, 2023</div>
        </div>
        <div className="text-right">
          <h4 className="text-xs font-black uppercase tracking-widest text-orange-500 mb-1">Status</h4>
          <div className="text-sm font-bold uppercase">Processing</div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-2">History</h4>
        {[
          { month: 'September 2023', date: 'Sept 29', id: 'SLIP-0923-88' },
          { month: 'August 2023', date: 'Aug 30', id: 'SLIP-0823-12' },
          { month: 'July 2023', date: 'July 28', id: 'SLIP-0723-45' },
        ].map((slip, i) => (
          <div key={i} className="glass p-5 rounded-2xl flex justify-between items-center hover:bg-white/[0.05] transition-all cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-600/10 flex items-center justify-center text-orange-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase">{slip.month}</h4>
                <p className="text-[9px] text-gray-500 tracking-widest">{slip.date} • {slip.id}</p>
              </div>
            </div>
            <button className="text-[10px] font-black uppercase text-gray-400 hover:text-orange-500 transition-colors">Download</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RequestsView = () => (
  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Leave Requests</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h4 className="text-xs font-black uppercase tracking-widest text-orange-500">Submit New Request</h4>
        <div className="space-y-4">
          <input type="text" placeholder="Type of Leave (Vacation, Sick, etc.)" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs outline-none focus:border-orange-500 transition-colors" />
          <div className="grid grid-cols-2 gap-4">
            <input type="date" className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs outline-none focus:border-orange-500 transition-colors" />
            <input type="date" className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs outline-none focus:border-orange-500 transition-colors" />
          </div>
          <textarea placeholder="Brief reason for your request..." className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs outline-none min-h-[120px] focus:border-orange-500 transition-colors resize-none" />
          <button className="w-full bg-white text-black font-black text-xs uppercase tracking-widest py-5 rounded-none hover:bg-orange-600 hover:text-white transition-all shadow-xl shadow-white/5">
            Submit Request
          </button>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Status Tracker</h4>
        <div className="space-y-4">
          <div className="glass p-6 rounded-[2rem] border-orange-500/20">
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold uppercase">Vacation Leave</span>
              <span className="text-[8px] bg-orange-600/20 text-orange-500 px-3 py-1 rounded-full uppercase font-black">Pending Approval</span>
            </div>
            <p className="text-[10px] text-gray-500 mb-4">Dec 15 - Dec 20, 2023 (5 Days)</p>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-orange-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HandbookView = () => (
  <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-12">
    <div>
      <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">The Originals Handbook</h2>
      <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xl">
        Our identity is tied to these standards. Ignorance is not an excuse; excellence is our baseline.
      </p>
    </div>

    <div className="space-y-8">
      <SectionCard title="👔 Dress Code & Grooming">
        Maintain a polished, professional appearance. Avoid overly revealing, inappropriate, or unprofessional outfits. No store items unless purchased. Hair, nails, beards, and accessories should reflect elegance.
      </SectionCard>
      <SectionCard title="⏰ Attendance & Punctuality">
        Report absence at least 2 hours before shift. Repeated lateness will result in warnings. Three (3) consecutive days of unapproved absence may lead to termination.
      </SectionCard>
      <SectionCard title="🤝 Workplace Behavior">
        Treat colleagues and management with respect. Phones are for emergencies only. Zero tolerance for gossip or conflict-provoking behavior.
      </SectionCard>
      <SectionCard title="🔒 Social Media & Confidentiality">
        Strictly no disclosure of pricing, supplier info, or internal disputes. No negative brand comments online. Breach leads to termination and legal action.
      </SectionCard>
      <SectionCard title="💳 Refund & Exchange">
        All sales are final. Refunds are not permitted. Exchanges allowed within 24 hours (excluding white items). Must be unworn with original tags.
      </SectionCard>
    </div>
  </div>
);

const KPIView = () => (
  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 italic">Performance KPIs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <KPIRole title="Shopify Manager" metrics={['Digital Sales Conversion', 'Inventory Sync Accuracy', 'Site Load/Error Monitoring', 'Promotion Execution', 'Customer Journey Optimization']} />
      <KPIRole title="Social Media Assistant" metrics={['Engagement Rate Growth', 'Content Calendar Adherence', 'DM Response Time', 'UGC Curation', 'Trend Real-time Response']} />
      <KPIRole title="Dispatch Rider" metrics={['On-time Delivery Rate', 'Product Care/Condition', 'Customer Courtesy Score', 'Route Optimization', 'Return Package Accuracy']} />
      <KPIRole title="Store Manager" metrics={['Monthly Sales Targets', 'Team Morale & Turnover', 'Boutique Aesthetic Control', 'Inventory Variance Control', 'Escalation Resolution']} />
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
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-1">Staff House</h2>
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
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} 
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
        {activeSection === 'dashboard' && <DashboardView />}
        {activeSection === 'directory' && <DirectoryView />}
        {activeSection === 'attendance' && <AttendanceView />}
        {activeSection === 'payroll' && <PayrollView />}
        {activeSection === 'requests' && <RequestsView />}
        {activeSection === 'handbook' && <HandbookView />}
        {activeSection === 'kpis' && <KPIView />}
      </main>
    </div>
  );
};

export default EmployeeHub;
