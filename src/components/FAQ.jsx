import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "How long does a typical website take?",
    a: "Static marketing sites usually launch in 2–3 weeks. Dynamic platforms and custom builds typically run 4–10 weeks depending on scope. We'll give you an exact timeline after our discovery call."
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — every project ships with a 30-day post-launch support window for free. After that you can choose a monthly care plan covering hosting, security updates, content edits and analytics reviews."
  },
  {
    q: "Will my site be SEO-friendly?",
    a: "Absolutely. SEO is built into the foundation of every site: semantic HTML, fast Core Web Vitals, mobile-first responsive design, schema markup, automatic sitemaps, alt text and clean URLs."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Of course. We'll audit your current site, identify what's working and what isn't, then redesign and re-engineer it without losing your existing SEO equity or content."
  },
  {
    q: "What technologies do you use?",
    a: "We choose the right tool for each job: React, Next.js, Vite, Tailwind, Node, Supabase, headless CMS platforms and edge hosting (Vercel, Cloudflare). We avoid bloated builders and lock-in."
  },
  {
    q: "How much does a website cost?",
    a: "Pricing depends on scope, but most projects fall between INR 3,499 and INR 5,00,000+. Send us a quick brief via our contact form and we'll reply with a detailed proposal."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 lg:py-40 bg-surface">
      <div className="container mx-auto max-w-4xl px-6">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">FAQ</span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            Questions, answered.
          </h2>
        </motion.div>

        {/* Accordion Component */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-background border rounded-2xl px-6 transition-all duration-300 ${
                  isOpen ? "border-primary/50 shadow-soft" : "border-border/80"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-display text-base sm:text-lg font-bold py-6 flex items-center justify-between text-foreground hover:no-underline focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="text-muted-foreground leading-relaxed pb-6 text-sm sm:text-base border-t border-border/40 pt-4 text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
