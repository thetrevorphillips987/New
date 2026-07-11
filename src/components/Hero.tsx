import { MouseEvent } from "react";
import { motion } from "motion/react";
import { TrendingUp, Play, ChevronRight, Activity, Globe, DollarSign } from "lucide-react";

export default function Hero() {
  
  const scrollToContact = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-jet bg-premium-grid"
    >
      {/* Wood textured grain layer */}
      <div className="wood-overlay" />

      {/* Floating Ambient Lights */}
      <div className="absolute top-20 left-1/3 w-96 h-96 gold-light-radial animate-ambient-slow-1 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 walnut-light-radial animate-ambient-slow-2 pointer-events-none" />
      
      {/* Elegant Golden Particle Dust */}
      <div className="absolute inset-0 bg-premium-dots pointer-events-none" />

      {/* Floating Stock Market Indicators / Candlesticks in BG */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-40">
        
        {/* Floating green hammer candlestick */}
        <motion.div 
          initial={{ x: "10%", y: "30%", opacity: 0.1, rotate: 5 }}
          animate={{ y: ["30%", "28%", "30%"], rotate: [5, 8, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden md:flex flex-col items-center gap-0.5"
          style={{ left: "5%", top: "25%" }}
        >
          <div className="w-[1.5px] h-20 bg-emerald-500/60" />
          <div className="w-4 h-12 bg-emerald-500/80 rounded-sm border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center text-[8px] font-mono font-bold text-emerald-950">BUY</div>
        </motion.div>

        {/* Floating golden particle indicator line */}
        <svg className="absolute w-full h-[50%] top-1/3 left-0 stroke-gold-500/10 fill-none stroke-[1.5] hidden md:block">
          <path d="M 0 150 Q 150 50, 300 120 T 600 80 T 900 180 T 1200 60 T 1500 120 T 1920 70" />
        </svg>

        {/* Floating red bearish candlestick */}
        <motion.div 
          initial={{ x: "80%", y: "45%", opacity: 0.1, rotate: -5 }}
          animate={{ y: ["45%", "48%", "45%"], rotate: [-5, -8, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute hidden md:flex flex-col items-center gap-0.5"
          style={{ right: "8%", top: "40%" }}
        >
          <div className="w-4 h-16 bg-red-500/80 rounded-sm border border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
          <div className="w-[1.5px] h-24 bg-red-500/60" />
        </motion.div>

        {/* Subtle geometric grid beam */}
        <div className="absolute right-1/4 top-10 w-[1px] h-96 bg-gradient-to-b from-gold-500/20 via-transparent to-transparent" />
        <div className="absolute left-1/4 bottom-10 w-[1px] h-96 bg-gradient-to-t from-walnut-500/20 via-transparent to-transparent" />
      </div>

      {/* Main Content Suite */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 text-left">
        
        {/* Left Column: Premium Pitch */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          
          {/* Gold Standard Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#D4AF37] font-mono">
              The Gold Standard in Trading
            </span>
          </motion.div>

          {/* Main Typography Header */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.1] mb-6 text-white"
            id="hero-heading"
          >
            Master the <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8c6d1f]">Markets.</span><br/>
            Build Wealth.
          </motion.h1>

          {/* Professional Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-white/50 max-w-md leading-relaxed mb-10"
            id="hero-subheading"
          >
            Join the most premium trading academy designed for aspiring professionals. High-performance strategies taught by institutional grade mentors.
          </motion.p>

          {/* Luxurious Button Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            id="hero-ctas"
          >
            {/* Main Gold Action */}
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto group relative px-10 py-5 bg-[#D4AF37] text-black font-bold text-sm tracking-wider uppercase rounded-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>ADMISSIONS OPEN</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Secondary Action */}
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto group px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>BOOK A DEMO</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Interactive Live Trading View Simulator */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-16 lg:mt-0 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-[480px] h-[400px] border border-white/10 bg-[#121212]/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl flex flex-col"
            id="live-trading-view"
          >
            <div className="p-4 border-b border-white/5 bg-[#1a1a1a] flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 font-mono">Live Trading View</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
            </div>

            {/* Interactive Graph Plot Area */}
            <div className="flex-1 p-8 relative flex flex-col justify-end">
              <div className="flex justify-between items-end h-[180px] gap-3">
                <div className="w-6 bg-red-500/20 border-t-2 border-red-500 h-[60%] flex flex-col items-center">
                  <div className="w-[2px] h-full bg-red-500/40 -mt-2"></div>
                </div>
                <div className="w-6 bg-green-500/20 border-t-2 border-green-500 h-[80%] flex flex-col items-center">
                  <div className="w-[2px] h-full bg-green-500/40 -mt-3"></div>
                </div>
                <div className="w-6 bg-green-500/20 border-t-2 border-green-500 h-[90%] flex flex-col items-center">
                  <div className="w-[2px] h-full bg-green-500/40 -mt-1"></div>
                </div>
                <div className="w-6 bg-red-500/20 border-t-2 border-red-500 h-[40%] flex flex-col items-center">
                  <div className="w-[2px] h-full bg-red-500/40 -mt-2.5"></div>
                </div>
                <div className="w-6 bg-[#D4AF37]/20 border-t-2 border-[#D4AF37] h-[100%] flex flex-col items-center animate-pulse">
                  <div className="w-[2px] h-full bg-[#D4AF37]/40 -mt-4"></div>
                </div>
              </div>

              {/* Float pricing data */}
              <div className="absolute top-12 right-12 text-right">
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-display">$14,290</div>
                <div className="text-[#D4AF37] text-xs font-bold font-mono mt-1">+ 14.2% PROFIT MARGIN</div>
              </div>
            </div>
            
            {/* Elegant bottom gradient accent line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
          </motion.div>

          {/* Absolute floating success badge badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -top-10 -right-4 bg-gradient-to-br from-[#3d2b1f] to-[#121212] p-6 border border-[#D4AF37]/30 rounded-lg shadow-2xl backdrop-blur-xl z-20"
          >
            <div className="text-center">
              <div className="text-[#D4AF37] text-3xl font-bold">95%</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1 font-mono">Success Rate</div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Elegant bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-jet to-transparent pointer-events-none" />
    </section>
  );
}
