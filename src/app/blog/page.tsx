import { Metadata } from 'next';
import { DEMO_POSTS } from '@/lib/demo-data';
import Link from 'next/link';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Printing tips, branding guides, and company news from Impress Ad.',
};

export default async function BlogPage() {
    const posts = DEMO_POSTS;

    return (
        <main className="min-h-screen pt-24 pb-16 bg-bg-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">Our Blog</h1>
                    <p className="text-xl text-text-600 max-w-2xl mx-auto">
                        Insights, tips, and inspiration for your next printing and branding project.
                    </p>
                </div>

                {/* Posts Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-primary-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Feature Image */}
                                <div className="aspect-video relative overflow-hidden bg-primary-50 flex items-center justify-center">
                                    {post.featuredImage ? (
                                        <img
                                            src={post.featuredImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span className="text-4xl">📝</span>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-text-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <FaCalendar className="text-primary-500" />
                                            {post.publishedAt}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaUser className="text-primary-500" />
                                            {post.author}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-text-600 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm">
                                        Read Full Story <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-text-600 text-lg">No blog posts published yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </main>
    );
}
