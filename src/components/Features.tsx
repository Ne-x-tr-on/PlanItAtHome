import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  CreditCard, 
  Users, 
  Camera, 
  Vote, 
  Ticket, 
  Bell, 
  MapPin,
  Shield,
  Zap,
  Heart,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Event Management",
      description: "Create, manage, and track events with real-time analytics and automated workflows.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Multi-Role Support",
      description: "Organizers, service providers, attendees, and developers - everyone has their perfect dashboard.",
      color: "text-green-600"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Seamless M-Pesa, Stripe, and PayPal integration for secure, instant payments.",
      color: "text-purple-600"
    },
    {
      icon: Camera,
      title: "Photo Booth",
      description: "QR code and geo-location based photo sharing. Guests access event photos instantly.",
      color: "text-pink-600"
    },
    {
      icon: Vote,
      title: "Interactive Voting",
      description: "Real-time voting for contests, activities, and event decisions with live results.",
      color: "text-orange-600"
    },
    {
      icon: Ticket,
      title: "Smart Ticketing",
      description: "QR code tickets, unique links, and digital passes with fraud protection.",
      color: "text-indigo-600"
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Keep everyone updated with event changes, reminders, and important announcements.",
      color: "text-red-600"
    },
    {
      icon: MapPin,
      title: "Location Services",
      description: "GPS integration for event locations, vendor tracking, and attendee navigation.",
      color: "text-teal-600"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with role-based access control and data encryption.",
      color: "text-gray-600"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant synchronization across all devices and platforms for seamless collaboration.",
      color: "text-yellow-600"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Comprehensive reports on bookings, revenue, attendance, and engagement metrics.",
      color: "text-emerald-600"
    },
    {
      icon: Heart,
      title: "Customer Support",
      description: "24/7 dedicated support team with local expertise and multilingual assistance.",
      color: "text-rose-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            ⚡ Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="text-gradient-primary"> Perfect Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From planning to execution, Piah provides comprehensive tools that make event management 
            effortless and enjoyable for everyone involved.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 glass-card glow-effect"
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your events?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of event organizers who trust Piah for their success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary to-primary-glow text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;