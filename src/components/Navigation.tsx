import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import valnovaLogo from "@/assets/valnova-logo-new.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Our Firm", href: "#firm" },
    { label: "Services", href: "#services" },
    { label: "Deals", href: "#deals" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex-shrink-0 cursor-pointer"
          >
            <img
              src={valnovaLogo}
              alt="Valnova Partners"
              className="w-[300px] h-[150px]"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <div id="google_translate_element" className="ml-2"></div>
              <Button
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="ml-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-accent"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-accent"
              onClick={() => scrollToSection("#contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
