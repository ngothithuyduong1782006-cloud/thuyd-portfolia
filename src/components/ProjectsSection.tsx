import { motion } from "framer-motion";
import { Heart, Camera, Users } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Projects</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Social Impact Work</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-card rounded-2xl border border-border overflow-hidden"
        style={{ boxShadow: "var(--shadow-elevated)" }}
      >
        <div className="bg-primary p-6 md:p-8">
          <h3 className="font-display text-2xl font-bold text-primary-foreground">"Lưu dấu nụ cười" Project</h3>
          <p className="text-primary-foreground/80 text-sm mt-1">External Relations & Organizer · 2024 – 2025</p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, title: "Fundraising", desc: "Organized food & beverage sales activities" },
              { icon: Users, title: "Community Outreach", desc: "Contacted social protection centers" },
              { icon: Camera, title: "Events", desc: "Photography sessions & activities for children" },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-muted">
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                <h4 className="font-display font-semibold text-foreground text-sm">{item.title}</h4>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {["Social Impact", "Community Engagement", "Leadership", "Coordination"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
