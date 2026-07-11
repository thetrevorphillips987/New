import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Star, Quote, Award, Sparkles, TrendingUp } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="font-display font-extrabold text-4xl md:text-5xl text-gold-gradient">
      {count}
      {suffix}
    </span>
  );
}

interface Testimonial {
  name: string;
  location: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export default function SuccessMetrics() {
  const testimonials: Testimonial[] = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      role: "Full-Time Options Trader",
      text: "I wasted 3 years trading retail breakout indicators. Joining Atomic Classes completely reprogrammed my brain. Reading Footprint charts, order block depth, and order book speed gave me the edge I desperately needed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Pooja Sharma",
      location: "New Delhi",
      role: "IT Professional & Part-Time Swing Trader",
      text: "As a working professional, I couldn't monitor screens continuously. The Swing Trading blueprints and structured sector watchlists empowered me to manage a ₹15 Lakh book profitably with less than 2 hours of daily review.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      role: "Alumni / Derivatives Specialist",
      text: "The Live Trading Room session alone is worth 10x the course fee. Sitting live on Zoom watching Harshvardhan scale contracts on heavy expiry volatility taught me how to handle psychological stress like a professional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const counters = [
    { end: 1000, suffix: "+", label: "Students Trained" },
    { end: 95, suffix: "%", label: "Success Rating" },
    { end: 500, suffix: "+", label: "Live Trading Sessions" },
    { end: 10, suffix: "+", label: "Expert Mentors" },
  ];

  return (
    <section 
      id="testimonials" 
      className="relative py-24 px-6 overflow-hidden bg-rich-black bg-premium-dots"
    >
      <div className="wood-overlay" />

      {/* Floating Light Accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 gold-light-radial animate-ambient-slow-2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 walnut-light-radial animate-ambient-slow-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-500 font-bold uppercase">
            STUDENT SUCCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Proof in the <span className="text-gold-gradient">Market Tape.</span>
          </h2>
          <p className="text-xs sm:text-sm text-walnut-300 max-w-xl mx-auto leading-relaxed">
            We measure our success purely by the independence and consistent profitability of our student ledger books. Read verified reviews from our elite alumni.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Counter Stats Grid */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 p-8 rounded-3xl border border-gold-500/10 bg-walnut-950/20 backdrop-blur-sm" 
          id="success-counters"
        >
          {counters.map((item, i) => (
            <div key={item.label} className={`flex flex-col items-center text-center p-4 ${i > 0 ? "border-l border-white/5" : ""}`}>
              <div className="mb-2 p-2 rounded-xl bg-gold-500/5 border border-gold-500/10 text-gold-500 flex items-center justify-center">
                {i === 0 && <Award className="w-4 h-4" />}
                {i === 1 && <TrendingUp className="w-4 h-4 animate-bounce" />}
                {i === 2 && <Sparkles className="w-4 h-4" />}
                {i === 3 && <Quote className="w-4 h-4" />}
              </div>
              <Counter end={item.end} suffix={item.suffix} />
              <span className="text-[10px] md:text-xs font-mono tracking-wider text-walnut-300 uppercase mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl border border-gold-500/10 bg-walnut-950/40 backdrop-blur-md flex flex-col justify-between transition-all duration-500 hover:border-gold-500/20 hover:bg-walnut-950/60"
            >
              {/* Star Ratings */}
              <div>
                <div className="flex items-center gap-1 mb-6 text-gold-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500" />
                  ))}
                </div>

                <Quote className="absolute right-8 top-8 w-12 h-12 text-gold-500/5 pointer-events-none" />

                <p className="text-xs sm:text-sm text-walnut-100 leading-relaxed font-sans mb-8 italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full border border-gold-500/20 overflow-hidden shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-gold-500 uppercase mt-0.5">
                    {testimonial.role} • {testimonial.location}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
