
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { label: 'Portal Home', path: '/' },
    { label: 'Careers', path: '/careers' },
    { label: 'Manifesto', path: '/culture' },
    { label: 'Employee Hub', path: '/hub' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-none flex items-center justify-center font-black text-white text-xl italic group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">F</div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter uppercase leading-none text-white">FOG Originals</span>
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-blue-400">Talent & Policy House</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-blue-400 ${
                location.pathname === item.path ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/hub" className="border border-white/10 hover:border-blue-500/50 hover:bg-blue-600/5 text-white text-[10px] font-black uppercase tracking-widest px-8 py-3 transition-all">
            Staff Portal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
