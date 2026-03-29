import { motion } from "framer-motion";
import { Brain, Target, Eye, Users } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import personalityImg from "@/assets/personality-mbti.png";

const traits = [
  { icon: Brain, label: "Analytical Mindset", desc: "Logical and data-driven approach" },
  { icon: Target, label: "Detail-Oriented", desc: "Meticulous attention to every task" },
  { icon: Eye, label: "Rational Thinking", desc: "Structured decision-making" },
  { icon: Users, label: "Team Player", desc: "Effective coordination skills" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">About Me</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
          Get to Know Me
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
        <motion.div {...fadeInUp} className="lg:col-span-6 space-y-8">
          <p className="text-muted-foreground leading-relaxed text-xl font-light">
            I'm a sophomore at <strong className="text-white font-bold">Foreign Trade University</strong>, majoring in
            International Business Economics. With an <strong className="text-secondary font-bold">ISTJ-T personality</strong>, I
            bring a logical, structured, and responsible approach to everything I do.
          </p>
          <p className="text-muted-foreground leading-relaxed text-xl font-light">
            My career interest lies in <strong className="text-primary font-bold">Logistics & Supply Chain Management</strong>,
            where I aim to gain hands-on experience and secure a professional role after graduation.
          </p>

          <GlassCard className="p-6 border-l-4 border-l-primary bg-primary/5">
            <p className="text-white italic font-medium">"I'm passionate about optimizing processes and creating efficient systems that drive real impact."</p>
          </GlassCard>
        </motion.div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-6">
          {traits.map((trait, i) => (
            <GlassCard
              key={trait.label}
              className="p-6 cursor-default h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover/glass:bg-primary group-hover/glass:scale-110 transition-all">
                <trait.icon className="w-6 h-6 text-primary group-hover/glass:text-black transition-colors" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2 leading-tight tracking-tight group-hover/glass:text-primary transition-colors">{trait.label}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{trait.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <motion.div {...fadeInUp} className="w-full">
        <GlassCard className="p-1 md:p-2 bg-white/5 border border-white/5 overflow-hidden rounded-[2.5rem]">
          <div className="rounded-[2.3rem] overflow-hidden bg-white/[0.02]">
            <img
              src={personalityImg}
              alt="Detailed MBTI Personality Profile"
              className="w-full h-auto opacity-95 hover:opacity-100 transition-opacity duration-500 block"
            />
          </div>
        </GlassCard>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1" />
          <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.4em] whitespace-nowrap">Personality Deep Dive · ISTJ-T</p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
