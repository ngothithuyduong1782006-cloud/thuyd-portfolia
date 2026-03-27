import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  { icon: Star, title: "IELTS 8.5", year: "2023", desc: "Outstanding English proficiency score" },
  { icon: Award, title: "Microsoft Office Certification", year: "2024", desc: "Professional certification in Office suite" },
  { icon: Trophy, title: "2× Academic Scholarships", year: "2024–2025", desc: "Excellent Academic Encouragement Scholarships" },
  { icon: Trophy, title: "Excellent Student Award", year: "2025", desc: "First Year at University recognition" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding bg-primary">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Achievements</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
          Certifications & Awards
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
          >
            <a.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
            <h3 className="font-display font-bold text-primary-foreground text-sm">{a.title}</h3>
            <p className="text-secondary text-xs font-semibold mt-1">{a.year}</p>
            <p className="text-primary-foreground/70 text-xs mt-2">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
