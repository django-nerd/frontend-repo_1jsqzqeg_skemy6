import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Bridge, Building } from 'lucide-react';

const projects = [
  {
    icon: <Building className="h-6 w-6" />,
    title: 'High-Rise Residential Tower',
    description:
      'Seismic-resistant structural design with post-tensioned slabs, BIM coordination, and sustainable MEP integration.',
    tags: ['Seismic Design', 'BIM', 'Sustainability'],
  },
  {
    icon: <Bridge className="h-6 w-6" />,
    title: 'Cable-Stayed Bridge Retrofit',
    description:
      'Fatigue analysis, deck strengthening, and long-term monitoring system for a 320m span urban bridge.',
    tags: ['Retrofit', 'Bridge', 'Monitoring'],
  },
  {
    icon: <Landmark className="h-6 w-6" />,
    title: 'Smart Transit Hub',
    description:
      'Multi-modal terminal with precast modules, daylight optimization, and pedestrian comfort simulations.',
    tags: ['Transit', 'Precast', 'Simulation'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/15 p-6 text-white hover:bg-white/15 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">{p.icon}</div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
