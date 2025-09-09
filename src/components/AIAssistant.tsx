import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "How many hours does it take to explore Rumtek Monastery?",
  "Best time of year to visit Sikkim monasteries?",
  "Minimum days needed to cover major monasteries?",
  "What's the dress code for monastery visits?",
  "Are photography restrictions in monasteries?",
  "Which monasteries offer meditation sessions?"
];

const botResponses: Record<string, string> = {
  "rumtek": "Rumtek Monastery typically takes 2-3 hours to explore fully. This includes time to visit the main assembly hall, view the golden stupa, admire the intricate murals, and spend quiet moments in meditation. I'd recommend allowing extra time during festivals when special ceremonies take place.",
  "best time": "The best time to visit Sikkim monasteries is March-June and September-November. During these months, you'll enjoy pleasant weather, clear mountain views, and many festivals. Avoid monsoon season (July-August) due to heavy rains and potential landslides.",
  "minimum days": "For major monasteries, I recommend at least 5 days to cover the main sites comfortably. For a comprehensive spiritual journey including remote monasteries and cultural experiences, plan for 10+ days. This allows time for meaningful interactions and reflection.",
  "dress code": "Monasteries require modest dress - cover shoulders and knees. Remove shoes before entering prayer halls. Avoid bright colors; earth tones are preferred. Many monasteries require silence in certain areas, and always walk clockwise around stupas and prayer wheels.",
  "photography": "Photography policies vary by monastery. Most allow exterior photos, but flash photography and photos of sacred statues/murals are often prohibited. Always ask permission from monks or guides. Some monasteries charge a small photography fee.",
  "meditation": "Several monasteries offer guided meditation sessions: Rumtek has daily morning sessions, Pemayangtse offers weekend retreats, and Tashiding provides silent meditation during festivals. Contact monasteries in advance to arrange authentic spiritual experiences."
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Namastey! I'm your AI travel assistant for Sikkim's monasteries. I can help with planning your spiritual journey, monastery information, cultural etiquette, and travel logistics. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simple bot response logic
    setTimeout(() => {
      let response = "I'd be happy to help you with that! For specific monastery details, booking assistance, or travel planning, our team can provide personalized recommendations based on your interests and schedule.";
      
      const lowerContent = content.toLowerCase();
      if (lowerContent.includes('rumtek') || lowerContent.includes('hours')) {
        response = botResponses.rumtek;
      } else if (lowerContent.includes('time') || lowerContent.includes('when')) {
        response = botResponses["best time"];
      } else if (lowerContent.includes('days') || lowerContent.includes('minimum')) {
        response = botResponses["minimum days"];
      } else if (lowerContent.includes('dress') || lowerContent.includes('wear')) {
        response = botResponses["dress code"];
      } else if (lowerContent.includes('photo') || lowerContent.includes('camera')) {
        response = botResponses.photography;
      } else if (lowerContent.includes('meditation') || lowerContent.includes('spiritual')) {
        response = botResponses.meditation;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-saffron to-saffron-light text-primary shadow-saffron hover:shadow-heritage transition-all duration-300 hover:scale-110 z-50 ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-heritage z-50 flex flex-col animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-t-lg flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">AI Travel Assistant</CardTitle>
                  <p className="text-sm opacity-90">Your monastery guide</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-saffron text-primary ml-4'
                        : 'bg-muted text-foreground mr-4'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t">
                <p className="text-xs text-muted-foreground mb-3">Popular questions:</p>
                <div className="space-y-2">
                  {suggestedQuestions.slice(0, 3).map((question, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-accent text-xs p-2 w-full text-left justify-start"
                      onClick={() => handleQuestionClick(question)}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t flex-shrink-0">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about monasteries, travel tips..."
                  className="flex-1 p-2 border border-border rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent text-sm"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && inputMessage.trim()) {
                      handleSendMessage(inputMessage.trim());
                    }
                  }}
                />
                <Button
                  size="sm"
                  onClick={() => {
                    if (inputMessage.trim()) {
                      handleSendMessage(inputMessage.trim());
                    }
                  }}
                  className="bg-saffron text-primary hover:bg-saffron-dark"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIAssistant;