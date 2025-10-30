import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Code, Smartphone, Palette, Bot, Wrench, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      slug: "web-development",
      description: "Modern, responsive, and high-performance websites built with cutting-edge technologies.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      slug: "mobile-apps",
      description: "Native and cross-platform mobile applications that users love.",
      technologies: ["Flutter", "React Native", "iOS", "Android"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX & Branding Design",
      slug: "ui-ux",
      description: "Beautiful interfaces and design systems that enhance user experience.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Bot,
      title: "AI & Automation Solutions",
      slug: "ai-automation",
      description: "Intelligent tools and workflow automation powered by artificial intelligence.",
      technologies: ["OpenAI", "TensorFlow", "Chatbots", "Process Automation"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Wrench,
      title: "Custom Software Development",
      slug: "software-development",
      description: "Tailored CRMs, dashboards, SaaS tools, and enterprise applications.",
      technologies: ["Full-Stack", "Database Design", "API Development", "Integrations"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud, DevOps & Deployment",
      slug: "cloud-devops",
      description: "Secure hosting, continuous deployment, and infrastructure management.",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              End-to-end digital solutions designed to transform your business and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 group glow-on-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link to={`/services/${service.slug}`}>
                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ServicesPage;
