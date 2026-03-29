const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-black/40">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#home" className="font-display text-2xl font-black text-white group">
            Dương<span className="text-primary group-hover:text-secondary transition-colors">.</span>
          </a>
          <p className="text-muted-foreground text-sm mt-3 font-medium">
            International Business Economics Student at FTU
          </p>
        </div>

        <div className="flex gap-10">
          <a href="#about" className="text-xs font-black text-white/50 hover:text-primary uppercase tracking-widest transition-colors">About</a>
          <a href="#projects" className="text-xs font-black text-white/50 hover:text-primary uppercase tracking-widest transition-colors">Projects</a>
          <a href="#contact" className="text-xs font-black text-white/50 hover:text-primary uppercase tracking-widest transition-colors">Contact</a>
        </div>

        <div className="text-right">
          <p className="text-xs font-black text-white/30 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Thuỳ Dương. All rights reserved.
          </p>
          <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest mt-2">
            Built with Passion & Precision
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
