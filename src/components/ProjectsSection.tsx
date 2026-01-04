import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://i.pinimg.com/1200x/22/b5/60/22b5604eca105ae195aa809dc734d071.jpg",
  },
  {
    title: "Workflow Automation Suite",
    description:
      "Enterprise automation tool that reduced manual data entry by 85% for a logistics company.",
    tags: ["Python", "Zapier", "REST APIs", "Webhooks"],
    image: "https://i.pinimg.com/1200x/a0/d3/cf/a0d3cf6c661b56c511e57403f001442f.jpg",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time data visualization and AI-powered insights.",
    tags: ["TypeScript", "React", "D3.js", "Supabase"],
    image: "https://i.pinimg.com/1200x/f8/20/8b/f8208ba1f1b27db332c598cf84633b6b.jpg",
  },
  {
    title: "CRM Integration Hub",
    description:
      "Custom integration connecting 12+ third-party services into a unified CRM platform.",
    tags: ["Node.js", "GraphQL", "Salesforce", "HubSpot"],
    image: "https://i.pinimg.com/1200x/1e/8e/48/1e8e488d0af42dca10198b20bb413608.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of recent work showcasing my expertise in web development 
            and automation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
