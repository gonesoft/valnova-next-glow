const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-['Playfair_Display'] font-bold mb-4">
              VALNOVA <span className="text-secondary">PARTNERS</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Boutique advisory firm specializing in corporate finance, investment management,
              and data science innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Our Firm", "Services", "Deals", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>C/Roberto Pastoriza, No. 457, Villa Palmera Business Center, Local 907-A | Piantini, Santo Domingo. República Dominicana</li>
              <li className="pt-2">
                <a
                  href="mailto:ndiaz@valnovapartners.com"
                  className="hover:text-secondary transition-colors"
                >
                  ndiaz@valnovapartners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Valnova Partners. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Founded in Santo Domingo, September 2019
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
