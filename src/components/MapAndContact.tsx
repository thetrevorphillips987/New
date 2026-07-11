import { Phone, Mail, MapPin, ExternalLink, Navigation, MessageSquare } from "lucide-react";
import InquiryForm from "./InquiryForm";

interface MapAndContactProps {
  selectedCourse: string;
  visitorName: string;
  onVisitorNameChange: (name: string) => void;
}

export default function MapAndContact({ selectedCourse, visitorName, onVisitorNameChange }: MapAndContactProps) {
  
  const handleQuickWhatsAppClick = () => {
    const nameSegment = visitorName.trim() ? visitorName.trim() : "(username)";
    const defaultText = `Hi Hitesh Selvani, I am ${nameSegment}. I want to join Atomic Trade Classes.`;
    const encodedText = encodeURIComponent(defaultText);
    const ownerPhoneNumber = "919876543210";
    window.open(`https://wa.me/${ownerPhoneNumber}?text=${encodedText}`, "_blank");
  };

  const mapEmbedUrl = "https://maps.google.com/maps?q=Sb%20cafe,%20ATOMIC%20TRADES%20City%20pride%20mall,%20Datta%20Wadi,%20Chalisgaon,%20Maharashtra%20424101&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const mapDirectUrl = "https://www.google.com/maps/search/?api=1&query=Sb+cafe,+ATOMIC+TRADES+City+pride+mall,+Datta+Wadi,+Chalisgaon,+Maharashtra+424101";

  return (
    <section 
      id="contact" 
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
            CONNECT WITH US
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Begin Your <span className="text-gold-gradient">Wealth Journey.</span>
          </h2>
          <p className="text-xs sm:text-sm text-walnut-300 max-w-xl mx-auto leading-relaxed">
            Fill out our interactive admissions form, or schedule an in-person meeting at our premium Chalisgaon campus.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-main-grid">
          
          {/* Left Column: Direct info & map */}
          <div className="lg:col-span-6 space-y-8" id="contact-details-col">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Admissions hotline */}
              <div className="p-5 rounded-2xl border border-gold-500/10 bg-walnut-950/20 backdrop-blur-sm flex items-center gap-4 hover:border-gold-500/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-walnut-400 uppercase block">ADMISSIONS CALL</span>
                  <a href="tel:+919876543210" className="text-sm font-semibold text-white hover:text-gold-400 transition-colors">+91 98765 43210</a>
                </div>
              </div>

              {/* Official email */}
              <div className="p-5 rounded-2xl border border-gold-500/10 bg-walnut-950/20 backdrop-blur-sm flex items-center gap-4 hover:border-gold-500/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-walnut-400 uppercase block">OFFICIAL EMAIL</span>
                  <a href="mailto:admissions@atomictrade.in" className="text-sm font-semibold text-white hover:text-gold-400 transition-colors">admissions@atomictrade.in</a>
                </div>
              </div>

            </div>

            {/* Corporate HQ address */}
            <div className="p-6 rounded-2xl border border-gold-500/10 bg-walnut-950/20 backdrop-blur-sm space-y-4 hover:border-gold-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-walnut-400 uppercase block">ACADEMY HEADQUARTERS</span>
                  <h4 className="text-sm font-bold text-white mt-0.5">Atomic Trades Academy</h4>
                  <p className="text-xs text-walnut-300 mt-1 leading-relaxed">
                    Sb cafe, ATOMIC TRADES City pride mall, Datta Wadi, Chalisgaon, Maharashtra 424101
                  </p>
                </div>
              </div>

              {/* Direct Quick WhatsApp Action */}
              <button
                onClick={handleQuickWhatsAppClick}
                className="w-full py-3.5 px-4 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="contact-quick-whatsapp"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-400/20" />
                <span>CHAT INSTANTLY VIA WHATSAPP</span>
              </button>
            </div>

            {/* Responsive Map Embedded Card */}
            <div 
              className="rounded-2xl overflow-hidden border border-gold-500/10 bg-walnut-950/20 backdrop-blur-sm p-2 flex flex-col gap-3"
              id="contact-map-card"
            >
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <iframe
                  title="Atomic Trade Classes Campus Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  id="google-map-iframe"
                />
                
                {/* Simulated Glass Map Dark Shield Overlay */}
                <div className="absolute inset-0 bg-gold-500/5 pointer-events-none mix-blend-color" />
              </div>

              <div className="px-4 pb-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gold-500 font-bold uppercase tracking-wider">NAVIGATE VIA GPS</span>
                  <span className="text-xs text-walnut-200">City pride mall, Chalisgaon</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={mapDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 px-4 rounded-xl border border-gold-500/15 bg-walnut-950/80 text-xs font-semibold text-walnut-200 hover:text-white hover:border-gold-500/30 transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gold-500" />
                    <span>Open in Maps</span>
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=Bandra+Kurla+Complex,+Mumbai`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 px-4 rounded-xl bg-gold-gradient text-rich-black text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Admission Form */}
          <div className="lg:col-span-6" id="contact-form-col">
            <InquiryForm 
              selectedCourse={selectedCourse} 
              visitorName={visitorName}
              onVisitorNameChange={onVisitorNameChange}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
