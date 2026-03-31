'use client';

import { useState } from 'react';
import { FaSave, FaCheckCircle } from 'react-icons/fa';
import { DEMO_SETTINGS } from '@/lib/demo-data';

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState<Record<string, string>>(DEMO_SETTINGS);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        // Simulate API delay
        await new Promise(r => setTimeout(r, 800));
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const fields = [
        { key: 'whatsapp_number', label: 'WhatsApp Number', placeholder: '+8801XXXXXXXXX' },
        { key: 'business_phone', label: 'Business Phone', placeholder: '+8801XXXXXXXXX' },
        { key: 'business_email', label: 'Business Email', placeholder: 'info@impressad.com' },
        { key: 'business_address', label: 'Business Address', placeholder: 'Wireless Moor, Chittagong' },
        { key: 'facebook_url', label: 'Facebook URL', placeholder: 'https://facebook.com/impressad' },
        { key: 'instagram_url', label: 'Instagram URL', placeholder: 'https://instagram.com/impressad' },
        { key: 'seo_title', label: 'SEO Title', placeholder: 'Impress Ad — Printing & Branding' },
        { key: 'seo_description', label: 'SEO Description', placeholder: 'Your SEO meta description' },
    ];

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-heading font-bold text-primary-900">Settings</h1>
                <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-6 py-2 bg-accent-orange text-white rounded-xl font-semibold hover:bg-orange-600 transition-all disabled:opacity-50">
                    {saved ? <><FaCheckCircle /> Saved!</> : <><FaSave /> {saving ? 'Saving...' : 'Save Settings'}</>}
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-border-200 p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fields.map(field => (
                        <div key={field.key}>
                            <label className="block text-sm font-semibold text-primary-900 mb-1">{field.label}</label>
                            <input
                                className="w-full px-4 py-3 border border-border-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange transition-all"
                                placeholder={field.placeholder}
                                value={settings[field.key] || ''}
                                onChange={e => setSettings({ ...settings, [field.key]: e.target.value })}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
