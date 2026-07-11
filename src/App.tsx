/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import Faculty from "./components/Faculty";
import SuccessMetrics from "./components/SuccessMetrics";
import Gallery from "./components/Gallery";
import Fees from "./components/Fees";
import FAQ from "./components/FAQ";
import MapAndContact from "./components/MapAndContact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [visitorName, setVisitorName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSelectCourse = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
  };

  return (
    <div className="relative min-h-screen bg-jet text-walnut-50 font-sans selection:bg-gold-500/20 selection:text-gold-300">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col min-h-screen relative"
            id="app-root-container"
          >
            {/* Elegant Fixed Background Noise Overlay */}
            <div className="wood-overlay" />
            
            {/* Ambient Background Glow Spheres */}
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.04] rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none z-0" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#3d2b1f] opacity-[0.06] rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none z-0" />
            <div className="fixed inset-0 opacity-[0.1] bg-repeat pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(#D4AF37 0.5px, transparent 0.5px)", backgroundSize: "30px 30px" }} />

            {/* Sticky Navigation */}
            <Navbar />

            {/* Structured Page Content Sections */}
            <main className="flex-grow relative z-10" id="main-content-flow">
              <Hero />
              
              <div id="about-section-container">
                <About />
              </div>

              <div id="why-us-section-container">
                <WhyChooseUs />
              </div>

              <div id="courses-section-container">
                <Courses onSelectCourse={handleSelectCourse} />
              </div>

              <div id="faculty-section-container">
                <Faculty />
              </div>

              <div id="success-metrics-section-container">
                <SuccessMetrics />
              </div>

              <div id="gallery-section-container">
                <Gallery />
              </div>

              <div id="fees-section-container">
                <Fees />
              </div>

              <div id="faq-section-container">
                <FAQ />
              </div>

              <div id="contact-section-container">
                <MapAndContact 
                  selectedCourse={selectedCourse}
                  visitorName={visitorName}
                  onVisitorNameChange={(name) => setVisitorName(name)}
                />
              </div>
            </main>

            {/* Footer with back-to-top */}
            <Footer />

            {/* Floating Contact Widgets */}
            <FloatingWhatsApp visitorName={visitorName} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

