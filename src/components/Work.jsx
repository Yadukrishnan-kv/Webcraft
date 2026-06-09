import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import fitbiteImg from '../assets/fitbite.png'
import happylandgroupventures from '../assets/Screenshot 2026-06-09 112813.png'
const projects = [
  {
    title: "Fitbite",
    tag: "Where Nutrition Meets Results",
    year: "2026",
    url: "https://fitbite-healthy-meals.vercel.app/",
    bgClass: "from-emerald-950 via-teal-900 to-indigo-950",
    isFullImage: true,
    visual: (
      <img
        src={fitbiteImg}
        alt="Fitbite"
        className="w-full h-full object-contain transition-opacity duration-500"
      />
    )
  },
  {
    title: "Happyland Group",
    tag: "Leading Destination Management Services & Luxury Travel in the UAE",
    year: "2026",
    url: "https://happylandgroupventures.com/",
    bgClass: "from-emerald-950 via-teal-900 to-indigo-950",
    isFullImage: true,
    visual: (
     <img
        src={happylandgroupventures}
        alt="Happyland Group Ventures"
        className="w-full h-full object-contain transition-opacity duration-500"
      />
    )
  },
  {
    title: "Vanguard",
    tag: "Transportation & Logistics Services",
    year: "2025",
    url: "https://codiqo.in/demo/Vanguard-logistics.html",
    bgClass: "from-blue-950 via-slate-900 to-sky-950",
    visual: (
      <svg className="w-4/5 h-4/5 opacity-30 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <rect x="5" y="5" width="90" height="90" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="20" x2="95" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="32" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="40" y="32" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="65" y="32" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="52" width="70" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="25" y1="67" x2="60" y2="67" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    title: "Veridian",
    tag: "Medical Service Provider",
    year: "2025",
    url: "https://codiqo.in/demo/veridian.html",
    bgClass: "from-teal-950 via-cyan-900 to-emerald-950",
    visual: (
      <svg className="w-4/5 h-4/5 opacity-30 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <rect x="5" y="5" width="90" height="90" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="20" x2="95" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 35 V75 M30 55 H70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="55" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    title: "Tesla Accessories",
    tag: "Smart Decarbonising for Engines",
    year: "2026",
    url: "https://codiqo.in/clients/tesla",
    bgClass: "from-neutral-950 via-stone-900 to-red-950",
    visual: (
      <svg className="w-4/5 h-4/5 opacity-30 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <rect x="5" y="5" width="90" height="90" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="20" x2="95" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 40 L50 70 L70 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="70" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "VertexCorp",
    tag: "Digital Solutions Organization",
    year: "2025",
    url: "https://codiqo.in/demo/vertex.html",
    bgClass: "from-indigo-950 via-purple-900 to-pink-950",
    visual: (
      <svg className="w-4/5 h-4/5 opacity-30 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <rect x="5" y="5" width="90" height="90" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="20" x2="95" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="30" width="70" height="50" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15" y1="45" x2="85" y2="45" stroke="currentColor" strokeWidth="1.5" />
        <line x1="35" y1="30" x2="35" y2="80" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
 
]

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-40 bg-background relative">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left"
        >
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Selected Work</span>
            <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            Real-World Projects
            </h2>
          </div>
          
        </motion.div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
              className="group relative aspect-[4/3] rounded-[32px] overflow-hidden block border border-border/40 bg-surface shadow-soft"
            >
              {/* Representational Mock Visual Canvas */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgClass} flex items-center justify-center transition-all duration-700 text-foreground/80 group-hover:text-primary-glow ${project.isFullImage ? '' : 'group-hover:scale-105'}`}>
                {project.visual}
              </div>

              {/* High Contrast Overlay */}
              {project.isFullImage ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent transition-opacity duration-500" />
              ) : (
                <div className="absolute inset-0 bg-foreground/45 group-hover:bg-foreground/25 transition-colors duration-500" />
              )}

              {/* Card Hover Information content */}
              <div className={`absolute inset-0 p-8 lg:p-10 flex flex-col justify-between z-10 select-none ${project.isFullImage ? 'text-white' : 'text-background'}`}>
                {/* Top Row: Year & Rotation Arrow */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-widest opacity-85 px-3 py-1 rounded-full backdrop-blur-sm ${project.isFullImage ? 'bg-black/40 text-white' : 'bg-foreground/10'}`}>
                    {project.year}
                  </span>
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-soft group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground ${project.isFullImage ? 'bg-white text-black' : 'bg-background text-foreground'}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Row: Tag & Title */}
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-semibold opacity-90 mb-1 tracking-wide">
                    {project.tag}
                  </div>
                  <h3 className={`font-display text-2xl sm:text-3xl font-black tracking-tight leading-none ${project.isFullImage ? 'text-white' : 'text-background'}`}>
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}


