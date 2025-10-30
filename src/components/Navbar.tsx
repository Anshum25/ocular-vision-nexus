import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-110">
            O
          </div>
          <span className="text-xl font-semibold tracking-tight">Ocular Labs</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-4 mx-6 rounded-lg p-6 space-y-4 animate-fade-in">
          <button onClick={() => scrollToSection("about")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" className="w-full bg-primary hover:bg-primary/90">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
