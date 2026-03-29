import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const skillCategories = [
  {
    title: "Language Proficiency",
    skills: ["IELTS 8.5 (Overall)", "Vietnamese (Native)"],
    icon: Star,
    color: "primary",
  },
  {
    title: "Technical Skills",
    skills: ["Microsoft Office (Specialist)", "Data Analysis", "Research & Development"],
    icon: CheckCircle2,
    color: "secondary",
  },
  {
    title: "Soft Skills",
    skills: ["Critical Thinking", "Analytical mindset", "Planning & Coordination", "Teamwork"],
    icon: Star,
    color: "primary",
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-black/20">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Skills</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Abilities & Expertise</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, i) => (
          <GlassCard
            key={category.title}
            className="p-8 group hover:border-primary/30 transition-all flex flex-col items-center text-center"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${category.color === "primary" ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black" : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-black"
              }`}>
              <category.icon className="w-8 h-8 transition-colors" />
            </div>

            <h3 className="text-xl font-bold font-sans text-white mb-6 uppercase tracking-tight">{category.title}</h3>

            <div className="flex flex-col gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-muted-foreground text-sm font-medium hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${category.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
                  {skill}
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
