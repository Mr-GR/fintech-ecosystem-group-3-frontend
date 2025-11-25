"use client";

import { useState } from "react";
import Link from "next/link";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    // In a real app, you'd send this to a backend
    console.log("Email subscribed:", email);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        {/* Icon */}
        <div className="mt-4 mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
            <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Whitepaper Coming Soon
        </h1>

        {/* Description */}
        <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          We're putting the finishing touches on the EquiBank whitepaper. It will include complete technical
          architecture, financial impact analysis, security model, and implementation roadmap.
        </p>

        {/* Expected Contents */}
        <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-teal-400">What to Expect</h2>
          <div className="grid gap-4 md:grid-cols-2 text-left">
            <ContentItem icon="📊" text="Financial Impact Analysis" />
            <ContentItem icon="🏗️" text="Technical Architecture" />
            <ContentItem icon="🔐" text="Security & Privacy Model" />
            <ContentItem icon="🗺️" text="Implementation Roadmap" />
            <ContentItem icon="📈" text="Case Studies & Scenarios" />
            <ContentItem icon="🔄" text="Integration Specifications" />
          </div>
        </div>

        {/* Email Subscription */}
        {!subscribed ? (
          <div className="max-w-xl mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-4">
              Get notified when it's ready
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="flex-1 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-slate-50 focus:outline-none focus:border-teal-400 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-xl mx-auto mb-12 p-6 rounded-2xl bg-teal-400/10 border border-teal-400/20">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-semibold text-teal-400">You're on the list!</h3>
            </div>
            <p className="text-slate-300">
              We'll send you an email as soon as the whitepaper is available.
            </p>
          </div>
        )}

        {/* Timeline */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-700">
            <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-slate-300">Expected Release: <span className="text-teal-400 font-semibold">Q1 2026</span></span>
          </div>
        </div>

        {/* In the Meantime */}
        <div className="border-t border-slate-800 pt-12">
          <h3 className="text-2xl font-semibold mb-6">In the Meantime</h3>
          <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
            <Link
              href="/how-it-works"
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-teal-400/50 transition-all text-center"
            >
              <div className="text-3xl mb-2">⚙️</div>
              <div className="font-semibold mb-1">How It Works</div>
              <div className="text-sm text-slate-400">Learn about the system</div>
            </Link>
            <Link
              href="/financial-impact"
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-teal-400/50 transition-all text-center"
            >
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold mb-1">Financial Impact</div>
              <div className="text-sm text-slate-400">See the benefits</div>
            </Link>
            <Link
              href="/about"
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-teal-400/50 transition-all text-center"
            >
              <div className="text-3xl mb-2">📧</div>
              <div className="font-semibold mb-1">Contact Us</div>
              <div className="text-sm text-slate-400">Get in touch</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// Component: ContentItem
function ContentItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60">
      <span className="text-2xl">{icon}</span>
      <span className="text-slate-300">{text}</span>
    </div>
  );
}
