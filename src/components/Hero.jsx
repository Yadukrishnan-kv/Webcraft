import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Glowing Purple Blurs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur text-xs sm:text-sm text-muted-foreground mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Building digital products that perform</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-foreground text-balance"
          >
            We craft
            <br />
          websites that
            <br />
            <span className="relative inline-block mt-2">
              <span className="gradient-text">drive growth</span>
              <span className="absolute -right-4 top-2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary" />
            </span>
          </motion.h1>

          {/* Paragraph Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl text-balance leading-relaxed"
          >
            CodeCraft is a web development studio designing static, dynamic, and
            fully custom websites built to engage visitors, generate leads, and
            grow your brand.{" "}
          </motion.p>

          {/* Action Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              Let's Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-foreground transition-colors font-semibold"
            >
             Explore Work
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-border/50 pt-8"
          >
            {[
              { n: "100+", l: "Projects" },
              { n: "98%", l: "Lighthouse" },
              { n: "24/7", l: "Support" },
            ].map((stat) => (
              <div key={stat.l} className="flex flex-col">
                <span className="font-display text-3xl lg:text-4xl font-black text-foreground">
                  {stat.n}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.l}
                </span>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* Right Column Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative w-full aspect-square max-w-[480px] lg:max-w-none mx-auto lg:ml-auto px-2 sm:px-0"
        >
          {/* Main Visual Display Card */}
          <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-elegant border border-border/40 bg-surface flex items-center justify-center">
            {/* Visual Abstract Design */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />

            {/* Geometric Glowing Orbital Visual (Replaces static image assets beautifully!) */}
            <div className="relative w-72 h-72 rounded-full border border-primary/20 flex items-center justify-center animate-pulse">
              <div className="absolute w-56 h-56 rounded-full border border-dashed border-primary/30 rotate-45" />
              <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/5 blur-xl" />
              <div className="relative w-30 h-28 rounded-full border-2 border-primary bg-background flex flex-col items-center justify-center p-4 shadow-glow">
                <span className="font-display font-black text-xl text-primary">
                  CodeCraft
                </span>
               
              </div>
            </div>

            {/* Glowing Mesh Dots */}
            {/* <div className="absolute top-10 right-10 flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div> */}

            {/* Absolute Bottom Badge Label */}
            
          </div>

          {/* Floating Widget 1: Performance */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 top-6 sm:-left-6 sm:top-12 bg-background/90 backdrop-blur border border-border rounded-2xl p-3 sm:p-4 shadow-soft"
          >
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
             Static Websites
            </div>
            
          </motion.div>
           <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 bottom-4 sm:-left-6 sm:bottom-12 bg-foreground text-background rounded-2xl p-3 sm:p-4 shadow-glow"
          >
            <div className="text-[10px] text-background/80 uppercase tracking-widest whitespace-nowrap">
           Dynamic Web Apps
            </div>
            
          </motion.div>

            <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-2 top-6 sm:-right-6 sm:top-12 bg-foreground text-background rounded-2xl p-3 sm:p-4 shadow-glow"
          >
            <div className="text-[10px] text-background/80 uppercase tracking-widest whitespace-nowrap">
         Custom Solutions
            </div>
            
          </motion.div>

          {/* Floating Widget 2: SEO */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute right-2 bottom-4 sm:-right-4 sm:bottom-12 bg-background/90 backdrop-blur border border-border rounded-2xl p-3 sm:p-4 shadow-soft"
          >
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
           Mobile Applications
            </div>
          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


