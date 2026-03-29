import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles, GraduationCap, Languages, Award } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const stats = [
  { icon: GraduationCap, value: "4.0/4.0", label: "GPA" },
  { icon: Languages, value: "8.5", label: "IELTS" },
  { icon: Award, value: "2×", label: "Scholarships" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full border border-primary/5 border-dashed"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase">
                Premium Portfolio 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight text-white"
            >
              I'm Ngô Thị{" "}
              <span className="text-gradient-vibrant block mt-2">
                Thuỳ Dương
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-2xl max-w-2xl leading-relaxed font-light"
            >
              Sophomore at <strong className="text-white font-bold">Foreign Trade University</strong> with a perfect GPA, passionate about optimizing supply chains and logistics processes. Analytical, detail-oriented, and driven to create real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href="#projects"
                className="relative group overflow-hidden px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-block"
              >
                <GlassCard className="px-8 py-4 text-white font-bold transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 text-secondary fill-secondary ml-0.5" />
                    </div>
                    <span>Let's Talk</span>
                  </div>
                </GlassCard>
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-8 pt-6"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-white font-black text-2xl tracking-tighter flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-secondary" />
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-xs uppercase font-bold tracking-widest">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile image area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="/avatar-hero.png"
                alt="Ngô Thị Thuỳ Dương"
                className="w-full h-full object-cover object-[center_15%] transition-all duration-700"
              />
            </div>

            {/* Floating Glass Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-6 top-10 z-20"
            >
              <GlassCard className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                  <GraduationCap className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">GPA 4.0</p>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Academic Ace</p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -left-6 bottom-20 z-20"
            >
              <GlassCard className="p-4 flex items-center gap-3 border-secondary/30">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-[0_0_15px_rgba(112,0,255,0.4)]">
                  <Languages className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">IELTS 8.5</p>
                  <p className="text-secondary text-[10px] font-bold uppercase tracking-widest">Fluent & Global</p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Background decorative shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-12 hidden md:block"
      >
        <div className="flex items-center gap-4 text-white/40 rotate-90 origin-left">
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Scroll Down</span>
          <div className="w-12 h-px bg-white/20" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
