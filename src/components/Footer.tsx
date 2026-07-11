import { MouseEvent } from "react";
import { TrendingUp, ArrowUp, Mail, Phone, MapPin, ChevronRight, Award } from "lucide-react";

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Courses", href: "#courses" },
    { label: "Faculty", href: "#faculty" },
    { label: "Gallery", href: "#gallery" },
    { label: "Fees", href: "#fees" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Admissions Desk", href: "#contact" },
  ];

  return (
    <footer 
      className="relative bg-jet border-t border-gold-500/10 pt-20 pb-8 px-6 overflow-hidden"
      id="main-footer"
    >
      <div className="wood-overlay" />

      {/* Floating Light rays */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 gold-light-radial animate-ambient-slow-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16" id="footer-links-grid">
          
          {/* Col 1: Brand details */}
          <div className="md:col-span-4 space-y-6">
            <a 
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-walnut-950 border border-gold-500/20 flex items-center justify-center relative overflow-hidden">
                <TrendingUp className="w-5 h-5 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-tight text-md text-white">
                  ATOMIC
                </span>
                <span className="font-mono text-[9px] tracking-widest text-gold-500 font-semibold uppercase">
                  TRADE CLASSES
                </span>
              </div>
            </a>

            <p className="text-xs text-walnut-300 leading-relaxed max-w-sm">
              Atomic Trade Classes is India's most premium trading mentorship institution. We specialize in educating retail traders on institutional-grade price action, mathematical risk models, and live derivatives execution.
            </p>

            <div className="flex items-center gap-2 text-[10px] text-gold-400 font-mono">
              <Award className="w-4 h-4 text-gold-500 shrink-0" />
              <span>ISO 9001:2015 CERTIFIED FINANCIAL COACHING</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
              QUICK SECTIONS
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs text-walnut-200 hover:text-gold-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500/50" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact indices */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
              ADMISSIONS & DIRECTORY
            </h4>
            
            <div className="space-y-4 text-xs text-walnut-200">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold-400 transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:admissions@atomictrade.in" className="hover:text-gold-400 transition-colors">admissions@atomictrade.in</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Sb cafe, ATOMIC TRADES City pride mall, Datta Wadi, Chalisgaon, Maharashtra 424101
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Copyright and Back to Top block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-wider text-walnut-400">
          <div>
            <span>© {new Date().getFullYear()} ATOMIC TRADE CLASSES. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-walnut-400 uppercase">
              The Pinnacle of Trading Mastery
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-walnut-950/80 border border-gold-500/15 text-gold-500 hover:text-white hover:border-gold-500/40 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
              aria-label="Back to top"
              id="footer-back-to-top-btn"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[9px] uppercase font-bold tracking-wider">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
