"use client";

import { motion, animate, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, Cpu, Code2, Globe, ArrowRight, Plus, Send, CheckCircle2
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

// Ultra-Professional & Minimalist LinkedIn Icon
const LinkedinNative = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Advanced Number Counter Component
const AnimatedCounter = ({ to, suffix = "", duration = 2.5, isK = false }: { to: number, suffix?: string, duration?: number, isK?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            const rounded = Math.round(value);
            if (isK && rounded === to) {
              ref.current.textContent = "1K+";
            } else {
              ref.current.textContent = rounded + suffix;
            }
          }
        },
      });
    }
  }, [inView, to, duration, suffix, isK]);

  return <span ref={ref}>0{suffix}</span>;
};

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);
  const [proposalStatus, setProposalStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const handleProposalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProposalStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d340db0a-7086-4184-80c8-d22671417905"); 
    formData.append("subject", "New Proposal/Contact Form Submission");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (res.ok) {
        setProposalStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setProposalStatus("idle"), 5000);
      } else {
        setProposalStatus("error");
      }
    } catch (error) {
      setProposalStatus("error");
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Faheem",
      designation: "Operations Lead",
      image: "/team1.jpeg",
      linkedin: "https://www.linkedin.com/in/faheem-rukan-a25a2235a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      id: 2,
      name: "Muhammad Tayyab",
      designation: "Regional Director China",
      image: "/team2.jpeg",
      linkedin: "https://linkedin.com/in/aliraza"
    },
    {
      id: 3,
      name: "Syed Qasim Zamir",
      designation: "AI Researcher",
      image: "/team3.jpeg",
      linkedin: "https://linkedin.com/in/"
    }
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      
      {/* 1. SLEEK PROFESSIONAL HERO SECTION - FIXED SPACING */}
      <section className="relative pt-24 md:pt-36 pb-16 px-6 max-w-[90rem] mx-auto flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0 pointer-events-none"></div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl z-10 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm mb-8 md:mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4d8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00b4d8]"></span>
            </span>
            <span className="text-[11px] md:text-sm font-bold tracking-widest text-[#2563eb] uppercase mt-[2px]">Igniting Youth. Empowering Change.</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
            Shaping Pakistan's <br />
            <span className="bg-gradient-to-r from-[#00b4d8] via-[#2563eb] to-[#00b4d8] bg-[length:200%_auto] bg-clip-text text-transparent block mt-2 pb-4">
              Tech Future
            </span>
          </h1>
        </motion.div>
      </section>

      {/* 2. DYNAMIC BANNER SPACE - FIXED 1600x800 ASPECT RATIO (2:1) */}
      <section className="max-w-[100rem] mx-auto px-4 md:px-8 pb-24 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#070b14] border border-slate-200 shadow-2xl group flex items-center justify-center cursor-pointer"
        >
          <Image 
            src="/banner2.jpeg" 
            alt="NextGen Youth PK Campaign Banner" 
            fill
            priority
            fetchPriority="high"
            quality={90}
            sizes="100vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/50 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </motion.div>
      </section>

      {/* 3. ENTERPRISE STATS BENTO */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[1.5rem] shadow-sm border border-slate-100 text-center hover:border-[#00b4d8]/50 transition-all duration-300">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-3">
                <AnimatedCounter to={1000} suffix="+" isK={true} />
              </h3>
              <p className="font-bold text-[#2563eb] uppercase tracking-widest text-xs md:text-sm">Community</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[1.5rem] shadow-sm border border-slate-100 text-center hover:border-[#00b4d8]/50 transition-all duration-300">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-3">
                <AnimatedCounter to={10} suffix="+" />
              </h3>
              <p className="font-bold text-[#2563eb] uppercase tracking-widest text-xs md:text-sm">Webinars</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[1.5rem] shadow-sm border border-slate-100 text-center hover:border-[#00b4d8]/50 transition-all duration-300">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-3">
                <AnimatedCounter to={4} />
              </h3>
              <p className="font-bold text-[#2563eb] uppercase tracking-widest text-xs md:text-sm">Masterclasses</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[1.5rem] shadow-sm border border-slate-100 text-center hover:border-[#00b4d8]/50 transition-all duration-300">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-3">
                <AnimatedCounter to={100} suffix="%" />
              </h3>
              <p className="font-bold text-[#2563eb] uppercase tracking-widest text-xs md:text-sm">Youth Focus</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CLASSY FOUNDER SECTION */}
      <section id="founder" className="py-24 lg:py-32 bg-white overflow-hidden relative border-b border-slate-100">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 -z-10 hidden lg:block"></div>
        <div className="max-w-[90rem] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[2.5rem] p-0 lg:p-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="relative flex-shrink-0 w-full max-w-[350px] lg:max-w-[460px]">
              <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-100 bg-white">
                <Image 
                  src="/Obaid_Ullah_Khan.jpeg" 
                  alt="Obaid Ullah Khan - Founder & CEO" 
                  fill
                  quality={80}
                  className="object-cover" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Founder LinkedIn Profile" className="absolute bottom-4 right-4 bg-white text-[#0a66c2] p-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-[#0a66c2]">
                  <LinkedinNative className="w-6 h-6" />
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8] to-[#2563eb] rounded-[2.5rem] opacity-10 blur-xl -z-10 translate-x-4 translate-y-4"></div>
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-1 w-16 bg-[#00b4d8] rounded-full"></div>
                <span className="text-[#2563eb] font-black tracking-widest text-xs md:text-sm uppercase">Meet The Founder</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">Obaid Ullah <br className="hidden md:block" />Khan</h2>
              <p className="text-[#00b4d8] font-bold tracking-widest uppercase text-base md:text-lg mb-8 md:mb-10">CEO, NextGen Youth PK</p>
              
              <div className="bg-slate-50 p-8 md:p-10 rounded-[1.5rem] border border-slate-100 relative shadow-inner">
                <svg className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-12 md:h-12 text-slate-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium relative z-10 pl-8 md:pl-10 italic">
                  My vision is simple: to see the youth of Pakistan not just consuming technology, but creating it. We are breaking down barriers, bringing international expertise to our students, and cultivating a mindset of global leadership and relentless innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FLAGSHIP INITIATIVES */}
      <section id="initiatives" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 md:mb-20 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight text-slate-900">Flagship <span className="text-[#00b4d8]">Initiatives</span></h2>
              <p className="text-slate-600 text-lg md:text-xl font-light">Equipping students with modern architectures and frameworks required to dominate the global tech industry.</p>
            </div>
            <Link href="/schedule" className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-slate-900 hover:bg-[#00b4d8] text-white font-bold transition-all duration-300 shadow-xl border border-transparent whitespace-nowrap">
              View Schedule
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-white p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 hover:border-[#00b4d8]/40 hover:shadow-[0_20px_60px_-15px_rgba(0,180,216,0.15)] transition-all duration-500 relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000 pointer-events-none">
                <Globe size={150} className="text-[#2563eb] md:w-[200px] md:h-[200px]" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between gap-8 md:gap-10">
                <div>
                  <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-cyan-50 text-[#00b4d8] text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-lg mb-6 md:mb-8 border border-cyan-100">Premium Masterclass</span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-slate-900">AI Directors Lab</h3>
                  <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed font-light">Our highly exclusive 4-week online leadership and Artificial Intelligence learning experience hosted alongside international experts.</p>
                </div>
                <Link href="/ai-directors-lab" className="text-white bg-[#2563eb] hover:bg-[#00b4d8] px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold w-fit flex items-center gap-3 transition-colors duration-300 shadow-md">
                  Access Portal <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 hover:border-[#00b4d8]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl">
              <div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 md:mb-8 border border-cyan-100 transition-colors group-hover:bg-[#00b4d8] text-[#00b4d8] group-hover:text-white">
                  <ShieldCheck size={32} className="currentColor" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 text-slate-900">Cyber Security</h3>
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">Core concepts of ethical hacking, threat prevention, and digital safety for the modern web.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 hover:border-[#2563eb]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl">
              <div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 md:mb-8 border border-blue-100 transition-colors group-hover:bg-[#2563eb] text-[#2563eb] group-hover:text-white">
                  <Cpu size={32} className="currentColor" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 text-slate-900">AI & Robotics</h3>
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">Interactive sessions exploring how Artificial Intelligence integrates with physical systems.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 hover:border-slate-400/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between gap-8 md:gap-10 group shadow-lg hover:shadow-xl">
              <div className="max-w-3xl">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 md:mb-8 border border-slate-200 transition-colors group-hover:bg-slate-800 text-slate-700 group-hover:text-white">
                  <Code2 size={32} className="currentColor" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 text-slate-900">From VS Code to GitHub</h3>
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">A comprehensive practical workshop guiding students on version control, writing efficient code architectures, and publishing global repositories.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. OUR TEAM DIRECTORY */}
      <section id="team" className="py-24 lg:py-32 bg-white border-y border-slate-200 relative z-10">
        <div className="max-w-[90rem] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">The Core Team</h2>
            <div className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-[#00b4d8] to-[#2563eb] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={fadeUp} className="group relative">
                <div className="bg-slate-50 rounded-[2rem] p-5 md:p-6 shadow-md border border-slate-100 transition-all duration-500 hover:border-[#00b4d8]/40 hover:-translate-y-3 hover:shadow-xl relative z-10">
                  <div className="w-full aspect-square rounded-[1.5rem] bg-slate-200 overflow-hidden mb-6 md:mb-8 relative border-2 border-white shadow-sm group">
                    <Image 
                      src={member.image} 
                      alt={`Team Member ${member.name}`} 
                      fill
                      quality={80}
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn Profile of ${member.name}`} className="absolute bottom-3 right-3 bg-white text-[#0a66c2] p-2 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-[#0a66c2]">
                      <LinkedinNative className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="text-center pb-2">
                    <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">{member.name}</h4>
                    <p className="text-[#2563eb] font-bold text-[10px] md:text-xs uppercase tracking-widest bg-blue-100/50 py-1.5 px-4 md:py-2 md:px-5 rounded-full inline-block border border-blue-100">{member.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. PROPOSAL & CONTACT FORM */}
      <section id="contact" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="text-[#00b4d8] font-black tracking-widest text-xs md:text-sm uppercase mb-4 block">Partner With Us</span>
              <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight">Submit a Proposal or Inquiry</h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                Whether you want to sponsor an event, invite our founder for a talk, or collaborate on a masterclass, we’d love to hear from you. Drop your details and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4 flex justify-center lg:justify-start">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-[#2563eb] rounded-xl flex items-center justify-center"><Globe size={20} /></div>
                  <span className="font-medium text-sm md:text-base">Rawalpindi, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Backend Connected Form */}
            <form onSubmit={handleProposalSubmit} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-lg relative">
              <div className="space-y-4 md:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Your Name / Organization</label>
                  <input id="name" type="text" name="name" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 md:px-5 md:py-4 rounded-xl focus:outline-none focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] transition-all" placeholder="e.g. Ali Khan / Tech Corp" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input id="email" type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 md:px-5 md:py-4 rounded-xl focus:outline-none focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] transition-all" placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Your Proposal / Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 md:px-5 md:py-4 rounded-xl focus:outline-none focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] transition-all resize-none" placeholder="Tell us about your collaboration idea..."></textarea>
                </div>
                <button type="submit" disabled={proposalStatus === "loading"} className="w-full bg-[#2563eb] hover:bg-[#00b4d8] text-white font-bold py-3 md:py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {proposalStatus === "loading" ? "Sending..." : "Submit Proposal"} {!proposalStatus.includes("loading") && <Send size={18} />}
                </button>

                {/* Success Message Feedback with Accessibility */}
                {proposalStatus === "success" && (
                  <div aria-live="polite" className="absolute -bottom-14 left-0 right-0 bg-green-50 text-green-700 border border-green-200 px-4 py-3 rounded-lg flex items-center justify-center gap-2 animate-pulse text-sm md:text-base">
                    <CheckCircle2 size={18} /> Proposal Sent Successfully!
                  </div>
                )}
                {proposalStatus === "error" && (
                  <div aria-live="polite" className="absolute -bottom-14 left-0 right-0 bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base">
                      Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Who can join the masterclasses?", a: "Our masterclasses are designed for enthusiastic youth, university students, and early-career professionals in Pakistan who want to excel in AI and Tech." },
              { q: "Are the webinars free?", a: "Most of our foundational webinars are completely free. Premium labs like the AI Directors Lab have specific registration criteria." },
              { q: "Do I get a certificate?", a: "Yes! Active participants who complete the required tasks during our extensive programs are awarded a verified certificate of completion." },
              { q: "How can I partner with NextGen Youth PK?", a: "We are always looking for visionary partners. You can reach out to us via email or use the collaboration link in the footer." }
            ].map((faq, i) => (
              <div key={faq.q} className={`border ${activeFAQ === i ? 'bg-slate-50 border-[#00b4d8] shadow-md' : 'bg-white border-slate-200'} rounded-[1rem] transition-all duration-300`}>
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)} 
                  aria-expanded={activeFAQ === i}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#00b4d8] rounded-[1rem]"
                >
                  <span className="text-lg md:text-xl font-bold text-slate-900 tracking-tight pr-4">{faq.q}</span>
                  <Plus className={`text-[#00b4d8] shrink-0 transform transition-transform duration-300 ${activeFAQ === i ? 'rotate-45' : ''}`} size={24} />
                </button>
                {activeFAQ === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl animate-in fade-in duration-300">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}