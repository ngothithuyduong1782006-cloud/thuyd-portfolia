import { motion } from "framer-motion";

const skills = [
  { name: "English (IELTS 8.5)", level: 95 },
  { name: "Microsoft Office", level: 90 },
  { name: "Research Skills", level: 85 },
  { name: "Presentation Skills", level: 88 },
  { name: "Teamwork", level: 92 },
  { name: "Event Coordination", level: 85 },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Skills</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What I Bring</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-foreground font-semibold text-sm">{skill.name}</span>
              <span className="text-muted-foreground text-sm">{skill.level}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
