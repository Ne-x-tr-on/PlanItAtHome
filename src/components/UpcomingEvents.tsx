import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Kenya Tech Summit 2024",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "KICC, Nairobi",
      attendees: 1200,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      price: "KSh 5,000",
      organizer: "Tech Hub Kenya"
    },
    {
      id: 2,
      title: "East Africa Music Festival",
      date: "2024-03-22",
      time: "06:00 PM",
      location: "Uhuru Gardens, Nairobi",
      attendees: 5000,
      category: "Music",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
      price: "KSh 2,500",
      organizer: "Music Events Africa"
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "2024-03-28",
      time: "02:00 PM",
      location: "iHub, Nairobi",
      attendees: 300,
      category: "Business",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      price: "Free",
      organizer: "Startup Kenya"
    },
    {
      id: 4,
      title: "Cultural Arts Exhibition",
      date: "2024-04-05",
      time: "10:00 AM",
      location: "National Museum, Nairobi",
      attendees: 800,
      category: "Arts & Culture",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      price: "KSh 1,000",
      organizer: "Heritage Foundation"
    },
    {
      id: 5,
      title: "Food & Wine Festival",
      date: "2024-04-12",
      time: "12:00 PM",
      location: "Two Rivers Mall, Nairobi",
      attendees: 2000,
      category: "Food & Drink",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop",
      price: "KSh 3,000",
      organizer: "Culinary Kenya"
    },
    {
      id: 6,
      title: "Youth Leadership Summit",
      date: "2024-04-18",
      time: "08:00 AM",
      location: "University of Nairobi",
      attendees: 600,
      category: "Education",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop",
      price: "KSh 1,500",
      organizer: "Youth Impact Kenya"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Technology': 'bg-blue-100 text-blue-800',
      'Music': 'bg-purple-100 text-purple-800',
      'Business': 'bg-green-100 text-green-800',
      'Arts & Culture': 'bg-pink-100 text-pink-800',
      'Food & Drink': 'bg-orange-100 text-orange-800',
      'Education': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            🎪 Happening Soon
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Upcoming
            <span className="text-gradient-primary"> Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover amazing events happening across Kenya. From tech conferences to music festivals, 
            find your next unforgettable experience.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 glass-card glow-effect overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-sm font-semibold text-primary">{event.price}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {event.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{event.organizer}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Event Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {event.attendees.toLocaleString()} attending
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full mt-4 group-hover:bg-primary-glow transition-all duration-300">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="text-center mt-16 fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Discover More Events</h3>
          <p className="text-muted-foreground mb-6">
            Browse hundreds of events across different categories and locations.
          </p>
          <Button variant="hero" size="lg" className="px-8">
            View All Events
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;