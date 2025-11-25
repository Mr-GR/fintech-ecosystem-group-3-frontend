export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            How EquiBank Works
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A unified digital ledger that connects central banks, governments, and relief agencies
            to deliver instant, transparent relief during disasters.
          </p>
        </div>
      </section>

      {/* Emergency Relief Mode Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Emergency Relief Mode
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            When disaster strikes, time is everything. EquiBank's Emergency Relief Mode activates
            a coordinated, automated response that verifies eligibility, disburses funds, and tracks
            flows in real time.
          </p>

          <div className="space-y-12">
            <WorkflowStep
              number={1}
              title="Disaster Detection & Activation"
              description="Government authorities or designated agencies activate Emergency Relief Mode through the EquiBank platform. The affected region is defined using official disaster declarations, satellite data, and geolocation boundaries."
              features={[
                "Automated triggers from weather systems and seismic data",
                "Manual activation by authorized government officials",
                "Immediate notification to all network participants",
                "Geographic boundaries set using coordinates and administrative zones"
              ]}
            />

            <WorkflowStep
              number={2}
              title="Identity Verification & Eligibility"
              description="Smart contracts automatically verify who qualifies for relief using secure digital identity profiles and location data. Pre-defined eligibility rules are applied in minutes, not days."
              features={[
                "Privacy-preserving digital identity verification",
                "Geolocation confirmation via mobile devices",
                "Cross-reference with government databases",
                "Instant eligibility determination based on pre-set criteria"
              ]}
            />

            <WorkflowStep
              number={3}
              title="Instant Disbursement to Digital Wallets"
              description="Once verified, relief funds are automatically disbursed to recipients' EquiBank digital wallets. Transactions are recorded on the shared ledger, creating an immutable audit trail."
              features={[
                "Direct deposits in seconds, not weeks",
                "Works with intermittent or limited connectivity",
                "Multi-signature authorization for large disbursements",
                "Automatic currency conversion if needed"
              ]}
            />

            <WorkflowStep
              number={4}
              title="Real-Time Liquidity Coordination"
              description="Central banks and commercial banks coordinate liquidity injections through the EquiBank platform, ensuring that local financial institutions can honor withdrawals and transactions."
              features={[
                "Instant liquidity transfers between institutions",
                "Real-time monitoring of regional cash needs",
                "Automated rebalancing of reserves",
                "Stress-tested settlement mechanisms"
              ]}
            />

            <WorkflowStep
              number={5}
              title="Transparent Tracking & Reporting"
              description="All participants access unified dashboards showing where funds flow, who receives them, and how they're used. This transparency reduces fraud and enables rapid policy adjustments."
              features={[
                "Live dashboards for governments, NGOs, and donors",
                "Aggregate statistics without exposing individual data",
                "Fraud detection algorithms flag anomalies",
                "Export reports for audits and compliance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Digital Identity & Geolocation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Digital Identity & Geolocation Eligibility
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <DetailCard
              title="Privacy-First Identity"
              description="EquiBank uses secure, privacy-preserving digital identity systems that verify who you are without exposing sensitive personal information. Biometric data stays on your device, while cryptographic proofs are shared with the network."
              highlights={[
                "Zero-knowledge proofs for identity verification",
                "Biometric authentication (face, fingerprint)",
                "Integration with national ID systems",
                "Works with existing government databases"
              ]}
            />
            <DetailCard
              title="Location-Based Eligibility"
              description="Smart contracts use GPS and cell tower data to confirm you're in the affected disaster zone. This prevents fraud while ensuring that everyone who needs help can access it quickly."
              highlights={[
                "Multi-source location verification",
                "Works even with degraded GPS signals",
                "Privacy controls limit data exposure",
                "Manual override for edge cases"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Digital Wallets & Offline Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Digital Wallets & Offline Support
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            EquiBank wallets are designed to work when traditional banking infrastructure fails.
            Whether it's a hurricane, earthquake, or flood, your money stays accessible.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureBox
              icon="📱"
              title="Mobile-First Design"
              description="Works on smartphones, feature phones, and shared devices. No need for a bank account or credit card."
            />
            <FeatureBox
              icon="🔌"
              title="Offline Transactions"
              description="Authorize payments even with limited connectivity. Transactions sync when network is restored."
            />
            <FeatureBox
              icon="🔐"
              title="Secure by Default"
              description="Multi-factor authentication, encryption, and biometric security protect your funds."
            />
            <FeatureBox
              icon="💱"
              title="Multi-Currency"
              description="Hold and transact in local currency or central-bank-backed digital tokens."
            />
            <FeatureBox
              icon="🏪"
              title="Merchant Integration"
              description="Local businesses can accept EquiBank payments, keeping commerce flowing during recovery."
            />
            <FeatureBox
              icon="🌐"
              title="Global Interoperability"
              description="Compatible with international payment systems and existing banking infrastructure."
            />
          </div>
        </div>
      </section>

      {/* Liquidity Coordination Layer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Liquidity Coordination Layer
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Disasters create sudden liquidity shocks. EquiBank's coordination layer enables central banks,
            commercial banks, and aid agencies to inject and rebalance liquidity in real time.
          </p>

          <div className="space-y-6">
            <LiquidityFeature
              title="Real-Time Settlement"
              description="Transactions settle instantly on the shared ledger, reducing counterparty risk and enabling immediate fund transfers between institutions."
            />
            <LiquidityFeature
              title="Dynamic Reserve Management"
              description="Banks can request and receive liquidity injections based on real-time demand, preventing runs and maintaining stability."
            />
            <LiquidityFeature
              title="Central Bank Oversight"
              description="Monetary authorities have full visibility into flows and can implement policy responses within minutes, not days."
            />
            <LiquidityFeature
              title="Automated Rebalancing"
              description="Smart contracts automatically redistribute reserves based on pre-set thresholds and regional demand patterns."
            />
          </div>
        </div>
      </section>

      {/* Transparency & Dashboards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Transparency & Real-Time Dashboards
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Every stakeholder gets a unified view of disaster relief flows. Transparency reduces fraud,
            builds trust, and enables rapid course corrections.
          </p>

          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <p className="text-sm text-slate-400 mb-4">Live Dashboard Preview</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <DashboardMetric label="Total Disbursed" value="$2.4B" change="+12%" />
                <DashboardMetric label="Recipients" value="128,420" change="+8%" />
                <DashboardMetric label="Avg Time" value="14 min" change="-18%" />
                <DashboardMetric label="Fraud Rate" value="0.8%" change="-25%" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <DashboardFeature
              title="For Governments"
              items={["Track total relief spending", "Monitor geographic coverage", "Identify gaps in real time"]}
            />
            <DashboardFeature
              title="For NGOs & Donors"
              items={["Verify fund utilization", "Measure impact per dollar", "Export audit reports"]}
            />
            <DashboardFeature
              title="For Financial Institutions"
              items={["Monitor liquidity levels", "Track settlement times", "Risk management insights"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-teal-400/10 to-slate-900/40 border border-teal-400/20 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            See EquiBank in action
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Download the full whitepaper for technical architecture, security model, and implementation roadmap.
          </p>
          <a
            href="/coming-soon"
            className="inline-block px-8 py-4 rounded-full bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors text-lg"
          >
            Download Whitepaper
          </a>
        </div>
      </section>
    </main>
  );
}

// Component: WorkflowStep
function WorkflowStep({ number, title, description, features }: { number: number; title: string; description: string; features: string[] }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-400 text-slate-950 font-bold text-xl flex-shrink-0">
          {number}
        </div>
        <div className="w-0.5 flex-1 bg-slate-800 mt-4" />
      </div>
      <div className="pb-8 flex-1">
        <h3 className="font-semibold text-2xl mb-3">{title}</h3>
        <p className="text-slate-300 leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="text-teal-400 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Component: DetailCard
function DetailCard({ title, description, highlights }: { title: string; description: string; highlights: string[] }) {
  return (
    <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/60">
      <h3 className="font-semibold text-xl mb-4 text-teal-400">{title}</h3>
      <p className="text-slate-300 leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-400">
            <span className="text-teal-400">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component: FeatureBox
function FeatureBox({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-teal-400/50 transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: LiquidityFeature
function LiquidityFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-400/10 text-teal-400 flex-shrink-0">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Component: DashboardMetric
function DashboardMetric({ label, value, change }: { label: string; value: string; change: string }) {
  const isPositive = change.startsWith('+');
  const isNegative = change.startsWith('-');

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">{label}</p>
      <p className="text-2xl font-semibold text-teal-400 mb-1">{value}</p>
      <p className={`text-xs ${isPositive ? 'text-green-400' : isNegative ? 'text-red-400' : 'text-slate-400'}`}>
        {change} vs last hour
      </p>
    </div>
  );
}

// Component: DashboardFeature
function DashboardFeature({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
      <h3 className="font-semibold text-lg mb-4 text-teal-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="text-teal-400">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
