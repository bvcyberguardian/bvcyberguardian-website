import Link from "next/link";
import Image from "next/image";
import { Brain, Shield, Search, FileCheck, Users, Zap, ArrowRight, AlertTriangle, Lightbulb, Settings, GraduationCap, Bot, Lock } from "lucide-react";

export const metadata = {
  title: "AI Services | BV CyberGuardian",
  description: "From AI setup and workflow automation to AI security and governance — BV CyberGuardian helps businesses, creators, and families make AI work safely for them.",
};

const generalAI = [
  {
    icon: Lightbulb,
    title: "AI Strategy Consulting",
    desc: "Not sure where AI fits in your business or life? We assess your workflows, identify where AI can save you time and money, and build a practical roadmap — no hype, no fluff.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Settings,
    title: "AI Tool Setup & Integration",
    desc: "We set up and configure AI tools like ChatGPT, Microsoft Copilot, Google Gemini, and industry-specific AI platforms — properly connected to your existing systems and workflows.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Bot,
    title: "Workflow Automation with AI",
    desc: "We identify repetitive tasks in your business — emails, reports, scheduling, data entry — and automate them using AI tools so you and your team can focus on what matters.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Education",
    desc: "Hands-on training sessions for you, your team, or your family. We teach practical AI skills in plain English — how to prompt effectively, which tools to use, and how to get real results.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const securityAI = [
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
    desc: "Audit how your organization uses AI tools. We identify data leakage risks, shadow AI usage, and policy gaps — before they become breaches.",
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
    title: "AI-Powered Threat Detection",
    desc: "Upgrade your defenses with AI-driven detection that learns your network's normal behavior and flags anomalies in real time — faster and smarter than signature-based tools.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Users,
    title: "AI Security Awareness Training",
    desc: "Train your team to recognize AI-generated phishing, synthetic voice fraud, and deepfake scams. Your people are your first line of defense.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Lock,
    title: "Safe AI Adoption",
    desc: "Ready to add AI tools to your workflow but nervous about security? We guide you through a secure rollout — vetting vendors, configuring data boundaries, and monitoring usage.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const aiThreats = [
  { label: "AI-generated phishing emails", detail: "Flawless grammar, perfect personalization — impossible to spot without training" },
  { label: "Deepfake voice & video fraud", detail: "Attackers clone your CEO's voice to authorize wire transfers" },
  { label: "Automated credential attacks", detail: "AI tools test millions of passwords per second across your accounts" },
  { label: "Shadow AI data leakage", detail: "Employees pasting client data into ChatGPT without realizing it's stored" },
  { label: "AI-assisted malware", detail: "Malware that rewrites itself to evade antivirus and EDR tools" },
  { label: "Prompt injection attacks", detail: "Attackers hijack your AI tools through crafted inputs to steal data" },
];

export default function AIServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero image banner */}
      <div className="relative h-64 md:h-80 overflow-hidden mb-12">
        <Image
          src="/images/ai-services-hero.jpg"
          alt="Glowing AI chip — blue"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1628]/70" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-5">
            <Brain className="w-4 h-4" />
            AI Services
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            AI That <span className="gradient-text">Works for You</span> — Safely
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From your first AI tool setup to enterprise-grade AI security — BV CyberGuardian guides individuals, creators, entrepreneurs, and businesses through every stage of the AI journey. We help you get the benefits without the risks.
          </p>
        </div>

        {/* How far along are you? */}
        <div className="card-cyber rounded-2xl p-6 mb-16 border border-violet-500/20">
          <h2 className="text-white font-bold text-lg mb-5 text-center">Where Are You on Your AI Journey?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stage: "Just Getting Started", desc: "You're curious about AI but don't know where to begin. We help you understand what's possible and set you up the right way.", color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/10" },
              { stage: "Already Using AI", desc: "You're using ChatGPT or other tools but want to get more out of them — and make sure you're doing it safely.", color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/10" },
              { stage: "AI Security Concerns", desc: "Your business is adopting AI fast and you need governance, policy, and protection from AI-powered threats.", color: "text-red-400", border: "border-red-500/20", bg: "bg-red-500/10" },
            ].map((s) => (
              <div key={s.stage} className={`rounded-xl p-5 border ${s.border} ${s.bg}`}>
                <p className={`font-bold text-sm mb-2 ${s.color}`}>{s.stage}</p>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs text-center mt-4">We meet you where you are. No judgment, no jargon.</p>
        </div>

        {/* General AI Services */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">General AI Services</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Helping you understand, adopt, and get real value from AI — for your business or personal life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalAI.map((s) => (
              <div key={s.title} className="card-cyber rounded-2xl p-6">
                <div className={`inline-flex p-3 rounded-xl ${s.bg} mb-4`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bridge — threat callout */}
        <div className="card-cyber rounded-2xl p-6 mb-16 border border-red-500/20">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-red-500/10">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <h2 className="text-white font-bold text-lg">But AI Also Comes With New Risks</h2>
          </div>
          <p className="text-slate-400 text-sm mb-5">As AI becomes part of your workflow, attackers are using it too. These are the AI-powered threats targeting businesses, creators, and families right now:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiThreats.map((t) => (
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

        {/* AI Security Services */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">AI Cybersecurity Services</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Protection from AI-powered threats and governance for how your organization uses AI.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityAI.map((s) => (
              <div key={s.title} className="card-cyber rounded-2xl p-6">
                <div className={`inline-flex p-3 rounded-xl ${s.bg} mb-4`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who this is for */}
        <div className="card-cyber rounded-3xl p-8 lg:p-12 mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Who We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                audience: "Small Businesses",
                href: "/for-business",
                color: "text-cyan-400",
                border: "border-cyan-500/20",
                points: ["AI tool setup for your team", "Workflow automation", "AI use policy", "AI threat protection"],
              },
              {
                audience: "Content Creators",
                href: "/for-creators",
                color: "text-violet-400",
                border: "border-violet-500/20",
                points: ["AI content tools setup", "Deepfake & impersonation protection", "Brand safety from AI clones", "AI-assisted content strategy"],
              },
              {
                audience: "Entrepreneurs",
                href: "/for-entrepreneurs",
                color: "text-amber-400",
                border: "border-amber-500/20",
                points: ["AI strategy for your business", "Vendor AI risk review", "Automation to scale faster", "Executive AI threat protection"],
              },
              {
                audience: "Home & Family",
                href: "/for-home",
                color: "text-emerald-400",
                border: "border-emerald-500/20",
                points: ["Intro to AI tools", "Spotting AI scams & voice cloning", "Child safety with AI", "Family AI security workshop"],
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
              { step: "01", title: "Discovery Call", desc: "We learn how you currently use (or want to use) AI — your goals, your tools, your concerns. No jargon, no pressure." },
              { step: "02", title: "AI Assessment", desc: "We map your AI usage, identify quick wins for automation, and flag any security or privacy risks in your current setup." },
              { step: "03", title: "Setup & Protection", desc: "We configure your tools, automate your workflows, train your team, and put the right security policies in place." },
              { step: "04", title: "Ongoing Support", desc: "AI evolves fast. We keep your tools updated, monitor for new threats, and advise as your AI use grows." },
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
          <p className="text-slate-400 mb-5 text-sm">Free AI consultation — whether you&apos;re just starting out or securing an existing deployment.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all"
          >
            Book Your Free AI Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
