import React from 'react';
import { Header } from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-50">
        <Header />
        <main className="container mx-auto px-6 py-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6">
            {children}
          </div>
        </main>
      </div>
    );
  }