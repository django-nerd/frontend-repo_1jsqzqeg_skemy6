import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl rounded-2xl bg-white/10 ring-1 ring-white/20 p-6 text-white grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = data.get('name');
            alert(`Thank you, ${name}! I'll get back to you soon.`);
            e.currentTarget.reset();
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-white/80">Name</label>
              <input id="name" name="name" required className="rounded-lg bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/80">Email</label>
              <input id="email" name="email" type="email" required className="rounded-lg bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@example.com" />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/80">Message</label>
            <textarea id="message" name="message" rows="5" required className="rounded-lg bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tell me about your project" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 justify-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-medium shadow-lg shadow-emerald-500/30 transition w-fit">
            <Send className="h-4 w-4" /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
