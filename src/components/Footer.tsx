import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg">
                  O
                </div>
                <span className="text-xl font-semibold">Ocular Labs</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Engineering Digital Excellence. We build elegant, high-performance products that define modern business.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About", "Services", "Portfolio", "Testimonials", "Contact"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
                <li>AI & Automation</li>
                <li>Cloud & DevOps</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Ocular Labs. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
