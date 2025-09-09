import { useState } from "react";
import { Star, Camera, Heart, MessageCircle, Upload, Filter } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
    type: 'visitor' | 'local' | 'monk';
  };
  rating: number;
  title: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  monastery: string;
  date: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: '1',
    user: {
      name: 'Anjali Sharma',
      avatar: '/api/placeholder/40/40',
      type: 'visitor'
    },
    rating: 5,
    title: 'Breathtaking spiritual experience at Rumtek',
    content: 'Rumtek was absolutely breathtaking! The murals are even more vivid in person than in photos. The virtual tour on this platform helped me plan my visit perfectly - I knew exactly what to expect and which areas to focus on. The monks were incredibly welcoming and shared beautiful stories about the monastery\'s history.',
    images: ['/api/placeholder/300/200', '/api/placeholder/300/200'],
    likes: 24,
    comments: 8,
    monastery: 'Rumtek Monastery',
    date: '2 days ago',
    verified: true
  },
  {
    id: '2',
    user: {
      name: 'Tenzin Dorji',
      avatar: '/api/placeholder/40/40',
      type: 'monk'
    },
    rating: 5,
    title: 'Grateful for preserving our heritage',
    content: 'As a monk who has spent years at these sacred places, I am deeply grateful for this digital preservation project. It allows people from around the world to connect with our spiritual heritage. Future generations will thank you for this important work. The virtual tours capture the essence beautifully.',
    images: [],
    likes: 45,
    comments: 12,
    monastery: 'Multiple Monasteries',
    date: '1 week ago',
    verified: true
  },
  {
    id: '3',
    user: {
      name: 'Michael Lee',
      avatar: '/api/placeholder/40/40',
      type: 'visitor'
    },
    rating: 5,
    title: 'Perfect spiritual journey with AI guidance',
    content: 'Just completed the Grand Circuit package and it was transformative! The AI guide recommended perfect routes based on my interests in meditation and photography. Every monastery had its unique character, and the local guides shared insights you won\'t find in any guidebook. Already planning my return trip!',
    images: ['/api/placeholder/300/200', '/api/placeholder/300/200', '/api/placeholder/300/200'],
    likes: 31,
    comments: 15,
    monastery: 'Multiple Monasteries',
    date: '3 days ago',
    verified: true
  },
  {
    id: '4',
    user: {
      name: 'Priya Patel',
      avatar: '/api/placeholder/40/40',
      type: 'visitor'
    },
    rating: 4,
    title: 'Pemayangtse views are otherworldly',
    content: 'The sunrise view of Kanchenjunga from Pemayangtse monastery is something that will stay with me forever. The wooden sculptures inside are masterpieces of craftsmanship. Highly recommend staying overnight in Pelling to catch the early morning prayers.',
    images: ['/api/placeholder/300/200'],
    likes: 18,
    comments: 6,
    monastery: 'Pemayangtse Monastery',
    date: '5 days ago',
    verified: true
  }
];

const CommunitySection = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'visitor' | 'local' | 'monk'>('all');
  const [showUploadForm, setShowUploadForm] = useState(false);

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.user.type === selectedFilter);

  const getUserBadgeColor = (type: string) => {
    switch (type) {
      case 'monk': return 'bg-gradient-to-r from-saffron-dark to-saffron text-primary';
      case 'local': return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      default: return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
    }
  };

  const getUserTypeLabel = (type: string) => {
    switch (type) {
      case 'monk': return 'Monk';
      case 'local': return 'Local Guide';
      default: return 'Visitor';
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Community Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your spiritual journey and connect with fellow travelers exploring Sikkim's sacred heritage
          </p>
        </div>

        {/* Filters and Upload */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <div className="flex space-x-2">
              {['all', 'visitor', 'local', 'monk'].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter(filter as any)}
                  className={selectedFilter === filter ? 'bg-primary text-primary-foreground' : ''}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  {filter === 'all' ? ` (${reviews.length})` : ` (${reviews.filter(r => r.user.type === filter).length})`}
                </Button>
              ))}
            </div>
          </div>

          <Button 
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="bg-gradient-to-r from-saffron to-saffron-light text-primary hover:shadow-saffron transition-all duration-300"
          >
            <Upload className="h-4 w-4 mr-2" />
            Share Your Experience
          </Button>
        </div>

        {/* Upload Form */}
        {showUploadForm && (
          <Card className="card-heritage mb-12 animate-fade-in">
            <CardHeader>
              <h3 className="font-heading text-xl text-primary">Share Your Monastery Experience</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Monastery Visited
                    </label>
                    <select className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent">
                      <option>Select monastery</option>
                      <option>Rumtek Monastery</option>
                      <option>Pemayangtse Monastery</option>
                      <option>Tashiding Monastery</option>
                      <option>Enchey Monastery</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Experience Title
                  </label>
                  <input 
                    type="text" 
                    placeholder="Give your experience a title"
                    className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Share Your Story
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your experience..."
                    className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent resize-none"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-primary">Rating:</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-saffron cursor-pointer hover:fill-saffron" />
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                </div>
                
                <div className="flex space-x-3">
                  <Button className="bg-gradient-to-r from-saffron to-saffron-light text-primary">
                    Share Experience
                  </Button>
                  <Button variant="outline" onClick={() => setShowUploadForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredReviews.map((review, index) => (
            <Card key={review.id} className="card-heritage animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={review.user.avatar} alt={review.user.name} />
                      <AvatarFallback>{review.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-primary">{review.user.name}</h4>
                        {review.verified && (
                          <Badge className={`text-xs px-2 py-1 ${getUserBadgeColor(review.user.type)}`}>
                            {getUserTypeLabel(review.user.type)}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < review.rating ? 'fill-saffron text-saffron' : 'text-muted-foreground'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                  {review.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {review.content}
                </p>
                
                {review.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {review.images.slice(0, 2).map((image, idx) => (
                      <div key={idx} className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Experience photo ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {review.images.length > 2 && (
                      <div className="col-span-2 text-center">
                        <Button variant="outline" size="sm">
                          View {review.images.length - 2} more photos
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Badge variant="outline" className="text-xs">
                    {review.monastery}
                  </Badge>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <button className="flex items-center space-x-1 hover:text-saffron transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-saffron transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{review.comments}</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;