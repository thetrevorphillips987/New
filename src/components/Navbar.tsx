import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, TrendingUp, PhoneCall, ChevronRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Courses", href: "#courses" },
    { label: "Faculty", href: "#faculty" },
    { label: "Gallery", href: "#gallery" },
    { label: "Fees", href: "#fees" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const targetId = item.href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(targetId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-jet/80 backdrop-blur-md border-b border-gold-500/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand Group */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3.5 group"
            id="nav-logo"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#8c6d1f] rounded flex items-center justify-center rotate-45 border border-white/20 transition-all duration-500 group-hover:border-gold-300">
              <div className="-rotate-45 font-display font-black text-black text-lg">A</div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-tighter text-base text-[#D4AF37] transition-colors group-hover:text-white uppercase">
                ATOMIC <span className="text-white font-light opacity-60">TRADE</span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-gold-500/80 font-semibold uppercase">
                CLASSES
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Cluster */}
          <div className="hidden lg:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/5" id="nav-links-desktop">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive 
                      ? "text-[#D4AF37]" 
                      : "text-white/70 hover:text-[#D4AF37]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Golden CTA Inquiry Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20Hitesh%20Selvani%2C%20I%20want%20to%20join%20Atomic%20Trade%20Classes"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all duration-300"
              id="nav-cta-desktop"
            >
              <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-walnut-950 border border-gold-500/10 text-gold-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all"
            aria-label="Toggle navigation menu"
            id="nav-hamburger-btn"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Glassmorphic Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-30 p-6 bg-jet/95 backdrop-blur-lg border-b border-gold-500/10 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto"
            id="nav-links-mobile"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-gold-500/10 border border-gold-500/20 text-gold-400 pl-5"
                        : "bg-walnut-950/20 border border-transparent text-walnut-200 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-gold-500 translate-x-1" : "text-walnut-400 opacity-0 group-hover:opacity-100"}`} />
                  </a>
                );
              })}
              
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-4 flex items-center justify-center gap-2 p-4 rounded-xl text-center bg-gold-gradient text-rich-black font-semibold tracking-wider text-xs uppercase shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>INQUIRE NOW VIA WHATSAPP</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
