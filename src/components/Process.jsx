import { motion } from 'framer-motion'

const processSteps = [
  {
    n: "01",
    title: "Research",
    desc: "We analyze your market, users, and competitors to identify the best approach for your product."
  },
  {
    n: "02",
    title: "Plan",
    desc: "We structure the product flow, features, and architecture for a scalable solution."
  },
  {
    n: "03",
    title: "Develop",
    desc: "We design and develop fast, scalable, and modern full-stack applications."
  },
  {
    n: "04",
    title: "Launch",
    desc: "We deploy, optimize, and support your product for real-world performance."
  }
];

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
           From idea to{" "}
            <span className="text-primary">real-world impact.</span>
          </h2>
        </motion.div>

        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-[32px] border border-background/10 text-left flex flex-col justify-between cursor-pointer bg-background/5 backdrop-blur-sm hover:border-primary/50"
            >
              <div>
                {/* Large Process Step Number */}
                <motion.div
                  whileHover={{ color: "rgba(147, 51, 234, 1)" }}
                  className="font-display text-6xl lg:text-7xl font-black text-primary/20 mb-6"
                >
                  {step.n}
                </motion.div>
                
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
