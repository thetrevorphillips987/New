import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Tv, 
  Layers, 
  LifeBuoy, 
  ShieldCheck, 
  CheckCircle2, 
  LineChart, 
  Briefcase 
} from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function WhyChooseUs() {
  const features: FeatureCard[] = [
    {
      title: "Expert Mentors",
      description: "Learn from active market operators who trade live capital with verified, audits-backed track records. We do not hire paper instructors.",
      icon: <Users className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Live Trading Sessions",
      description: "Step into the hotseat. Trade volatile stock earnings, option expires, and high-stakes futures sessions live alongside your coaches.",
      icon: <Tv className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Practical Learning",
      description: "Our training is 100% applied. Analyze backtested structures, trade execution logs, live tape speeds, and custom simulators.",
      icon: <Layers className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Lifetime Guidance",
      description: "Admissions grant lifetime entry to our exclusive Telegram forums, weekend market reviews, and updated advanced video directories.",
      icon: <LifeBuoy className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Risk Management",
      description: "We mandate strict position sizing, risk-of-ruin mathematics, and emotional journaling. Survival is the precursor to mastery.",
      icon: <ShieldCheck className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Beginner Friendly",
      description: "No financial background required. We build your foundations from elementary candlestick definitions up to complex market mechanics.",
      icon: <CheckCircle2 className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Advanced Strategies",
      description: "Unlock institutional execution keys: Order Blocks, Liquidity Sweeps, Wyckoff accumulation structures, and Volatility Arbitrage.",
      icon: <LineChart className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Career Support",
      description: "Top-performing alumni earn fast-track letters of recommendation to prestigious boutique firms or simulated prop capital channels.",
      icon: <Briefcase className="w-5 h-5 text-gold-500" />,
    },
  ];

  return (
    <section 
      id="why-us" 
      className="relative py-24 px-6 overflow-hidden bg-jet bg-premium-grid"
    >
      <div className="wood-overlay" />

      {/* Radiant Glow Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gold-light-radial animate-ambient-slow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 walnut-light-radial animate-ambient-slow-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-500 font-bold uppercase">
            WHY ATOMIC
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            An Unfair Advantage in a <span className="text-gold-gradient">Ruthless Game.</span>
          </h2>
          <p className="text-xs sm:text-sm text-walnut-300 max-w-xl mx-auto leading-relaxed">
            While others trade retail indicators, our students analyze market microstructure, liquidity positioning, and professional order book flows.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Features Bento Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
          id="why-choose-us-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative p-6 rounded-2xl border border-gold-500/10 bg-walnut-950/40 backdrop-blur-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.08)] hover:-translate-y-1.5"
            >
              {/* Shimmer background on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div>
                {/* Premium Icon Ring */}
                <div className="w-12 h-12 rounded-xl bg-walnut-950 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:border-gold-500/50 group-hover:bg-walnut-900 transition-all duration-300">
                  {feature.icon}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight group-hover:text-gold-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-walnut-300 leading-relaxed font-sans mb-4">
                  {feature.description}
                </p>
              </div>

              {/* Decorative line indicator */}
              <div className="w-8 h-[2px] bg-gold-500/30 group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
