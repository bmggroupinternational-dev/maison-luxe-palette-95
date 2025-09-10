import { Crown, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-charcoal-gray to-charcoal-gray/90 text-royal-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <Crown className="w-10 h-10 text-light-gold crown-float" strokeWidth={1.5} />
              <div className="font-poppins">
                <h3 className="text-2xl font-bold">
                  <span className="text-gradient-maroon">MAISON</span>{" "}
                  <span className="text-gradient-gold">LUXE</span>
                </h3>
                <p className="text-xs text-royal-white/70 uppercase tracking-wide">
                  BY WHISTLING WOODS
                </p>
              </div>
            </div>
            <p className="text-royal-white/80 text-sm leading-relaxed">
              Your royal address in Tanzania. Experience luxury living redefined with unmatched comfort, 
              elegance, and premium service in the heart of Dodoma.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-royal-white/10 rounded-lg hover:bg-deep-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-royal-white/10 rounded-lg hover:bg-deep-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-royal-white/10 rounded-lg hover:bg-deep-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-light-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-royal-white/80 hover:text-light-gold transition-colors">Home</a></li>
              <li><a href="#apartments" className="text-royal-white/80 hover:text-light-gold transition-colors">Apartments</a></li>
              <li><a href="#amenities" className="text-royal-white/80 hover:text-light-gold transition-colors">Amenities</a></li>
              <li><a href="#location" className="text-royal-white/80 hover:text-light-gold transition-colors">Location</a></li>
              <li><a href="#contact" className="text-royal-white/80 hover:text-light-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-light-gold">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-royal-white/80 hover:text-light-gold transition-colors">Short-term Stays</a></li>
              <li><a href="#" className="text-royal-white/80 hover:text-light-gold transition-colors">Long-term Rentals</a></li>
              <li><a href="#" className="text-royal-white/80 hover:text-light-gold transition-colors">Concierge Service</a></li>
              <li><a href="#" className="text-royal-white/80 hover:text-light-gold transition-colors">Event Hosting</a></li>
              <li><a href="#" className="text-royal-white/80 hover:text-light-gold transition-colors">Corporate Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-light-gold">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-light-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-royal-white/80">Maison Luxe Apartments</p>
                  <p className="text-royal-white/60">Prime Location, Dodoma</p>
                  <p className="text-royal-white/60">Tanzania</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-light-gold" />
                <p className="text-royal-white/80">+255 123 456 789</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-light-gold" />
                <p className="text-royal-white/80">info@maisonluxe.tz</p>
              </div>
            </div>
            
            {/* Operating Hours */}
            <div className="pt-4 border-t border-royal-white/20">
              <h5 className="font-medium text-light-gold mb-2">Reception Hours</h5>
              <p className="text-sm text-royal-white/80">24/7 Available</p>
              <p className="text-xs text-royal-white/60">Royal service, anytime</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-royal-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-royal-white/60">
            <p>&copy; 2024 Maison Luxe by Whistling Woods. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm text-royal-white/60">
            <a href="#" className="hover:text-light-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-light-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-light-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Royal Tagline Bar */}
      <div className="bg-gradient-to-r from-deep-maroon to-deep-gold py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-royal-white font-semibold tracking-wide">
            "Luxury Living. You are Crowned" ✦ Your Royal Address in Tanzania
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;