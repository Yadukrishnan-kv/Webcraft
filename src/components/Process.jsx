import React from 'react'
import { motion } from 'framer-motion'

const processSteps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We dig into your brand, audience and goals. Workshops, audits, competitive teardown — so we build the right thing."
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes evolve into high-fidelity, interactive prototypes. Type, color, motion — every detail intentional."
  },
  {
    n: "03",
    title: "Develop",
    desc: "Clean, performant code. Component-driven, accessible, SEO-ready. Daily previews — never a black box."
  },
  {
    n: "04",
    title: "Deploy",
    desc: "Edge-deployed with monitoring, analytics and a complete handover. We stick around for the long run."
  }
]

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none" aria-hidden="true" />
      
      {/* Floating Purple Visual Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20 text-left"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Process</span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance text-background">
            A clear path from{" "}
            <span className="text-primary">idea to launch.</span>
          </h2>
        </motion.div>

        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-[32px] border border-background/10 hover:border-primary/50 transition-all duration-300 group text-left flex flex-col justify-between cursor-default bg-background/5 backdrop-blur-sm"
            >
              <div>
                {/* Large Process Step Number */}
                <div className="font-display text-6xl lg:text-7xl font-black text-primary/20 group-hover:text-primary transition-colors duration-300 mb-6">
                  {step.n}
                </div>
                
                {/* Step Title */}
                <h3 className="font-display text-2xl font-bold mb-3 text-background">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-background/60 leading-relaxed text-sm sm:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
