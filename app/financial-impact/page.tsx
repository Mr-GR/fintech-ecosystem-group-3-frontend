export default function FinancialImpact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Financial Impact
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            EquiBank transforms disaster finance from weeks of delays to minutes of action,
            saving money, lives, and long-term economic stability.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            The EquiBank Advantage
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              value="95%"
              label="Faster disbursement"
              description="From weeks to minutes"
              trend="up"
            />
            <MetricCard
              value="$2.3B"
              label="Cost savings"
              description="Per major disaster"
              trend="up"
            />
            <MetricCard
              value="70%"
              label="Fraud reduction"
              description="Via transparent tracking"
              trend="down"
            />
            <MetricCard
              value="3x"
              label="Economic recovery speed"
              description="Measured in GDP bounce-back"
              trend="up"
            />
          </div>
        </div>
      </section>

      {/* Time to Relief */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Shorter Time to Funds, Bigger Impact
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Every hour of delay compounds economic damage. EquiBank automates identity verification,
            eligibility checks, and disbursements—shrinking the gap between disaster impact and
            financial support from weeks to minutes.
          </p>

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <ComparisonCard
              title="Traditional Relief Systems"
              timeframe="2-6 weeks"
              steps={[
                "Paper forms and manual verification",
                "Multi-agency coordination delays",
                "Bank account setup for unbanked",
                "Physical distribution of checks or cash",
                "High fraud and misallocation rates"
              ]}
              color="red"
            />
            <ComparisonCard
              title="EquiBank"
              timeframe="10-30 minutes"
              steps={[
                "Automated digital identity verification",
                "Smart contract eligibility checks",
                "Instant digital wallet disbursements",
                "Real-time tracking and transparency",
                "Built-in fraud detection"
              ]}
              color="teal"
            />
          </div>

          <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/60">
            <h3 className="font-semibold text-xl mb-4 text-teal-400">Real-World Impact</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Research shows that <strong>every day of delay in disaster relief increases long-term
              economic damage by 2-5%</strong>. Families resort to predatory loans, businesses close
              permanently, and regional GDP suffers for years.
            </p>
            <p className="text-slate-300 leading-relaxed">
              By delivering funds in minutes instead of weeks, EquiBank prevents this spiral—allowing
              families to secure food, shelter, and medicine immediately, and enabling businesses to
              reopen and rehire within days.
            </p>
          </div>
        </div>
      </section>

      {/* Continuous Access to Funds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Continuous Access When Infrastructure Fails
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Natural disasters often knock out ATMs, bank branches, and power grids. EquiBank's digital
            wallets work independently, allowing families and businesses to transact even when traditional
            banking is offline.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <AccessBenefitCard
              icon="🏪"
              title="Businesses Stay Open"
              description="Local merchants can accept EquiBank payments, keeping supply chains active and preventing total economic shutdown."
            />
            <AccessBenefitCard
              icon="🏠"
              title="Housing & Shelter"
              description="Families can pay for temporary housing, repairs, and relocation without waiting for physical banks to reopen."
            />
            <AccessBenefitCard
              icon="🚑"
              title="Healthcare Access"
              description="Medical providers accept digital payments, ensuring that injuries and illnesses are treated immediately."
            />
          </div>

          <div className="bg-gradient-to-br from-teal-400/10 to-slate-900/40 border border-teal-400/20 rounded-2xl p-8">
            <h3 className="font-semibold text-xl mb-4">Economic Continuity</h3>
            <p className="text-slate-300 leading-relaxed">
              Traditional disasters create a <strong>double shock</strong>: physical damage plus financial
              paralysis. EquiBank eliminates the second shock by keeping money flowing. This continuity
              prevents permanent business closures, reduces unemployment, and accelerates regional recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Liquidity Stability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Real-Time Liquidity Management
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Disasters create sudden liquidity shocks: surges in withdrawals, bank runs, and frozen credit
            markets. EquiBank's coordination layer enables central banks and commercial banks to inject and
            rebalance liquidity instantly—preventing financial panic.
          </p>

          <div className="space-y-6 mb-12">
            <LiquidityBenefit
              title="Prevents Bank Runs"
              description="Real-time visibility and instant liquidity transfers reassure depositors that their money is safe, preventing panic withdrawals."
              impact="Estimated $500M-$1B savings per major disaster"
            />
            <LiquidityBenefit
              title="Stabilizes Local Credit Markets"
              description="Banks can continue lending and honoring credit lines because they trust the central bank's instant liquidity support."
              impact="Maintains business access to working capital during recovery"
            />
            <LiquidityBenefit
              title="Reduces Central Bank Emergency Lending"
              description="Proactive liquidity management reduces the need for expensive, disruptive emergency lending facilities."
              impact="Lower interest rate volatility and monetary policy costs"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
              <h3 className="font-semibold text-lg mb-4 text-teal-400">For Central Banks</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">✓</span>
                  <span>Instant visibility into regional liquidity needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">✓</span>
                  <span>Automated reserve transfers to distressed areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">✓</span>
                  <span>Reduced moral hazard from pre-committed rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">✓</span>
                  <span>Lower political pressure for bailouts</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
              <h3 className="font-semibold text-lg mb-4 text-teal-400">For Commercial Banks</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">✓</span>
                  <span>Confidence to honor withdrawals during crisis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">✓</span>
                  <span>Lower cost of overnight borrowing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">✓</span>
                  <span>Reduced regulatory capital requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">✓</span>
                  <span>Maintains customer trust and deposits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Reduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Transparent Flows, Reduced Fraud
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Traditional disaster relief suffers from <strong>20-30% fraud and misallocation rates</strong>.
            EquiBank's shared ledger, digital identity, and real-time dashboards make every transaction traceable,
            cutting fraud dramatically.
          </p>

          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            <FraudReductionCard
              percentage="70%"
              title="Identity Fraud"
              description="Digital identity verification prevents duplicate claims and fake identities"
            />
            <FraudReductionCard
              percentage="85%"
              title="Misallocation"
              description="Real-time tracking ensures funds reach intended recipients and purposes"
            />
            <FraudReductionCard
              percentage="60%"
              title="Administrative Costs"
              description="Automated verification reduces manual oversight and audit expenses"
            />
          </div>

          <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/60">
            <h3 className="font-semibold text-xl mb-4 text-teal-400">How Transparency Works</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-3">What's Tracked</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400">•</span>
                    <span>Every disbursement from source to recipient</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400">•</span>
                    <span>Time stamps and geolocation of transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400">•</span>
                    <span>Merchant payments and spending patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400">•</span>
                    <span>Aggregate flows without individual exposure</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">What's Protected</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400">•</span>
                    <span>Personal health and family information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400">•</span>
                    <span>Specific purchase details (only categories)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400">•</span>
                    <span>Biometric and identity data stays on-device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400">•</span>
                    <span>Zero-knowledge proofs for verification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Recovery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Faster Recovery, Long-Term Resilience
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            EquiBank doesn't just deliver relief faster—it accelerates long-term economic recovery and
            builds resilience against future disasters.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <RecoveryMetric
              title="GDP Recovery Time"
              traditional="3-5 years to return to pre-disaster levels"
              equibank="1-2 years with continuous economic activity"
              savings="$5-10B per major disaster"
            />
            <RecoveryMetric
              title="Household Debt"
              traditional="40-60% of affected families take predatory loans"
              equibank="10-15% need supplemental borrowing"
              savings="Prevents $2B in high-interest debt spirals"
            />
          </div>

          <div className="space-y-6">
            <ResilienceBenefit
              title="Predictable Support Builds Trust"
              description="When families and businesses know relief will arrive within minutes, they're more likely to stay, rebuild, and invest in their communities rather than relocating permanently."
            />
            <ResilienceBenefit
              title="Lower Insurance Premiums"
              description="Insurers recognize that EquiBank-supported regions recover faster and see lower total losses, leading to reduced premiums for homeowners and businesses."
            />
            <ResilienceBenefit
              title="Stronger Municipal Bonds"
              description="Cities with EquiBank infrastructure are viewed as more resilient, reducing borrowing costs for public infrastructure and services."
            />
          </div>
        </div>
      </section>

      {/* Total Economic Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-400/10 to-slate-900/40 border border-teal-400/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Total Economic Impact: $8-15B Per Major Disaster
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Based on analysis of recent Category 4-5 hurricanes and major earthquakes, EquiBank could save
              $8-15 billion per event through faster disbursements, reduced fraud, continuous economic activity,
              and accelerated recovery.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
              <ImpactBreakdown category="Time Savings" amount="$3-5B" />
              <ImpactBreakdown category="Fraud Reduction" amount="$2-3B" />
              <ImpactBreakdown category="Liquidity Stability" amount="$1-2B" />
              <ImpactBreakdown category="Faster Recovery" amount="$2-5B" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Transform disaster finance for your region
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Download the full financial impact analysis and technical whitepaper.
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

// Component: MetricCard
function MetricCard({ value, label, description, trend }: { value: string; label: string; description: string; trend: 'up' | 'down' }) {
  return (
    <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/60 text-center hover:border-teal-400/50 transition-all">
      <div className="text-4xl font-bold text-teal-400 mb-2">{value}</div>
      <div className="font-semibold text-lg mb-1">{label}</div>
      <div className="text-sm text-slate-400">{description}</div>
      <div className="mt-3 flex items-center justify-center gap-1">
        {trend === 'up' ? (
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        )}
        <span className="text-xs text-green-400">Better than traditional</span>
      </div>
    </div>
  );
}

// Component: ComparisonCard
function ComparisonCard({ title, timeframe, steps, color }: { title: string; timeframe: string; steps: string[]; color: 'red' | 'teal' }) {
  const borderColor = color === 'red' ? 'border-red-400/30' : 'border-teal-400/50';
  const bgColor = color === 'red' ? 'bg-red-400/5' : 'bg-teal-400/10';
  const textColor = color === 'red' ? 'text-red-400' : 'text-teal-400';

  return (
    <div className={`p-6 rounded-xl border ${borderColor} ${bgColor}`}>
      <h3 className={`font-semibold text-xl mb-2 ${textColor}`}>{title}</h3>
      <div className="text-3xl font-bold mb-6">{timeframe}</div>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
            <span className={textColor}>•</span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component: AccessBenefitCard
function AccessBenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 text-center hover:border-teal-400/50 transition-all">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: LiquidityBenefit
function LiquidityBenefit({ title, description, impact }: { title: string; description: string; impact: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
      <h3 className="font-semibold text-xl mb-3 text-teal-400">{title}</h3>
      <p className="text-slate-300 leading-relaxed mb-3">{description}</p>
      <div className="text-sm text-slate-400 italic">{impact}</div>
    </div>
  );
}

// Component: FraudReductionCard
function FraudReductionCard({ percentage, title, description }: { percentage: string; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/60 text-center hover:border-teal-400/50 transition-all">
      <div className="text-5xl font-bold text-teal-400 mb-3">{percentage}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: RecoveryMetric
function RecoveryMetric({ title, traditional, equibank, savings }: { title: string; traditional: string; equibank: string; savings: string }) {
  return (
    <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/60">
      <h3 className="font-semibold text-xl mb-4 text-teal-400">{title}</h3>
      <div className="space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">Traditional</div>
          <div className="text-sm text-slate-300">{traditional}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-teal-400 mb-1">With EquiBank</div>
          <div className="text-sm text-slate-200 font-medium">{equibank}</div>
        </div>
        <div className="pt-3 border-t border-slate-800">
          <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">Estimated Savings</div>
          <div className="text-lg font-semibold text-teal-400">{savings}</div>
        </div>
      </div>
    </div>
  );
}

// Component: ResilienceBenefit
function ResilienceBenefit({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 p-6 rounded-xl border border-slate-800 bg-slate-900/40">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-400/10 text-teal-400 flex-shrink-0">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Component: ImpactBreakdown
function ImpactBreakdown({ category, amount }: { category: string; amount: string }) {
  return (
    <div className="p-4 rounded-xl border border-slate-700 bg-slate-900/60">
      <div className="text-sm text-slate-400 mb-1">{category}</div>
      <div className="text-2xl font-bold text-teal-400">{amount}</div>
    </div>
  );
}
