import { Metadata } from 'next';
import { DEMO_JOBS } from '@/lib/demo-data';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Join the Impress Ad team. View current job openings at our Chittagong office.',
};

export default async function CareersPage() {
    // For demo: Use static job data
    const jobs = DEMO_JOBS;

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4">Careers</h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Join our creative team at Impress Ad
                    </p>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-20 bg-bg-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {jobs.length > 0 ? (
                        <div className="space-y-6">
                            {jobs.map((job) => (
                                <div key={job.id} className="bg-white rounded-3xl p-8 border border-border-200 hover:shadow-lg transition-all">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                        <div>
                                            <h2 className="font-heading font-bold text-xl text-primary-900 mb-2">{job.title}</h2>
                                            <div className="flex flex-wrap gap-3 text-sm text-text-600">
                                                {job.department && (
                                                    <span className="flex items-center gap-1">
                                                        <FaBriefcase size={12} className="text-accent-orange" /> {job.department}
                                                    </span>
                                                )}
                                                {job.location && (
                                                    <span className="flex items-center gap-1">
                                                        <FaMapMarkerAlt size={12} className="text-accent-orange" /> {job.location}
                                                    </span>
                                                )}
                                                {job.deadline && (
                                                    <span className="flex items-center gap-1">
                                                        <FaClock size={12} className="text-accent-orange" /> Deadline: {new Date(job.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <a
                                            href="mailto:careers@impressad.com"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-orange to-orange-500 text-white rounded-xl font-semibold text-sm hover:scale-105 transition-all whitespace-nowrap"
                                        >
                                            <FaEnvelope size={14} /> Apply Now
                                        </a>
                                    </div>
                                    <p className="text-text-600 leading-relaxed">{job.summary}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🏢</div>
                            <h2 className="font-heading font-bold text-2xl text-primary-900 mb-2">No Open Positions</h2>
                            <p className="text-text-600">We don&apos;t have any openings right now. Check back soon or send us your CV at careers@impressad.com</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
