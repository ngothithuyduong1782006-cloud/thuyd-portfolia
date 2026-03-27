import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles, GraduationCap, Languages, Award } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { icon: GraduationCap, value: "4.0/4.0", label: "GPA" },
  { icon: Languages, value: "8.5", label: "IELTS" },
  { icon: Award, value: "2×", label: "Scholarships" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-[0.04]"
          style={{ border: "2px solid hsl(var(--primary))" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/3 -right-1/3 w-[1000px] h-[1000px] rounded-full opacity-[0.03]"
          style={{ border: "1px solid hsl(var(--secondary))" }}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/3 w-3 h-3 rounded-full bg-secondary/30"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-primary/20"
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-secondary/20"
        />
        {/* Gradient blob */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/8 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left content — 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-5 h-5 text-secondary" />
              </motion.div>
              <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                Welcome to my portfolio
              </span>
              <div className="h-px flex-1 max-w-[80px] bg-border" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              I'm{" "}
              <span className="relative inline-block">
                <span className="text-primary">Ngô Thị Thuỳ Dương</span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 8 C50 2, 100 2, 150 6 S250 10, 298 4"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                </motion.svg>
              </span>
              <br />
              <span className="text-muted-foreground font-display">
                Aspiring Logistics &<br className="hidden md:block" /> Supply Chain Professional
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
            >
              Sophomore at Foreign Trade University with a perfect GPA, passionate about
              optimizing supply chains and logistics processes. Analytical, detail-oriented,
              and driven to create real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                View Portfolio
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Play className="w-3.5 h-3.5 text-secondary ml-0.5" />
                </div>
                Contact Me
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-6 pt-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-10 bg-border -ml-3 mr-0" />}
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-lg leading-none">{stat.value}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile image area — 5 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px dashed hsl(var(--secondary) / 0.3)",
                  margin: "-16px",
                  width: "calc(100% + 32px)",
                  height: "calc(100% + 32px)",
                }}
              />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl z-10">
                <img
                  src={profileImg}
                  alt="Ngô Thị Thuỳ Dương"
                  className="w-full h-full object-cover"
                  width={800}
                  height={960}
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Background accent circle */}
              <div className="absolute top-6 -right-6 w-full h-full rounded-full bg-secondary/15 -z-10" />

              {/* Floating badge — GPA */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -right-4 md:-right-8 top-8 z-20"
              >
                <div className="bg-card border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-sm">GPA 4.0</p>
                    <p className="text-muted-foreground text-xs">Perfect Score</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — IELTS */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, type: "spring" }}
                className="absolute -left-4 md:-left-8 bottom-16 z-20"
              >
                <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <Languages className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">IELTS 8.5</p>
                    <p className="text-primary-foreground/70 text-xs">Band Score</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — FTU */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, type: "spring" }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-5 z-20"
              >
                <div className="bg-secondary text-secondary-foreground rounded-full px-5 py-2 shadow-xl text-sm font-semibold whitespace-nowrap">
                  🎓 Foreign Trade University
                </div>
              </motion.div>

              {/* Rotating hire-me badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -right-2 md:right-0 bottom-1/3 z-20 w-16 h-16 md:w-20 md:h-20"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="35" fill="hsl(var(--primary))" />
                  <text
                    fill="hsl(var(--primary-foreground))"
                    fontSize="10"
                    fontWeight="bold"
                    letterSpacing="4"
                  >
                    <textPath href="#circlePath">
                      HIRE ME • HIRE ME •{" "}
                    </textPath>
                  </text>
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fill="hsl(var(--primary-foreground))"
                    fontSize="20"
                  >
                    ✦
                  </text>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-muted-foreground/50"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
