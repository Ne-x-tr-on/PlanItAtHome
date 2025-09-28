import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Event Organizer",
      company: "Elite Events Kenya",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      quote: "Piah revolutionized how we manage our events. The payment integration with M-Pesa made everything seamless for our clients. We've seen a 40% increase in bookings since switching."
    },
    {
      name: "David Ochieng",
      role: "Catering Service Provider",
      company: "Taste of Africa Catering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      quote: "Managing my catering business has never been easier. The inventory tracking and booking system help me serve more clients while maintaining quality. Highly recommend!"
    },
    {
      name: "Grace Nyong'o",
      role: "Wedding Planner",
      company: "Elegant Occasions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      quote: "The photo booth feature with QR codes is a game-changer! Couples love how easy it is for guests to access and share wedding photos. It's become one of our signature services."
    },
    {
      name: "James Kiprotich",
      role: "Corporate Event Manager",
      company: "Nairobi Business Hub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      quote: "The voting system for our annual company awards was flawless. Real-time results and fraud protection gave us confidence. Our employees loved the interactive experience."
    },
    {
      name: "Mary Wanjiku",
      role: "DJ & Entertainment",
      company: "Beats & Rhythms",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      quote: "As a DJ, managing my bookings across multiple events was chaotic. Piah's dashboard shows all my gigs, payments, and client communication in one place. Life-saver!"
    },
    {
      name: "Peter Kamau",
      role: "Developer",
      company: "Tech Solutions Ltd",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      quote: "The API integration possibilities are endless. We've built custom solutions for our corporate clients using Piah's robust backend. Excellent documentation and support."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            💬 Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by
            <span className="text-gradient-primary"> Event Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how Piah is transforming events across Africa. From small gatherings to large 
            corporate events, our users are achieving remarkable results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 glass-card glow-effect overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/60" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center fade-in-up">
          <div className="inline-flex items-center justify-center space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div>
              <h3 className="text-2xl font-bold text-primary">4.9/5</h3>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <h3 className="text-2xl font-bold text-primary">50K+</h3>
              <p className="text-sm text-muted-foreground">Happy Users</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <h3 className="text-2xl font-bold text-primary">200K+</h3>
              <p className="text-sm text-muted-foreground">Events Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;