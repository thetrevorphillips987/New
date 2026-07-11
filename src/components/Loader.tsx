import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, Award, ShieldCheck } from "lucide-react";

export default function Loader({ onComplete }: { onComplete: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Securing connection...");

  useEffect(() => {
    const textInterval = setInterval(() => {
      const texts = [
        "Analyzing Market Trends...",
        "Calibrating Mathematical Models...",
        "Securing Golden Ledger...",
        "Loading Executive Suite...",
      ];
      setLoadingText((prev) => {
        const index = texts.indexOf(prev);
        return texts[(index + 1) % texts.length];
      });
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 80);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loader-screen"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.05,
          filter: "blur(10px)",
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-jet bg-premium-grid"
      >
        {/* Subtle radial lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gold-light-radial animate-ambient-slow-1 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 walnut-light-radial animate-ambient-slow-2 pointer-events-none" />
        
        {/* Golden particle noise simulation */}
        <div className="wood-overlay" />

        <div className="relative flex flex-col items-center max-w-md px-6 text-center">
          
          {/* Animated luxury frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-8 p-6 rounded-full border border-gold-500/20 bg-walnut-950/80 shadow-2xl flex items-center justify-center overflow-hidden"
          >
            {/* Gloss shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-500/10 to-transparent rotate-45 transform translate-y-[-100%] animate-[shimmer_3s_infinite]" />
            
            {/* Visual logo concept: Minimal luxury 'A' blended with an upward trading line */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-gold-500 stroke-[1.5]" />
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "60%" }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                className="absolute w-1 bg-gradient-to-t from-gold-600 to-gold-300 right-5 bottom-4 rounded-full" 
              />
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "40%" }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                className="absolute w-1 bg-gradient-to-t from-gold-600 to-gold-400 left-5 bottom-6 rounded-full" 
              />
            </div>
          </motion.div>

          {/* Golden animated brand heading */}
          <motion.h1
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.05em", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl font-display font-semibold tracking-wider text-gold-gradient mb-2"
          >
            ATOMIC TRADE CLASSES
          </motion.h1>

          <p className="text-xs tracking-widest text-walnut-300 font-mono uppercase mb-8">
            The Pinnacle of Financial Mastery
          </p>

          {/* Pre-formatted Candlestick Animation inside Loader */}
          <div className="flex justify-center items-end gap-1.5 h-10 mb-8" id="loader-candlesticks">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center justify-end h-full">
                <motion.div 
                  className="w-[1px] bg-gold-500/50"
                  animate={{ height: [12, 32, 12][i % 3] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15 }}
                />
                <motion.div 
                  className={`w-2.5 rounded-sm ${i % 2 === 0 ? "bg-gold-500" : "bg-walnut-500"}`}
                  animate={{ height: [8, 18, 8][i % 3] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15 }}
                />
              </div>
            ))}
          </div>

          {/* Progress bar and text */}
          <div className="w-64 relative" id="loader-progress-container">
            <div className="flex justify-between text-xs text-walnut-200 font-mono mb-1">
              <span className="animate-pulse">{loadingText}</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            
            {/* Outer golden trace track */}
            <div className="h-[3px] w-full bg-walnut-950 rounded-full overflow-hidden border border-gold-500/5">
              <motion.div
                className="h-full bg-gradient-to-r from-walnut-600 via-gold-500 to-gold-200"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8 text-[10px] text-walnut-400 font-mono">
            <span className="flex items-center gap-1"><Award className="w-3 h-3 text-gold-500" /> ISO CERTIFIED</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-gold-500" /> INSTITUTIONAL CALIBER</span>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
