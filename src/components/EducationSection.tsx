import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

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
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Education</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Academic Background</h2>
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-10"
        style={{ boxShadow: "var(--shadow-elevated)" }}
      >
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">Foreign Trade University</h3>
            <p className="text-secondary font-semibold mt-1">Bachelor in International Business Economics</p>
            <p className="text-muted-foreground text-sm mt-1">2024 – Present (Expected: 2028)</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
            <Award className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-foreground font-bold text-lg">4.0/4.0</p>
              <p className="text-muted-foreground text-xs">GPA</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
            <BookOpen className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-foreground font-bold text-sm">Academic Excellence</p>
              <p className="text-muted-foreground text-xs">Scholarship Recipient</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
            <Award className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-foreground font-bold text-sm">Excellent Student</p>
              <p className="text-muted-foreground text-xs">First Year Award</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
