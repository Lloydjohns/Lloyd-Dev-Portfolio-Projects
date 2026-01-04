import { CheckCircle2 } from "lucide-react";

const highlights = [
  "5+ years of professional experience",
  "50+ successful projects delivered",
  "Expertise in modern web technologies",
  "Specialized in automation & integration",
  "Continuous learning & improvement",
  "Clear communication & collaboration",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-violet-500/20 blur-2xl" />
              <div className="absolute inset-4 rounded-2xl glass border border-primary/20" />
              
              {/* Code Block Visual */}
              <div className="absolute inset-8 rounded-xl bg-card/90 p-6 font-mono text-sm overflow-hidden">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <pre className="text-muted-foreground">
                  <code>
{`const developer = {
  name: "Your Name",
  role: "Full Stack Developer",
  passion: "Automation",
  
  skills: [
    "Web Development",
    "API Integration",
    "Process Automation",
    "Database Design"
  ],
  
  status: "Available"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">
              ABOUT ME
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate About Building
              <span className="text-gradient"> Digital Solutions</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a full-stack developer with a deep passion for creating 
              elegant, efficient, and scalable web applications. My journey 
              in tech started over 5 years ago, and since then, I've helped 
              businesses of all sizes transform their digital presence.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Beyond traditional web development, I specialize in automation—
              turning repetitive tasks into streamlined workflows that save 
              time and reduce errors. Whether it's connecting multiple systems 
              through APIs or building custom automation scripts, I love 
              finding ways to make technology work harder for you.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
