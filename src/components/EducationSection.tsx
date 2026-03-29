import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="text-secondary font-black text-xs uppercase tracking-[0.3em]">Education</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Academic Background</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto mt-6 rounded-full" />
      </motion.div>

      <GlassCard
        className="max-w-4xl mx-auto p-10 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(0,242,254,0.3)]">
            <GraduationCap className="w-10 h-10 text-black" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-white">Foreign Trade University</h3>
            <p className="text-primary font-bold text-lg mt-2 tracking-wide">Bachelor in International Business Economics</p>
            <p className="text-muted-foreground font-medium mt-2">2024 – Present (Expected: 2028)</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
          {[
            { icon: Award, value: "4.0/4.0", label: "GPA Score" },
            { icon: BookOpen, value: "Academic", label: "Excellence" },
            { icon: Award, value: "Excellent", label: "Student Award" },
          ].map((item, i) => (
            <GlassCard key={i} className="flex items-center gap-4 p-6 bg-white/5 border border-white/5 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-white font-black text-lg leading-tight">{item.value}</p>
                <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest mt-1">{item.label}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
      </GlassCard>
    </div>
  </section>
);

export default EducationSection;
