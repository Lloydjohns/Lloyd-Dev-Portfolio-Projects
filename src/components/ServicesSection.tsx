import { Code, Zap, Workflow, Database, Globe, Cpu } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. From landing pages to complex platforms.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Streamline your workflows with intelligent automation. Save time and reduce errors with custom solutions.",
  },
  {
    icon: Workflow,
    title: "API Integration",
    description:
      "Connect your systems seamlessly. Custom API development and third-party integrations for unified workflows.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Scalable and efficient database architectures. From PostgreSQL to MongoDB, optimized for your needs.",
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description:
      "Full-featured online stores with payment processing, inventory management, and analytics.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description:
      "Leverage artificial intelligence to enhance your applications with smart features and automation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            WHAT I DO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services & Expertise
          </h2>
          <p className="text-muted-foreground">
            Comprehensive solutions for your digital needs, from concept to deployment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
