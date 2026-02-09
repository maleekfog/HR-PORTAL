
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HRAssistant from './components/HRAssistant';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Culture from './pages/Culture';
import EmployeeHub from './pages/EmployeeHub';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/hub" element={<EmployeeHub />} />
          </Routes>
        </main>

        <footer className="border-t border-white/5 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="text-xl font-bold uppercase tracking-tighter">FOG Originals <span className="text-orange-500">HOUSE</span></div>
              <p className="text-gray-500 text-xs">Victoria Island, Lagos • Street Luxury Excellence</p>
            </div>
            
            <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Ethics</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Insta</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            </div>

            <div className="text-gray-600 text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} FOG Originals Media. THE ORIGINALS.
            </div>
          </div>
        </footer>

        {/* Global AI Assistant component */}
        <HRAssistant />
      </div>
    </Router>
  );
};

export default App;
