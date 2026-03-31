'use client';

import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSave } from 'react-icons/fa';
import { DEMO_PRICING, DEMO_CATEGORIES } from '@/lib/demo-data';

type PricingTier = { id: string; label: string; quantityRange: string; pricePerUnit: number; notes: string | null; productCategory?: { name: string } };

export default function AdminPricingPage() {
    const flattenedTiers = DEMO_PRICING.flatMap(cat => cat.tiers.map(t => ({
        ...t,
        productCategory: { name: DEMO_CATEGORIES.find(c => c.id === cat.categoryId)?.name || 'General' }
    })));

    const [items, setItems] = useState<PricingTier[]>(flattenedTiers);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<PricingTier | null>(null);
    const [form, setForm] = useState({ productCategoryId: '', label: '', quantityRange: '', pricePerUnit: '', notes: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editing) {
            setItems(items.map(item => item.id === editing.id ? {
                ...item,
                label: form.label,
                quantityRange: form.quantityRange,
                pricePerUnit: Number(form.pricePerUnit),
                notes: form.notes,
                productCategory: { name: DEMO_CATEGORIES.find(c => c.id === form.productCategoryId)?.name || 'General' }
            } : item));
        } else {
            const newItem: PricingTier = {
                id: Math.random().toString(36).substr(2, 9),
                label: form.label,
                quantityRange: form.quantityRange,
                pricePerUnit: Number(form.pricePerUnit),
                notes: form.notes,
                productCategory: { name: DEMO_CATEGORIES.find(c => c.id === form.productCategoryId)?.name || 'General' }
            };
            setItems([newItem, ...items]);
        }
        setShowForm(false);
        setEditing(null);
        setForm({ productCategoryId: '', label: '', quantityRange: '', pricePerUnit: '', notes: '' });
    };

    const handleDelete = (id: string) => {
        if (confirm('Delete?')) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-heading font-bold text-primary-900">Pricing Tiers</h1>
                <button onClick={() => { setEditing(null); setForm({ productCategoryId: '', label: '', quantityRange: '', pricePerUnit: '', notes: '' }); setShowForm(true); }} className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-xl font-semibold text-sm hover:bg-orange-600"><FaPlus /> Add Tier</button>
            </div>
            {showForm && (
                <div className="bg-white rounded-2xl p-6 border border-border-200 mb-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <select className="px-4 py-2 border border-border-200 rounded-xl" value={form.productCategoryId} onChange={e => setForm({ ...form, productCategoryId: e.target.value })} required>
                            <option value="">Select Category</option>
                            {DEMO_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Label (e.g. 11oz Ceramic Mug) *" value={form.label} onChange={e => setForm({ ...form, label: e.target.value })} required />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Quantity Range (e.g. 1-10) *" value={form.quantityRange} onChange={e => setForm({ ...form, quantityRange: e.target.value })} required />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Price Per Unit (৳) *" type="number" step="0.01" value={form.pricePerUnit} onChange={e => setForm({ ...form, pricePerUnit: e.target.value })} required />
                        <input className="px-4 py-2 border border-border-200 rounded-xl" placeholder="Notes" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
                        <button type="submit" className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-xl font-semibold"><FaSave /> {editing ? 'Update' : 'Create'}</button>
                    </form>
                </div>
            )}
            <div className="bg-white rounded-2xl border border-border-200 overflow-x-auto">
                <table className="w-full">
                    <thead><tr className="border-b bg-bg-50"><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Category</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Product</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Qty Range</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Price</th><th className="text-left text-xs font-semibold text-text-600 uppercase px-6 py-3">Notes</th><th className="text-right text-xs font-semibold text-text-600 uppercase px-6 py-3">Actions</th></tr></thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} className="border-b border-border-200/50 hover:bg-bg-50">
                                <td className="px-6 py-4 text-sm text-text-600">{item.productCategory?.name}</td>
                                <td className="px-6 py-4 text-sm font-medium text-primary-900">{item.label}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{item.quantityRange}</td>
                                <td className="px-6 py-4 text-sm font-semibold text-accent-orange">৳{item.pricePerUnit}</td>
                                <td className="px-6 py-4 text-sm text-text-600">{item.notes || '-'}</td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => { setEditing(item); setForm({ productCategoryId: DEMO_CATEGORIES.find(c => c.name === item.productCategory?.name)?.id || '', label: item.label, quantityRange: item.quantityRange, pricePerUnit: String(item.pricePerUnit), notes: item.notes || '' }); setShowForm(true); }} className="text-primary-700 hover:text-primary-900 mr-3"><FaEdit size={14} /></button>
                                    <button onClick={() => handleDelete(item.id)} className="text-red-400 hover:text-red-600"><FaTrash size={14} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
