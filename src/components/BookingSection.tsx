import { useState } from "react";
import { Calendar, Users, Clock, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    id: "spiritual-weekend",
    title: "Spiritual Weekend",
    duration: "2 Days",
    price: "$299",
    originalPrice: "$399",
    rating: 4.9,
    reviews: 127,
    highlight: "Most Popular",
    description: "Perfect introduction to Sikkim's sacred heritage",
    includes: [
      "Visit 3 major monasteries",
      "Attend a traditional ritual",
      "Guided meditation session",
      "Traditional lunch with monks",
      "Cultural storytelling evening"
    ],
    monasteries: ["Rumtek", "Enchey", "Do Drul Chorten"]
  },
  {
    id: "heritage-explorer",
    title: "Heritage Explorer",
    duration: "5 Days",
    price: "$799",
    originalPrice: "$999",
    rating: 4.8,
    reviews: 89,
    highlight: "Best Value",
    description: "Comprehensive cultural immersion experience",
    includes: [
      "8 monasteries including remote sites",
      "Traditional craft workshops",
      "Himalayan cuisine experiences",
      "Local village homestay (1 night)",
      "Photography masterclass"
    ],
    monasteries: ["Rumtek", "Pemayangtse", "Tashiding", "Enchey", "Ralang", "Khecheopalri", "Dubdi", "Phensang"]
  },
  {
    id: "grand-circuit",
    title: "The Grand Circuit",
    duration: "10 Days",
    price: "$1,899",
    originalPrice: "$2,399",
    rating: 5.0,
    reviews: 43,
    highlight: "Premium Experience",
    description: "Ultimate spiritual and cultural journey",
    includes: [
      "All major monasteries & hidden gems",
      "Local village homestays (3 nights)",
      "Himalayan trekking routes",
      "Private spiritual guide",
      "Exclusive monastery ceremonies",
      "Traditional healing sessions"
    ],
    monasteries: ["Complete monastery circuit", "Remote sacred sites", "Ancient caves", "Meditation retreats"]
  }
];

const BookingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedDates, setSelectedDates] = useState<string>("");

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Book Your Sacred Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from carefully curated spiritual experiences designed to connect you with Sikkim's timeless heritage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`card-monastery cursor-pointer transition-all duration-500 ${
                selectedPackage === pkg.id ? 'ring-2 ring-saffron shadow-saffron' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <CardHeader className="relative">
                {pkg.highlight && (
                  <Badge className="absolute -top-3 left-4 bg-gradient-to-r from-saffron to-saffron-light text-primary font-semibold">
                    {pkg.highlight}
                  </Badge>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="font-heading text-2xl text-primary mb-2">
                      {pkg.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <Star className="h-4 w-4 fill-saffron text-saffron" />
                      <span className="font-semibold">{pkg.rating}</span>
                      <span className="text-sm text-muted-foreground">({pkg.reviews})</span>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold font-heading text-primary">
                        {pkg.price}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {pkg.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Monasteries Included
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.monasteries.map((monastery, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {monastery}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Experience Includes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pkg.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-saffron mr-2">•</span>
                          {item}
                        </li>
                      ))}
                      {pkg.includes.length > 3 && (
                        <li className="text-saffron font-medium">
                          +{pkg.includes.length - 3} more experiences
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Interface */}
        {selectedPackage && (
          <Card className="card-heritage animate-fade-in">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-primary flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-saffron" />
                Complete Your Booking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Select Dates
                  </label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent"
                    value={selectedDates}
                    onChange={(e) => setSelectedDates(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Travelers
                  </label>
                  <select className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent">
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>3 Travelers</option>
                    <option>4+ Travelers</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-to-r from-saffron to-saffron-light text-primary px-8 py-3 rounded-xl font-semibold text-lg shadow-saffron hover:shadow-heritage transition-all duration-300 hover:scale-105">
                    Book Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default BookingSection;