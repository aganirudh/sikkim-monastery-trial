import { useState } from "react";
import { ChevronDown, ChevronRight, Camera, Map, Archive, Calendar, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    id: "virtual-tours",
    icon: Camera,
    title: "Virtual Tours",
    description: "360° panoramic monastery interiors, multi-language narration (English, Hindi, Nepali, Tibetan, Japanese, French).",
    details: "Experience the sacred spaces as if you were there. Our high-resolution 360° cameras capture every intricate detail of murals, sculptures, and architectural elements. Interactive hotspots provide historical context and spiritual significance."
  },
  {
    id: "interactive-map",
    icon: Map,
    title: "Interactive Map",
    description: "Geo-tagged monasteries with routes, travel time, weather, and nearby attractions.",
    details: "Navigate Sikkim's spiritual landscape with precision. Real-time weather updates, estimated travel times, and curated suggestions for nearby cultural sites, restaurants, and accommodations."
  },
  {
    id: "digital-archives",
    icon: Archive,
    title: "Digital Archives",
    description: "Scanned manuscripts, murals, and documents with AI-powered categorization.",
    details: "Preserve and explore centuries of Buddhist wisdom. High-resolution scans of ancient texts, detailed documentation of artwork, and intelligent search capabilities to find specific teachings or historical references."
  },
  {
    id: "cultural-calendar",
    icon: Calendar,
    title: "Cultural Calendar",
    description: "Festivals, rituals, and events with booking/participation options.",
    details: "Never miss a sacred celebration. Track upcoming festivals, understand ritual significance, and book authentic experiences including meditation sessions, traditional ceremonies, and cultural workshops."
  },
  {
    id: "smart-audio",
    icon: Headphones,
    title: "Smart Audio Guide",
    description: "GPS/bluetooth-enabled audio narration, offline mode available.",
    details: "Your personal spiritual guide. Context-aware audio that automatically plays relevant information based on your location. Works offline for remote areas with downloadable content packages."
  }
];

const FeaturesSection = () => {
  const [openFeature, setOpenFeature] = useState<string | null>("virtual-tours");

  return (
    <section className="py-20 px-4 bg-gradient-heritage">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Sacred Technology Meets Ancient Wisdom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how modern innovation preserves and shares the timeless heritage of Sikkim's monasteries
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOpen = openFeature === feature.id;
            
            return (
              <Card 
                key={feature.id}
                className={`card-heritage cursor-pointer transition-all duration-500 ${
                  isOpen ? 'shadow-saffron border-saffron/30' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent 
                  className="p-0"
                  onClick={() => setOpenFeature(isOpen ? null : feature.id)}
                >
                  <div className="flex items-center justify-between p-6 hover:bg-accent/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isOpen 
                          ? 'bg-gradient-to-r from-saffron to-saffron-light text-primary shadow-saffron' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-90' : ''
                    }`}>
                      <ChevronRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 pt-2">
                      <div className="bg-gradient-to-r from-accent/50 to-saffron/10 rounded-xl p-6 border-l-4 border-saffron">
                        <p className="text-foreground leading-relaxed">
                          {feature.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;