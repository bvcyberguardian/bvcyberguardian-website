import Link from "next/link";
import { Brain, Shield, Search, FileCheck, Users, Zap, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "AI Security Services | BV CyberGuardian",
  description: "AI-powered cybersecurity and AI governance consulting for businesses, creators, and families in NY & NJ. Stay protected as threats evolve.",
};

const pillars = [
  {
    icon: AlertTriangle,
    title: "AI Threat Protection",
    desc: "Defend against AI-powered attacks — deepfake phishing, voice cloning scams, automated credential stuffing, and AI-generated malware that bypasses traditional defenses.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: FileCheck,
    title: "AI Security Assessment",
    desc: "Audit how your organization uses AI tools like ChatGPT, Copilot, and Gemini. We identify data leakage risks, shadow AI usage, and policy gaps before they become breaches.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Shield,
    title: "AI Governance & Policy",
    desc: "We write clear, enforceable AI use policies for your business — covering acceptable tools, data handling rules, employee guidelines, and vendor AI risk reviews.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Brain,
    title: "AI-Powered Detection",
    desc: "Upgrade your defenses with AI-driven threat detection that learns your network's normal behavior and flags anomalies in real time — faster and smarter than signature-based tools.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Users,
    title: "AI Security Awareness Training",
    desc: "Train your team to recognize AI-generated phishing, synthetic voice fraud, and deepfake video scams. Your people are your first line of defense.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Zap,
    title: "Safe AI Adoption",
    desc: "Ready to add AI tools to your workflow but nervous about security? We guide you through a secure rollout — vetting vendors, configuring data boundaries, and monitoring usage.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const threats = [
  { label: "AI-generated phishing emails", detail: "Flawless grammar, perfect personalization — impossible to spot without training" },
  { label: "Deepfake voice & video fraud", detail: "Attackers clone your CEO's voice to authorize wire transfers" },
  { label: "Automated credential attacks", detail: "AI tools test millions of passwords per second across your accounts" },
  { label: "Shadow AI data leakage", detail: "Employees pasting client data into ChatGPT without realizing it's stored" },
  { label: "AI-assisted malware", detail: "Malware that rewrites itself to evade antivirus and EDR tools" },
  { label: "Prompt injection attacks", detail: "Attackers hijack your AI tools through crafted inputs to steal data or execute actions" },
];

export default function AIServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-5">
            <Brain className="w-4 h-4" />
            AI Security Services
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Cybersecurity for the <span className="gradient-text">Age of AI</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Attackers are already using AI to hit harder and faster. BV CyberGuardian brings certified AI security expertise to protect your business, brand, and family — and helps you adopt AI tools safely without creating new risks.
          </p>
        </div>

        {/* Threat landscape callout */}
        <div className="card-cyber rounded-2xl p-6 mb-16 border border-red-500/20">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-red-500/10">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <h2 className="text-white font-bold text-lg">AI Threats You&apos;re Already Facing</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {threats.map((t) => (
              <div key={t.label} className="flex gap-3">
                <span className="text-red-400 font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="text-white text-sm font-semibold">{t.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service pillars */}
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((p) => (
            <div key={p.title} className="card-cyber rounded-2xl p-6">
              <div className={`inline-flex p-3 rounded-xl ${p.bg} mb-4`}>
                <p.icon className={`w-6 h-6 ${p.color}`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Who this is for */}
        <div className="card-cyber rounded-3xl p-8 lg:p-12 mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                audience: "Small Businesses",
                href: "/for-business",
                color: "text-cyan-400",
                border: "border-cyan-500/20",
                points: ["AI use policy for your team", "Vendor AI risk review", "Employee phishing training", "Secure Copilot/ChatGPT rollout"],
              },
              {
                audience: "Content Creators",
                href: "/for-creators",
                color: "text-violet-400",
                border: "border-violet-500/20",
                points: ["Deepfake & impersonation monitoring", "Brand protection from AI clones", "Account takeover prevention", "AI tool security review"],
              },
              {
                audience: "Entrepreneurs",
                href: "/for-entrepreneurs",
                color: "text-amber-400",
                border: "border-amber-500/20",
                points: ["AI due diligence for vendors", "Data leakage risk assessment", "AI-powered threat detection", "Executive deepfake fraud protection"],
              },
              {
                audience: "Home & Family",
                href: "/for-home",
                color: "text-emerald-400",
                border: "border-emerald-500/20",
                points: ["Recognize AI scams & voice cloning", "Child safety with AI tools", "Identity theft from AI data leaks", "Family AI security workshop"],
              },
            ].map((item) => (
              <div key={item.audience} className={`rounded-xl p-5 border ${item.border} bg-white/3`}>
                <Link href={item.href} className={`font-bold text-base mb-3 block hover:underline ${item.color}`}>
                  {item.audience} →
                </Link>
                <ul className="space-y-1.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-slate-400 text-xs">
                      <span className={`${item.color} shrink-0`}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="card-cyber rounded-3xl p-8 lg:p-12 mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">How We Work With You</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "We learn how you currently use AI tools and where your exposure is — no jargon, no pressure." },
              { step: "02", title: "AI Risk Assessment", desc: "We audit your AI usage, shadow tools, vendor agreements, and threat exposure to build a clear risk picture." },
              { step: "03", title: "Policy & Protection", desc: "We deliver a written AI security policy, configure your defenses, and train your team or family." },
              { step: "04", title: "Ongoing Monitoring", desc: "As AI threats evolve, we keep your protection current — with monthly reviews and real-time alerts." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-extrabold gradient-text mb-3">{item.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-5 text-sm">Free AI security consultation — no obligation.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all"
          >
            Get Your Free AI Security Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
