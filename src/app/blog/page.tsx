import { Metadata } from 'next';
import { DEMO_POSTS } from '@/lib/demo-data';
import Link from 'next/link';
import { FaCalendar, FaUser, FaArrowRight, FaPenNib, FaFire, FaBookOpen, FaLightbulb, FaTools } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Blog | Printing Insights',
    description: 'Printing tips, branding guides, and company news from Prokash Ad.',
};

const topCategories = [
  { icon: FaBookOpen, name: 'Guides' },
  { icon: FaFire, name: 'Trending' },
  { icon: FaLightbulb, name: 'Strategy' },
  { icon: FaTools, name: 'Technology' },
];

export default async function BlogPage() {
    const posts = DEMO_POSTS;

    return (
        <div className="bg-bg-50 min-h-screen text-primary-950 pb-20 selection:bg-accent-orange selection:text-white-200 overflow-hidden">
            {/* ═══════ ROUNDISH PREMIUM HERO ═══════ */}
            <section className="relative pt-24 pb-12 bg-white border-b-2 border-bg-100 rounded-b-[4rem] shadow-sm">
                <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col sm:flex-row justify-between items-end gap-6">
                    <div className="border-l-8 border-accent-orange pl-8">
                        <span className="inline-block bg-primary-950 text-white text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 mb-4 italic rounded-full shadow-lg">
                           EDITORIAL • ED. 2026
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-heading font-black tracking-tighter uppercase italic leading-[0.85]">
                           Our <br/>
                           <span className="text-accent-orange underline decoration-[6px] underline-offset-[12px] decoration-bg-100">Insights.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* ═══════ ROUND CATEGORY STRIP ═══════ */}
            <section className="py-6 bg-transparent sticky top-20 z-40 backdrop-blur-md">
               <div className="max-w-7xl mx-auto px-8 w-full overflow-x-auto flex gap-6 scrollbar-hide pb-2">
                  {topCategories.map((cat, i) => (
                    <div key={i} className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white border border-bg-100 rounded-full group cursor-pointer shadow-sm hover:border-accent-orange transition-all duration-300">
                       <div className="w-8 h-8 rounded-full bg-primary-950 text-accent-orange flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <cat.icon size={12} />
                       </div>
                       <span className="text-[10px] font-black text-primary-950 uppercase tracking-widest italic leading-none">{cat.name}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* ═══════ ROUNDISH ARTICLES GRID ═══════ */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-white border-2 border-primary-950/5 rounded-[3.5rem] overflow-hidden hover:border-accent-orange/50 hover:shadow-2xl transition-all duration-500 flex flex-col relative"
                                >
                                    {/* Round Feature Image Frame */}
                                    <div className="aspect-video relative overflow-hidden bg-bg-100 border-b-2 border-bg-50/50">
                                        {post.featuredImage ? (
                                            <img
                                                src={post.featuredImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-text-200">
                                               <FaPenNib size={20} />
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            <div className="bg-primary-950 text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest leading-none shadow-xl border border-white/10 italic rounded-full">
                                              MASTERCLASS
                                            </div>
                                            <div className="bg-accent-orange text-white px-2 py-1 text-[8px] font-black uppercase leading-none shadow-xl rounded-full flex items-center">
                                               <FaFire size={10} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 sm:p-10 flex-1 flex flex-col">
                                        <div className="flex flex-wrap items-center gap-6 text-[10px] text-text-400 font-black uppercase tracking-widest mb-6 italic leading-none">
                                            <div className="flex items-center gap-2 border-b-2 border-bg-50 group-hover:border-accent-orange transition-colors">
                                                <FaCalendar size={10} className="text-text-200" />
                                                {post.publishedAt}
                                            </div>
                                            <div className="flex items-center gap-2 border-b-2 border-bg-50 group-hover:border-accent-orange transition-colors">
                                                <FaUser size={10} className="text-text-200" />
                                                {post.author}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-heading font-black text-primary-950 mb-4 group-hover:text-accent-orange transition-colors tracking-tighter uppercase italic leading-[1.1]">
                                            {post.title}
                                        </h3>
                                        <p className="text-text-500 text-[11px] font-bold mb-8 line-clamp-2 italic leading-relaxed border-l-4 border-bg-100 pl-4 group-hover:border-accent-orange transition-all">{post.excerpt}</p>
                                        
                                        <div className="mt-auto flex items-center gap-3 text-primary-950 font-black text-xs uppercase tracking-widest italic group-hover:gap-5 transition-all duration-300">
                                            READ STORY <FaArrowRight size={14} className="text-accent-orange" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white border-2 border-primary-950/10 rounded-[3.5rem] italic font-black text-text-200">
                           --- NO NEW INSIGHTS ---
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
