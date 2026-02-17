
import React, { useState, forwardRef } from 'react';
import { Target, PieChart, Award } from 'lucide-react';

export const ProposalView = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'strategy' | 'creative' | 'comms'>('overview');

  const visualDirectionItems = [
    { 
      label: 'High Energy Icons', 
      desc: 'A futuristic digital interface visualizing growth and tangible employee benefits as high-energy, interactive touchpoints.'
    },
    { 
      label: 'Bold Typography', 
      desc: 'High-impact, oversized 3D fonts and icons that command attention and drive the "Goal Miles" narrative.'
    },
    { 
      label: 'Real Employee Spotlights', 
      desc: 'Individual hero portraits featuring employees holding trophies to celebrate peak performance.'
    },
    { 
      label: 'Interactive Infographics', 
      desc: 'Visual progress roadmaps featuring a person walking on a zigzag line path towards the Kenya Safari.'
    }
  ];

  return (
    <div ref={ref} className="p-4 md:p-8 max-w-7xl mx-auto space-y-12">
      {/* Hero Header */}
      <section className="text-center space-y-4 py-8">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Micro Labs: Incentivize360</h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">Scaling internal performance through high-energy communication and interactive utility.</p>
        
        <div className="flex flex-wrap justify-center gap-2 pt-6">
           {['overview', 'strategy', 'creative', 'comms'].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`px-4 md:px-6 py-2 rounded-full text-sm font-bold capitalize transition-all border ${activeTab === tab ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-600/30' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'}`}
             >
               {tab === 'comms' ? 'Sample Comms' : tab}
             </button>
           ))}
        </div>
      </section>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
           <div className="md:col-span-2 bg-gradient-to-br from-[#1e293b] to-slate-900 p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold border-l-4 border-blue-500 pl-4">The Requirement Overview</h3>
              <p className="text-slate-400 leading-relaxed">
                Micro Labs has a robust incentive structure (₹5,000 to ₹1.5L + Foreign Trips), yet current employee understanding is fragmented. 
                Our goal is to create a 360-degree digital engagement ecosystem that simplifies the policy and fuels "Fear of Missing Out" (FOMO) and "Pride of Achievement".
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                 {[
                   { label: 'Simplification', text: 'Turning complex payout tables into simple "Goal Miles".' },
                   { label: 'Energy', text: 'Dynamic, non-corporate visuals and relatable memes.' },
                   { label: 'Accessibility', text: 'WhatsApp automation and In-App interactive tools.' },
                   { label: 'Aspiration', text: 'Highlighting Kenya and the MD Award as life-changing peaks.' }
                 ].map((item, i) => (
                   <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <h4 className="text-blue-400 font-bold text-sm mb-1">{item.label}</h4>
                      <p className="text-xs text-slate-500">{item.text}</p>
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-600/20 flex flex-col justify-center text-center space-y-4">
              <Award size={48} className="text-blue-500 mx-auto" />
              <h4 className="text-xl font-bold">The Big Wins</h4>
              <p className="text-sm text-slate-400 italic">"Scaling from a ₹5,000 monthly bonus to a trip to Kenya – We make the journey visible."</p>
           </div>
        </div>
      )}

      {activeTab === 'strategy' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
          <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 shadow-xl space-y-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500">
              <Target size={24}/>
            </div>
            <h3 className="text-2xl font-bold">Execution Ecosystem</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-blue-500 shrink-0"></div>
                <span><strong>Interactive Utility:</strong> In-App Incentive Calculator allowing reps to simulate earnings instantly while on the go.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-blue-500 shrink-0"></div>
                <span><strong>Field Audio Rituals:</strong> Short, high-energy voice notes or podcasts for consumption during doctor-call transit.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-blue-500 shrink-0"></div>
                <span><strong>Relatable Humor:</strong> WhatsApp-delivered "Life of a Sales Hero" memes that acknowledge the hard work while keeping the prize in sight.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 shadow-xl space-y-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-500">
              <PieChart size={24}/>
            </div>
            <h3 className="text-2xl font-bold">Mobile Channel Breakdown</h3>
            <div className="space-y-6">
              {[
                { channel: 'Internal App', use: 'Interactive Calculator & Milestone Gamification' },
                { channel: 'WhatsApp', use: 'Daily Motivational Memes & Audio Clips' },
                { channel: 'Emailers', use: 'MD Spotlights & Official Payout Certificates' },
                { channel: 'SMS & Push Alerts', use: 'Instant Milestone Nudges & High-Priority Alerts' }
              ].map((c, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                   <span className="font-bold text-white text-sm">{c.channel}</span>
                   <span className="text-xs text-slate-400">{c.use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'creative' && (
        <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SampleComp 
              title="Aspirational: 'The Kenya Roar'" 
              type="Copy Option 1" 
              desc="Headline: 'From the Sales Floor to the Safari Door.' Copy: Your hard work just booked a flight. Ready for the MD Award?" 
              color="amber"
            />
            <SampleComp 
              title="Motivational: '₹1.5 Lakh Closer'" 
              type="Copy Option 2" 
              desc="Headline: 'Don't Just Meet the Target. Own the Reward.' Copy: Track your next ₹10,000 milestone on the App today." 
              color="blue"
            />
            <SampleComp 
              title="Relatable Meme: 'Target Tension'" 
              type="Copy Option 3" 
              desc="Image: Rep drinking coffee. Caption: 'The face you make when you're just 2 units away from the Kenya trip!'" 
              color="purple"
            />
          </div>
          
          <div className="space-y-8">
             <div className="text-center space-y-2">
                <h4 className="text-2xl font-bold text-white">Visual Direction: "The Performance Aesthetic"</h4>
                <p className="text-slate-400">Design guidelines to ensure every post feels high-energy and consistent.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {visualDirectionItems.map((item, i) => (
                  <div key={i} className="group bg-[#1e293b] p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all shadow-xl space-y-4">
                     <div>
                        <span className="text-blue-400 text-[10px] font-black uppercase tracking-tighter">Direction {i+1}</span>
                        <h5 className="font-bold text-white text-lg mt-1">{item.label}</h5>
                     </div>
                     <div className="h-1 w-12 bg-blue-500/30 rounded-full"></div>
                     <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      )}

      {activeTab === 'comms' && (
        <div className="animate-in fade-in duration-500 pb-20 flex flex-col items-center">
          <div className="text-center space-y-2 mb-8">
            <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">Creative Sample Assets</h4>
            <p className="text-slate-400">A showcase of sample communication materials.</p>
          </div>
          <div className="w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQGl9_YJRG-pIv4lHTNRXSAWh8R2I3wRngmQ1p3F9j-zT6nl8MyPfGdvURNVdw7PwHnZNZAYhgddkAL/pubembed?start=true&loop=true&delayms=10000"
              frameBorder="0"
              allowFullScreen={true}
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
});

// Simple SVG icon to simulate the plane in the creative
const PlaneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1.1.1-1.5.5l-.3.3c-.4.4-.5 1-.1 1.5L9 12l-5 5H2l4 2 2 4v-2l5-5 3.5 6.1c.5.4 1.1.3 1.5-.1l.3-.3c.4-.4.6-1 .5-1.5z" />
  </svg>
);

const SampleComp: React.FC<{title: string, type: string, desc: string, color: string}> = ({title, type, desc, color}) => {
  const colors: any = {
    blue: 'border-blue-500 bg-blue-500/10',
    purple: 'border-purple-500 bg-purple-500/10',
    amber: 'border-amber-500 bg-amber-500/10'
  };
  return (
    <div className={`p-6 rounded-2xl border-t-4 shadow-xl space-y-3 ${colors[color] || 'bg-white/5 border-white/10'}`}>
      <span className="text-[10px] font-black uppercase tracking-widest text-white opacity-50">{type}</span>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  )
}
