const technologies = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Automation" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Next.js", category: "Framework" },
  { name: "Supabase", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "GraphQL", category: "API" },
  { name: "Redis", category: "Cache" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            TECH STACK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground">
            Modern technologies I use to build scalable and efficient solutions
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center hover:glow-sm"
            >
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
