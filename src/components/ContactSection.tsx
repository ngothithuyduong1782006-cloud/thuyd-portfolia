import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="section-padding relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Contact</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Get In Touch</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-black text-white mb-6 italic">Let's connect and build something great!</h3>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "duongntt.sbcyc@gmail.com", href: "mailto:duongntt.sbcyc@gmail.com" },
              { icon: Phone, label: "Phone", value: "+84 353 636 592", href: "tel:+84353636592" },
              { icon: MapPin, label: "Location", value: "Hanoi, Vietnam", href: "#" },
              { icon: Linkedin, label: "LinkedIn", value: "Dương Ngô", href: "https://www.linkedin.com/in/thuyd-860840332/" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-6 group glass-card p-4 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-black tracking-widest leading-none mb-1">{item.label}</p>
                  <p className="text-white font-bold group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 border-white/5 relative overflow-hidden group"
        >
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-white/60 uppercase tracking-widest ml-1">Full Name</label>
                <Input placeholder="Your Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 h-12 rounded-xl transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-white/60 uppercase tracking-widest ml-1">Email Address</label>
                <Input placeholder="your@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 h-12 rounded-xl transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-white/60 uppercase tracking-widest ml-1">Subject</label>
              <Input placeholder="What's this about?" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 h-12 rounded-xl transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-white/60 uppercase tracking-widest ml-1">Message</label>
              <Textarea
                placeholder="Write your message here..."
                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 min-h-[150px] rounded-xl transition-all resize-none"
              />
            </div>
            <Button className="w-full h-14 bg-primary text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-secondary hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_20px_rgba(0,242,254,0.2)]">
              Send Message <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Form background accent */}
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 group-hover:bg-primary/20 transition-all" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
