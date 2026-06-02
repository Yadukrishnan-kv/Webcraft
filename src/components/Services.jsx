import React from 'react'
import { motion as m } from 'framer-motion'
import { PanelsTopLeft, Database, CodeXml, ShoppingBag, Smartphone, Gauge } from 'lucide-react'

const mainServices = [
  {
    icon: PanelsTopLeft,
    title: "Static Websites",
    desc: "Lightning-fast marketing sites, portfolios and landing pages. Hand-crafted, pixel-perfect, deployed on a global edge network for sub-second loads everywhere.",
    bullets: ["Pre-rendered HTML", "99 Lighthouse score", "Edge-hosted CDN"]
  },
  {
    icon: Database,
    title: "Dynamic Web Apps",
    desc: "Full-stack web platforms with real-time data, auth, dashboards and APIs. From booking systems to SaaS — engineered to scale with your business.",
    bullets: ["Auth & user management", "Realtime database", "Admin dashboards"]
  },
  {
    icon: CodeXml,
    title: "Custom Solutions",
    desc: "Bespoke builds for unique problems. Headless CMS, integrations, automations, and tailored workflows that fit exactly the way your team works.",
    bullets: ["Headless CMS", "Third-party integrations", "Automation flows"]
  }
]

const subServices = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Storefronts that sell — fast checkout, smart product pages."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Flawless experiences on every screen, from watch to widescreen."
  },
  {
    icon: Gauge,
    title: "SEO Optimisation",
    desc: "Technical SEO baked in — schema, sitemaps, performance."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-40 relative bg-background">
      {/* Decorative Blur Background Blob */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header Block */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20 text-left"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Services</span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance text-foreground">
            Everything your brand needs{" "}
            <span className="gradient-text">on the web.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From a single landing page to complex web platforms — we design, build, ship and maintain. One studio, one accountable team, end-to-end.
          </p>
        </m.div>

        {/* Main Services Grid */}
        <div className="space-y-8">
          {mainServices.map((service, index) => (
            <m.article
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid lg:grid-cols-12 gap-8 items-center bg-surface border border-border/80 rounded-[32px] p-8 lg:p-12 hover:shadow-elegant transition-all duration-500 group"
            >
              <div className="lg:col-span-12 flex flex-col text-left">
                {/* Icon wrapper */}
                <div className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                {/* Text titles */}
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-4xl">
                  {service.desc}
                </p>

                {/* Bullets lists */}
                <ul className="grid sm:grid-cols-3 gap-4 border-t border-border/40 pt-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </m.article>
          ))}
        </div>

        {/* Sub Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {subServices.map((service, index) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-foreground text-background rounded-[32px] p-8 lg:p-10 hover:bg-primary hover:text-primary-foreground transition-colors duration-500 group text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-background/10 flex items-center justify-center text-primary group-hover:text-primary-foreground group-hover:bg-background/20 transition-colors duration-300 mb-6">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-background" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-background/70 group-hover:text-primary-foreground/80 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
