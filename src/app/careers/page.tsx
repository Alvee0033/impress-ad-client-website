import { Metadata } from 'next';
import { DEMO_JOBS } from '@/lib/demo-data';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaEnvelope, FaArrowRight, FaUsers, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Careers | Join the Legacy',
    description: 'Join the Prokash Ad team. View current job openings at our Chittagong office.',
};

const perks = [
  { icon: FaUsers, title: 'Expert Team', desc: 'Work with the best.' },
  { icon: FaLightbulb, title: 'Creative', desc: 'Manifest vision.' },
  { icon: FaRocket, title: 'Growth', desc: 'Rapid scaling.' },
  { icon: FaShieldAlt, title: 'Security', desc: '10+ yrs stability.' },
];

export default async function CareersPage() {
    const jobs = DEMO_JOBS;

    return (
        <div className="bg-bg-50 min-h-screen text-[#0a0a0a] pb-20 selection:bg-accent-orange selection:text-white overflow-hidden">
            {/* ═══════ ULTRA COMPACT HERO ═══════ */}
            <section className="relative pt-24 pb-6 bg-white border-b-2 border-bg-100 rounded-b-[3rem] shadow-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center sm:text-left">
                    <div className="border-l-6 border-accent-orange pl-4 mx-auto sm:mx-0">
                        <span className="inline-block bg-[#0a0a0a] text-white text-[7px] font-black uppercase tracking-[0.4em] px-2 py-0.5 mb-2 italic rounded-full">
                           RECRUITMENT • 2026
                        </span>
                        <h1 className="text-2xl lg:text-4xl font-heading font-black tracking-tighter uppercase italic leading-[0.85]">
                           Join the <span className="text-accent-orange">Legacy.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* ═══════ MINI PERK ROW ═══════ */}
            <section className="py-4 bg-transparent overflow-hidden">
               <div className="max-w-7xl mx-auto px-6 overflow-x-auto flex gap-4 scrollbar-hide pb-2">
                  {perks.map((perk, i) => (
                    <div key={i} className="flex-shrink-0 flex items-center gap-3 p-2 px-4 bg-white border border-bg-100 rounded-full shadow-sm group hover:border-accent-orange transition-all duration-300">
                       <div className="w-8 h-8 rounded-full bg-[#0a0a0a] text-accent-orange flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-all shadow-md">
                          <perk.icon size={12} />
                       </div>
                       <div>
                          <h4 className="text-[9px] font-black text-[#0a0a0a] uppercase tracking-widest italic leading-none">{perk.title}</h4>
                          <p className="text-[7px] font-bold text-text-400 uppercase italic opacity-60 leading-none">{perk.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* ═══════ ULTRA COMPACT OPPORTUNITIES ═══════ */}
            <section className="py-6">
                <div className="max-w-3xl mx-auto px-5 relative z-10">
                    {jobs.length > 0 ? (
                        <div className="space-y-4">
                            {jobs.map((job) => (
                                <div key={job.id} className="group bg-white border-2 border-[#0a0a0a] rounded-[2.5rem] p-6 hover:shadow-xl transition-all duration-500 relative flex flex-col sm:flex-row items-center gap-6">
                                    
                                    {/* Icon Hub: Compact */}
                                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                                       <div className="w-12 h-12 rounded-full bg-[#0a0a0a] text-accent-orange flex items-center justify-center shadow-lg group-hover:bg-accent-orange group-hover:text-white transition-all transform group-hover:scale-110">
                                          <FaBriefcase size={20} />
                                       </div>
                                       <div className="px-2 py-0.5 bg-bg-50 text-text-400 text-[6px] font-black uppercase tracking-[0.2em] italic border border-bg-100 rounded-full">
                                          {job.department}
                                       </div>
                                    </div>

                                    {/* Content Core: Extra Compact */}
                                    <div className="flex-1 text-center sm:text-left border-t sm:border-t-0 sm:border-l-2 border-bg-100 pt-4 sm:pt-0 sm:pl-6">
                                        <h2 className="text-xl lg:text-2xl font-heading font-black text-[#0a0a0a] uppercase tracking-tighter italic leading-none group-hover:text-accent-orange transition-colors mb-3">
                                           {job.title}
                                        </h2>
                                        
                                        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-4">
                                           <div className="flex items-center gap-2 bg-bg-50 px-3 py-1 rounded-full border border-bg-100 overflow-hidden">
                                              <FaMapMarkerAlt size={10} className="text-accent-orange" />
                                              <span className="text-[8px] font-black text-[#0a0a0a] uppercase italic tracking-widest leading-none">{job.location}</span>
                                           </div>
                                           <div className="flex items-center gap-2 bg-bg-50 px-3 py-1 rounded-full border border-bg-100 overflow-hidden">
                                              <FaClock size={10} className="text-accent-orange" />
                                              <span className="text-[8px] font-black text-[#0a0a0a] uppercase italic tracking-widest leading-none">
                                                {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                              </span>
                                           </div>
                                        </div>
                                        
                                        <p className="text-text-500 font-bold text-[10px] leading-relaxed italic border-l-3 border-accent-orange/10 pl-4 mb-5 line-clamp-2">{job.summary}</p>
                                        
                                        <div className="flex justify-center sm:justify-start">
                                          <a
                                              href="mailto:careers@impressad.com"
                                              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#0a0a0a] text-white rounded-full font-black text-[9px] uppercase tracking-[0.2em] shadow-lg hover:bg-accent-orange hover:scale-105 transition-all duration-300 italic min-w-[150px]"
                                          >
                                              APPLY <FaArrowRight />
                                          </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white border border-[#0a0a0a]/10 rounded-3xl italic font-black text-text-200">
                           --- NO ACTIVE VACANCY ---
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
