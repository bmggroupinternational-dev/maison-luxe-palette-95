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
    <header className="fixed top-0 w-full z-50 bg-royal-white/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/assets/logo.png" 
              alt="Maison Luxe by Whistling Woods Logo" 
              className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.href, navigate)}
                className="text-charcoal-gray hover:text-deep-maroon transition-all duration-300 font-medium hover:scale-105 transform"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>info@maisonluxe.tz</span>
              </div>
            </div>
            <Button 
              variant="royal" 
              size="sm"
              onClick={() => navigate("/contact")}
            >
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
          <div className="lg:hidden border-t border-border bg-royal-white">
            <div className="py-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleNavigation(item.href, navigate);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 text-charcoal-gray hover:text-deep-maroon transition-all duration-300 font-medium hover:translate-x-2 transform text-left w-full"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+255 123 456 789</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@maisonluxe.tz</span>
                </div>
                <Button 
                  variant="royal" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    navigate("/contact");
                    setIsMenuOpen(false);
                  }}
                >
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