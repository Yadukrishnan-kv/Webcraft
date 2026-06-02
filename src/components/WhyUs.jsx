import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Palette, Gauge, Shield, ChartLine, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We move quickly from idea to launch without unnecessary delays or complexity.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    desc: "Every product is built for speed, smooth experience, and reliable real-world usage.",
  },
  {
    icon: Palette,
    title: "Clean Design",
    desc: "Simple, modern interfaces focused on clarity, usability, and strong first impressions.",
  },
  {
    icon: Shield,
    title: "Reliable Quality",
    desc: "Stable, well-structured builds that work consistently across devices and use cases.",
  },
  {
    icon: ChartLine,
    title: "Growth Focused",
    desc: "Built to support business goals like engagement, conversions, and long-term growth.",
  },
  {
    icon: HeartHandshake,
    title: "Easy Collaboration",
    desc: "Clear communication, smooth process, and support from start to delivery.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-40 bg-surface">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 text-left"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Why Webbiko</span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance text-foreground">
           What sets {" "}
            <span className="gradient-text">us apart.</span>
          </h2>
        </motion.div>

        {/* Clean Border Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-[32px] overflow-hidden border border-border/40 shadow-soft">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-background p-8 lg:p-12 hover:bg-foreground hover:text-background transition-all duration-500 group cursor-default text-left flex flex-col justify-between min-h-[250px]"
            >
              <div>
                {/* Icon */}
                <reason.icon className="w-9 h-9 text-primary mb-8 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                
                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-background transition-colors duration-500">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed text-sm sm:text-base transition-colors duration-500">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
