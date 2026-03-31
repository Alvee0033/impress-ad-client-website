'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isLoginPage = pathname === '/admin/login';

    // Login page doesn't need the admin shell
    if (isLoginPage) return <>{children}</>;

    return (
        <div className="min-h-screen bg-bg-50 flex">
            <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 lg:ml-64">
                {/* Top bar */}
                <header className="h-16 bg-white border-b border-border-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2 text-primary-900 hover:bg-bg-50 rounded-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex-1" />
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-700 to-accent-orange flex items-center justify-center text-white text-sm font-bold">
                            D
                        </div>
                    </div>
                </header>
                <main className="p-4 lg:p-8">{children}</main>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminLayoutInner>{children}</AdminLayoutInner>
    );
}
