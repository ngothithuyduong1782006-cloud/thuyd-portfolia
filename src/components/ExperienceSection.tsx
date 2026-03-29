import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

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
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Experience</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Where I've Contributed</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, i) => (
          <GlassCard
            key={i}
            className="p-8 md:p-10 hover:border-primary/40 transition-all relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold font-sans text-white">{exp.role}</h3>
                    <p className="text-primary font-bold text-base mt-1 uppercase tracking-wider">{exp.org}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-4 text-muted-foreground text-base group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(0,242,254,0.6)]" />
                      <span className="group-hover/item:text-white/90 transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -z-10 group-hover:bg-secondary/10 transition-colors" />
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
