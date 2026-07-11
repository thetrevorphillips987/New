import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, Award, ExternalLink } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  tag: "Classroom" | "Workshops" | "Live Sessions" | "Events" | "Students" | "Awards";
  imageUrl: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "classroom-elite",
      title: "The Executive Lecture Suites",
      tag: "Classroom",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "workshops-active",
      title: "Intense Intraday Options Workshop",
      tag: "Workshops",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e08562744ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "live-charting",
      title: "Live Market Execution Floor",
      tag: "Live Sessions",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "events-celebration",
      title: "National Trader Summit Award Panel",
      tag: "Events",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "students-collaboration",
      title: "Prop Desk Simulation Exercises",
      tag: "Students",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "awards-recognition",
      title: "Best Premium Trading Academy Trophy",
      tag: "Awards",
      imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section 
      id="gallery" 
      className="relative py-24 px-6 overflow-hidden bg-jet bg-premium-grid"
    >
      <div className="wood-overlay" />

      {/* Floating Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gold-light-radial animate-ambient-slow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 walnut-light-radial animate-ambient-slow-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-500 font-bold uppercase">
            LIFE AT ATOMIC
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Our Campus. <span className="text-gold-gradient">Our Milestones.</span>
          </h2>
          <p className="text-xs sm:text-sm text-walnut-300 max-w-xl mx-auto leading-relaxed">
            Take a look inside our state-of-the-art interactive computer labs, live session auditoriums, student events, and national recognitions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-masonry-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-gold-500/10 bg-walnut-950 aspect-[4/3] shadow-lg hover:border-gold-500/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all duration-500"
            >
              {/* Grayscale styled image with zoom */}
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Luxury dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Tag & Icon Overlay */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-500/20 bg-walnut-950/80 backdrop-blur-md">
                <span className="text-[9px] font-mono tracking-wider font-bold text-gold-400 uppercase">{item.tag}</span>
              </div>

              {/* Hover Indicator Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <div className="p-4 rounded-full bg-gold-gradient text-rich-black shadow-lg">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display font-bold text-sm sm:text-md text-white">
                  {item.title}
                </h3>
                <p className="text-[10px] font-mono text-gold-500 uppercase mt-1 flex items-center gap-1">
                  <span>View Fullsize</span>
                  <ExternalLink className="w-3 h-3" />
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            id="gallery-lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-gold-500/20 bg-walnut-950 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-black/80 border border-gold-500/20 text-gold-500 hover:text-white transition-all focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end">
                  <span className="font-mono text-xs text-gold-400 font-bold uppercase mb-1">{selectedImage.tag}</span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">{selectedImage.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
