import React, { useEffect, useRef, useState } from "react";
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
    type: "visitor" | "local" | "monk";
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
  // optional interactive fields
  likedByUser?: boolean;
  userComments?: string[];
}

// original static data (kept intact) now used as initial data
const initialReviews: Review[] = [
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
    images: ['/src/assets/rumtek1.jpg', '/src/assets/rumtek2.jpg'],
    likes: 24,
    comments: 8,
    monastery: 'Rumtek Monastery',
    date: '2 days ago',
    verified: true,
    likedByUser: false,
    userComments: ["This is so true, I had the same experience!"] // ✅ example comment
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
    verified: true,
    likedByUser: false,
    userComments: ["A very thoughtful and important project."]
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
    images: ['/src/assets/rumtek3.jpg', '/src/assets/rumtek4.jpg', '/src/assets/rumtek5.jpg'],
    likes: 31,
    comments: 15,
    monastery: 'Multiple Monasteries',
    date: '3 days ago',
    verified: true,
    likedByUser: false,
    userComments: ["I'm looking forward to trying this too!"]
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
    images: ['/src/assets/rumtek6.jpg'],
    likes: 18,
    comments: 6,
    monastery: 'Pemayangtse Monastery',
    date: '5 days ago',
    verified: true,
    likedByUser: false,
    userComments: ["The sunrise there is truly magical."]
  }
];

const CommunitySection = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'visitor' | 'local' | 'monk'>('all');
  const [showUploadForm, setShowUploadForm] = useState(false);

  // Upload form state
  const [name, setName] = useState('');
  const [monastery, setMonastery] = useState('');
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [rating, setRating] = useState(0);
  const [photos, setPhotos] = useState<File[]>([]); // Changed to store File objects
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Comment UI state
  const [activeCommentBox, setActiveCommentBox] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState<Record<string, string>>({});

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

  const handleLike = (id: string) => {
    setReviews(prev => prev.map(r => {
      if (r.id !== id) return r;
      const currentlyLiked = !!r.likedByUser;
      const newLiked = !currentlyLiked;
      const newLikes = currentlyLiked ? Math.max(0, r.likes - 1) : r.likes + 1;
      return { ...r, likedByUser: newLiked, likes: newLikes };
    }));
  };

  const toggleCommentBox = (id: string) => {
    setActiveCommentBox(prev => (prev === id ? null : id));
  };

  const handlePostComment = (id: string) => {
    const text = (commentInput[id] || '').trim();
    if (!text) return;
    setReviews(prev => prev.map(r => r.id === id ? ({
      ...r,
      comments: r.comments + 1,
      userComments: [...(r.userComments || []), text]
    }) : r));

    setCommentInput(prev => ({ ...prev, [id]: '' }));
    // Do NOT close the comment box immediately after posting, so the user can see their comment.
    // setActiveCommentBox(null); // Removed this line
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setPhotos(files); // Store File objects directly
  };

  // No longer need useEffect for revoking URLs if we're not creating them immediately for preview
  // You might want a separate state for preview URLs if you need them before submission.

  const handleSubmitExperience = () => {
    // Basic validation
    if (!name.trim() || !title.trim() || !story.trim() || !monastery.trim() || rating === 0) {
      alert("Please fill out all required fields and give a rating.");
      return;
    }

    const newReview: Review = {
      id: String(Date.now()),
      user: { name: name.trim(), avatar: '/api/placeholder/40/40', type: 'visitor' },
      rating,
      title: title.trim(),
      content: story.trim(),
      // Create object URLs for display *only when creating the review*
      images: photos.map(file => URL.createObjectURL(file)),
      likes: 0,
      comments: 0,
      monastery: monastery,
      date: 'Just now',
      verified: true,
      likedByUser: false,
      userComments: []
    };

    setReviews(prev => [newReview, ...prev]);

    // Reset form state
    setName('');
    setMonastery('');
    setTitle('');
    setStory('');
    setRating(0);
    photos.forEach(u => URL.revokeObjectURL(u)); // Revoke any existing URLs
    setPhotos([]); // Clear the stored File objects
    setShowUploadForm(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          
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
                    <label className="block text-sm font-semibold text-primary mb-2">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Monastery Visited</label>
                    <select
                      value={monastery}
                      onChange={(e) => setMonastery(e.target.value)}
                      className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent"
                    >
                      <option value="">Select monastery</option>
                      <option>Rumtek Monastery</option>
                      <option>Pemayangtse Monastery</option>
                      <option>Tashiding Monastery</option>
                      <option>Enchey Monastery</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Experience Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Give your experience a title"
                    className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Share Your Story</label>
                  <textarea
                    rows={4}
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Tell us about your experience..."
                    className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-primary">Rating:</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          onClick={() => setRating(star)}
                          className={`h-5 w-5 cursor-pointer ${rating >= star ? 'fill-saffron text-saffron' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoUpload}
                    />
                    <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                      <Camera className="h-4 w-4 mr-2" />
                      Add Photos
                    </Button>
                  </div>
                </div>

                {photos.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {/* Display photo previews from the File objects */}
                    {photos.map((file, i) => (
                      <img key={i} src={URL.createObjectURL(file)} alt={`preview-${i}`} className="rounded-lg object-cover w-full h-32" />
                    ))}
                  </div>
                )}

                <div className="flex space-x-3">
                  <Button
                    className="bg-gradient-to-r from-saffron to-saffron-light text-primary"
                    onClick={handleSubmitExperience}
                  >
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
                              className={`h-4 w-4 ${i < review.rating ? 'fill-saffron text-saffron' : 'text-muted-foreground'}`}
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
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{review.title}</h3>

                <p className="text-muted-foreground leading-relaxed mb-4">{review.content}</p>

                {review.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {review.images.slice(0, 2).map((image, idx) => (
                      <div key={idx} className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <img src={image} alt={`Experience photo ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                    {review.images.length > 2 && (
                      <div className="col-span-2 text-center">
                        <Button variant="outline" size="sm">View {review.images.length - 2} more photos</Button>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Badge variant="outline" className="text-xs">{review.monastery}</Badge>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <button
                      className="flex items-center space-x-1 transition-colors"
                      onClick={() => handleLike(review.id)}
                      aria-pressed={!!review.likedByUser}
                    >
                      <Heart className={`h-4 w-4 cursor-pointer ${review.likedByUser ? 'fill-red-500 text-red-500' : 'hover:text-saffron'}`} />
                      <span>{review.likes}</span>
                    </button>

                    <button
                      className="flex items-center space-x-1 hover:text-saffron transition-colors"
                      onClick={() => toggleCommentBox(review.id)}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{review.comments}</span>
                    </button>
                  </div>
                </div>

                {/* All comments for a review are visible here */}
                {review.userComments && review.userComments.length > 0 && (
                  <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {review.userComments.map((comment, i) => (
                      <p key={i}>💬 {comment}</p>
                    ))}
                  </div>
                )}

                {activeCommentBox === review.id && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={commentInput[review.id] || ''}
                      onChange={(e) => setCommentInput(prev => ({ ...prev, [review.id]: e.target.value }))}
                      placeholder="Write a comment..."
                      className="w-full p-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-saffron focus:border-transparent"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handlePostComment(review.id);
                        }
                      }}
                    />
                    <div className="flex justify-end mt-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-saffron to-saffron-light text-primary"
                        onClick={() => handlePostComment(review.id)}
                      >
                        Post Comment
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
