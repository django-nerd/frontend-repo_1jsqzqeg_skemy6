import React from 'react';
import { Phone, Mail, Globe, Link as LinkIcon } from 'lucide-react';

export default function HeaderProfile() {
  return (
    <section className="relative z-10 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            SHAMANTH KUMAR HOSABETTU
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-white/85">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> (716) 750-7804</div>
            <a href="mailto:shosabet@buffalo.edu" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="h-4 w-4" /> shosabet@buffalo.edu
            </a>
            <div className="flex items-center gap-2"><Globe className="h-4 w-4" /> Passion_fr_art</div>
            <a href="https://www.linkedin.com/in/shamanthjain" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
              <LinkIcon className="h-4 w-4" /> www.linkedin.com/in/shamanthjain
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
