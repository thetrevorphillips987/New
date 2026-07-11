import { motion } from "motion/react";
import { Award, Briefcase, TrendingUp, Linkedin, Twitter, Sparkles } from "lucide-react";

interface Mentor {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
  bio: string;
  imageUrl: string;
  linkedin: string;
  twitter: string;
}

export default function Faculty() {
  const mentors: Mentor[] = [
    {
      name: "Hitesh Selvani",
      role: "Chief Trading Coach & Founder",
      experience: "15+ Years Market Experience",
      expertise: ["Institutional Price Action", "Mathematical Risk Management", "Order Flow Dynamics"],
      bio: "Pioneer in retail trading coaching in India. Hitesh has mentored over 10,000 students, specialized in live derivatives execution, and designed the institute's proprietary trading setups.",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Vikramaditya Singh",
      role: "Head of Futures & Tape Speed Reading",
      experience: "10+ Years Trading Index Derivatives",
      expertise: ["Volume Spread Analysis (VSA)", "Wyckoff Structural Accumulation", "High-Velocity Intraday Momentum"],
      bio: "A legendary momentum trader renowned for his hyper-accurate Index Futures execution. Vikramaditya specializes in decoding institutional footprints on high-volume session expirations.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Ananya Deshmukh",
      role: "Director of Risk & Option Greeks",
      experience: "8+ Years Derivatives Strategist",
      expertise: ["Greek Hedging Matrix", "Multi-Leg Spread Arbitrage", "Behavioral & Psychological Audits"],
      bio: "Ex-investment bank risk assessor. Ananya designs defensive option blueprints that focus on mathematical survival, shielding portfolios from unpredictable black swan swings.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section 
      id="faculty" 
      className="relative py-24 px-6 overflow-hidden bg-jet bg-premium-grid"
    >
      <div className="wood-overlay" />

      {/* Floating lights */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 gold-light-radial animate-ambient-slow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 walnut-light-radial animate-ambient-slow-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-500 font-bold uppercase">
            MEET THE MENTORS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Elite Operators. <span className="text-gold-gradient">No Paper Theorists.</span>
          </h2>
          <p className="text-xs sm:text-sm text-walnut-300 max-w-xl mx-auto leading-relaxed">
            Our coaches are active professional market participants. Learn to decode live candles alongside educators who risk actual proprietary capital daily.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Mentors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" id="faculty-cards-grid">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-gold-500/10 bg-walnut-950/40 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.1)] hover:-translate-y-2"
            >
              
              {/* Card Top Block with Image & Luxury border ring */}
              <div>
                <div className="relative h-72 w-full overflow-hidden" id={`faculty-img-${index}`}>
                  
                  {/* Wood background overlay under photo */}
                  <div className="absolute inset-0 bg-walnut-950" />
                  
                  {/* Main Mentor Image with premium zoom effect and grayscale filters */}
                  <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* High luxury linear gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut-950 via-walnut-950/20 to-transparent" />
                  
                  {/* Experience Badge on Photo overlay */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gold-500/20 bg-walnut-950/80 backdrop-blur-md">
                    <Briefcase className="w-3.5 h-3.5 text-gold-500" />
                    <span className="text-[10px] font-mono tracking-wider font-bold text-white uppercase">{mentor.experience}</span>
                  </div>

                  <div className="absolute top-4 right-4 inline-flex items-center justify-center p-2 rounded-lg border border-gold-500/10 bg-walnut-950/60 backdrop-blur-md text-gold-500">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                    {mentor.name}
                  </h3>
                  <span className="text-xs font-mono tracking-wider text-walnut-300 font-semibold block mb-4">
                    {mentor.role}
                  </span>
                  
                  <p className="text-xs text-walnut-200 leading-relaxed font-sans mb-6">
                    {mentor.bio}
                  </p>

                  <div className="w-full h-[1px] bg-white/5 mb-5" />

                  {/* Expertise Specialties Chips */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
                      Trading Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {mentor.expertise.map((exp, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 rounded-md bg-walnut-950/50 border border-gold-500/5 text-[9px] font-mono text-walnut-200"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Social Hooks */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-walnut-400">CONNECT WITH MENTOR</span>
                <div className="flex items-center gap-2">
                  <a 
                    href={mentor.linkedin}
                    className="p-2 rounded-lg border border-gold-500/10 hover:border-gold-500/40 hover:bg-gold-500/10 text-gold-500 hover:text-white transition-all"
                    aria-label={`${mentor.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={mentor.twitter}
                    className="p-2 rounded-lg border border-gold-500/10 hover:border-gold-500/40 hover:bg-gold-500/10 text-gold-500 hover:text-white transition-all"
                    aria-label={`${mentor.name}'s Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
