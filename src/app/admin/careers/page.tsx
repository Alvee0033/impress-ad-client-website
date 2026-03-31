'use client';

import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSave } from 'react-icons/fa';
import { DEMO_JOBS } from '@/lib/demo-data';

type Job = { id: string; title: string; department: string | null; location: string | null; summary: string; deadline: string | null; status: string };

export default function AdminCareersPage() {
    const [items, setItems] = useState<Job[]>(DEMO_JOBS);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<Job | null>(null);
    const [form, setForm] = useState({ title: '', department: '', location: 'Chittagong Office', summary: '', deadline: '', status: 'active' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editing) {
            setItems(items.map(job => job.id === editing.id ? {
                ...job,
                title: form.title,
                department: form.department,
                location: form.location,
                summary: form.summary,
                deadline: form.deadline,
                status: form.status
            } : job));
        } else {
            const newItem: Job = {
                id: Math.random().toString(36).substr(2, 9),
                title: form.title,
                department: form.department,
                location: form.location,
                summary: form.summary,
                deadline: form.deadline,
                status: form.status
            };
            setItems([newItem, ...items]);
        }
        setShowForm(false);
        setEditing(null);
        setForm({ title: '', department: '', location: 'Chittagong Office', summary: '', deadline: '', status: 'active' });
    };

    const handleDelete = (id: string) => {
        if (confirm('Delete?')) {
            setItems(items.filter(job => job.id !== id));
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-heading font-bold text-primary-900">Careers</h1>
                <button onClick={() => { setEditing(null); setForm({ title: '', department: '', location: 'Chittagong Office', summary: '', deadline: '', status: 'active' }); setShowForm(true); }} className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-xl font-semibold text-sm hover:bg-orange-600"><FaPlus /> Add Job</button>
            </div>
            {showForm && (
                <div className="bg-white rounded-2xl p-6 border border-border-200 mb-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Job Title *" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Department" value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Deadline" type="date" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} />
                        <textarea className="px-4 py-2 border border-border-200 rounded-xl col-span-full" placeholder="Job Summary *" rows={3} value={form.summary} onChange={e => setForm({ ...form, summary: e.target.value })} required />
                        <select className="px-4 py-2 border border-border-200 rounded-xl" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option value="active">Active</option><option value="closed">Closed</option></select>
                        <button type="submit" className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-xl font-semibold"><FaSave /> {editing ? 'Update' : 'Create'}</button>
                    </form>
                </div>
            )}
            <div className="bg-white rounded-2xl border border-border-200 overflow-x-auto shadow-sm">
                <table className="w-full">
                    <thead><tr className="border-b bg-bg-50"><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Title</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Department</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Location</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Status</th><th className="text-right text-xs font-semibold text-text-600 uppercase px-6 py-3">Actions</th></tr></thead>
                    <tbody>
                        {items.map(job => (
                            <tr key={job.id} className="border-b border-border-200/50 hover:bg-bg-50">
                                <td className="px-6 py-4 text-sm font-medium text-primary-900">{job.title}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{job.department || '-'}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{job.location || '-'}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{job.status}</td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => { setEditing(job); setForm({ title: job.title, department: job.department || '', location: job.location || '', summary: job.summary, deadline: job.deadline ? job.deadline.split('T')[0] : '', status: job.status }); setShowForm(true); }} className="text-primary-700 hover:text-primary-900 mr-3"><FaEdit size={14} /></button>
                                    <button onClick={() => handleDelete(job.id)} className="text-red-400 hover:text-red-600"><FaTrash size={14} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
