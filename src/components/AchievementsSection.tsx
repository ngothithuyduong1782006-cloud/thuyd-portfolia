import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const achievements = [
  { icon: Star, title: "IELTS 8.5", year: "2023", desc: "Outstanding English proficiency score" },
  { icon: Award, title: "Microsoft Office Certification", year: "2024", desc: "Professional certification in Office suite" },
  { icon: Trophy, title: "2× Academic Scholarships", year: "2024–2025", desc: "Excellent Academic Encouragement Scholarships" },
  { icon: Trophy, title: "Excellent Student Award", year: "2025", desc: "First Year at University recognition" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding relative overflow-hidden bg-white/5">
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Achievements</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
          Certifications & Awards
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {achievements.map((a, i) => (
          <GlassCard
            key={a.title}
            className="p-8 text-center transition-all group border-primary/20"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(112,0,255,0.2)]">
              <a.icon className="w-8 h-8 text-secondary group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight">{a.title}</h3>
            <p className="text-primary text-xs font-black mt-2 tracking-widest">{a.year}</p>
            <p className="text-muted-foreground text-xs mt-4 leading-relaxed">{a.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>

    {/* Background accent */}
    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
  </section>
);

export default AchievementsSection;
