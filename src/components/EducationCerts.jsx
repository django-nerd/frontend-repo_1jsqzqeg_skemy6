import React from 'react';

const Section = ({ title, children }) => (
  <section className="relative z-10 py-10">
    <div className="container mx-auto px-6 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="max-w-5xl space-y-6 text-white/90">{children}</div>
    </div>
  </section>
);

export default function EducationCerts() {
  return (
    <>
      <Section title="Entrepreneurship">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6">
          <h3 className="text-xl font-semibold text-white">VARDHAMAN ENTERPRISES.</h3>
          <div className="text-white/80">Business</div>
          <div className="text-sm text-white/70">Manglore, Karnataka, India</div>
          <div className="text-white/80">02/2020-05/2025</div>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Secured and executed first contractual project with structural RCC works, marking the start of entrepreneurial journey in construction.</li>
            <li>Directed a team of 15–20 workers and 2 supervisors, completing 1,500+cum of RCC work in 12 months as per IS codes and achieving successful handover in Feb 2022.</li>
            <li>Managed billing cycles averaging ₹25-30 lakh ($25,000–$35,000) through precise quantity estimations and IS 1200–compliant measurements.</li>
            <li>Expanded scope to include storm-water drains, sewer lines, rainwater harvesting systems, and internal plumbing across a 50-acre site.</li>
            <li>Applied advanced knowledge of IS 456, IS 3370, IS 1742, and CPHEEO guidelines, ensuring compliance with structural, hydraulic, and sanitary engineering standards.</li>
            <li>Generated ₹30-35 lakh ($35,000–$40,000) per billing cycle through validated quantity sheets and detailed rate analyses for HDPE, RCC, and DI pipe installations.</li>
            <li>Strengthened expertise in utility infrastructure, water management systems, and muti-disciplinary coordination, while maintaining strict quality and safety standards.</li>
          </ul>
        </div>
      </Section>

      <Section title="Education">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6 space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-white">University at Buffalo, State University of New York , USA</h3>
            <div className="text-white/80">Aug 2025- Dec 2026</div>
            <div className="text-white/80">Master Science in Civil Engineering</div>
            <div className="text-white/80">Major in Structural, Earthquake and Bridge Engineering</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Alison Education, Remote.</h3>
            <div className="text-white/80">Aug 2024</div>
            <div className="text-white/80">Advanced Diploma in Maintenance and Repair of Concrete Structures | Score: 92</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">NMAMInstitute of Technology, Nitte, Karnataka, India</h3>
            <div className="text-white/80">Aug 2016- Aug 2020</div>
            <div className="text-white/80">Bachelor of Engineering in Civil Engineering | GPA: 3.0</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Alva’s Education Foundation, Karnataka, India</h3>
            <div className="text-white/80">Jun 2014- Mar 2016</div>
            <div className="text-white/80">PUC (PU board Karnataka) | Percentage: 85%</div>
            <div className="text-white/80">Jun 2013- May 2014</div>
            <div className="text-white/80">SSLC (KSE Examination Board) | Percentage: 92%</div>
          </div>
        </div>
      </Section>

      <Section title="Training, Courses and Certification">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Risk Management (Certificate Course):</h3>
            <p className="text-white/90">Identifying, assessing, and prioritizing risks, and implementing strategies to minimize or control their impact on an organization or project. dynamic process that requires ongoing attention and adjustment. It’s a critical aspect of organizational governance and long- term success.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">3D Miniature Modeling (Training):</h3>
            <p className="text-white/90">Creating a detailed, scaled-down representation of a design or structure, capturing its physical and spatial aspects in three dimensions. 3D miniature modeling is a versatile and valuable technique that enhances understanding, communication, and design across various fields.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Advanced Diploma in Maintenance and Repair of Concrete Structures (Certificate Diploma):</h3>
            <p className="text-white/90">Specialized training in techniques and best practices for assessing, preserving, and restoring the integrity of concrete structures, equipping individuals with the knowledge and skills needed to manage infrastructure, diagnose issues, and implement effective repair solutions and maintenance methods.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Traffic Engineering Management & Disaster Management (International Symposium):</h3>
            <p className="text-white/90">Discussion on designing, implementing, and optimizing traffic systems & controls to enhance road safety, reduce congestion. Improve overall transportation efficiency. The strategies and actions taken to prepare for, respond to, recover from, and mitigate the impacts of natural or man-made disaster.</p>
          </div>
        </div>
      </Section>

      <Section title="Research Work">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6 space-y-3">
          <h3 className="text-lg font-semibold text-white">GEOHYDROLOGICAL STUDIES FOR REVIVAL OF 15TH CENTURY KAVOOR LAKE FOR MANGALORE SMART CITY SUSTAINABILITY (Aug 2018- May 2020)</h3>
          <div className="text-white/90">PUBLICATION: INTERNATIONAL RESEARCH JOURNAL OF ENGINEERING AND TECHNOLOGY (https://www.irjet.net/archives/V11/i8/IRJET-V11I886.pdf )</div>
          <ul className="list-disc list-inside space-y-2">
            <li>Conducted delineation and mapping of Kavoor Lake using Google Earth, SOI topo-sheets, Bhuvan, and Total Station, along with depth probing to estimate siltation and storage capacity through capacity contouring.</li>
            <li>Prepared land use/land cover maps and thematic maps (drainage, soil, lithology, water table contours) using image processing and GIS software, integrating GIS analysis with limnological modeling.</li>
            <li>Collected and analyzed rainfall, catchment inflow–outflow, and groundwater fluctuation data from nearby wells, correlating results with geology to study water scarcity issues.</li>
            <li>Carried out sampling and laboratory analysis of lake water at multiple locations and intervals across the year to assess seasonal quality variations.</li>
            <li>Developed a Digital Elevation Model (DEM) of the lake and surroundings for hydrological simulations and sustainable planning.</li>
            <li>Proposed GIS-based sustainable management solutions for Kavoor Lake’s resources under the Mangalore Smart City project.</li>
          </ul>
        </div>
      </Section>

      <Section title="Community">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6 space-y-3">
          <h3 className="text-lg font-semibold text-white">American Society Of Civil Engineering (ASCE):</h3>
          <div className="text-white/90">Member ID: 000011900668 (OCT 2016- Present)</div>
          <ul className="list-disc list-inside space-y-2">
            <li>ASCE provided a platform to connect with other civil engineers, mentors, and industry leaders.</li>
            <li>Through workshops, seminars, and conferences, ASCE helped me stay updated with the latest industry trends, technologies, and best practices. This ongoing education enhanced skills and knowledge.</li>
            <li>Membership in ASCE gave me access to a wealth of resources, including technical papers, industry publications, and software tools. These resources supported my research and work projects.</li>
            <li>ASCE promotes high ethical standards and professional conduct. Being a part of this organization reinforced my commitment to ethical practices in my work.</li>
          </ul>
        </div>
      </Section>

      <Section title="Leadership and Achievements">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6 space-y-2">
          <ul className="list-disc list-inside space-y-2">
            <li>GRADUATE STUDENT ASSISTANT at UBCFA (2025): I began working as a Graduate Student Assistant at the Center for Arts, University at Buffalo, where I contribute to creative art initiatives. I also manage and help organize events conducted under the CFA, ensuring their smooth execution and engagement.</li>
            <li>STAR PERFORMANCE AWARD (2022): Vascon Engineers Ltd recognized my dedication and the significant contributions I made to the company. My efforts were valued for improving project outcomes and supporting team objectives.</li>
            <li>MEDIA AND MARKETING COORDINATOR (2019): I served as the Media & Marketing Coordinator for my college fest, overseeing promotion and publicity for the event. I managed multiple platforms to maximize outreach and ensure strong participation from students and attendees.</li>
            <li>SUPERNUMERIC FELLOWSHIP (2016): I was awarded a fully funded Engineering Degree course by the Government of Karnataka, India in recognition of my academic excellence and high rank achievement.</li>
            <li>INCREDIA COLLEGE FEST (2018): Volunteered during my college fest, actively assisting in organizing events and coordinating various responsibilities. My contributions helped ensure the smooth and successful execution of all programs.</li>
            <li>ANTI-RAGGING SQUAD (2018): I was selected by NMAMIT College to help ensure a safe & harassment-free environment on campus. This role involved actively supporting initiatives and promoting a positive, inclusive atmosphere for all students.</li>
            <li>INCREDIA ART EXHIBITION (2019): The college management recognized my artistic skills and granted me the opportunity to showcase my artworks during the annual fest. This platform allowed me to share my creativity with a wider audience and gain appreciation for my talent.</li>
          </ul>
        </div>
      </Section>

      <Section title="Skills">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6">
          <ul className="list-disc list-inside grid md:grid-cols-2 gap-x-10 gap-y-2">
            <li>Office 365: Software used for creating, organizing, analyzing, and presenting data.</li>
            <li>AutoCADD 2D & 3D: Software used for creating precise 2D and 3D drawings.</li>
            <li>Arc-GIS & QGIS: used to create, analyze, visualize, publish geo-spatial info & share spatial data.</li>
            <li>Revit: BIM for designing, visualizing, and collaborating on building projects.</li>
            <li>ETABS & SAP2000: used for building analysis & design, integrating both structural modeling & analysis.</li>
            <li>MATLAB: numerical computations, simulations, and data analysis in engineering applications.</li>
            <li>Da-Vinci Resolve: Software used for sound and video editing and color grading software.</li>
          </ul>
        </div>
      </Section>

      <Section title="Languages">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6">
          <div className="grid md:grid-cols-3 gap-2">
            <div>English — Proficient</div>
            <div>Kannada — Native</div>
            <div>French — Intermediate</div>
            <div>Tamil — Advanced</div>
            <div>Hindi — Native</div>
            <div>Telugu — Advanced</div>
          </div>
        </div>
      </Section>
    </>
  );
}
