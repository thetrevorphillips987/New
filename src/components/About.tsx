import { ReactNode } from "react";
import { motion } from "motion/react";
import { BookOpen, Target, Eye, Sparkles, Trophy, Star } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function About() {
  const timelineData: TimelineItem[] = [
    {
      year: "Phase 1: Foundations",
      title: "The Genesis",
      description: "Founded by legendary market coaches with a singular goal: to replace theoretical book learning with pure live-market institutional tape reading.",
      icon: <Sparkles className="w-4 h-4 text-gold-500" />,
    },
    {
      year: "Phase 2: Acceleration",
      title: "Live Trading Desk Launch",
      description: "Pioneered the 'Live Trading Floor' concept. We gave students direct access to institutional screens, capital guidelines, and active session coaching.",
      icon: <Trophy className="w-4 h-4 text-gold-500" />,
    },
    {
      year: "Phase 3: Scale",
      title: "Certified Mastery Status",
      description: "Crossed 1,000+ Elite Alumni, earning the ISO 9001:2015 certification for premium financial coaching quality and world-class curricula.",
      icon: <Star className="w-4 h-4 text-gold-500" />,
    },
    {
      year: "Phase 4: Future",
      title: "The Atomic Elite Ecosystem",
      description: "Expanding our advanced options trading lab, risk management modules, and prop desk simulated pipelines to empower our growing community.",
      icon: <BookOpen className="w-4 h-4 text-gold-500" />,
    },
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 px-6 overflow-hidden bg-rich-black bg-premium-dots"
    >
      <div className="wood-overlay" />

      {/* Radiant Glow Lights */}
      <div className="absolute top-10 right-10 w-96 h-96 gold-light-radial animate-ambient-slow-2 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 walnut-light-radial animate-ambient-slow-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-500 font-bold uppercase">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Demolishing Mediocrity. <span className="text-gold-gradient">Forging Elite Traders.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Introduction Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
            id="about-intro-text"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              We don't teach standard textbook patterns. We teach the psychological and mathematical truth of the markets.
            </h3>
            <p className="text-sm md:text-base text-walnut-200 leading-relaxed">
              At **Atomic Trade Classes**, we believe 90% of retail traders fail because they use outdated retail indicators (RSI, MACD) on stale data. We focus on **Institutional Order Flow**, **Professional Volume Spread Analysis**, **Advanced Hedging Strategies**, and **Pure Price Action Tactics**.
            </p>
            <p className="text-sm md:text-base text-walnut-200 leading-relaxed">
              Founded by trading veterans with collective decades of active prop desk trading experience, we provide a structured learning ecosystem. No promises of overnight wealth—only rigorous, elite mentorship that equips you to pull consistent wealth from the financial markets.
            </p>
          </motion.div>

          {/* Mission and Vision cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
            id="about-intro-cards"
          >
            {/* Mission Card */}
            <div className="p-6 rounded-2xl border border-gold-500/10 bg-walnut-950/40 backdrop-blur-sm shadow-xl hover:border-gold-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">Our Mission</h4>
                  <p className="text-xs text-walnut-300 leading-relaxed">
                    To democratize institutional-grade market knowledge and instil strict risk management discipline, transforming retail traders into consistently profitable trading assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-6 rounded-2xl border border-gold-500/10 bg-walnut-950/40 backdrop-blur-sm shadow-xl hover:border-gold-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">Our Vision</h4>
                  <p className="text-xs text-walnut-300 leading-relaxed">
                    To be the global gold-standard of trading institutes, recognized for absolute integrity, rigorous clinical accuracy, and high-quality practical market instruction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Vertical Timeline Section */}
        <div className="relative mt-16">
          <div className="text-center mb-12">
            <h3 className="text-lg font-mono tracking-widest text-gold-400 uppercase">
              THE ACADEMY ROADMAP
            </h3>
            <p className="text-xs text-walnut-300 mt-1">Our history of setting benchmark educational standards</p>
          </div>

          <div className="relative max-w-4xl mx-auto" id="about-timeline">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-500/50 via-gold-500/10 to-transparent transform md:-translate-x-1/2" />

            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-walnut-950 border border-gold-500 flex items-center justify-center transform -translate-x-[15px] md:-translate-x-4 z-20 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    {item.icon}
                  </div>

                  {/* Spacer for vertical align desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline content card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 rounded-2xl border border-gold-500/10 bg-walnut-950/30 backdrop-blur-sm shadow-xl hover:border-gold-500/20 hover:bg-walnut-950/40 transition-all duration-300">
                      <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-wider block mb-1">
                        {item.year}
                      </span>
                      <h4 className="font-display font-bold text-lg text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-walnut-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
