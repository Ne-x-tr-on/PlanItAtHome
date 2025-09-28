import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Smartphone, Globe } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,99,71,0.15)_1px,transparent_0)] [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left fade-in-up">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              🎉 Africa's Leading Event Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-primary">Transform</span> Your Events with{" "}
              <span className="hero-text">Piah</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              The all-in-one event management platform that connects organizers, service providers, 
              and attendees. From booking to payments, voting to photo sharing - we've got it all.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Started Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button variant="glass" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-200">
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </div>
            
            {/* Download Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center text-sm text-muted-foreground">
                <Globe className="mr-2" size={16} />
                Web Platform
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Smartphone className="mr-2" size={16} />
                Mobile App Coming Soon
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative bounce-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Piah Event Management Platform"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg glass-card">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Live Events</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">1,247 active</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg glass-card">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Bookings Today</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">+89 new</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold text-primary">50K+</h3>
            <p className="text-muted-foreground">Events Managed</p>
          </div>
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold text-primary">200K+</h3>
            <p className="text-muted-foreground">Happy Users</p>
          </div>
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold text-primary">5K+</h3>
            <p className="text-muted-foreground">Service Providers</p>
          </div>
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold text-primary">98%</h3>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;