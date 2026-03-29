import { motion } from "framer-motion";
import { Search, Calendar, FileText, TrendingUp } from "lucide-react";

const services = [
  { icon: Search, title: "Research & Analysis", desc: "Market research, data analysis, and structured reporting for business insights" },
  { icon: Calendar, title: "Event Organization", desc: "End-to-end planning, coordination, and execution of events and activities" },
  { icon: FileText, title: "Content Development", desc: "Creating impactful content for presentations, reports, and communications" },
  { icon: TrendingUp, title: "Business Support", desc: "Basic marketing, operations assistance, and logistics coordination" },
];

const ServicesSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-black text-xs uppercase tracking-[0.3em]">Services</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4">What I Can Contribute</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center hover:border-primary/50 hover:-translate-y-2 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(0,242,254,0.2)]">
              <s.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-bold font-sans text-white mb-3 uppercase tracking-tight">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
