import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { MessageSquare, Send, CheckCircle } from "lucide-react";

interface InquiryFormProps {
  selectedCourse: string;
  visitorName: string;
  onVisitorNameChange: (name: string) => void;
}

export default function InquiryForm({ selectedCourse, visitorName, onVisitorNameChange }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: visitorName,
    phone: "",
    email: "",
    city: "",
    course: selectedCourse,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  // Synchronize selected course if modified from external components
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  // Synchronize name if modified externally
  useEffect(() => {
    if (visitorName !== formData.fullName) {
      setFormData((prev) => ({ ...prev, fullName: visitorName }));
    }
  }, [visitorName]);

  const courseList = [
    "Beginner Trading Foundation",
    "Intermediate Price Action Mastery",
    "Advanced Institutional Trading",
    "Elite Options Trading & Hedging",
    "Futures Momentum & Leverage Strategy",
    "Modern Technical Analysis Blueprint",
    "Pure Price Action Tactics",
    "Strategic Swing & Sector Rotation",
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Provide a valid phone number";
    }
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.course) tempErrors.course = "Please select an educational course";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "fullName") {
      onVisitorNameChange(value);
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSuccess(true);

    // Create URL encoded message
    const rawMessage = `Hello,\nI am ${formData.fullName}.\nI want to join Atomic Trade Classes.\n\nPhone: ${formData.phone}\nCity: ${formData.city}\nInterested Course: ${formData.course}\n${formData.message ? `\nMessage: ${formData.message}\n` : ""}\nPlease share the complete details regarding fees, timings, and admission.`;
    
    const ownerPhoneNumber = "919876543210"; // Default premier Indian country-code phone placeholder
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${ownerPhoneNumber}?text=${encodedMessage}`;

    // Graceful delayed redirect to allow success indicator animation
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSuccess(false);
    }, 800);
  };

  return (
    <div 
      className="p-8 rounded-3xl border border-gold-500/20 bg-walnut-950/40 backdrop-blur-md relative overflow-hidden"
      id="inquiry-form-card"
    >
      {/* Glare and glow overlay */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
            <MessageSquare className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">Interactive Admissions Desk</h3>
            <p className="text-xs text-walnut-300">Submit parameters to connect directly on WhatsApp</p>
          </div>
        </div>

        {success ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4" id="inquiry-success-indicator">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500 text-gold-500 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 animate-bounce" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">Inquiry Compiled!</h4>
              <p className="text-xs text-walnut-300 max-w-sm mt-1">
                Redirecting you to the official Atomic Admissions desk on WhatsApp to finalize your parameters...
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4" id="inquiry-lead-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="fullName" className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3 rounded-xl bg-walnut-950/60 border text-xs text-white placeholder-walnut-400 focus:outline-none focus:ring-1 focus:ring-gold-500/30 focus:border-gold-500 transition-colors ${
                    errors.fullName ? "border-red-500" : "border-gold-500/10"
                  }`}
                />
                {errors.fullName && <span className="text-[9px] font-mono text-red-500">{errors.fullName}</span>}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="phone" className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl bg-walnut-950/60 border text-xs text-white placeholder-walnut-400 focus:outline-none focus:ring-1 focus:ring-gold-500/30 focus:border-gold-500 transition-colors ${
                    errors.phone ? "border-red-500" : "border-gold-500/10"
                  }`}
                />
                {errors.phone && <span className="text-[9px] font-mono text-red-500">{errors.phone}</span>}
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email (Optional) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
                  Email Address <span className="text-walnut-400">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. rahul@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-walnut-950/60 border border-gold-500/10 text-xs text-white placeholder-walnut-400 focus:outline-none focus:ring-1 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                />
              </div>

              {/* City */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="city" className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="e.g. Mumbai"
                  className={`w-full px-4 py-3 rounded-xl bg-walnut-950/60 border text-xs text-white placeholder-walnut-400 focus:outline-none focus:ring-1 focus:ring-gold-500/30 focus:border-gold-500 transition-colors ${
                    errors.city ? "border-red-500" : "border-gold-500/10"
                  }`}
                />
                {errors.city && <span className="text-[9px] font-mono text-red-500">{errors.city}</span>}
              </div>

            </div>

            {/* Selected Course Dropdown */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="course" className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
                Interested Program <span className="text-red-500">*</span>
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl bg-walnut-950/80 border text-xs text-white placeholder-walnut-400 focus:outline-none focus:ring-1 focus:ring-gold-500/30 focus:border-gold-500 transition-colors ${
                  errors.course ? "border-red-500" : "border-gold-500/10"
                }`}
              >
                <option value="" disabled className="bg-walnut-950 text-walnut-400">Select a premium program tier...</option>
                {courseList.map((c) => (
                  <option key={c} value={c} className="bg-walnut-950 text-white">
                    {c}
                  </option>
                ))}
              </select>
              {errors.course && <span className="text-[9px] font-mono text-red-500">{errors.course}</span>}
            </div>

            {/* Custom Message (Optional) */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="message" className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-semibold">
                Message <span className="text-walnut-400">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Share any background details or specific scheduling parameters with our admissions mentors..."
                className="w-full px-4 py-3 rounded-xl bg-walnut-950/60 border border-gold-500/10 text-xs text-white placeholder-walnut-400 focus:outline-none focus:ring-1 focus:ring-gold-500/30 focus:border-gold-500 transition-colors resize-none"
              />
            </div>

            {/* Action Trigger Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 group relative py-4 rounded-xl bg-gold-gradient text-rich-black text-xs font-bold tracking-wider uppercase shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>SEND INQUIRY TO WHATSAPP</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
