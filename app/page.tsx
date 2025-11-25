export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              When disaster strikes, money should move in <span className="text-teal-400">seconds</span>.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              EquiBank connects central banks, governments, and relief agencies
              on a shared digital ledger so relief funds can be verified,
              disbursed, and tracked in real time—even when local banking
              infrastructure is offline.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/coming-soon"
                className="px-6 py-3 rounded-full bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors"
              >
                Download Whitepaper
              </a>
              <a
                href="/how-it-works"
                className="px-6 py-3 rounded-full border border-slate-500 text-slate-300 hover:border-teal-400 hover:text-teal-400 transition-colors"
              >
                View How It Works
              </a>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              <p className="text-sm text-slate-400">Emergency Relief Mode · Live</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat label="Avg time to funds" value="14 minutes" />
              <Stat label="Households reached" value="128,420" />
              <Stat label="Liquidity injected" value="$2.4B" />
              <Stat label="Fraud flagged" value="0.8%" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            The financial system fails when people need it most.
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8">
            Our financial infrastructure was built for stability in normal times, not speed and transparency during crisis.
          </p>

          {/* Video */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Q7MrsOHMrfY"
                title="Hurricane Relief: How Long Funds Take"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-sm text-slate-500 mt-3">
              Real-world evidence: Hurricane victims wait weeks for relief funds
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ProblemCard
              title="Slow rails"
              description="Relief funds move through FEMA, SWIFT, ACH and NGO pipelines that take days or weeks, not minutes."
            />
            <ProblemCard
              title="Offline infrastructure"
              description="Power grids, ATMs, and local bank branches go down—cutting people off from their own money."
            />
            <ProblemCard
              title="Liquidity gaps"
              description="Central banks and governments can't coordinate fast enough, causing local shortages and stalled payouts."
            />
            <ProblemCard
              title="Opaque flows"
              description="No unified view of where funds go, who received what, or how quickly money is being used."
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            A crisis-ready financial network for the real world.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            EquiBank is a unified, crisis-proof financial network that connects central banks, commercial banks,
            governments, and relief agencies through a shared digital ledger. Smart contracts verify identities
            and eligibility, trigger instant disbursements to digital wallets, and track every unit of aid from
            source to recipient in real time. A stable, tokenized, central-bank-backed unit of value keeps the
            system steady—even when local systems fail.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <SolutionCard
              title="Instant relief"
              description="Automated verification and programmable disbursements send money in seconds, not weeks."
              icon="⚡"
            />
            <SolutionCard
              title="Coordinated liquidity"
              description="Central banks, banks, and aid agencies coordinate liquidity injections in real time."
              icon="🔄"
            />
            <SolutionCard
              title="Radical transparency"
              description="A shared ledger and dashboards show exactly where funds go and how they're used."
              icon="👁️"
            />
          </div>
        </div>
      </section>

      {/* How EquiBank Works Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            How EquiBank responds when disaster hits
          </h2>
          <div className="space-y-8">
            <TimelineStep
              number={1}
              title="Disaster detected"
              description="Authorities activate Emergency Relief Mode. Disaster zones are defined using official data and geolocation boundaries."
            />
            <TimelineStep
              number={2}
              title="Eligibility verified"
              description="Secure digital identity and location data determine who is in the affected region. Smart contracts apply pre-defined eligibility rules in minutes."
            />
            <TimelineStep
              number={3}
              title="Funds disbursed instantly"
              description="Verified individuals receive relief directly into EquiBank digital wallets, which work even with intermittent connectivity or offline authorization."
            />
            <TimelineStep
              number={4}
              title="Liquidity stabilized & flows tracked"
              description="Central banks inject liquidity where needed. Governments and NGOs monitor real-time dashboards that show flows, usage, and gaps."
            />
          </div>
        </div>
      </section>

      {/* Digital Wallets & Offline Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Access to money—even when banks are offline.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Natural disasters frequently knock out ATMs, branches, and local servers. EquiBank's digital
                wallets are designed to function independently from this infrastructure. Transactions can be
                authorized with intermittent or limited connectivity, allowing families to buy food, secure
                temporary housing, and relocate if necessary—even while the grid recovers.
              </p>
              <ul className="space-y-3">
                <FeatureItem text="Works with intermittent connectivity" />
                <FeatureItem text="Designed for low-end devices and shared phones" />
                <FeatureItem text="Enables local merchants to continue accepting payments" />
                <FeatureItem text="Reduces the economic paralysis that usually follows a major disaster" />
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 flex items-center justify-center h-80">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-slate-400 text-sm">Digital wallet mockup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Financial benefits for people, markets, and institutions
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            EquiBank transforms disaster finance from reactive chaos into proactive resilience
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              title="Faster time to relief"
              description="Automates identity verification and eligibility with digital profiles and pre-set rules, shrinking the gap between disaster impact and funding—from weeks to minutes."
            />
            <BenefitCard
              title="Continuous access to funds"
              description="EquiBank wallets keep money accessible even when local infrastructure is down, allowing individuals and businesses to transact, restock, and stabilize quickly."
            />
            <BenefitCard
              title="Real-time liquidity management"
              description="Lets central banks, commercial banks, and aid agencies coordinate liquidity injections instantly, reducing shocks and ensuring claims and disbursements are honored."
            />
            <BenefitCard
              title="Transparent fund tracking"
              description="Aggregates data from governments, insurers, and NGOs into a single tracking layer, showing where money flows, who receives it, and how quickly it's used—reducing fraud and misallocation."
            />
            <BenefitCard
              title="Long-term resilience & trust"
              description="Creates predictable, rapid support during emergencies, reducing the risk of debt spirals for individuals and long-term liabilities for institutions."
            />
            <BenefitCard
              title="Interoperable & programmable"
              description="Built on open standards, enabling seamless integration with existing payment systems, aid programs, and financial institutions worldwide."
            />
          </div>
        </div>
      </section>

      {/* Stakeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Built for every player in disaster finance
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <StakeholderCard
              icon="🏛️"
              title="For Governments & Agencies"
              features={[
                "Pre-configured emergency programs",
                "Real-time visibility into relief flows",
                "Faster policy response",
                "Audit trails for accountability"
              ]}
            />
            <StakeholderCard
              icon="🏦"
              title="For Central & Commercial Banks"
              features={[
                "Liquidity coordination tools",
                "Crisis settlement layer",
                "Lower operational risk",
                "Resilient payment infrastructure"
              ]}
            />
            <StakeholderCard
              icon="🌍"
              title="For NGOs & Relief Organizations"
              features={[
                "Direct, auditable disbursements",
                "Targeting by region and eligibility",
                "Proof of impact via dashboards",
                "Reduced administrative overhead"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Ready to reimagine disaster finance?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Get the whitepaper or reach out to discuss pilots, research, or prototypes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/coming-soon"
              className="px-8 py-4 rounded-full bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors text-lg"
            >
              Download Whitepaper
            </a>
            <a
              href="/about#contact"
              className="px-8 py-4 rounded-full border border-slate-500 text-slate-300 hover:border-teal-400 hover:text-teal-400 transition-colors text-lg"
            >
              Contact the Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// Component: Stat
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-semibold text-teal-400">{value}</p>
    </div>
  );
}

// Component: ProblemCard
function ProblemCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors">
      <div className="mt-1 h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Component: SolutionCard
function SolutionCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/60 hover:border-teal-400/50 transition-all hover:shadow-lg hover:shadow-teal-400/10">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: TimelineStep
function TimelineStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-400/10 border-2 border-teal-400 text-teal-400 font-semibold flex-shrink-0 group-hover:bg-teal-400 group-hover:text-slate-950 transition-all">
          {number}
        </div>
        {number < 4 && <div className="w-0.5 h-full bg-slate-800 mt-2" />}
      </div>
      <div className="pb-8">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Component: FeatureItem
function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="w-6 h-6 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-slate-300">{text}</span>
    </li>
  );
}

// Component: BenefitCard
function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-teal-400/50 transition-all hover:shadow-lg hover:shadow-teal-400/10">
      <h3 className="font-semibold text-lg mb-3 text-teal-400">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: StakeholderCard
function StakeholderCard({ icon, title, features }: { icon: string; title: string; features: string[] }) {
  return (
    <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/60 hover:border-teal-400/50 transition-all">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-6">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="text-teal-400 text-lg leading-none">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
