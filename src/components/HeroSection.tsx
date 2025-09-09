import { Button } from "@/components/ui/button";
import { Play, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-monastery.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Majestic Sikkim Monastery in the Himalayas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>
      
      {/* Floating Prayer Flags Animation */}
      <div className="absolute top-10 left-10 w-32 h-8 opacity-60 animate-prayer-flag">
        <div className="flex space-x-1">
          <div className="w-6 h-8 bg-red-500 rounded-sm"></div>
          <div className="w-6 h-8 bg-blue-500 rounded-sm"></div>
          <div className="w-6 h-8 bg-yellow-500 rounded-sm"></div>
          <div className="w-6 h-8 bg-green-500 rounded-sm"></div>
          <div className="w-6 h-8 bg-white rounded-sm"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          From Prayer Flags 
          <span className="block text-saffron">to Pixels</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
          Sikkim's Monasteries for the World
        </p>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Walk inside centuries of wisdom through immersive tours, cultural archives, 
          and spiritual journeys — anytime, anywhere.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-saffron to-saffron-light text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-saffron hover:shadow-heritage transition-all duration-300 hover:scale-105 group"
          >
            <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
            Start a Virtual Tour
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 group"
          >
            <MapPin className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
            Book a Visit
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;