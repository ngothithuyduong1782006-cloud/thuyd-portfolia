import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6">
      <nav
        className={`container mx-auto max-w-5xl transition-all duration-500 ${scrolled ? "glass-nav py-3 px-8 shadow-2xl" : "py-5 px-6 bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="font-display text-2xl font-black text-white group relative -top-[2px] -left-2 transition-all hover:scale-105 active:scale-95">
            Dương<span className="text-primary group-hover:text-secondary transition-colors">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-xs font-black uppercase tracking-widest transition-all hover:scale-110 active:scale-95 py-1",
                    isActive ? "text-primary drop-shadow-[0_0_8px_rgba(0,242,254,0.5)]" : "text-white/70 hover:text-primary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(0,242,254,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-black text-xs font-black uppercase tracking-widest hover:bg-secondary hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,242,254,0.3)]"
          >
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 glass-card border-white/20"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-6 right-6 md:hidden glass-card p-6 border-white/10"
            >
              <div className="flex flex-col gap-4 text-center">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "relative text-sm font-black uppercase tracking-widest py-2 transition-all mx-auto",
                        isActive ? "text-primary drop-shadow-[0_0_8px_rgba(0,242,254,0.5)]" : "text-white/80 hover:text-primary"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavMobile"
                          className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        />
                      )}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-black text-xs font-black uppercase tracking-widest"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
