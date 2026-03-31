'use client';

import { useState } from 'react';
import { FaTrash, FaEye } from 'react-icons/fa';
import { DEMO_LEADS } from '@/lib/demo-data';

type Lead = { id: string; type: string; fullName: string; businessName: string | null; phone: string; email: string; subject: string | null; message: string | null; productCategory: string | null; product: string | null; quantity: number | null; designReady: string | null; status: string; createdAt: string };

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>(DEMO_LEADS);
    const [filter, setFilter] = useState<string>('');
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [viewLead, setViewLead] = useState<Lead | null>(null);

    const updateStatus = (id: string, status: string) => {
        setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
        if (viewLead && viewLead.id === id) setViewLead({ ...viewLead, status });
    };

    const handleDelete = (id: string) => {
        if (confirm('Delete?')) {
            setLeads(leads.filter(l => l.id !== id));
        }
    };

    const filteredLeads = leads.filter(l => {
        if (filter && l.status !== filter) return false;
        if (typeFilter && l.type !== typeFilter) return false;
        return true;
    });

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-heading font-bold text-primary-900">Leads & Quotes</h1>
                <div className="flex gap-2">
                    <select className="px-3 py-2 border border-border-200 rounded-xl text-sm" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                        <option value="">All Types</option>
                        <option value="quote">Quotes</option>
                        <option value="contact">Contact</option>
                    </select>
                    <select className="px-3 py-2 border border-border-200 rounded-xl text-sm" value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="">All Status</option>
                        <option value="new">New</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>

            {viewLead && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setViewLead(null)}>
                    <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-xl" onClick={e => e.stopPropagation()}>
                        <h2 className="font-heading font-bold text-xl text-primary-900 mb-4">{viewLead.fullName}</h2>
                        <div className="space-y-3 text-sm">
                            <div><span className="font-semibold text-text-600">Type:</span> <span className={`px-2 py-1 rounded-full text-xs font-semibold ${viewLead.type === 'quote' ? 'bg-accent-orange/10 text-accent-orange' : 'bg-accent-teal/10 text-accent-teal'}`}>{viewLead.type}</span></div>
                            {viewLead.businessName && <div><span className="font-semibold text-text-600">Business:</span> {viewLead.businessName}</div>}
                            <div><span className="font-semibold text-text-600">Email:</span> {viewLead.email}</div>
                            <div><span className="font-semibold text-text-600">Phone:</span> {viewLead.phone}</div>
                            {viewLead.subject && <div><span className="font-semibold text-text-600">Subject:</span> {viewLead.subject}</div>}
                            {viewLead.message && <div><span className="font-semibold text-text-600">Message:</span><p className="mt-1 text-text-600">{viewLead.message}</p></div>}
                            {viewLead.productCategory && <div><span className="font-semibold text-text-600">Product Category:</span> {viewLead.productCategory}</div>}
                            {viewLead.product && <div><span className="font-semibold text-text-600">Product:</span> {viewLead.product}</div>}
                            {viewLead.quantity && <div><span className="font-semibold text-text-600">Quantity:</span> {viewLead.quantity}</div>}
                            {viewLead.designReady && <div><span className="font-semibold text-text-600">Design Ready:</span> {viewLead.designReady}</div>}
                            <div><span className="font-semibold text-text-600">Date:</span> {new Date(viewLead.createdAt).toLocaleString()}</div>
                            <div className="flex gap-2 pt-4">
                                <button onClick={() => updateStatus(viewLead.id, 'new')} className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold">New</button>
                                <button onClick={() => updateStatus(viewLead.id, 'in-progress')} className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 text-xs font-semibold">In Progress</button>
                                <button onClick={() => updateStatus(viewLead.id, 'completed')} className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-xs font-semibold">Completed</button>
                            </div>
                        </div>
                        <button onClick={() => setViewLead(null)} className="mt-6 w-full py-2 bg-bg-50 text-text-600 rounded-xl font-semibold hover:bg-border-200 transition-all">Close</button>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-2xl border border-border-200 overflow-x-auto shadow-sm">
                <table className="w-full">
                    <thead><tr className="border-b bg-bg-50"><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Name</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Type</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Contact</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Product</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Status</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Date</th><th className="text-right text-xs font-semibold text-text-600 uppercase px-6 py-3">Actions</th></tr></thead>
                    <tbody>
                        {filteredLeads.map(lead => (
                            <tr key={lead.id} className="border-b border-border-200/50 hover:bg-bg-50">
                                <td className="px-6 py-4"><div className="text-sm font-medium text-primary-900">{lead.fullName}</div>{lead.businessName && <div className="text-xs text-text-600">{lead.businessName}</div>}</td>
                                <td className="px-6 py-4"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${lead.type === 'quote' ? 'bg-accent-orange/10 text-accent-orange' : 'bg-accent-teal/10 text-accent-teal'}`}>{lead.type}</span></td>
                                <td className="px-6 py-4 text-xs text-text-600"><div>{lead.email}</div><div>{lead.phone}</div></td>
                                <td className="px-6 py-4 text-sm text-text-600">{lead.productCategory || lead.subject || '-'}</td>
                                <td className="px-6 py-4">
                                    <select value={lead.status} onChange={e => updateStatus(lead.id, e.target.value)} className={`text-xs font-semibold px-2 py-1 rounded-full border-0 ${lead.status === 'new' ? 'bg-blue-100 text-blue-700' : lead.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                        <option value="new">New</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 text-xs text-text-600">{new Date(lead.createdAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => setViewLead(lead)} className="text-primary-700 hover:text-primary-900 mr-3"><FaEye size={14} /></button>
                                    <button onClick={() => handleDelete(lead.id)} className="text-red-400 hover:text-red-600"><FaTrash size={14} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredLeads.length === 0 && <div className="py-8 text-center text-text-600">No leads found</div>}
            </div>
        </div>
    );
}
