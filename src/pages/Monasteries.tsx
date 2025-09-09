import InteractiveMap from "@/components/InteractiveMap";

const Monasteries = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
              Sacred Monasteries of Sikkim
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the spiritual heart of the Himalayas. Explore detailed information about each monastery, 
              plan your routes, and learn about their rich cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16">
        <InteractiveMap />
      </section>
    </div>
  );
};

export default Monasteries;