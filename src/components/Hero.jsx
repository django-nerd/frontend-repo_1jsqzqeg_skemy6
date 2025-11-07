import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Phone, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-white/90 ring-1 ring-white/20">
            <Building2 className="h-4 w-4" />
            <span className="text-xs">Civil Engineer • Structural & Infrastructure</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Designing resilient structures for a better tomorrow
          </h1>
          <p className="mt-5 text-white/80 text-lg md:text-xl max-w-2xl">
            I bring engineering precision and creative problem-solving to buildings, bridges, and urban infrastructure. Explore my work and let's build something remarkable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-medium shadow-lg shadow-emerald-500/30 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium ring-1 ring-white/20 transition"
            >
              <Phone className="h-4 w-4" /> Contact
            </a>
            <a
              href="mailto:hello@civilengineer.com"
              className="inline-flex items-center gap-2 justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium ring-1 ring-white/20 transition"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
