import React from 'react';

const Section = ({ title, children }) => (
  <section className="relative z-10 py-10">
    <div className="container mx-auto px-6 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="max-w-5xl space-y-6 text-white/90">{children}</div>
    </div>
  </section>
);

function Item({ heading, subheading, role, location, period, bullets }) {
  return (
    <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h3 className="text-xl font-semibold text-white">{heading}</h3>
          <p className="text-white/80">{subheading}</p>
        </div>
        <div className="text-sm text-white/70">{location}</div>
      </div>
      <div className="mt-2 text-white/80 flex flex-wrap items-center gap-2">
        <span className="font-medium text-white">{role}</span>
        <span className="text-white/50">•</span>
        <span>{period}</span>
      </div>
      <ul className="mt-4 list-disc list-inside space-y-2">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Section title="Experience">
        <Item
          heading="KEC INTERNATIONAL LTD"
          subheading="BHOPAL METRO RAIL & KIRLOSKAR TECH PARK"
          role="Senior Engineer"
          location="Bhopal, Madhya Pradesh, India"
          period="03/2024-07/2025"
          bullets={[
            'Directed construction and design of Viaduct, Girders, Diaphragm walls, Shortcrete works, slope stabilization, Post-tension structures, Piling, and also a Tech park with high-rise buildings (G+25), ensuring timely completion per IS codes and safety standards.',
            'Managed project budgets exceeding ₹330 crore ($40 million) and ₹450 crore ($52 million), delivering Metro rail and Kirloskar Tech park works within financial, quality, and safety constraints.',
            'Led a 4-member reconciliation team, reducing material wastage by 23% and uncovering a ₹15 crore billing discrepancy, strengthening financial accountability.',
            'Conducted rate analysis and prepared comparative vendor evaluations, achieving cost savings and awarding contracts to competent suppliers, resulting in a 2% reduction from the allotted budget.',
            'Performed accurate quantity surveying and reconciliation of reinforcement steel, concrete, shuttering, and other structural resources and reduced scrap by 4% minimizing losses.',
            'Developed project schedules by integrating cost data, resource requirements, and time-lines, supporting on-time execution.',
            'Maintained detailed records of costs, contracts, and quantities, providing stakeholders with budget variation reports and ensuring compliance with IS codes and Metro Rail specifications.',
          ]}
        />

        <Item
          heading="VASCON ENGINEERS LTD"
          subheading="BANGLORE METRO RAIL - BMRCL"
          role="Junior Engineer"
          location="Banglore, Karnataka, India"
          period="10/2020-02/2024"
          bullets={[
            'Oversaw construction till handover of critical heavy metro rail depot infrastructure including stabling shed, internal cleaning shed, RRV shed, pit wheel lathe shed, ancillary buildings, ETU shed and office, CSD works, cable trenches, drains, roads, and earth embankments, ensuring compliance with design standards and timely delivery.',
            'Designed and Executed large-scale facilities such as a Repair and Inspection bay, 2.5-million-liter overhead tank (OHT), 5-million-liter underground tank (UGT), 4000 MT Pre- Engineered Building structures, retaining walls, DCO store, P-way works, and admin/canteen buildings, meeting safety and quality benchmarks.',
            'Prepared Bar Bending Schedules (BBS) and conducted monthly reconciliations for all structures, ensuring accuracy in material usage and maintaining wastage below <2%.',
            'Developed procurement and billing strategies by extracting quantities, estimating contractor/client bills, and aligning procurement with project schedules, resulting in smoother cash flow management with $500Thousand monthly billing.',
            'Planned milestones through quantitative analysis of resources, optimized costs to match budgets, and negotiated with management for timely approvals for its procurement and completed construction of $18.5 million Metro Rail depot.',
            'Acted as a liaison between client and company, presenting progress updates, resolving technical issues, and implementing client-driven modifications to achieve project targets.',
            'Managed subcontractor communications and billing, ensuring compliance with contracts and verifying documentation for accurate client billing submissions.',
          ]}
        />

        <Item
          heading="AKAAR ARCHITECTS"
          subheading="Internship"
          role="Intern"
          location="Udupi, Karnataka, India"
          period="05/2019-06/2019"
          bullets={[
            'Supported design development by generating concepts, producing sketches, and drafting architectural drawings using CAD, BIM, and ETABS software.',
            'Researched building materials, construction methods, and zoning regulations to provide data driven inputs for design decisions and compliance.',
            'Participated in client meetings to gather requirements, present design concepts, and incorporate feedback, contributing to client satisfaction and project alignment.',
          ]}
        />

        <Item
          heading="SATHISH HEGDE. (Govt. chartered engineer)."
          subheading="Part-time Intern"
          role="Intern"
          location="Manglore, Karnataka, India"
          period="01/2020-09/2020"
          bullets={[
            'Developed hand sketches based on client inputs to translate ideas into initial design concepts.',
            'Designed load-bearing structures and produced detailed plans and elevations for residential and commercial buildings using CAD and other design software, aligning with budget constraints.',
            'Created concept designs tailored to client themes and requirements, incorporating functional add-ons and aesthetics.',
            'Prepared area statements and design sketches integrating site conditions and client specifications.',
            'Constructed scaled miniature models of finalized drawings to visualize site-specific design solutions.',
            'Reviewed and incorporated bylaws, NBC, and IS codes into design work, ensuring compliance with statutory and safety standards.',
          ]}
        />
      </Section>
    </>
  );
}
