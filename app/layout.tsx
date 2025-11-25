import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "EquiBank - Crisis-Proof Global Payments for Disaster Relief",
  description: "When disasters hit, money should move in seconds—not weeks. EquiBank is a unified financial network for instant, transparent relief payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold text-teal-400 mb-4">EquiBank</h3>
            <p className="text-slate-400 text-sm max-w-md">
              A crisis-proof, programmable financial network for disaster relief.
              Real-time payments, transparent flows, resilient finance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-slate-400 hover:text-teal-400 transition-colors">How It Works</Link></li>
              <li><Link href="/financial-impact" className="text-slate-400 hover:text-teal-400 transition-colors">Financial Impact</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors">Whitepaper</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">Get in Touch</a></li>
              <li><a href="#beta" className="text-slate-400 hover:text-teal-400 transition-colors">Join Beta</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} EquiBank. Crisis-ready finance for the real world.</p>
        </div>
      </div>
    </footer>
  );
}
