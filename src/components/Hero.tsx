import { Button } from "@/components/ui/button";
import { Crown, MapPin, Star, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { smoothScrollTo } from "@/utils/navigation";
import BookingWidget from "@/components/BookingWidget";
// Using one of the uploaded luxury apartment images as hero background

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/bce1d982-9fcf-4c18-a1ac-cd2fc531fd3a.png" 
          alt="Luxury apartment interior at Maison Luxe"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/40 via-charcoal-gray/20 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-20 pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 floating-particles">
                {/* Royal Crown Logo Animation */}
                <div className="flex justify-center lg:justify-start">
                  <div className="crown-float">
                    <Crown className="w-20 h-20 text-champagne-gold drop-shadow-2xl" strokeWidth={1} />
                  </div>
                </div>

                {/* Brand Name with Royal Typography */}
                <div className="space-y-6">
                  <h1 className="text-7xl lg:text-8xl font-playfair font-black leading-none">
                    <span className="text-gradient-imperial block">MAISON</span>
                    <span className="text-gradient-gold block">LUXE</span>
                  </h1>
                  <p className="text-xl font-cormorant font-medium text-champagne-gold/90 uppercase tracking-[0.3em]">
                    BY WHISTLING WOODS
                  </p>
                </div>

                {/* Premium Tagline */}
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-playfair font-semibold text-royal-white leading-tight">
                    Royal Living, <span className="text-gradient-metallic">Redefined</span>
                  </h2>
                  <p className="text-xl text-royal-white/90 max-w-2xl leading-relaxed font-cormorant">
                    Experience unmatched luxury and elegance in our premium royal suites. 
                    Your exclusive sanctuary in the heart of Dodoma, Tanzania.
                  </p>
                </div>

                {/* Location Badge with Royal Styling */}
                <div className="flex items-center justify-center lg:justify-start gap-3 card-glass p-4 rounded-xl w-fit">
                  <MapPin className="w-6 h-6 text-champagne-gold" />
                  <span className="font-cormorant font-medium text-lg text-charcoal-gray">Dodoma, Tanzania</span>
                </div>

                {/* Royal CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                  <Button 
                    className="bg-gradient-imperial text-royal-white font-semibold text-lg px-10 py-6 rounded-xl shadow-imperial hover:shadow-luxury hover:scale-105 transition-all duration-500 relative overflow-hidden group"
                    onClick={() => navigate("/apartments")}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Crown className="w-5 h-5" />
                      Explore Royal Suites
                    </span>
                    <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </Button>
                  <Button 
                    className="bg-gradient-glass backdrop-blur-xl text-charcoal-gray font-semibold text-lg px-10 py-6 rounded-xl border-2 border-champagne-gold/30 hover:border-champagne-gold/60 shadow-glass hover:shadow-gold hover:scale-105 transition-all duration-500"
                    onClick={() => navigate("/contact")}
                  >
                    <span className="flex items-center gap-3 text-gradient-gold">
                      <Star className="w-5 h-5" />
                      Reserve Your Stay
                    </span>
                  </Button>
                </div>

                {/* Royal Trust Indicators */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-royal-white/20">
                  <div className="text-center group luxury-hover">
                    <div className="card-glass p-4 rounded-xl mb-3">
                      <Star className="w-10 h-10 text-champagne-gold mx-auto" />
                    </div>
                    <p className="text-lg font-cormorant font-semibold text-royal-white">5-Star</p>
                    <p className="text-sm text-royal-white/70 font-medium">Luxury</p>
                  </div>
                  <div className="text-center group luxury-hover">
                    <div className="card-glass p-4 rounded-xl mb-3">
                      <Award className="w-10 h-10 text-champagne-gold mx-auto" />
                    </div>
                    <p className="text-lg font-cormorant font-semibold text-royal-white">Premium</p>
                    <p className="text-sm text-royal-white/70 font-medium">Service</p>
                  </div>
                  <div className="text-center group luxury-hover">
                    <div className="card-glass p-4 rounded-xl mb-3">
                      <Crown className="w-10 h-10 text-champagne-gold mx-auto" />
                    </div>
                    <p className="text-lg font-cormorant font-semibold text-royal-white">Royal</p>
                    <p className="text-sm text-royal-white/70 font-medium">Treatment</p>
                  </div>
                </div>
              </div>

            {/* Right Content - Luxury Visual Elements */}
            <div className="hidden lg:block relative">
              <div className="relative h-full flex items-center justify-center">
                {/* Floating Royal Elements */}
                <div className="absolute top-16 right-12 card-premium p-8 luxury-hover floating-particles">
                  <div className="text-center">
                    <Crown className="w-16 h-16 text-champagne-gold mx-auto mb-4 crown-float" />
                    <h3 className="font-playfair font-bold text-xl text-imperial-burgundy mb-2">Royal Suites</h3>
                    <p className="text-charcoal-gray/80 font-cormorant">Available Now</p>
                    <div className="w-12 h-0.5 bg-gradient-gold mx-auto mt-3"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-24 left-8 card-premium p-8 luxury-hover floating-particles">
                  <div className="text-center">
                    <Star className="w-16 h-16 text-champagne-gold mx-auto mb-4 crown-float" />
                    <h3 className="font-playfair font-bold text-xl text-imperial-burgundy mb-2">5-Star Rating</h3>
                    <p className="text-charcoal-gray/80 font-cormorant">Premium Quality</p>
                    <div className="w-12 h-0.5 bg-gradient-gold mx-auto mt-3"></div>
                  </div>
                </div>

                {/* Central Royal Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card-glass p-12 rounded-full luxury-hover">
                  <div className="text-center">
                    <Crown className="w-20 h-20 text-champagne-gold mx-auto mb-4 crown-float" strokeWidth={1} />
                    <h3 className="font-playfair font-bold text-2xl text-gradient-imperial mb-2">ROYAL</h3>
                    <p className="text-charcoal-gray/70 font-cormorant text-lg">EXPERIENCE</p>
                  </div>
                </div>
              </div>
            </div>
         </div>
       </div>
     </div>

      {/* Royal Booking Widget */}
      <div className="relative z-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card-glass backdrop-blur-xl rounded-2xl p-2 border border-royal-white/30 shadow-luxury">
            <BookingWidget />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-royal-white animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-royal-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-royal-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;