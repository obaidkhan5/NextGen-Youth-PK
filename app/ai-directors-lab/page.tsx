"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Image from 'next/image';

export default function AIDirectorsLab() {
  // Fixed TypeScript error by adding 'as const'
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    // ✅ Semantic HTML: changed div to main for SEO
    <main className="bg-slate-50 min-h-screen pb-24 font-sans">
      
      {/* 1. PROFESSIONAL HERO BANNER SECTION */}
      <section className="bg-white text-slate-900 pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden border-b border-slate-200 shadow-sm">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-50 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-50 blur-[120px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 group cursor-pointer bg-slate-100">
            
            <Image
              src="/banner.png" 
              alt="AI Directors Lab - A transformative leadership and Artificial Intelligence experience"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority // ✅ Crucial for "Page speed under 3 sec" rule
              sizes="(max-width: 1200px) 100vw, 1200px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE MINDS SECTION */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">The Minds Behind It</h2>
          <div className="w-16 sm:w-20 h-1.5 bg-[#00b4d8] mx-auto mt-6 rounded-full"></div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { name: "Obaid Ullah Khan", role: "Founder & CEO, NextGen Youth PK", img: "/Obaid.jpeg", desc: "Driving the vision of youth empowerment and innovation in Pakistan." },
            { name: "Godwin Ikenze", role: "Founder, Next Gen CEO | AI Expert", img: "/g.jpeg", desc: "Equipping the next generation with a definitive technical edge." },
            { name: "Daniel Bassey", role: "Founder, Masterminds | Mentorship", img: "/d.jpeg", desc: "Shaping and mentoring visionary leaders on a global scale." },
            { name: "Muhammad Abdullah", role: "Moderator | Software Engineering", img: "/abdullah.jpeg", desc: "Facilitating engaging sessions and managing seamless digital operations." }
          ].map((person) => (
            // ✅ Fixed React Mapping Error by using unique key (person.name) instead of index 'i'
            <motion.div key={person.name} variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,180,216,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="h-64 sm:h-72 bg-slate-100 overflow-hidden relative shrink-0">
                {/* ✅ Changed to Next.js Image for optimization & SEO */}
                <Image 
                  src={person.img} 
                  alt={`Portrait of ${person.name}`} 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 border-t-[5px] border-[#00b4d8] relative bg-white flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h3>
                <p className="text-[#2563eb] font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4">{person.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mt-auto">{person.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. PREMIUM MASTERCLASS VAULT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 md:p-16 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-slate-100">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Masterclass Vault</h2>
            <p className="text-slate-500 mt-3 sm:mt-4 font-medium text-base sm:text-lg">Secure access to all 4-week premium session recordings</p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-slate-900 border-b border-slate-100 pb-4">
              <span className="p-2 sm:p-2.5 bg-cyan-50 text-[#00b4d8] rounded-xl shadow-sm"><PlayCircle size={24} /></span>
              Artificial Intelligence By Godwin Ikenze
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[1, 2, 3, 4].map((week) => (
                <button 
                  key={`ai-week-${week}`} // ✅ Unique key for error handling
                  aria-label={`Watch Artificial Intelligence Week ${week} Session`} // ✅ Added for Accessibility/SEO
                  className="w-full text-left bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-[#00b4d8] hover:shadow-lg transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
                >
                  <div className="aspect-video bg-slate-50 rounded-xl flex items-center justify-center mb-4 sm:mb-5 relative overflow-hidden group-hover:bg-cyan-50/50 transition-colors">
                     <PlayCircle className="text-slate-300 group-hover:text-[#00b4d8] w-10 h-10 sm:w-12 sm:h-12 absolute transition-colors duration-300" />
                     <span className="text-slate-700 font-bold text-[10px] sm:text-xs uppercase tracking-widest z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm">Video {week}</span>
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1">Week {week}: Session</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Instructor: <span className="text-[#00b4d8]">Godwin</span></p>
                </button>
              ))}
            </div>
          </div>

          {/* Mindset Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-slate-900 border-b border-slate-100 pb-4">
              <span className="p-2 sm:p-2.5 bg-blue-50 text-[#2563eb] rounded-xl shadow-sm"><PlayCircle size={24} /></span>
              Mindset & Mentorship By Daniel Bassey
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[1, 2, 3, 4].map((week) => (
                <button 
                  key={`mindset-week-${week}`} // ✅ Unique key for error handling
                  aria-label={`Watch Mindset Week ${week} Session`} // ✅ Added for Accessibility/SEO
                  className="w-full text-left bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-[#2563eb] hover:shadow-lg transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                >
                  <div className="aspect-video bg-slate-50 rounded-xl flex items-center justify-center mb-4 sm:mb-5 relative overflow-hidden group-hover:bg-blue-50/50 transition-colors">
                     <PlayCircle className="text-slate-300 group-hover:text-[#2563eb] w-10 h-10 sm:w-12 sm:h-12 absolute transition-colors duration-300" />
                     <span className="text-slate-700 font-bold text-[10px] sm:text-xs uppercase tracking-widest z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm">Video {week}</span>
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1">Week {week}: Leadership</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Instructor: <span className="text-[#2563eb]">Daniel</span></p>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}