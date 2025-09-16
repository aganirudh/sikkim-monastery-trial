import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Map, Volume2, Globe, Clock, Star, Loader2 } from "lucide-react";

const VirtualTours = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [audioLang, setAudioLang] = useState("english");
  const [loading, setLoading] = useState(false);

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
      difficulty: "Easy",
      tourUrl: "https://www.google.com/maps/embed?pb=!4v1758038690706!6m8!1m7!1sPr4Y5YdcAkJf4rLIs50hUg!2m2!1d27.28732667290907!2d88.56125372801195!3f286.98917850014675!4f-0.5000657199454821!5f0.7820865974627469",
      audioFiles: {
        english: "/RUMTEK-ENGLISH.mp3",
        hindi: "/RUMTEK-HINDI.mp3",
        tibetan: "/audio/rumtek_tibetan.mp3",
        japanese: "/RUMTEK-JAPANESE.mp3",
      },
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
      difficulty: "Moderate",
      tourUrl: "https://app.lapentor.com/sphere/pemayangtse-monastery",
      audioFiles: {
        english: "/P-ENGLISH.mp3",
        hindi: "/P-HINDI.mp3",
        nepali: "/audio/pemayangtse_nepali.mp3",
        french: "/P-FRENCH.mp3",
      },
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
      difficulty: "Easy",
      tourUrl: "https://myvirtualtourlink3.com/embed",
      audioFiles: {
        english: "/audio/tashiding_english.mp3",
        hindi: "/audio/tashiding_hindi.mp3",
        tibetan: "/audio/tashiding_tibetan.mp3",
      },
    },
  ];

  const currentTour = tours.find((t) => t.tourUrl === selectedTour);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
            Virtual Tours
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Immerse yourself in 360° panoramic experiences of Sikkim's sacred monasteries. 
            Walk through centuries of wisdom from anywhere in the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm flex items-center gap-1">
              <Globe className="w-4 h-4" /> 6 Languages
            </Badge>
            <Badge variant="secondary" className="text-sm flex items-center gap-1">
              <Volume2 className="w-4 h-4" /> Audio Narration
            </Badge>
            <Badge variant="secondary" className="text-sm flex items-center gap-1">
              <Map className="w-4 h-4" /> Interactive Navigation
            </Badge>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  onClick={() => {
                    setLoading(true);
                    setSelectedTour(tour.tourUrl);
                    setAudioLang(tour.languages[0].toLowerCase());
                  }}
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
                  <Clock className="w-4 h-4" /> {tour.duration}
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Available Languages:</p>
                  <div className="flex flex-wrap gap-1">
                    {tour.languages.map((lang) => (
                      <Badge key={lang} variant="outline" className="text-xs">{lang}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Tour Highlights:</p>
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">{highlight}</Badge>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full mt-4 group"
                  onClick={() => {
                    setLoading(true);
                    setSelectedTour(tour.tourUrl);
                    setAudioLang(tour.languages[0].toLowerCase());
                  }}
                >
                  Experience Virtual Tour with Guided Audio
                  <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal for Virtual Tour */}
      {selectedTour && currentTour && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="relative w-full max-w-5xl h-[85vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-scaleIn">
            
            {/* Header */}
            <div className="absolute top-0 left-0 right-50 bg-gradient-to-r from-primary/90 to-accent/90 text-white p-4 flex justify-between items-center z-50">
              <h3 className="text-lg font-semibold">{currentTour.name}</h3>
              <button
                className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition"
                onClick={() => setSelectedTour(null)}
              >
                ✕
              </button>
            </div>

            {/* Language Selector */}
            <div className="absolute top-20 left-4 z-50 bg-white/80 rounded-md p-2 shadow">
              <label htmlFor="langSelect" className="text-xs font-medium mr-2">Audio:</label>
              <select
                id="langSelect"
                value={audioLang}
                onChange={(e) => setAudioLang(e.target.value)}
                className="text-xs p-1 rounded border"
              >
                {currentTour.languages.map((lang) => (
                  <option key={lang} value={lang.toLowerCase()}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Loading Spinner */}
        {/* Loader Overlay */}
{loading && (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-40">
    <Loader2 className="w-12 h-12 text-white animate-spin mb-4" />
    <p className="text-white text-lg font-medium animate-pulse">
      Loading Virtual Tour…
    </p>
    <p className="text-white/70 text-sm mt-2">
      Please wait while we prepare your immersive experience
    </p>
  </div>
)}


            {/* Iframe */}
            <iframe
              src={selectedTour}
              frameBorder="0"
              width="100%"
              height="100%"
              className="h-full"
              scrolling="no"
              allow="vr; gyroscope; accelerometer"
              allowFullScreen
              onLoad={() => setLoading(false)}
            />

            {/* Floating Audio Player */}
            <audio
              key={audioLang}
              src={currentTour.audioFiles[audioLang]}
              controls
              autoPlay
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 
                        w-11/12 sm:w-2/3 md:w-2/5 
                        bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualTours;
