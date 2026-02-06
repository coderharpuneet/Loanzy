import React from "react";
import { ShieldCheck, Zap, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Next Gen Finance
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Smart Digital <br />
            <span className="text-gradient">Loan Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed">
            Experience lightning-fast approvals and secure financing tailored to
            your needs. No paperwork, just results.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate("/apply")}
              className="btn-primary flex items-center gap-2 group"
            >
              Apply Now
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="btn-secondary"
            >
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-24 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap size={24} />}
              title="Instant Approval"
              description="AI-powered analysis gives you a decision within minutes, not days."
            />
            <FeatureCard
              icon={<ShieldCheck size={24} />}
              title="Bank-Grade Security"
              description="Your financial data is protected by enterprise-level encryption."
            />
            <FeatureCard
              icon={<Globe size={24} />}
              title="Global Access"
              description="Access your funds and manage payments from anywhere in the world."
            />
          </div>
        </div>
      </section>

      {/* Stats Section with Glass Effect */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">₹500 Cr+</h2>
              <p className="text-neutral-400">Loans Disbursed</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">50k+</h2>
              <p className="text-neutral-400">Happy Customers</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">99.9%</h2>
              <p className="text-neutral-400">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all group">
    <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-neutral-400 leading-relaxed">{description}</p>
  </div>
);

export default LandingPage;
