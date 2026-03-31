import { DEMO_POSTS } from '@/lib/demo-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return DEMO_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = DEMO_POSTS.find(p => p.slug === slug);
    if (!post) return {};
    return { title: post.title, description: post.excerpt || post.title };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = DEMO_POSTS.find(p => p.slug === slug);
    if (!post) notFound();

    return (
        <main className="min-h-screen pt-24 pb-16 bg-white">
            <article>
                <header className="relative pt-16 pb-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Link href="/blog" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors font-semibold">
                            <FaArrowLeft size={12} /> Back to Blog
                        </Link>
                        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">{post.title}</h1>
                        <div className="flex items-center gap-6 text-white/60 text-sm">
                            <span className="flex items-center gap-1">
                                <FaCalendar size={14} className="text-accent-orange" />
                                {post.publishedAt}
                            </span>
                            <span className="flex items-center gap-1">
                                <FaUser size={14} className="text-accent-orange" />
                                {post.author}
                            </span>
                        </div>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {post.featuredImage && (
                        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 border border-primary-100">
                            <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary-900 prose-a:text-accent-orange prose-p:text-text-600 prose-p:leading-relaxed prose-img:rounded-2xl shadow-none">
                        {post.body.split('\n').map((paragraph: string, i: number) => {
                            if (paragraph.startsWith('## ')) {
                                return <h2 key={i} className="text-3xl font-heading font-bold text-primary-900 mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
                            }
                            if (paragraph.startsWith('- ')) {
                                return <li key={i} className="text-text-600 ml-6 mb-2 list-disc marker:text-primary-400">{paragraph.replace('- ', '')}</li>;
                            }
                            if (paragraph.trim() === '') return null;
                            return <p key={i} className="text-text-700 text-lg leading-relaxed mb-6">{paragraph}</p>;
                        })}
                    </div>

                    <div className="mt-16 pt-8 border-t border-primary-100 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg"
                        >
                            Discuss Your Project With Us
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
