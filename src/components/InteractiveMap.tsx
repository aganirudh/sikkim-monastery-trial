import { useState } from "react";
import { MapPin, Clock, Car, Star, Info, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Monastery {
  id: string;
  name: string;
  location: string;
  coordinates: { lat: number; lng: number };
  description: string;
  highlights: string[];
  travelTime: string;
  nearestTown: string;
  rating: number;
  reviews: number;
  established: string;
  specialFeatures: string[];
}

const monasteries: Monastery[] = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    location: "Gangtok",
    coordinates: { lat: 27.3, lng: 88.58 },
    description: "Seat of the Karmapa, rich murals, golden stupa",
    highlights: ["Golden Stupa", "Tibetan Art", "Karmapa Seat"],
    travelTime: "1 hour from Gangtok",
    nearestTown: "Gangtok",
    rating: 4.8,
    reviews: 342,
    established: "1960s",
    specialFeatures: ["Daily prayers at dawn", "Museum with rare artifacts", "Traditional dance festivals"]
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    location: "Pelling",
    coordinates: { lat: 27.32, lng: 88.21 },
    description: "17th century, breathtaking Himalayan views, famous for wooden art",
    highlights: ["Himalayan Views", "Wooden Sculptures", "Ancient Architecture"],
    travelTime: "2 hours from Gangtok",
    nearestTown: "Pelling",
    rating: 4.9,
    reviews: 187,
    established: "1705",
    specialFeatures: ["Seven-tiered wooden sculpture", "Panoramic Kanchenjunga views", "Pure monks only tradition"]
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    location: "West Sikkim",
    coordinates: { lat: 27.33, lng: 88.26 },
    description: "Known for its Bumchu festival, serene environment",
    highlights: ["Bumchu Festival", "Sacred Water", "Peaceful Setting"],
    travelTime: "3 hours from Gangtok",
    nearestTown: "Yuksom",
    rating: 4.7,
    reviews: 124,
    established: "1717",
    specialFeatures: ["Holy water ceremony", "Pilgrimage site", "River confluence location"]
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    location: "Gangtok",
    coordinates: { lat: 27.34, lng: 88.61 },
    description: "Famous for mask dance festivals",
    highlights: ["Mask Dances", "City Views", "Tantric Buddhism"],
    travelTime: "30 minutes from Gangtok center",
    nearestTown: "Gangtok",
    rating: 4.6,
    reviews: 98,
    established: "1909",
    specialFeatures: ["Annual Cham dance", "Protective deities", "Urban monastery experience"]
  },
  {
    id: "ralang",
    name: "Ralang Monastery",
    location: "South Sikkim",
    coordinates: { lat: 27.23, lng: 88.53 },
    description: "Vibrant festivals, new and old monastery complex",
    highlights: ["Festival Complex", "Modern Architecture", "Sacred Relics"],
    travelTime: "2.5 hours from Gangtok",
    nearestTown: "Ravangla",
    rating: 4.5,
    reviews: 76,
    established: "1975 (new), 1768 (old)",
    specialFeatures: ["Dual monastery complex", "Kagyupa tradition", "Mountain backdrop"]
  }
];

const InteractiveMap = () => {
  const [selectedMonastery, setSelectedMonastery] = useState<Monastery | null>(monasteries[0]);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('map');

  return (
    <section className="py-20 px-4 bg-gradient-heritage">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Sacred Sites of Sikkim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the spiritual landscape with detailed monastery locations, travel routes, and cultural insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map/List View */}
          <div className="lg:col-span-2">
            <Card className="card-heritage h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading text-2xl text-primary flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-saffron" />
                    Monastery Locations
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant={viewMode === 'map' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('map')}
                      className="bg-primary text-primary-foreground"
                    >
                      Map View
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="bg-primary text-primary-foreground"
                    >
                      List View
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {viewMode === 'map' ? (
                  <div className="relative h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-xl overflow-hidden">
                    {/* Simplified Map Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-md">
                        {monasteries.map((monastery, index) => (
                          <div
                            key={monastery.id}
                            className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 ${
                              selectedMonastery?.id === monastery.id ? 'z-10' : ''
                            }`}
                            style={{
                              left: `${20 + (index * 15)}%`,
                              top: `${20 + (index * 12)}%`,
                            }}
                            onClick={() => setSelectedMonastery(monastery)}
                          >
                            <div className={`relative ${
                              selectedMonastery?.id === monastery.id 
                                ? 'animate-pulse' 
                                : ''
                            }`}>
                              <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                                selectedMonastery?.id === monastery.id 
                                  ? 'bg-saffron' 
                                  : 'bg-primary'
                              }`}></div>
                              {selectedMonastery?.id === monastery.id && (
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
                                  {monastery.name}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                        
                        {/* Map Features */}
                        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                          <div className="bg-white/90 p-2 rounded">
                            <div className="flex items-center space-x-2 mb-1">
                              <div className="w-3 h-3 bg-primary rounded-full"></div>
                              <span>Major Monasteries</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-saffron rounded-full"></div>
                              <span>Selected</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 h-full overflow-y-auto">
                    {monasteries.map((monastery) => (
                      <Card
                        key={monastery.id}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-saffron ${
                          selectedMonastery?.id === monastery.id 
                            ? 'ring-2 ring-saffron bg-accent/30' 
                            : ''
                        }`}
                        onClick={() => setSelectedMonastery(monastery)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-heading text-lg font-semibold text-primary">
                              {monastery.name}
                            </h3>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-saffron text-saffron" />
                              <span className="text-sm font-medium">{monastery.rating}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm mb-2">
                            {monastery.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {monastery.travelTime}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {monastery.nearestTown}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Monastery Details */}
          <div>
            {selectedMonastery && (
              <Card className="card-heritage animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-xl text-primary">
                      {selectedMonastery.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-saffron text-saffron" />
                      <span className="font-semibold">{selectedMonastery.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({selectedMonastery.reviews})
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{selectedMonastery.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      Quick Facts
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Established:</span>
                        <span>{selectedMonastery.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Nearest Town:</span>
                        <span>{selectedMonastery.nearestTown}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Travel Time:</span>
                        <span>{selectedMonastery.travelTime}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMonastery.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Special Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {selectedMonastery.specialFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-saffron mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-to-r from-saffron to-saffron-light text-primary hover:shadow-saffron transition-all duration-300">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1 border-saffron text-saffron hover:bg-saffron hover:text-primary">
                      <Car className="h-4 w-4 mr-2" />
                      Plan Route
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;