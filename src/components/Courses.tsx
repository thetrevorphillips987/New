import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, BookOpen, Sparkles, ChevronRight, Check } from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: "foundations" | "derivatives" | "advanced";
  duration: string;
  fees: string;
  originalFees: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface CoursesProps {
  onSelectCourse: (courseName: string) => void;
}

export default function Courses({ onSelectCourse }: CoursesProps) {
  const [filter, setFilter] = useState<"all" | "foundations" | "derivatives" | "advanced">("all");

  const courses: Course[] = [
    {
      id: "beginner-foundations",
      title: "Beginner Trading Foundation",
      category: "foundations",
      duration: "4 Weeks",
      fees: "₹14,999",
      originalFees: "₹24,999",
      description: "Build robust foundations. Learn to read clean candlestick movements, comprehend market participant profiles, and execute error-free brokerage entries.",
      features: [
        "Elementary Candlestick Anatomy",
        "Market Structure & Phase Theory",
        "Broker Interface & Execution Best-Practices",
        "Core Support & Resistance Maps",
        "Live Market Simulated Drills",
      ],
    },
    {
      id: "intermediate-pro",
      title: "Intermediate Price Action Mastery",
      category: "foundations",
      duration: "6 Weeks",
      fees: "₹24,999",
      originalFees: "₹39,999",
      description: "Transition from basic chart patterns to fluid tape speed reading, high-accuracy multi-timeframe alignment, and professional volume spread analysis.",
      features: [
        "Volume Spread Analysis (VSA)",
        "Multi-Timeframe Fractal Alignment",
        "False Breakout Detection Mechanics",
        "Basic Position Sizing & Drawdown Models",
        "Live Market Mentoring (2 Sessions/Week)",
      ],
      isPopular: true,
    },
    {
      id: "advanced-institutional",
      title: "Advanced Institutional Trading",
      category: "advanced",
      duration: "8 Weeks",
      fees: "₹39,999",
      originalFees: "₹59,999",
      description: "Master real market microstructure. Analyze order flow imbalance, market profile distributions, liquidity sweeps, and trade alongside proprietary desk guidelines.",
      features: [
        "Order Flow Imbalances (Footprint Charts)",
        "Market & Volume Profile Distributions",
        "Smart Money Concepts (BOS / CHoCH)",
        "Liquidity Sweeps & Stop Hunt Maps",
        "Co-Trading with Senior Prop Traders",
      ],
    },
    {
      id: "options-specialist",
      title: "Elite Options Trading & Hedging",
      category: "derivatives",
      duration: "6 Weeks",
      fees: "₹29,999",
      originalFees: "₹44,999",
      description: "Harness Option Greeks, implied volatility trading matrices, and design risk-defined multi-leg hedging spreads that profit in any volatile direction.",
      features: [
        "Option Greeks Integration (Delta, Theta, Vega)",
        "Implied Volatility (IV) Skew Arbitrage",
        "Multi-Leg Spreads (Iron Condors, Calendars)",
        "Dynamic Delta Hedging Real-Time Adjustment",
        "Weekly Option Expiry Live Trading",
      ],
    },
    {
      id: "futures-leverage",
      title: "Futures Momentum & Leverage Strategy",
      category: "derivatives",
      duration: "6 Weeks",
      fees: "₹29,999",
      originalFees: "₹44,999",
      description: "Optimize margins, decrypt live open interest changes, and capture aggressive intra-day trends inside high-leverage index and stock futures.",
      features: [
        "Open Interest (OI) & CoC Interpretation",
        "Leverage Optimization & Margin Buffering",
        "Futures Price vs. Spot Arbitrage",
        "VWAP Breakout Momentum Setups",
        "Strict Volatility Drawdown Safeguards",
      ],
    },
    {
      id: "technical-analytics",
      title: "Modern Technical Analysis Blueprint",
      category: "foundations",
      duration: "4 Weeks",
      fees: "₹19,999",
      originalFees: "₹29,999",
      description: "Construct modern mathematical trend lines, use non-lagging indicators, and develop rule-based setups that remove emotional interference.",
      features: [
        "Fibonacci Expansions & Retracement Zones",
        "Non-Lagging Algorithmic Indicators",
        "Mathematical Breakout Authenticity Metrics",
        "Rule-Based Trade Filter System",
        "Backtesting Methodology & Performance Audit",
      ],
    },
    {
      id: "price-action-pure",
      title: "Pure Price Action Tactics",
      category: "advanced",
      duration: "6 Weeks",
      fees: "₹24,999",
      originalFees: "₹39,999",
      description: "Shed all indicators. Read pure price structures, wick absorption nodes, and master the speed of execution based on raw price momentum alone.",
      features: [
        "Naked Chart Price Reading Protocol",
        "Wick Absorption & Block Rejection Maps",
        "Order Blocks & Inefficiency FVG Fills",
        "High-Velocity Intra-Day Entry Triggers",
        "Real-Time Bar-by-Bar Trend Analysis",
      ],
    },
    {
      id: "swing-positional",
      title: "Strategic Swing & Sector Rotation",
      category: "advanced",
      duration: "4 Weeks",
      fees: "₹19,999",
      originalFees: "₹29,999",
      description: "Identify macro trend shifts, track institutional sector rotation patterns, and build a stress-free positional trading catalog with outstanding risk-reward ratios.",
      features: [
        "Macro Market Sentiment Filters",
        "Institutional Sector Rotation Tracking",
        "Earnings Season Catalytic Setups",
        "Positional Hedge Allocation Formulas",
        "Weekend Watchlist Construction System",
      ],
    },
  ];

  const filteredCourses = filter === "all" ? courses : courses.filter((c) => c.category === filter);

  const handleEnrollClick = (courseTitle: string) => {
    onSelectCourse(courseTitle);
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
      id="courses" 
      className="relative py-24 px-6 overflow-hidden bg-rich-black bg-premium-dots"
    >
      <div className="wood-overlay" />

      {/* Subtle lighting filters */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 gold-light-radial animate-ambient-slow-2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 walnut-light-radial animate-ambient-slow-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-500 font-bold uppercase">
            TRADING COURSES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Curated Curricula. <span className="text-gold-gradient">Institutional Standards.</span>
          </h2>
          <p className="text-xs sm:text-sm text-walnut-300 max-w-2xl mx-auto leading-relaxed">
            Select an educational track designed for your current level. Learn from absolute ground zero up to elite algorithmic and order flow tape-reading execution.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16" id="courses-filter-tabs">
          {[
            { id: "all", label: "All Programs" },
            { id: "foundations", label: "Foundations" },
            { id: "derivatives", label: "Derivatives (F&O)" },
            { id: "advanced", label: "Advanced Tactics" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? "bg-gold-gradient text-rich-black border-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                  : "border-gold-500/10 text-walnut-200 hover:text-white hover:border-gold-500/30 bg-walnut-950/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courses-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-3xl p-8 border bg-walnut-950/40 backdrop-blur-md flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                  course.isPopular 
                    ? "border-gold-500 shadow-[0_0_35px_rgba(212,175,55,0.12)]" 
                    : "border-gold-500/10 hover:border-gold-500/30"
                }`}
              >
                {/* Popular Ribbon Accent */}
                {course.isPopular && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-gradient text-[9px] font-mono font-bold tracking-widest text-rich-black uppercase shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Enrolled</span>
                  </div>
                )}

                <div>
                  {/* Category & Duration Metadata */}
                  <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase mb-4 text-gold-400">
                    <span className="px-2.5 py-1 rounded-md bg-walnut-950/60 border border-gold-500/10">
                      {course.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-500" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 tracking-tight leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-xs text-walnut-300 font-sans leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="w-full h-[1px] bg-white/5 mb-6" />

                  {/* Pricing Matrix */}
                  <div className="flex items-baseline gap-2.5 mb-6">
                    <span className="text-3xl font-display font-extrabold text-gold-400">
                      {course.fees}
                    </span>
                    <span className="text-xs text-walnut-400 line-through font-mono">
                      {course.originalFees}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold uppercase">
                      Save {Math.round((1 - parseInt(course.fees.replace(/\D/g, '')) / parseInt(course.originalFees.replace(/\D/g, ''))) * 100)}%
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
                      Curriculum Highlights
                    </h4>
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-walnut-200">
                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleEnrollClick(course.title)}
                  className={`group relative w-full py-4 rounded-xl font-semibold tracking-wider text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden cursor-pointer ${
                    course.isPopular
                      ? "bg-gold-gradient text-rich-black shadow-lg hover:shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:scale-[1.02]"
                      : "border border-gold-500/20 text-white bg-walnut-950/20 hover:bg-gold-500/10 hover:border-gold-500/40 hover:scale-[1.02]"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Inquire for Seats</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
