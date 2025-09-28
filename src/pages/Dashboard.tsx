import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Users, 
  CreditCard, 
  TrendingUp, 
  Settings,
  Bell,
  Search,
  Plus,
  MoreVertical
} from "lucide-react";

const Dashboard = () => {
  const [userRole] = useState("organizer"); // This would come from auth context

  const stats = [
    {
      title: "Total Events",
      value: "24",
      change: "+12%",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Total Attendees",
      value: "3,247",
      change: "+8%",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Revenue",
      value: "KSh 245,000",
      change: "+23%",
      icon: CreditCard,
      color: "text-purple-600"
    },
    {
      title: "Growth Rate",
      value: "18.2%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const recentEvents = [
    {
      id: 1,
      name: "Tech Conference 2024",
      date: "2024-03-15",
      status: "Active",
      attendees: 245,
      revenue: "KSh 45,000"
    },
    {
      id: 2,
      name: "Music Festival",
      date: "2024-03-22",
      status: "Upcoming",
      attendees: 1200,
      revenue: "KSh 120,000"
    },
    {
      id: 3,
      name: "Business Summit",
      date: "2024-03-28",
      status: "Planning",
      attendees: 300,
      revenue: "KSh 30,000"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-navy">Piah</span>
            </div>
            <span className="text-gray-400">|</span>
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button size="sm" variant="outline">
              <Bell className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Settings className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">JD</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Events */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Events</CardTitle>
                <Button size="sm" variant="hero">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {event.status}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {event.attendees} attendees
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{event.revenue}</p>
                        <Button size="sm" variant="ghost">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Notifications */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <Calendar className="w-4 h-4 mr-2" />
                  Create New Event
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Attendees
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <CreditCard className="w-4 h-4 mr-2" />
                  View Payments
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analytics Report
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm">New booking for Tech Conference</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm">Payment received: KSh 5,000</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm">Event reminder sent to attendees</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;