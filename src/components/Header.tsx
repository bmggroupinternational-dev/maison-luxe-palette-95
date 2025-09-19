import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "@/utils/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Suites", href: "/apartments" },
    { 
      label: "Experiences", 
      href: "#experiences",
      submenu: [
        { label: "Royal Members", href: "/royal-members" },
        { label: "Special Offers", href: "#offers" },
        { label: "Relaxing Experiences", href: "#experiences" }
      ]
    },
    { label: "Dining", href: "#restaurant" },
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
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveSubmenu(item.label)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <button
                      onClick={() => handleNavigation(item.href, navigate)}
                      className="text-charcoal-gray/80 hover:text-imperial-burgundy transition-all duration-300 font-medium hover:scale-105 transform relative group px-3 py-2 rounded-lg hover:bg-champagne-gold/5 flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-gold group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeSubmenu === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-royal-white/95 backdrop-blur-xl border border-champagne-gold/20 rounded-lg shadow-luxury py-2 z-50">
                        {item.submenu.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => {
                              handleNavigation(subItem.href, navigate);
                              setActiveSubmenu(null);
                            }}
                            className="w-full text-left px-4 py-3 text-charcoal-gray/80 hover:text-imperial-burgundy hover:bg-champagne-gold/10 transition-all duration-200 font-medium"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href, navigate)}
                    className="text-charcoal-gray/80 hover:text-imperial-burgundy transition-all duration-300 font-medium hover:scale-105 transform relative group px-3 py-2 rounded-lg hover:bg-champagne-gold/5"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-gold group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
                  </button>
                )}
              </div>
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
              className="bg-gradient-imperial text-royal-white font-semibold px-6 py-2 rounded-lg shadow-luxury hover:shadow-imperial hover:scale-105 transition-all duration-300 border border-champagne-gold/20"
              onClick={() => navigate("/booking")}
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
                <div key={index}>
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setActiveSubmenu(activeSubmenu === item.label ? null : item.label);
                      } else {
                        handleNavigation(item.href, navigate);
                        setIsMenuOpen(false);
                      }
                    }}
                    className="block py-3 px-4 text-charcoal-gray/80 hover:text-imperial-burgundy transition-all duration-300 font-medium hover:translate-x-2 transform text-left w-full rounded-lg hover:bg-royal-white/10 flex items-center justify-between"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && activeSubmenu === item.label && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => {
                            handleNavigation(subItem.href, navigate);
                            setIsMenuOpen(false);
                            setActiveSubmenu(null);
                          }}
                          className="block py-2 px-4 text-charcoal-gray/70 hover:text-imperial-burgundy transition-all duration-300 font-medium text-left w-full rounded-lg hover:bg-royal-white/10 text-sm"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
                  className="bg-gradient-imperial text-royal-white font-semibold w-full py-3 rounded-lg shadow-luxury hover:shadow-imperial transition-all duration-300 border border-champagne-gold/20"
                  onClick={() => {
                    navigate("/booking");
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