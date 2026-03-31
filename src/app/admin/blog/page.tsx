'use client';

import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSave } from 'react-icons/fa';
import { DEMO_POSTS } from '@/lib/demo-data';

type Post = { id: string; title: string; slug: string; excerpt: string | null; body: string; author: string | null; status: string; publishedAt: string | null };

export default function AdminBlogPage() {
    const [items, setItems] = useState<Post[]>(DEMO_POSTS.map(p => ({ ...p, status: 'published' })));
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<Post | null>(null);
    const [form, setForm] = useState({ title: '', excerpt: '', body: '', author: 'Impress Ad Team', status: 'draft' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editing) {
            setItems(items.map(post => post.id === editing.id ? {
                ...post,
                title: form.title,
                excerpt: form.excerpt,
                body: form.body,
                author: form.author,
                status: form.status
            } : post));
        } else {
            const newPost: Post = {
                id: Math.random().toString(36).substr(2, 9),
                title: form.title,
                slug: form.title.toLowerCase().replace(/ /g, '-'),
                excerpt: form.excerpt,
                body: form.body,
                author: form.author,
                status: form.status,
                publishedAt: new Date().toISOString()
            };
            setItems([newPost, ...items]);
        }
        setShowForm(false);
        setEditing(null);
        setForm({ title: '', excerpt: '', body: '', author: 'Impress Ad Team', status: 'draft' });
    };

    const handleDelete = (id: string) => {
        if (confirm('Delete?')) {
            setItems(items.filter(post => post.id !== id));
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-heading font-bold text-primary-900">Blog Posts</h1>
                <button onClick={() => { setEditing(null); setForm({ title: '', excerpt: '', body: '', author: 'Impress Ad Team', status: 'draft' }); setShowForm(true); }} className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-xl font-semibold text-sm hover:bg-orange-600"><FaPlus /> New Post</button>
            </div>
            {showForm && (
                <div className="bg-white rounded-2xl p-6 border border-border-200 mb-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input className="w-full px-4 py-2 border border-border-200 rounded-xl" placeholder="Title *" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
                        <input className="w-full px-4 py-2 border border-border-200 rounded-xl" placeholder="Excerpt" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} />
                        <textarea className="w-full px-4 py-2 border border-border-200 rounded-xl" placeholder="Body *" rows={8} value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} required />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
                            <select className="px-4 py-2 border border-border-200 rounded-xl" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option value="draft">Draft</option><option value="published">Published</option></select>
                            <button type="submit" className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-xl font-semibold"><FaSave /> {editing ? 'Update' : 'Create'}</button>
                        </div>
                    </form>
                </div>
            )}
            <div className="bg-white rounded-2xl border border-border-200 overflow-x-auto shadow-sm">
                <table className="w-full">
                    <thead><tr className="border-b bg-bg-50"><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Title</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Author</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Status</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Published</th><th className="text-right text-xs font-semibold text-text-600 uppercase px-6 py-3">Actions</th></tr></thead>
                    <tbody>
                        {items.map(post => (
                            <tr key={post.id} className="border-b border-border-200/50 hover:bg-bg-50">
                                <td className="px-6 py-4 text-sm font-medium text-primary-900">{post.title}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{post.author || '-'}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{post.status}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : '-'}</td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => { setEditing(post); setForm({ title: post.title, excerpt: post.excerpt || '', body: post.body, author: post.author || '', status: post.status }); setShowForm(true); }} className="text-primary-700 hover:text-primary-900 mr-3"><FaEdit size={14} /></button>
                                    <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-600"><FaTrash size={14} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
