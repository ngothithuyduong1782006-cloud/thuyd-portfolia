import { motion } from "framer-motion";
import { Brain, Target, Eye, Users } from "lucide-react";

const traits = [
  { icon: Brain, label: "Analytical Mindset", desc: "Logical and data-driven approach to problem-solving" },
  { icon: Target, label: "Detail-Oriented", desc: "Meticulous attention to detail in every task" },
  { icon: Eye, label: "Rational Thinking", desc: "Structured decision-making with clear reasoning" },
  { icon: Users, label: "Team Player", desc: "Effective collaboration and coordination skills" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">About Me</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
          Get to Know Me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div {...fadeInUp} className="space-y-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a sophomore at <strong className="text-foreground">Foreign Trade University (FTU)</strong>, majoring in
            International Business Economics. With an <strong className="text-foreground">ISTJ-T personality</strong>, I
            bring a logical, structured, and responsible approach to everything I do.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            My career interest lies in <strong className="text-foreground">Logistics & Supply Chain Management</strong>,
            where I aim to gain hands-on experience and secure a professional role after graduation. I'm passionate about
            optimizing processes and creating efficient systems.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Beyond academics, I actively contribute to social impact projects, event organization, and research — building
            a well-rounded foundation for my career ahead.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background rounded-xl p-5 border border-border hover:border-secondary transition-colors group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <trait.icon className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{trait.label}</h3>
              <p className="text-muted-foreground text-xs">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
