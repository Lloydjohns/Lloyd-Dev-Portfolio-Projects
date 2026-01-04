import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-[100px] animate-pulse-glow animation-delay-400" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-20 h-20 border border-primary/30 rounded-xl rotate-12 animate-float opacity-40" />
      <div className="absolute bottom-40 left-16 w-16 h-16 border border-violet-500/30 rounded-lg -rotate-12 animate-float animation-delay-200 opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Building the future of the web
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in animation-delay-200">
            <span className="text-foreground">Crafting Digital</span>
            <br />
            <span className="text-gradient">Excellence & Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-400">
            I specialize in building high-performance websites and intelligent 
            automation solutions that transform your business operations and 
            accelerate growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <a href="/work">
              View My Work
              <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
              Let's Talk
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-in animation-delay-600">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">99%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">5+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
