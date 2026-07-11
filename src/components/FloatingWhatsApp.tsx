import { motion } from "motion/react";
import { MessageSquare, Bell } from "lucide-react";

interface FloatingWhatsAppProps {
  visitorName: string;
}

export default function FloatingWhatsApp({ visitorName }: FloatingWhatsAppProps) {
  
  const handleWhatsAppClick = () => {
    // Dynamic name substitution as requested in guidelines
    const nameSegment = visitorName.trim() ? visitorName.trim() : "(username)";
    const rawMessage = `Hi Hitesh Selvani, I am ${nameSegment}. I want to join Atomic Trade Classes.`;
    const encodedMessage = encodeURIComponent(rawMessage);
    const ownerPhoneNumber = "919876543210";
    
    window.open(`https://wa.me/${ownerPhoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2" id="floating-whatsapp-container">
      
      {/* Small informative luxury tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: [0, 1, 1], x: [20, 0, 0] }}
        transition={{ delay: 3, duration: 0.6 }}
        className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-black/90 backdrop-blur-md shadow-xl text-[9px] font-mono font-semibold text-emerald-400"
      >
        <Bell className="w-2.5 h-2.5 animate-bounce" />
        <span>Chief Mentor Hitesh Selvani • Online Now</span>
      </motion.div>

      {/* Main floating action button */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
        aria-label="Direct WhatsApp Chat Trigger"
        id="floating-whatsapp-btn"
      >
        {/* Soft emerald radar pulse waves */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
        
        {/* Lucide Financial WhatsApp Chat Indicator */}
        <MessageSquare className="w-6 h-6 fill-white/10" />
      </motion.button>
    </div>
  );
}
