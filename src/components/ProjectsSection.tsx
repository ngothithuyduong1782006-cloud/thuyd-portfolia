import { motion } from "framer-motion";
import { Heart, Camera, Users, ExternalLink } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import projectSmileImg from "@/assets/project-smile.jpg";

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-black text-xs uppercase tracking-[0.3em]">Projects</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Social Impact Work</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto mt-6 rounded-full" />
      </motion.div>

      <GlassCard className="max-w-5xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12">
          {/* Content Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-10 border-b border-white/5 relative overflow-hidden">
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white italic">"Lưu dấu nụ cười" Project</h3>
                  <p className="text-primary font-bold text-sm mt-3 uppercase tracking-[0.2em]">External Relations & Organizer · 2024 – 2025</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            </div>

            <div className="p-8 md:p-10 space-y-8 relative z-10">
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Heart, title: "Fundraising", desc: "Organized F&B sales" },
                  { icon: Users, title: "Outreach", desc: "Social center contact" },
                  { icon: Camera, title: "Events", desc: "Kids' photography" },
                ].map((item, i) => (
                  <GlassCard key={i} className="text-center p-5 bg-white/5 border border-white/5 group/item cursor-default">
                    <item.icon className="w-6 h-6 text-secondary mx-auto mb-3 group-hover/glass:scale-110 transition-transform" />
                    <h4 className="font-display font-bold text-white text-base mb-1 leading-tight tracking-tight group-hover/glass:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground text-[10px] mt-1 leading-relaxed">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-start">
                {["Social Impact", "Leadership", "Coordination"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Image Column */}
          <div className="lg:col-span-5 relative min-h-[300px] overflow-hidden order-1 lg:order-2">
            <img
              src={projectSmileImg}
              alt="Lưu dấu nụ cười project"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20 lg:to-transparent" />
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
);

export default ProjectsSection;
