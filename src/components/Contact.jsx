import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { z } from 'zod'

// Zod validation schema matching CodeCraft's exact spec
const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().regex(/^[0-9+()\-\s]{7,20}$/, "Please enter a valid phone number"),
  type: z.string().trim().max(60).optional(),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000)
})

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Static website',
    message: ''
  })
  
  const [status, setStatus] = useState({
    type: null, // 'success' | 'error' | null
    message: ''
  })

  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: null, message: '' })

    // Validate using Zod
    const validation = contactSchema.safeParse(formData)
    if (!validation.success) {
      const errorMsg = validation.error.issues[0].message
      setStatus({
        type: 'error',
        message: errorMsg
      })
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/myklvvwa", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...validation.data,
          _subject: `New project enquiry from ${validation.data.name}`
        })
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: "Thanks! We'll reply within 24 hours."
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          type: 'Static website',
          message: ''
        })
      } else {
        const data = await response.json().catch(() => ({}))
        const errorMsg = data?.errors?.[0]?.message || "Please try again or email yadhumanoj12@gmail.com directly."
        setStatus({
          type: 'error',
          message: errorMsg
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: "Please check your network connection or email yadhumanoj12@gmail.com."
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Blob Glow */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 text-left flex flex-col justify-between"
          >
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Contact</span>
              <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance text-background">
                Ready to Transform  <span className="text-primary">Your Vision.</span>
              </h2>
              <p className="mt-6 text-background/70 text-lg leading-relaxed max-w-md">
               Let's discuss how we can bring your ideas to life. Book a quick call with our team, and we'll guide you through the next steps.
              </p>
            </div>

            {/* Visual Action Link items */}
            <div className="mt-12 space-y-6">
              
              {/* Phone item */}
              <a href="tel:+919745706208" className="flex items-center gap-4 group active:scale-95 transition-transform duration-200">
                <span className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background group-hover:bg-primary group-hover:text-primary-foreground active:bg-primary active:text-primary-foreground transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </span>
                <span>
                  <div className="text-[10px] text-background/50 uppercase tracking-widest font-semibold">Phone</div>
                  <div className="font-display text-lg font-bold text-background">+91 97457 06208</div>
                </span>
              </a>

              {/* Email item */}
              <a href="mailto:yadhumanoj12@gmail.com" className="flex items-center gap-4 group active:scale-95 transition-transform duration-200">
                <span className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background group-hover:bg-primary group-hover:text-primary-foreground active:bg-primary active:text-primary-foreground transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="break-all">
                  <div className="text-[10px] text-background/50 uppercase tracking-widest font-semibold">Email</div>
                  <div className="font-display text-lg font-bold text-background">yadhumanoj12@gmail.com</div>
                </span>
              </a>

              {/* Based In Location item */}
              <div className="flex items-center gap-4 cursor-default">
                <span className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background">
                  <MapPin className="w-5 h-5" />
                </span>
                <span>
                  <div className="text-[10px] text-background/50 uppercase tracking-widest font-semibold">Based in</div>
                  <div className="font-display text-lg font-bold text-background">Kerala, India · Working worldwide</div>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Formspree Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-800/85 border border-primary/20 shadow-soft rounded-[32px] p-8 lg:p-12 space-y-6 text-left"
          >
            {/* Input grid */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Name field */}
              <label className="block w-full">
                <span className="text-sm text-white/70 mb-2 block font-medium">Your name</span>
                <input
                  required
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  maxLength={100}
                  className="w-full bg-white border border-white/20 rounded-3xl py-3 px-4 text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-base"
                />
              </label>

              {/* Email field */}
              <label className="block w-full">
                <span className="text-sm text-white/70 mb-2 block font-medium">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  maxLength={255}
                  className="w-full bg-white border border-white/20 rounded-3xl py-3 px-4 text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-base"
                />
              </label>

              {/* Phone field */}
              <label className="block w-full">
                <span className="text-sm text-white/70 mb-2 block font-medium">Phone Number</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  maxLength={20}
                  className="w-full bg-white border border-white/20 rounded-3xl py-3 px-4 text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-base"
                />
              </label>
            </div>

            {/* Select Dropdown field */}
            <label className="block w-full">
              <span className="text-sm text-white/70 mb-2 block font-medium">Project type</span>
              <div className="relative">
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-white border border-white/20 rounded-3xl py-3 px-4 text-slate-950 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer text-base"
                >
                  <option className="bg-foreground text-background">Static website</option>
                  <option className="bg-foreground text-background">Dynamic web app</option>
                  <option className="bg-foreground text-background">E-commerce</option>
                  <option className="bg-foreground text-background">Mobile app</option>
                  <option className="bg-foreground text-background">Custom build</option>
                  <option className="bg-foreground text-background">Redesign</option>
                  <option className="bg-foreground text-background">Not sure yet</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">
                  ▼
                </div>
              </div>
            </label>

            {/* Textarea field */}
            <label className="block w-full">
              <span className="text-sm text-white/70 mb-2 block font-medium">Tell us about your project</span>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={2000}
                placeholder="A few lines about goals, audience and timeline…"
                className="w-full bg-white border border-white/20 rounded-3xl py-3 px-4 text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none text-base"
              />
            </label>

            {/* Alert Notifications */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl text-sm font-semibold border ${
                  status.type === 'success' 
                    ? "bg-green-500/10 border-green-500/30 text-green-300" 
                    : "bg-red-500/10 border-red-500/30 text-red-300"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={submitting}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-glow active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Start a Project"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}


