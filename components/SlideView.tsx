
import React from 'react';
import { ChevronLeft, ChevronRight, Zap, Award, Target, MessageSquare, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

interface SlideViewProps {
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const slides = [
  {
    type: 'title',
    title: 'Transforming Internal Potential into Performance',
    subtitle: 'Strategic Portfolio: Engagement & Incentive Optimization',
    description: 'Deep expertise in driving behavioral change within complex sales networks and pharmaceutical environments.'
  },
  {
    type: 'case',
    client: 'JB Pharma (Razel)',
    title: 'The Behavioral RESET Framework',
    strategy: 'We moved from "Information Push" to "Behavioral Pull". Instead of long PDFs, we broke down medical USPs into 30-second daily challenges.',
    deliverables: [
      'Interactive Sales Rituals via internal app',
      'Recognition Badges for field-force milestones',
      'Micro-learning Video series for Brand Managers'
    ],
    impact: '42% increase in USP recall across 12,000+ reps within 90 days.',
    takeaway: 'Simplifying complex technical data into high-recall interactions.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tags: ['Pharma', 'Field-Force Engagement', 'Micro-Learning']
  },
  {
    type: 'case',
    client: 'Balmerol Lubricants',
    title: 'Safar Ki Suraksha: Emotional Loyalty',
    strategy: 'Engaged unorganized mechanics by connecting product usage to personal family dreams. We built a narrative where "Higher Performance = Higher Savings for Home".',
    deliverables: [
      'Vernacular WhatsApp Content Strategy',
      'Community leaderboard for local mechanics',
      'Goal-based incentive tracker'
    ],
    impact: 'Achieved 3x higher retention in the mechanic network compared to industry average.',
    takeaway: 'Using emotional storytelling to drive brand loyalty in B2B/Dealer networks.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tags: ['Channel Loyalty', 'Storytelling', 'Vernacular']
  },
  {
    type: 'case',
    client: 'Guard Industry India',
    title: 'Digital Sales Accelerator',
    strategy: 'Streamlined communication for a highly distributed sales team. We implemented a "Knowledge Snippet" model to replace weekly training meetings.',
    deliverables: [
      'Automated Onboarding Bot',
      'Daily Performance Memes & Leaderboards',
      'Thought Leadership content for LinkedIn'
    ],
    impact: 'Reduced onboarding time by 60% and increased daily active reporting by 35%.',
    takeaway: 'Streamlining communication for distributed, non-desk sales teams.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tags: ['B2B Growth', 'Sales Automation', 'Digital Culture']
  }
];

export const SlideView: React.FC<SlideViewProps> = ({ currentSlide, onSlideChange }) => {
  const next = () => onSlideChange(Math.min(slides.length - 1, currentSlide + 1));
  const prev = () => onSlideChange(Math.max(0, currentSlide - 1));

  const slide = slides[currentSlide];

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 md:p-12 relative">
      {/* Navigation Buttons */}
      <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
        <button 
          onClick={prev}
          className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all pointer-events-auto ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : ''}`}
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={next}
          className={`w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/40 hover:scale-105 transition-all pointer-events-auto ${currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : ''}`}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Slide Content Container */}
      <div className="w-full max-w-6xl min-h-[500px] bg-[#1e293b] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative flex flex-col md:flex-row">
        
        {slide.type === 'title' ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-br from-blue-900/40 to-black/40">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight max-w-4xl">{slide.title}</h2>
            <div className="h-1 w-24 bg-blue-500 mb-8 rounded-full"></div>
            <p className="text-xl text-blue-400 font-semibold mb-4">{slide.subtitle}</p>
            <p className="text-lg text-slate-400 max-w-2xl">{slide.description}</p>
          </div>
        ) : (
          <>
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Portfolio Showcase</span>
                <span className="w-8 h-px bg-slate-700"></span>
                <span className="text-slate-500 font-bold uppercase text-[10px]">{slide.client}</span>
              </div>
              
              <h2 className="text-3xl font-extrabold mb-6 leading-tight">{slide.title}</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase text-blue-400 mb-2 tracking-widest">The Strategy</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{slide.strategy}</p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase text-blue-400 mb-2 tracking-widest">Key Work Delivered</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {slide.deliverables?.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 size={14} className="text-green-500 shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <h4 className="text-xs font-black uppercase text-green-400 mb-1">Impact Result</h4>
                  <p className="text-white font-bold">{slide.impact}</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 relative bg-slate-800 hidden md:block">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                {slide.tags?.map(tag => (
                  <span key={tag} className="text-[9px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </>
        )}

      </div>

      {/* Progress Indicator */}
      <div className="mt-8 flex gap-2">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => onSlideChange(i)}
            className={`h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-12 bg-blue-500' : 'w-4 bg-white/10 hover:bg-white/30'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
