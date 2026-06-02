import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "CodeCraft delivered a site that loads instantly and looks better than anything we'd seen on dribbble. They genuinely cared about the outcome.",
    name: "Aanya Krishnan",
    role: "Founder, Bloom Skincare"
  },
  {
    quote: "From the first meeting to launch took 3 weeks. Conversions on the new site are up 47%. They are now our long-term web partner.",
    name: "Rahul Menon",
    role: "CEO, Northwind Travel"
  },
  {
    quote: "Custom dashboard, headless CMS, integrated payments — they handled it all and explained every decision. Rare to find this level of craft.",
    name: "Sara Joseph",
    role: "Product Lead, Mintly"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-40 bg-background relative">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 text-left"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Testimonials</span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            Words from founders.
          </h2>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface border border-border/80 rounded-[32px] p-8 flex flex-col justify-between hover:shadow-elegant transition-all duration-500 text-left"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <blockquote className="text-lg sm:text-xl leading-relaxed font-display font-medium text-foreground">
                  "{t.quote}"
                </blockquote>
              </div>
              
              {/* Author Profile */}
              <figcaption className="mt-8 pt-6 border-t border-border/40">
                <div className="font-bold text-foreground text-base">
                  {t.name}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}


