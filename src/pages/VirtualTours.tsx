import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Map, Volume2, Globe, Clock, Star } from "lucide-react";

const VirtualTours = () => {
  const tours = [
    {
      id: 1,
      name: "Rumtek Monastery",
      description: "Seat of the Karmapa with rich murals and golden stupa",
      duration: "45 minutes",
      rating: 4.9,
      languages: ["English", "Hindi", "Tibetan", "Japanese"],
      image: "/src/assets/monastery-interior.jpg",
      highlights: ["Golden Stupa", "Ancient Murals", "Prayer Hall", "Monk Quarters"],
      difficulty: "Easy"
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      description: "17th century monastery with breathtaking Himalayan views",
      duration: "35 minutes",
      rating: 4.8,
      languages: ["English", "Hindi", "Nepali", "French"],
      image: "/src/assets/prayer-flags.jpg",
      highlights: ["Wooden Art", "Mountain Views", "Sacred Texts", "Meditation Hall"],
      difficulty: "Moderate"
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      description: "Sacred site known for the holy Bumchu festival",
      duration: "40 minutes",
      rating: 4.7,
      languages: ["English", "Hindi", "Tibetan"],
      image: "/src/assets/hero-monastery.jpg",
      highlights: ["Bumchu Vase", "Sacred Lake", "Ancient Chortens", "Festival Grounds"],
      difficulty: "Easy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
              Virtual Tours
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Immerse yourself in 360° panoramic experiences of Sikkim's sacred monasteries. 
              Walk through centuries of wisdom from anywhere in the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm">
                <Globe className="w-4 h-4 mr-2" />
                6 Languages
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Volume2 className="w-4 h-4 mr-2" />
                Audio Narration
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Map className="w-4 h-4 mr-2" />
                Interactive Navigation
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Button
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20"
                  >
                    <Play className="w-6 h-6 text-white" fill="white" />
                  </Button>
                  <Badge className="absolute top-4 right-4 bg-accent/90 text-accent-foreground">
                    {tour.difficulty}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-display">{tour.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Available Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {tour.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Tour Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 group">
                    Start Virtual Tour
                    <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Immersive Experience Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Our virtual tours combine cutting-edge technology with spiritual heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "360° Panoramic Views",
                description: "Full spherical views of monastery interiors"
              },
              {
                icon: Volume2,
                title: "Audio Narration",
                description: "Expert guides in multiple languages"
              },
              {
                icon: Map,
                title: "Interactive Navigation",
                description: "Click hotspots to explore different areas"
              },
              {
                icon: Star,
                title: "Cultural Context",
                description: "Rich historical and spiritual information"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTours;