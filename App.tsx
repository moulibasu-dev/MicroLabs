
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Presentation, Award, Target, MessageSquare, PieChart, Smartphone, Zap } from 'lucide-react';
import { SlideView } from './components/SlideView';
import { ProposalView } from './components/ProposalView';

const App: React.FC = () => {
  const [view, setView] = useState<'presentation' | 'proposal'>('presentation');
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white overflow-hidden flex flex-col">
      {/* Top Navigation */}
      <header className="px-8 py-4 flex justify-between items-center bg-[#1e293b]/50 border-b border-white/5 z-50">
        <div className="flex items-center space-x-4">
          {/* Micro Labs Logo SVG */}
          <div className="flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
              <rect width="100" height="100" fill="#007DC5" />
              <path d="M0 45C10 40 15 50 25 45C35 40 40 50 50 45C60 40 65 50 75 45C85 40 90 50 100 45" stroke="white" strokeWidth="2.5" fill="none" />
              <path d="M0 52C10 47 15 57 25 52C35 47 40 57 50 52C60 47 65 57 75 52C85 47 90 57 100 52" stroke="white" strokeWidth="2.5" fill="none" />
              <path d="M0 59C10 54 15 64 25 59C35 54 40 64 50 59C60 54 65 64 75 59C85 54 90 64 100 59" stroke="white" strokeWidth="2.5" fill="none" />
              <path d="M0 66C10 61 15 71 25 66C35 61 40 71 50 66C60 61 65 71 75 66C85 61 90 71 100 66" stroke="white" strokeWidth="2.5" fill="none" />
              <rect x="0" y="75" width="100" height="25" fill="#007DC5" />
              <text x="50" y="90" textAnchor="middle" fill="white" fontSize="11" fontWeight="900" fontFamily="Arial, sans-serif">MICRO LABS</text>
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-tight uppercase tracking-tight text-white">Micro Labs Limited</h1>
            <p className="text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase">Engagement Portfolio 2026</p>
          </div>
        </div>
        
        <nav className="flex space-x-2 bg-black/20 p-1 rounded-full border border-white/10">
          <button 
            onClick={() => setView('presentation')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${view === 'presentation' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            Portfolio Showcase
          </button>
          <button 
            onClick={() => setView('proposal')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${view === 'proposal' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            Micro Labs Strategy
          </button>
        </nav>

        <div className="hidden md:block">
           <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">L&D Strategic Unit</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-auto">
        {view === 'presentation' ? (
          <SlideView currentSlide={currentSlide} onSlideChange={setCurrentSlide} />
        ) : (
          <ProposalView />
        )}
      </main>

      {/* Persistent Footer */}
      <footer className="px-8 py-3 bg-[#1e293b] flex justify-center items-center text-[10px] text-slate-500 uppercase tracking-widest border-t border-white/5">
        <span>Copyright Protected | Internal Use Only</span>
      </footer>
    </div>
  );
};

export default App;
