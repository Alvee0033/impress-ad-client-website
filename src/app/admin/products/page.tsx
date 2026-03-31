'use client';

import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSave } from 'react-icons/fa';
import { DEMO_PRODUCTS, DEMO_CATEGORIES } from '@/lib/demo-data';

type Product = { id: string; name: string; slug: string; shortDescription: string | null; startingPrice: number | null; moq: number | null; leadTime: string | null; status: string; category?: { name: string } };

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>(DEMO_PRODUCTS.map(p => ({
        ...p,
        category: { name: DEMO_CATEGORIES.find(c => c.id === p.categoryId)?.name || 'General' }
    })));
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<Product | null>(null);
    const [form, setForm] = useState({ name: '', categoryId: '', shortDescription: '', startingPrice: '', moq: '', leadTime: '', status: 'active' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editing) {
            setProducts(products.map(p => p.id === editing.id ? {
                ...p,
                name: form.name,
                shortDescription: form.shortDescription,
                startingPrice: Number(form.startingPrice),
                moq: Number(form.moq),
                leadTime: form.leadTime,
                status: form.status,
                category: { name: DEMO_CATEGORIES.find(c => c.id === form.categoryId)?.name || 'General' }
            } : p));
        } else {
            const newProduct: Product = {
                id: Math.random().toString(36).substr(2, 9),
                name: form.name,
                slug: form.name.toLowerCase().replace(/ /g, '-'),
                shortDescription: form.shortDescription,
                startingPrice: Number(form.startingPrice),
                moq: Number(form.moq),
                leadTime: form.leadTime,
                status: form.status,
                category: { name: DEMO_CATEGORIES.find(c => c.id === form.categoryId)?.name || 'General' }
            };
            setProducts([newProduct, ...products]);
        }
        setShowForm(false);
        setEditing(null);
        setForm({ name: '', categoryId: '', shortDescription: '', startingPrice: '', moq: '', leadTime: '', status: 'active' });
    };

    const handleDelete = (id: string) => {
        if (confirm('Delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const openEdit = (p: Product) => {
        setEditing(p);
        const categoryId = DEMO_CATEGORIES.find(c => c.name === p.category?.name)?.id || '';
        setForm({
            name: p.name, categoryId,
            shortDescription: p.shortDescription || '', startingPrice: String(p.startingPrice || ''),
            moq: String(p.moq || ''), leadTime: p.leadTime || '', status: p.status,
        });
        setShowForm(true);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-heading font-bold text-primary-900">Products</h1>
                <button onClick={() => { setEditing(null); setForm({ name: '', categoryId: '', shortDescription: '', startingPrice: '', moq: '', leadTime: '', status: 'active' }); setShowForm(true); }}
                    className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-xl font-semibold text-sm hover:bg-orange-600 transition-all">
                    <FaPlus /> Add Product
                </button>
            </div>

            {showForm && (
                <div className="bg-white rounded-2xl p-6 border border-border-200 mb-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Product Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                        <select className="px-4 py-2 border border-border-200 rounded-xl" value={form.categoryId} onChange={e => setForm({ ...form, categoryId: e.target.value })}>
                            <option value="">Select Category</option>
                            {DEMO_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Short Description" value={form.shortDescription} onChange={e => setForm({ ...form, shortDescription: e.target.value })} />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Starting Price" type="number" value={form.startingPrice} onChange={e => setForm({ ...form, startingPrice: e.target.value })} />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="MOQ" type="number" value={form.moq} onChange={e => setForm({ ...form, moq: e.target.value })} />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Lead Time" value={form.leadTime} onChange={e => setForm({ ...form, leadTime: e.target.value })} />
                        <select className="px-4 py-2 border border-border-200 rounded-xl" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                            <option value="active">Active</option>
                            <option value="archived">Archived</option>
                        </select>
                        <button type="submit" className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all">
                            <FaSave /> {editing ? 'Update' : 'Create'}
                        </button>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-2xl border border-border-200 shadow-sm overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-border-200 bg-bg-50">
                            <th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Product</th>
                            <th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Category</th>
                            <th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Price</th>
                            <th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">MOQ</th>
                            <th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Status</th>
                            <th className="text-right text-xs font-semibold text-text-600 uppercase px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className="border-b border-border-200/50 hover:bg-bg-50">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-primary-900 text-sm">{p.name}</div>
                                    <div className="text-text-600 text-xs">{p.shortDescription}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-text-600">{p.category?.name}</td>
                                <td className="px-6 py-4 text-sm font-semibold text-accent-orange">{p.startingPrice ? `৳${p.startingPrice}` : '-'}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{p.moq || '-'}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{p.status}</td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => openEdit(p)} className="text-primary-700 hover:text-primary-900 mr-3"><FaEdit size={14} /></button>
                                    <button onClick={() => handleDelete(p.id)} className="text-red-400 hover:text-red-600"><FaTrash size={14} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
