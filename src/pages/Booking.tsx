import BookingSection from "@/components/BookingSection";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
              Book Your Sacred Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose from our carefully curated spiritual packages. Each journey is designed to provide 
              authentic experiences while respecting the sacred nature of these ancient sites.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <BookingSection />
      </section>
    </div>
  );
};

export default Booking;