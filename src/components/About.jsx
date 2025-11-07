import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, HardHat, PenTool } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I'm a civil engineer specializing in structural design and urban infrastructure. I combine code-driven simulation with field experience to deliver safe, sustainable, and cost-effective projects.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3"><HardHat className="h-5 w-5 text-emerald-300" /> Site supervision & quality assurance</li>
            <li className="flex items-center gap-3"><Ruler className="h-5 w-5 text-emerald-300" /> Structural analysis & detailing</li>
            <li className="flex items-center gap-3"><PenTool className="h-5 w-5 text-emerald-300" /> BIM coordination & documentation</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-6 text-white"
        >
          <h3 className="text-xl font-semibold">Core Tools</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {['ETABS', 'SAFE', 'STAAD', 'SAP2000', 'Revit', 'AutoCAD', 'Navisworks', 'Python'].map((tool) => (
              <div key={tool} className="rounded-lg bg-white/10 px-3 py-2 text-center">{tool}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
