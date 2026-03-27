const Footer = () => (
  <footer className="py-8 px-4 border-t border-border bg-background">
    <div className="container mx-auto text-center">
      <p className="font-display text-lg font-bold text-primary">
        Dương<span className="text-secondary">.</span>
      </p>
      <p className="text-muted-foreground text-sm mt-2">
        © {new Date().getFullYear()} Ngô Thị Thuỳ Dương. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
