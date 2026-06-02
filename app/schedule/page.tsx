"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowLeft, Download } from "lucide-react";

export default function SchedulePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    // ✅ Semantic HTML: changed div to main for SEO
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden font-sans">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00b4d8]/10 blur-[120px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#2563eb]/5 blur-[100px] rounded-full -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        
        {/* Navigation & Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl mx-auto mb-10 md:mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#00b4d8] font-bold text-xs md:text-sm uppercase tracking-widest transition-colors mb-6 md:mb-8 group focus:outline-none focus:ring-2 focus:ring-[#00b4d8] rounded-lg px-2 py-1 -ml-2">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-100 bg-blue-50 text-xs md:text-sm font-bold tracking-widest text-[#2563eb] mb-4 shadow-sm uppercase">
                <CalendarDays size={16} /> Official Schedule
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">Masterclass Timeline</h1>
            </div>
            
            {/* ✅ Improved Download Link: Added default filename and aria-label */}
            <a 
              href="/schedule.jpeg" 
              download="NextGen_Youth_PK_Schedule.jpeg" 
              aria-label="Download High Resolution Schedule Image"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm font-bold hover:bg-[#00b4d8] hover:shadow-[0_10px_30px_rgba(0,180,216,0.3)] transition-all duration-300 shadow-lg hover:-translate-y-1 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:ring-offset-2"
            >
              Download HD <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Schedule Image Container (1080 x 729 Aspect Ratio) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative w-full aspect-[1080/729] bg-white rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 group">
            
            {/* Image Wrapper */}
            <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-slate-100 border border-slate-100">
              
              {/* ✅ Converted to Next.js Image for Performance < 3s */}
              <Image 
                src="/schedule.jpeg" 
                alt="NextGen Youth PK Official Masterclass Schedule" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700" 
              />
              
              {/* Subtle Overlay for Premium Look */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1rem] md:rounded-[1.5rem] pointer-events-none"></div>
            </div>

          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mt-8 md:mt-12 max-w-2xl mx-auto">
          <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
            Timings are according to Pakistan Standard Time (PKT). Dates are subject to minor adjustments based on speaker availability.
          </p>
        </motion.div>

      </div>
    </main>
  );
}