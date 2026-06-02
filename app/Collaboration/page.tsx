"use client";

import { motion } from "framer-motion";
import { Handshake, Globe, GraduationCap, Send, Mail, Building2, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export default function CollaborationPage() {
  // ✅ Upgraded to handle real API states (loading, success, error)
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // ✅ Real Web3Forms Integration
  const handleProposalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    // Replace this string with your actual Web3Forms Access Key
    formData.append("access_key", "d340db0a-7086-4184-80c8-d22671417905"); 
    formData.append("subject", "New Official Collaboration Proposal");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (res.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    // ✅ Semantic HTML: changed div to main for SEO
    <main className="bg-slate-50 min-h-screen pb-24 overflow-hidden relative font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-100/50 blur-[120px] rounded-full -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/50 blur-[100px] rounded-full -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-24 md:pt-32">
        
        {/* Page Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#00b4d8]/30 bg-cyan-50 text-xs md:text-sm font-bold tracking-widest text-[#00b4d8] mb-6 shadow-sm uppercase">
            <Handshake size={16} /> Partner With Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-4 md:mb-6 tracking-tight">
            Let's Build the <span className="bg-gradient-to-r from-[#00b4d8] to-[#2563eb] bg-clip-text text-transparent">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Whether you are an industry expert, a tech company, or an educational institution, partner with NextGen Youth PK to empower the next generation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start relative z-10">
          
          {/* LEFT SIDE: Why Partner With Us (Spans 5 columns) */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:col-span-5 space-y-6">
            <motion.div variants={fadeUp} className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Ways to Collaborate</h3>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-[#00b4d8] flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Host a Masterclass</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Share your expertise in AI, Cyber Security, or Leadership with our community of 4,000+ enthusiastic youth.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563eb] flex-shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Corporate Sponsorship</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Sponsor our flagship events like the AI Directors Lab and connect your brand with emerging tech talent.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Global Outreach</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Cross-border initiatives and youth exchange programs between Pakistan and international partners.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b4d8]/20 blur-3xl rounded-full"></div>
              <h4 className="text-lg md:text-xl font-bold mb-2 relative z-10">Direct Contact</h4>
              <p className="text-slate-400 text-sm mb-6 relative z-10">Prefer sending a direct email? Reach out to our core team.</p>
              <a href="mailto:nextgenyouthpk@gmail.com" className="flex items-center gap-3 text-[#00b4d8] hover:text-white font-bold transition-colors group relative z-10">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="truncate">nextgenyouthpk@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: The Collaboration Form (Spans 7 columns) */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7">
            <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Submit a Proposal</h3>
              <p className="text-sm md:text-base text-slate-500 mb-8">Fill out the form below and our partnerships team will get back to you within 48 hours.</p>

              <form onSubmit={handleProposalSubmit} className="space-y-5 md:space-y-6">
                
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  {/* ✅ Accessibility: Added htmlFor and id */}
                  <div className="space-y-2">
                    <label htmlFor="collab-name" className="text-xs md:text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      id="collab-name"
                      name="name"
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 md:px-5 md:py-4 rounded-xl focus:outline-none focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="collab-email" className="text-xs md:text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      id="collab-email"
                      name="email"
                      type="email" 
                      required
                      placeholder="john@organization.com"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 md:px-5 md:py-4 rounded-xl focus:outline-none focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="collab-org" className="text-xs md:text-sm font-bold text-slate-700">Organization / Company</label>
                    <input 
                      id="collab-org"
                      name="organization"
                      type="text" 
                      required
                      placeholder="Tech Solutions Inc."
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 md:px-5 md:py-4 rounded-xl focus:outline-none focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] transition-all"
                    />
                  </div>

                  {/* ✅ React Hydration Fix: Removed selected from option, added defaultValue to select */}
                  <div className="space-y-2">
                    <label htmlFor="collab-type" className="text-xs md:text-sm font-bold text-slate-700">Type of Collaboration</label>
                    <select 
                      id="collab-type"
                      name="collaboration_type"
                      required
                      defaultValue=""
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 md:px-5 md:py-4 rounded-xl focus:outline-none focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Host a Masterclass">Host a Masterclass / Speak</option>
                      <option value="Sponsorship">Event Sponsorship</option>
                      <option value="Academic Partnership">Academic / University Partnership</option>
                      <option value="Other">Other Initiative</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="collab-details" className="text-xs md:text-sm font-bold text-slate-700">Proposal Details</label>
                  <textarea 
                    id="collab-details"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your idea, how it aligns with NextGen Youth PK, and what the next steps should be..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 md:px-5 md:py-4 rounded-xl focus:outline-none focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={formStatus === "loading"}
                  className={`w-full flex items-center justify-center gap-2 text-white font-bold px-8 py-4 md:py-5 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(0,180,216,0.2)] hover:-translate-y-1 ${formStatus === "loading" ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#00b4d8] to-[#2563eb] hover:shadow-[0_15px_30px_rgba(0,180,216,0.4)]'}`}
                >
                  {formStatus === "loading" ? "Submitting..." : "Send Proposal"}
                  {formStatus !== "loading" && <Send size={20} />}
                </button>

                {/* ✅ SEO/Accessibility: aria-live ensures screen readers announce success */}
                {formStatus === "success" && (
                  <div aria-live="polite" className="absolute -bottom-14 left-0 right-0 bg-green-50 text-green-700 border border-green-200 px-4 py-3 rounded-lg flex items-center justify-center gap-2 animate-pulse text-sm md:text-base">
                    <CheckCircle2 size={18} /> Proposal Sent Successfully!
                  </div>
                )}
                {formStatus === "error" && (
                  <div aria-live="polite" className="absolute -bottom-14 left-0 right-0 bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base">
                    Something went wrong. Please try again.
                  </div>
                )}

                <p className="text-[10px] md:text-xs text-center text-slate-400 mt-4">Your information is secure. We never share your data with third parties.</p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}