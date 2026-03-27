import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Research & Development Member",
    org: "Social Business Creation Community (FIIS - FTU)",
    period: "2024 – 2025",
    points: [
      "Conducted research and developed content for social impact business events",
      "Worked with speakers and industry experts",
      'Contributed to Talkshow: "The Niche Edge: Transforming Ideas into Impactful Ventures"',
      "Contributed to Course: Impact Business Station 2025",
    ],
  },
  {
    role: "Leader",
    org: "IELTS4all",
    period: "2023 – 2024",
    points: [
      "Planned and coordinated teaching activities",
      "Developed learning content for students",
      "Led fundraising initiatives",
      '25 students engaged, raised 35 million VND for "Hope Bookshelf" project',
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Experience</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Where I've Contributed</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl border border-border p-6 md:p-8 hover:border-secondary transition-colors"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{exp.role}</h3>
                <p className="text-secondary font-semibold text-sm">{exp.org}</p>
                <p className="text-muted-foreground text-xs mt-1">{exp.period}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {exp.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
