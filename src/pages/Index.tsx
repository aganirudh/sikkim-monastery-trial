import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, MapPin, Calendar, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const quickStats = [
    { icon: MapPin, label: "25+ Monasteries", value: "Sacred Sites" },
    { icon: Globe, label: "6 Languages", value: "Global Access" },
    { icon: Users, label: "10K+ Visitors", value: "Community" },
    { icon: Calendar, label: "500+ Years", value: "Heritage" },
  ];

  const featuredMonasteries = [
    {
      name: "Rumtek Monastery",
      description: "Seat of the Karmapa with golden stupa",
      image: "/src/assets/monastery-interior.jpg",
      location: "Gangtok"
    },
    {
      name: "Pemayangtse Monastery", 
      description: "17th century with Himalayan views",
      image: "/src/assets/prayer-flags.jpg",
      location: "Pelling"
    },
    {
      name: "Tashiding Monastery",
      description: "Sacred Bumchu festival site",
      image: "/src/assets/hero-monastery.jpg",
      location: "West Sikkim"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      
      {/* Quick Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Monasteries Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Sacred Sites
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover some of Sikkim's most renowned monasteries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredMonasteries.map((monastery, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-accent/90">
                    {monastery.location}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-display">{monastery.name}</CardTitle>
                  <CardDescription>{monastery.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/monasteries">
              <Button size="lg">
                Explore All Monasteries
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Begin Your Spiritual Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether virtual or physical, every journey starts with a single step
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/virtual-tours">
                <Button size="lg" className="group">
                  Start Virtual Tour
                  <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/booking">
                <Button variant="outline" size="lg" className="group">
                  Book Your Visit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
