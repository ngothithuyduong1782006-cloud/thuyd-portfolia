import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 border-2 border-secondary rounded text-sm font-semibold text-foreground mb-6">
            Hello There!
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            I'm{" "}
            <span className="accent-underline text-primary">
              Ngô Thị Thuỳ Dương,
            </span>
            <br />
            Aspiring Logistics Professional.
          </h1>

          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            Sophomore at Foreign Trade University with a perfect 4.0/4.0 GPA, passionate about
            Logistics & Supply Chain Management. Analytical, detail-oriented, and driven to make an impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition-all shadow-md"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 rounded-full border-2 border-foreground text-foreground font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary shadow-xl relative z-10">
              <img
                src={profileImg}
                alt="Ngô Thị Thuỳ Dương"
                className="w-full h-full object-cover"
                width={800}
                height={960}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary/30 z-0" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-4 top-1/4 bg-card border border-border rounded-lg px-4 py-2 shadow-lg z-20"
            >
              <span className="text-sm font-semibold text-foreground">GPA 4.0/4.0</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-4 bottom-1/4 bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-lg z-20"
            >
              <span className="text-sm font-semibold">IELTS 8.5</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
