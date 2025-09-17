import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "@/utils/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Apartments", href: "/apartments" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-glass backdrop-blur-xl border-b border-royal-white/20 shadow-glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="crown-float">
              <Crown className="w-8 h-8 text-champagne-gold" strokeWidth={1.5} />
            </div>
            <div className="text-luxury-accent">
              <h1 className="text-2xl font-bold text-gradient-imperial">MAISON LUXE</h1>
              <p className="text-xs text-charcoal-gray/70 tracking-wide uppercase">by Whistling Woods</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.href, navigate)}
                className="text-charcoal-gray/80 hover:text-imperial-burgundy transition-all duration-300 font-medium hover:scale-105 transform relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-charcoal-gray/70">
              <div className="flex items-center gap-2 glass-hover p-2 rounded-lg">
                <Phone className="w-4 h-4 text-deep-gold" />
                <span className="font-medium">+255 123 456 789</span>
              </div>
              <div className="flex items-center gap-2 glass-hover p-2 rounded-lg">
                <Mail className="w-4 h-4 text-deep-gold" />
                <span className="font-medium">info@maisonluxe.tz</span>
              </div>
            </div>
            <Button 
              className="bg-gradient-imperial text-royal-white font-semibold px-6 py-2 rounded-lg shadow-imperial hover:shadow-luxury hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              <Crown className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-charcoal-gray hover:text-deep-maroon transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-royal-white/20 bg-gradient-glass backdrop-blur-xl">
            <div className="py-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleNavigation(item.href, navigate);
                    setIsMenuOpen(false);
                  }}
                  className="block py-3 px-4 text-charcoal-gray/80 hover:text-imperial-burgundy transition-all duration-300 font-medium hover:translate-x-2 transform text-left w-full rounded-lg hover:bg-royal-white/10"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-royal-white/20 space-y-3">
                <div className="flex items-center gap-2 text-sm text-charcoal-gray/70 p-2">
                  <Phone className="w-4 h-4 text-deep-gold" />
                  <span>+255 123 456 789</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-gray/70 p-2">
                  <Mail className="w-4 h-4 text-deep-gold" />
                  <span>info@maisonluxe.tz</span>
                </div>
                <Button 
                  className="bg-gradient-imperial text-royal-white font-semibold w-full py-3 rounded-lg shadow-imperial hover:shadow-luxury transition-all duration-300"
                  onClick={() => {
                    navigate("/contact");
                    setIsMenuOpen(false);
                  }}
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;