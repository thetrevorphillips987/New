import { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, Award, Sparkles, BookOpen, ChevronRight, Check } from "lucide-react";

export default function Fees() {
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "pro" | "executive">("pro");

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="fees" 
      className="relative py-24 px-6 overflow-hidden bg-rich-black bg-premium-dots"
    >
      <div className="wood-overlay" />

      {/* Floating Lights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 gold-light-radial animate-ambient-slow-2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 walnut-light-radial animate-ambient-slow-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-500 font-bold uppercase">
            FEES & COMPARISON
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Transparent Investments. <span className="text-gold-gradient">High-Yield Future.</span>
          </h2>
          <p className="text-xs sm:text-sm text-walnut-300 max-w-xl mx-auto leading-relaxed">
            Choose the membership tier that matches your career trajectory. We offer flexible installment plans, corporate scholarships, and zero-interest EMI options.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Comparison Matrix Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" id="fees-comparison-grid">
          
          {/* Tier 1: Standard Foundations */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPlan("standard")}
            className={`cursor-pointer rounded-3xl p-8 border bg-walnut-950/30 backdrop-blur-md flex flex-col justify-between transition-all duration-500 ${
              selectedPlan === "standard" 
                ? "border-gold-500 shadow-[0_0_25px_rgba(212,175,55,0.08)] bg-walnut-950/60" 
                : "border-gold-500/10 hover:border-gold-500/20"
            }`}
          >
            <div>
              <span className="font-mono text-[10px] text-walnut-400 font-bold uppercase tracking-widest block mb-1">MEMBERSHIP</span>
              <h3 className="text-lg font-display font-bold text-white mb-4">Foundations Pass</h3>
              <p className="text-xs text-walnut-300 mb-6 leading-relaxed">
                Ideal for beginners seeking basic visual chart mastery, structural trends, and solid day-trading frameworks.
              </p>
              
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-display font-extrabold text-gold-400">₹14,999</span>
                <span className="text-xs text-walnut-400 font-mono">One-time fee</span>
              </div>

              <div className="w-full h-[1px] bg-white/5 mb-6" />

              <div className="space-y-3.5 mb-8">
                {[
                  "Access to Foundations Lectures",
                  "2 Live Trading Labs / Week",
                  "Classroom & Simulator Exercises",
                  "Basic Candlestick & Volume Modules",
                  "3 Months Telegram Forum Pass",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-xs text-walnut-200">
                    <Check className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full py-3 rounded-xl border border-gold-500/20 text-xs font-semibold text-white tracking-wider uppercase hover:bg-gold-500/10 transition-all duration-300"
            >
              Inquire For Pass
            </button>
          </motion.div>

          {/* Tier 2: Pro Suite (Popular) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPlan("pro")}
            className={`relative cursor-pointer rounded-3xl p-8 border bg-walnut-950/30 backdrop-blur-md flex flex-col justify-between transition-all duration-500 ${
              selectedPlan === "pro" 
                ? "border-gold-500 shadow-[0_0_35px_rgba(212,175,55,0.15)] bg-walnut-950/60" 
                : "border-gold-500/10 hover:border-gold-500/20"
            }`}
          >
            <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-gradient text-[9px] font-mono font-bold text-rich-black uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Recommended</span>
            </div>

            <div>
              <span className="font-mono text-[10px] text-gold-500 font-bold uppercase tracking-widest block mb-1">BEST SELLER</span>
              <h3 className="text-lg font-display font-bold text-white mb-4">Elite Pro Trader</h3>
              <p className="text-xs text-walnut-300 mb-6 leading-relaxed">
                Unlock advanced futures leverage, mathematical Option Greeks, and live-market execution panels.
              </p>
              
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-display font-extrabold text-gold-gradient">₹29,999</span>
                <span className="text-xs text-walnut-400 font-mono">One-time fee</span>
              </div>

              <div className="w-full h-[1px] bg-white/5 mb-6" />

              <div className="space-y-3.5 mb-8">
                {[
                  "All Foundations Lectures",
                  "Advanced Options Greeks & F&O Labs",
                  "4 Live Trading Labs / Week",
                  "Footprint & Market Profile Setup",
                  "Lifetime Academy Directory & Forums",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-xs text-walnut-100">
                    <Check className="w-4 h-4 text-gold-500 shrink-0" />
                    <span className="font-semibold">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full py-4.5 rounded-xl bg-gold-gradient text-rich-black text-xs font-bold tracking-wider uppercase hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:scale-[1.02] transition-all duration-300"
            >
              Secure Seat Now
            </button>
          </motion.div>

          {/* Tier 3: Institutional Executive */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPlan("executive")}
            className={`cursor-pointer rounded-3xl p-8 border bg-walnut-950/30 backdrop-blur-md flex flex-col justify-between transition-all duration-500 ${
              selectedPlan === "executive" 
                ? "border-gold-500 shadow-[0_0_25px_rgba(212,175,55,0.08)] bg-walnut-950/60" 
                : "border-gold-500/10 hover:border-gold-500/20"
            }`}
          >
            <div>
              <span className="font-mono text-[10px] text-walnut-400 font-bold uppercase tracking-widest block mb-1">VIP</span>
              <h3 className="text-lg font-display font-bold text-white mb-4">Executive Mentorship</h3>
              <p className="text-xs text-walnut-300 mb-6 leading-relaxed">
                Direct 1-on-1 account audits, bespoke strategy architecture, and direct fast-track prop channel recommendations.
              </p>
              
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-display font-extrabold text-gold-400">₹49,999</span>
                <span className="text-xs text-walnut-400 font-mono">One-time fee</span>
              </div>

              <div className="w-full h-[1px] bg-white/5 mb-6" />

              <div className="space-y-3.5 mb-8">
                {[
                  "All Elite Pro Features Included",
                  "Direct 1-on-1 Private Desk Audits",
                  "Personal Portfolio Risk Modeling",
                  "Fast-Track Prop Capital Referrals",
                  "Priority Phone Support & Diagnostics",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-xs text-walnut-200">
                    <Check className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full py-3 rounded-xl border border-gold-500/20 text-xs font-semibold text-white tracking-wider uppercase hover:bg-gold-500/10 transition-all duration-300"
            >
              Apply For VIP Seat
            </button>
          </motion.div>

        </div>

        {/* EMI & Scholarship Information Blocks */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-3xl border border-gold-500/10 bg-walnut-950/20 backdrop-blur-sm"
          id="fees-details-extra"
        >
          {/* No Cost EMI Info */}
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-500 shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">No-Cost EMI Options Available</h4>
              <p className="text-xs text-walnut-300 leading-relaxed">
                We've partnered with leading financial facilitators to offer interest-free monthly installment modes starting as low as **₹2,500/month**. Get quick credit approvals in minutes with zero down-payment.
              </p>
            </div>
          </div>

          {/* Scholarship Opportunities */}
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-500 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">Academic & Merit Scholarships</h4>
              <p className="text-xs text-walnut-300 leading-relaxed">
                We value raw intelligence and dedication. Aspiring female traders, college students, and armed forces veterans are eligible for a **flat 10% to 30% scholarship waiver** on admission fees.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
