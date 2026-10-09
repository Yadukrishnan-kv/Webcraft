import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers } from 'lucide-react'
import { resolveAssetUrl } from '../utils/resolveAssetUrl'

export default function Work({ projects = [] }) {
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
              key={project._id}
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
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientVia} ${project.gradientTo} flex items-center justify-center transition-all duration-700 text-foreground/80 group-hover:text-primary-glow ${project.isFullImage ? '' : 'group-hover:scale-105'}`}>
                {project.isFullImage ? (
                  <img
                    src={resolveAssetUrl(project.imageUrl)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
                    <Layers className="w-1/3 h-1/3 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  </>
                )}
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
