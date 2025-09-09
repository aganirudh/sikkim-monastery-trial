import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Globe, Users, Shield, Award, BookOpen } from "lucide-react";

const About = () => {
  const stats = [
    { number: "25+", label: "Sacred Monasteries", icon: Heart },
    { number: "6", label: "Languages Supported", icon: Globe },
    { number: "10K+", label: "Visitors Served", icon: Users },
    { number: "500+", label: "Years of Heritage", icon: BookOpen },
  ];

  const team = [
    {
      name: "Dr. Karma Lama",
      role: "Cultural Heritage Director",
      bio: "Buddhist scholar and monastery preservation expert with 20 years of experience.",
      image: "/placeholder.svg"
    },
    {
      name: "Pema Sherpa",
      role: "Local Community Liaison",
      bio: "Born in Sikkim, connecting traditional wisdom with modern digital preservation.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Chen",
      role: "Technology Lead",
      bio: "Specializes in immersive technologies and cultural digitization projects.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
              Preserving Sacred Heritage
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Monastery360 bridges ancient wisdom with modern technology, making Sikkim's 
              spiritual treasures accessible to the world while preserving them for future generations.
            </p>
            <div className="text-2xl font-display text-accent italic mb-8">
              "Digitizing today, preserving forever."
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that sacred spaces and ancient wisdom should be accessible to all, 
                  regardless of physical or geographical limitations. Through cutting-edge technology 
                  and deep respect for Buddhist traditions, we create immersive digital experiences 
                  that honor the spiritual essence of these holy sites.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our work supports local communities, preserves cultural heritage, and promotes 
                  sustainable tourism that benefits both visitors and the monasteries themselves.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cultural Preservation</Badge>
                  <Badge variant="secondary">Sustainable Tourism</Badge>
                  <Badge variant="secondary">Community Support</Badge>
                  <Badge variant="secondary">Digital Innovation</Badge>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/src/assets/monastery-interior.jpg"
                  alt="Monastery Interior"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Impact & Reach
            </h2>
            <p className="text-lg text-muted-foreground">
              Connecting global audiences with Sikkim's spiritual heritage
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Bringing together traditional wisdom and modern innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Working together to preserve and share Sikkim's cultural heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Government of Sikkim",
                description: "Official support and cultural guidance",
                icon: Shield
              },
              {
                name: "Dept. of Higher & Technical Education",
                description: "Educational partnerships and research collaboration",
                icon: BookOpen
              },
              {
                name: "Local Monastery Communities",
                description: "Authentic content and spiritual guidance",
                icon: Heart
              },
              {
                name: "Tourism Board of Sikkim",
                description: "Promoting sustainable and responsible tourism",
                icon: Globe
              },
              {
                name: "UNESCO Cultural Heritage",
                description: "International preservation standards",
                icon: Award
              },
              {
                name: "Local Guide Associations",
                description: "Expert knowledge and community support",
                icon: Users
              }
            ].map((partner, index) => (
              <Card key={index}>
                <CardHeader>
                  <partner.icon className="w-8 h-8 text-accent mb-2" />
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Help us preserve and share Sikkim's spiritual heritage with the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Support Our Work
                <Heart className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Become a Partner
                <Users className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;