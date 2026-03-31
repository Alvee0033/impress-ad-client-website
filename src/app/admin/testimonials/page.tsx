'use client';

import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSave, FaStar } from 'react-icons/fa';
import { DEMO_TESTIMONIALS } from '@/lib/demo-data';

type Testimonial = { id: string; clientName: string; businessName: string | null; reviewText: string; rating: number; status: string };

export default function AdminTestimonialsPage() {
    const [items, setItems] = useState<Testimonial[]>(DEMO_TESTIMONIALS.map(t => ({ ...t, status: 'published' })));
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<Testimonial | null>(null);
    const [form, setForm] = useState({ clientName: '', businessName: '', reviewText: '', rating: '5', status: 'published' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editing) {
            setItems(items.map(t => t.id === editing.id ? {
                ...t,
                clientName: form.clientName,
                businessName: form.businessName,
                reviewText: form.reviewText,
                rating: Number(form.rating),
                status: form.status
            } : t));
        } else {
            const newItem: Testimonial = {
                id: Math.random().toString(36).substr(2, 9),
                clientName: form.clientName,
                businessName: form.businessName,
                reviewText: form.reviewText,
                rating: Number(form.rating),
                status: form.status
            };
            setItems([newItem, ...items]);
        }
        setShowForm(false);
        setEditing(null);
        setForm({ clientName: '', businessName: '', reviewText: '', rating: '5', status: 'published' });
    };

    const handleDelete = (id: string) => {
        if (confirm('Delete?')) {
            setItems(items.filter(t => t.id !== id));
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-heading font-bold text-primary-900">Testimonials</h1>
                <button onClick={() => { setEditing(null); setForm({ clientName: '', businessName: '', reviewText: '', rating: '5', status: 'published' }); setShowForm(true); }} className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-xl font-semibold text-sm hover:bg-orange-600"><FaPlus /> Add Testimonial</button>
            </div>
            {showForm && (
                <div className="bg-white rounded-2xl p-6 border border-border-200 mb-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Client Name *" value={form.clientName} onChange={e => setForm({ ...form, clientName: e.target.value })} required />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Business Name" value={form.businessName} onChange={e => setForm({ ...form, businessName: e.target.value })} />
                        <textarea className="px-4 py-2 border border-border-200 rounded-xl col-span-full" placeholder="Review Text *" rows={3} value={form.reviewText} onChange={e => setForm({ ...form, reviewText: e.target.value })} required />
                        <select className="px-4 py-2 border border-border-200 rounded-xl" value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })}>{[5, 4, 3, 2, 1].map(r => <option key={r} value={r}>{r} Stars</option>)}</select>
                        <select className="px-4 py-2 border border-border-200 rounded-xl" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option value="published">Published</option><option value="draft">Draft</option></select>
                        <button type="submit" className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-xl font-semibold col-span-full sm:col-span-1"><FaSave /> {editing ? 'Update' : 'Create'}</button>
                    </form>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map(t => (
                    <div key={t.id} className="bg-white rounded-2xl p-6 border border-border-200 hover:shadow-md transition-all">
                        <div className="flex justify-between mb-3">
                            <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} className="text-yellow-400" size={14} />)}</div>
                            <div className="flex gap-2">
                                <button onClick={() => { setEditing(t); setForm({ clientName: t.clientName, businessName: t.businessName || '', reviewText: t.reviewText, rating: String(t.rating), status: t.status }); setShowForm(true); }} className="text-primary-700 hover:text-primary-900"><FaEdit size={14} /></button>
                                <button onClick={() => handleDelete(t.id)} className="text-red-400 hover:text-red-600"><FaTrash size={14} /></button>
                            </div>
                        </div>
                        <p className="text-text-600 text-sm mb-3">&ldquo;{t.reviewText}&rdquo;</p>
                        <div className="flex items-center justify-between">
                            <div><span className="font-semibold text-primary-900 text-sm">{t.clientName}</span>{t.businessName && <span className="text-text-600 text-xs ml-2">{t.businessName}</span>}</div>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${t.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{t.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
