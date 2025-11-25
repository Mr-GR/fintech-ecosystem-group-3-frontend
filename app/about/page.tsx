"use client";

import { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to a backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            About EquiBank
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Reimagining disaster finance for a crisis-prone world
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            The Vision
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Natural disasters are increasing in frequency and severity. Yet our financial systems—built
              for stability in normal times—fail precisely when people need them most. When hurricanes,
              earthquakes, and floods strike, relief funds move through fragmented pipelines that take
              days or weeks. ATMs go offline. Banks close. Families are cut off from their own money.
            </p>
            <p>
              EquiBank was designed to solve this systemic failure. By connecting central banks, governments,
              commercial banks, and relief agencies on a unified digital ledger, we enable instant, transparent,
              and resilient disaster finance. Smart contracts verify eligibility in minutes. Digital wallets
              work even when traditional infrastructure fails. Real-time dashboards show exactly where money
              flows and who still needs help.
            </p>
            <p>
              This isn't just faster relief—it's a fundamental rethinking of how financial systems respond
              to crisis. EquiBank transforms disaster finance from reactive chaos into proactive resilience,
              saving money, lives, and long-term economic stability.
            </p>
          </div>
        </div>
      </section>

      {/* Research Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Research & Development
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed mb-12">
            <p>
              EquiBank emerged from research into crisis-proof financial infrastructure, combining insights
              from disaster economics, digital identity systems, programmable money, and resilient network
              design. Our approach draws on:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ResearchCard
              title="Disaster Economics"
              description="Analysis of relief fund flows, economic damage patterns, and recovery timelines from major hurricanes, earthquakes, and floods over the past two decades."
            />
            <ResearchCard
              title="Digital Identity Systems"
              description="Privacy-preserving verification methods that balance security with accessibility, ensuring that relief reaches verified recipients without exposing sensitive data."
            />
            <ResearchCard
              title="Programmable Finance"
              description="Smart contract design patterns for automated eligibility checks, instant disbursements, and coordinated liquidity management across institutions."
            />
            <ResearchCard
              title="Resilient Networks"
              description="Infrastructure design for offline-capable transactions, intermittent connectivity, and graceful degradation when local systems fail."
            />
          </div>
        </div>
      </section>

      {/* Whitepaper Download */}
      <section id="whitepaper" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-400/10 to-slate-900/40 border border-teal-400/20 rounded-2xl p-12">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Download the EquiBank Whitepaper
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Get the complete technical architecture, financial impact analysis, implementation roadmap,
                  and security model. Includes case studies, economic modeling, and integration specifications.
                </p>
                <a
                  href="/coming-soon"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Whitepaper (PDF)
                </a>
              </div>

              <div className="space-y-4">
                <WhitepaperSection title="Executive Summary" pages="2" />
                <WhitepaperSection title="The Crisis in Disaster Finance" pages="4" />
                <WhitepaperSection title="EquiBank Architecture" pages="8" />
                <WhitepaperSection title="Financial Impact Analysis" pages="6" />
                <WhitepaperSection title="Security & Privacy Model" pages="5" />
                <WhitepaperSection title="Implementation Roadmap" pages="4" />
                <WhitepaperSection title="Case Studies & Scenarios" pages="6" />
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Total Pages</span>
                    <span className="font-semibold text-teal-400">35 pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Key Findings from the Research
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <FindingCard
              number="95%"
              title="Faster Disbursement"
              description="EquiBank can deliver relief funds 95% faster than traditional systems, reducing average time from 14-21 days to 10-30 minutes."
            />
            <FindingCard
              number="$8-15B"
              title="Economic Impact"
              description="Estimated savings per major disaster through reduced fraud, continuous economic activity, and accelerated recovery."
            />
            <FindingCard
              number="3x"
              title="Recovery Speed"
              description="Regions with EquiBank infrastructure could recover economic output 3x faster than traditional disaster relief."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-300">
              Interested in pilots, partnerships, or research collaborations? Let's talk.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Who We're Looking For</h3>
              <div className="space-y-4">
                <ContactType
                  icon="🏛️"
                  title="Government Agencies"
                  description="FEMA, disaster management offices, and emergency response coordinators interested in pilot programs"
                />
                <ContactType
                  icon="🏦"
                  title="Financial Institutions"
                  description="Central banks, commercial banks, and payment processors exploring crisis-resilient infrastructure"
                />
                <ContactType
                  icon="🌍"
                  title="NGOs & Relief Organizations"
                  description="International aid agencies and humanitarian organizations seeking transparent, efficient disbursement systems"
                />
                <ContactType
                  icon="🎓"
                  title="Researchers & Academics"
                  description="Scholars studying disaster economics, fintech, or resilient systems looking to collaborate"
                />
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 focus:outline-none focus:border-teal-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 focus:outline-none focus:border-teal-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">Organization *</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 focus:outline-none focus:border-teal-400 transition-colors"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">I am a... *</label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 focus:outline-none focus:border-teal-400 transition-colors"
                    >
                      <option value="">Select your role</option>
                      <option value="government">Government Official</option>
                      <option value="bank">Banking/Finance Professional</option>
                      <option value="ngo">NGO/Relief Worker</option>
                      <option value="researcher">Researcher/Academic</option>
                      <option value="investor">Investor/Funder</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                      placeholder="Tell us about your interest in EquiBank..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-full bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-teal-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-slate-300">
                    Thank you for reaching out. We'll get back to you within 1-2 business days.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborators (Placeholder) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Built in Collaboration With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            <PartnerPlaceholder name="Central Bank Partner" />
            <PartnerPlaceholder name="Tech Partner" />
            <PartnerPlaceholder name="NGO Partner" />
            <PartnerPlaceholder name="Research Institution" />
          </div>
          <p className="text-sm text-slate-400 mt-8">
            Partnerships in development. Interested in collaborating? Contact us above.
          </p>
        </div>
      </section>
    </main>
  );
}

// Component: ResearchCard
function ResearchCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-teal-400/50 transition-all">
      <h3 className="font-semibold text-xl mb-3 text-teal-400">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: WhitepaperSection
function WhitepaperSection({ title, pages }: { title: string; pages: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-slate-700 bg-slate-900/60">
      <span className="text-sm text-slate-300">{title}</span>
      <span className="text-xs text-slate-400">{pages} pages</span>
    </div>
  );
}

// Component: FindingCard
function FindingCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/60 text-center hover:border-teal-400/50 transition-all">
      <div className="text-5xl font-bold text-teal-400 mb-3">{number}</div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: ContactType
function ContactType({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/40">
      <div className="text-3xl flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
}

// Component: PartnerPlaceholder
function PartnerPlaceholder({ name }: { name: string }) {
  return (
    <div className="aspect-video rounded-lg border border-slate-800 bg-slate-900/40 flex items-center justify-center p-4">
      <span className="text-xs text-slate-500 text-center">{name}</span>
    </div>
  );
}
