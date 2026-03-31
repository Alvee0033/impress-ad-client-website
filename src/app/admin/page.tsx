import { DEMO_PRODUCTS, DEMO_POSTS, DEMO_TESTIMONIALS, DEMO_LEADS, DEMO_JOBS } from '@/lib/demo-data';
import { FaBox, FaBriefcase, FaEnvelope, FaEnvelopeOpen, FaStar, FaCheckCircle } from 'react-icons/fa';

export default function AdminDashboard() {
    // For demo: Use counts from static data
    const productCount = DEMO_PRODUCTS.length;
    const jobCount = DEMO_JOBS.length;
    const leadCount = DEMO_LEADS.length;
    const newLeads = DEMO_LEADS.filter(l => l.status === 'new').length;
    const testimonialCount = DEMO_TESTIMONIALS.length;
    const publishedPosts = DEMO_POSTS.length;

    const stats = [
        { label: 'Active Products', value: productCount, icon: FaBox, color: 'from-violet-500 to-purple-600' },
        { label: 'Job Openings', value: jobCount, icon: FaBriefcase, color: 'from-teal-400 to-green-500' },
        { label: 'Total Leads', value: leadCount, icon: FaEnvelope, color: 'from-orange-400 to-red-500' },
        { label: 'New Leads', value: newLeads, icon: FaEnvelopeOpen, color: 'from-blue-500 to-indigo-600' },
        { label: 'Testimonials', value: testimonialCount, icon: FaStar, color: 'from-amber-400 to-orange-500' },
        { label: 'Published Posts', value: publishedPosts, icon: FaCheckCircle, color: 'from-pink-400 to-rose-500' },
    ];

    const recentLeads = DEMO_LEADS;

    return (
        <div>
            <h1 className="text-3xl font-heading font-bold text-primary-900 mb-8">Dashboard</h1>

            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-border-200 shadow-sm hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                                <stat.icon size={22} />
                            </div>
                            <span className="text-3xl font-heading font-extrabold text-primary-900">{stat.value}</span>
                        </div>
                        <p className="text-text-600 text-sm font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Recent leads */}
            <div className="bg-white rounded-2xl border border-border-200 shadow-sm">
                <div className="p-6 border-b border-border-200">
                    <h2 className="font-heading font-bold text-lg text-primary-900">Recent Leads</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border-200 bg-bg-50">
                                <th className="text-left text-xs font-semibold text-text-600 uppercase tracking-wider px-6 py-3">Name</th>
                                <th className="text-left text-xs font-semibold text-text-600 uppercase tracking-wider px-6 py-3">Type</th>
                                <th className="text-left text-xs font-semibold text-text-600 uppercase tracking-wider px-6 py-3">Email</th>
                                <th className="text-left text-xs font-semibold text-text-600 uppercase tracking-wider px-6 py-3">Status</th>
                                <th className="text-left text-xs font-semibold text-text-600 uppercase tracking-wider px-6 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentLeads.map((lead) => (
                                <tr key={lead.id} className="border-b border-border-200/50 hover:bg-bg-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-primary-900">{lead.fullName}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${lead.type === 'quote' ? 'bg-accent-orange/10 text-accent-orange' : 'bg-accent-teal/10 text-accent-teal'
                                            }`}>
                                            {lead.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-600">{lead.email}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${lead.status === 'new' ? 'bg-blue-100 text-blue-700' :
                                            lead.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-green-100 text-green-700'
                                            }`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-600">
                                        {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
