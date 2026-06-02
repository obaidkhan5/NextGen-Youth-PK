import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Mail, MapPin, ArrowRight, ChevronRight } from "lucide-react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGen Youth PK",
  description: "A transformative leadership and Artificial Intelligence platform for the youth of Pakistan.",
};

// Custom SVG Components for Social Brands (Error-Free)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-slate-50 text-slate-900 antialiased selection:bg-[#00b4d8] selection:text-white`}>
        
        {/* PREMIUM GLOBAL HEADER (Glassmorphic & Clean) */}
        <header className="fixed w-full top-0 z-50 bg-white/75 backdrop-blur-xl border-b border-slate-200/50 shadow-sm transition-all duration-300">
          <div className="max-w-[90rem] mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Minimal & Professional Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.jpg" 
                alt="NextGen Youth PK Logo" 
                className="h-10 md:h-12 w-auto object-contain rounded-md transition-transform duration-500 group-hover:scale-105" 
              />
              <span className="hidden sm:flex flex-col justify-center border-l-2 border-slate-200 pl-3">
                <span className="font-black text-lg tracking-tight text-slate-900 leading-none">NextGen</span>
                <span className="font-bold text-[0.65rem] tracking-widest text-[#00b4d8] uppercase mt-1">Youth PK</span>
              </span>
            </Link>
            
            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link href="/" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors relative group">
                Home
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#00b4d8] transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/#aim" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors relative group">
                Our Aim
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#00b4d8] transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/#initiatives" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors relative group">
                Initiatives
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#00b4d8] transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/#founder" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors relative group">
                Founder
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#00b4d8] transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Clean CTA Button replacing AI Directors Lab */}
            <Link href="/Collaboration" className="hidden sm:flex bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#00b4d8] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 items-center gap-2 group">
              Partner With Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </header>

        {/* DYNAMIC PAGE CONTENT */}
        <main className="min-h-screen pt-24">
          {children}
        </main>

        {/* DEEP PREMIUM DARK FOOTER */}
        <footer className="bg-[#030712] pt-24 pb-10 mt-20 relative overflow-hidden text-white border-t border-slate-800">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563eb]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00b4d8]/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 relative z-10">
              
              {/* Brand Column (Spans 4 columns) */}
              <div className="lg:col-span-4 space-y-6">
                <Link href="/" className="inline-flex items-center gap-3 group">
                  <img src="/logo.jpg" alt="Logo" className="h-12 w-auto object-contain rounded-md transition-transform duration-500 group-hover:scale-105" />
                  <span className="flex flex-col justify-center border-l border-slate-700 pl-3">
                    <span className="font-black text-xl tracking-tight text-white leading-none">NextGen</span>
                    <span className="font-bold text-[0.65rem] tracking-widest text-[#00b4d8] uppercase mt-1">Youth PK</span>
                  </span>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed mt-6 max-w-sm font-medium">
                  Igniting Youth. Empowering Change. We are leading the technological and mentorship revolution for the next generation of Pakistan and beyond.
                </p>
              </div>

              {/* Quick Links Column (Spans 2 columns) */}
              <div className="lg:col-span-2">
                <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase text-slate-300">Explore</h4>
                <ul className="space-y-4 text-slate-400 text-sm font-medium">
                  <li><Link href="/" className="hover:text-[#00b4d8] flex items-center gap-2 group"><ChevronRight size={14} className="text-slate-600 group-hover:text-[#00b4d8] transition-colors" /> Home</Link></li>
                  <li><Link href="/#aim" className="hover:text-[#00b4d8] flex items-center gap-2 group"><ChevronRight size={14} className="text-slate-600 group-hover:text-[#00b4d8] transition-colors" /> Our Vision</Link></li>
                  <li><Link href="/#initiatives" className="hover:text-[#00b4d8] flex items-center gap-2 group"><ChevronRight size={14} className="text-slate-600 group-hover:text-[#00b4d8] transition-colors" /> Masterclasses</Link></li>
                  <li><Link href="/#founder" className="hover:text-[#00b4d8] flex items-center gap-2 group"><ChevronRight size={14} className="text-slate-600 group-hover:text-[#00b4d8] transition-colors" /> Meet the Founder</Link></li>
                </ul>
              </div>

              {/* Contact Column (Spans 3 columns) */}
              <div className="lg:col-span-3">
                <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase text-slate-300">Reach Out</h4>
                <ul className="space-y-6 text-slate-400 text-sm">
                  <li className="flex items-start gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-slate-800/50 rounded-lg group-hover:bg-[#00b4d8] group-hover:text-white transition-all duration-300 border border-slate-700/50 group-hover:border-[#00b4d8]">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Email Us</p>
                      <a href="mailto:nextgenyouthpk@gmail.com" className="group-hover:text-[#00b4d8] transition-colors font-medium">nextgenyouthpk@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-slate-800/50 rounded-lg group-hover:bg-[#00b4d8] group-hover:text-white transition-all duration-300 border border-slate-700/50 group-hover:border-[#00b4d8]">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Location</p>
                      <span className="font-medium">Pakistan | Global Initiative</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Socials & Collab Column (Spans 3 columns) */}
              <div className="lg:col-span-3">
                <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase text-slate-300">Connect</h4>
                <div className="flex gap-3 mb-8">
                  <a href="https://www.instagram.com/nextgenyouthpk?igsh=MXE0dHJ6ZXlwZ2JuYQ==" target="_blank" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.linkedin.com/company/nextgen-youth-pk/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                    <LinkedinIcon />
                  </a>
                  <a href="https://www.facebook.com/share/1Es2eaDfsp/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                    <FacebookIcon />
                  </a>
                </div>
                <Link href="/Collaboration" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold hover:bg-[#00b4d8] hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                  Propose a Collaboration
                </Link>
              </div>

            </div>

            <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
              <p>&copy; {new Date().getFullYear()} NextGen Youth PK. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span className="tracking-widest uppercase text-slate-600">Designed for Excellence</span>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}