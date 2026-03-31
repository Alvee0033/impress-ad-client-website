'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaLock, FaEnvelope } from 'react-icons/fa';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError('Invalid email or password');
            setLoading(false);
        } else {
            router.push('/admin');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-700 to-accent-orange flex items-center justify-center text-white font-bold text-xl shadow-lg">IA</div>
                    </div>
                    <h1 className="text-3xl font-heading font-bold text-white">Admin Login</h1>
                    <p className="text-white/60 mt-2">Impress Ad Dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                    {error && (
                        <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-sm text-center">{error}</div>
                    )}
                    <div className="mb-5">
                        <label className="block text-white/80 text-sm font-semibold mb-2">Email</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                placeholder="admin@impressad.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white/80 text-sm font-semibold mb-2">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-gradient-to-r from-accent-orange to-orange-500 text-white rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                    <p className="text-white/40 text-xs text-center mt-4">Default: admin@impressad.com / admin123</p>
                </form>
            </div>
        </div>
    );
}
