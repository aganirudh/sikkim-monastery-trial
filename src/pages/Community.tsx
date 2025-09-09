import CommunitySection from "@/components/CommunitySection";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
              Community Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Share your spiritual journey and connect with fellow travelers, locals, and monastery guardians. 
              Your stories help preserve and celebrate this sacred heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <CommunitySection />
      </section>
    </div>
  );
};

export default Community;