import { motion } from "framer-motion";
import { Search, Calendar, FileText, TrendingUp } from "lucide-react";

const services = [
  { icon: Search, title: "Research & Analysis", desc: "Market research, data analysis, and structured reporting for business insights" },
  { icon: Calendar, title: "Event Organization", desc: "End-to-end planning, coordination, and execution of events and activities" },
  { icon: FileText, title: "Content Development", desc: "Creating impactful content for presentations, reports, and communications" },
  { icon: TrendingUp, title: "Business Support", desc: "Basic marketing, operations assistance, and logistics coordination" },
];

const ServicesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Services</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What I Can Contribute</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 text-center hover:border-secondary hover:-translate-y-1 transition-all group"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <s.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
