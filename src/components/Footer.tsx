import { Heart, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import prayerFlagsImage from "@/assets/prayer-flags.jpg";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={prayerFlagsImage} 
          alt="Prayer flags background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="font-heading text-3xl font-bold mb-4">
                  Monastery360
                </h3>
                <p className="text-lg opacity-90 mb-6 max-w-md">
                  "Digitizing today, preserving forever."
                </p>
                <p className="opacity-80 leading-relaxed">
                  Bridging ancient wisdom with modern technology to share Sikkim's sacred heritage 
                  with the world. Every virtual tour, every digital archive, every story shared 
                  helps preserve these treasures for future generations.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-saffron" />
                  <span>info@monastery360.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-saffron" />
                  <span>+91 3592 123456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-saffron" />
                  <span>Gangtok, Sikkim, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#virtual-tours" className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300">
                    Virtual Tours
                  </a>
                </li>
                <li>
                  <a href="#booking" className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300">
                    Book a Visit
                  </a>
                </li>
                <li>
                  <a href="#monasteries" className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300">
                    Monastery Map
                  </a>
                </li>
                <li>
                  <a href="#community" className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300">
                    Community Stories
                  </a>
                </li>
                <li>
                  <a href="#about" className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Links */}
            <div>
              <h4 className="font-heading text-xl font-semibold mb-6">Official Partners</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://sikkim.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300 flex items-center"
                  >
                    Government of Sikkim
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300 flex items-center"
                  >
                    Dept. of Higher & Technical Education
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h4 className="font-heading text-xl font-semibold mb-2">
                  Stay Connected to Sacred Stories
                </h4>
                <p className="opacity-80">
                  Get updates on new virtual tours, festivals, and monastery events
                </p>
              </div>
              
              <div className="flex space-x-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-saffron focus:border-transparent w-64"
                />
                <Button className="bg-gradient-to-r from-saffron to-saffron-light text-primary px-6 hover:shadow-saffron transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 opacity-80">
                <span>© 2024 Monastery360. Made with</span>
                <Heart className="h-4 w-4 text-saffron fill-saffron" />
                <span>for Sikkim's sacred heritage</span>
              </div>
              
              <div className="flex items-center space-x-6 opacity-80">
                <span>Preserving wisdom for future generations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;