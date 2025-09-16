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
             <div className="space-y-8">
               {/* Crown Logo Animation */}
               <div className="flex justify-center lg:justify-start">
                 <div className="crown-float">
                   <Crown className="w-16 h-16 text-light-gold" strokeWidth={1.5} />
                 </div>
               </div>

               {/* Brand Name */}
               <div className="space-y-4">
                 <h1 className="text-6xl lg:text-7xl font-bold font-poppins">
                   <span className="text-gradient-maroon">MAISON</span>
                   <br />
                   <span className="text-gradient-gold">LUXE</span>
                 </h1>
                 <p className="text-lg font-medium text-muted-foreground uppercase tracking-wide">
                   BY WHISTLING WOODS
                 </p>
               </div>

               {/* Tagline */}
               <div className="space-y-6">
                 <h2 className="text-3xl lg:text-4xl font-semibold text-royal-white leading-tight">
                   Luxury Living, <span className="text-gradient-gold">Redefined</span>
                 </h2>
                 <p className="text-xl text-royal-white/90 max-w-2xl leading-relaxed">
                   Experience unmatched comfort and elegance in our premium apartments. 
                   Your royal address in the heart of Dodoma, Tanzania.
                 </p>
               </div>

               {/* Location Badge */}
               <div className="flex items-center justify-center lg:justify-start gap-2 text-light-gold">
                 <MapPin className="w-5 h-5" />
                 <span className="font-medium">Dodoma, Tanzania</span>
               </div>

               {/* CTA Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                 <Button 
                   variant="royal" 
                   size="lg" 
                   className="text-lg px-8 py-6"
                   onClick={() => navigate("/apartments")}
                 >
                   Explore Apartments
                 </Button>
                 <Button 
                   variant="gold-outline" 
                   size="lg" 
                   className="text-lg px-8 py-6"
                   onClick={() => navigate("/contact")}
                 >
                   Book Your Stay
                 </Button>
               </div>

               {/* Trust Indicators */}
               <div className="grid grid-cols-3 gap-6 pt-8 border-t border-royal-white/20">
                 <div className="text-center">
                   <Star className="w-8 h-8 text-light-gold mx-auto mb-2" />
                   <p className="text-sm font-medium text-royal-white">5-Star</p>
                   <p className="text-xs text-royal-white/70">Luxury</p>
                 </div>
                 <div className="text-center">
                   <Award className="w-8 h-8 text-light-gold mx-auto mb-2" />
                   <p className="text-sm font-medium text-royal-white">Premium</p>
                   <p className="text-xs text-royal-white/70">Service</p>
                 </div>
                 <div className="text-center">
                   <Crown className="w-8 h-8 text-light-gold mx-auto mb-2" />
                   <p className="text-sm font-medium text-royal-white">Royal</p>
                   <p className="text-xs text-royal-white/70">Treatment</p>
                 </div>
               </div>
             </div>

           {/* Right Content - Additional Visual Elements */}
           <div className="hidden lg:block">
             <div className="relative">
               {/* Floating Elements */}
               <div className="absolute top-10 right-10 card-royal p-6 royal-hover">
                 <div className="text-center">
                   <Crown className="w-12 h-12 text-deep-gold mx-auto mb-2" />
                   <p className="font-semibold text-deep-maroon">Royal Suites</p>
                   <p className="text-sm text-muted-foreground">Available Now</p>
                 </div>
               </div>
               
               <div className="absolute bottom-20 left-10 card-royal p-6 royal-hover">
                 <div className="text-center">
                   <Star className="w-12 h-12 text-deep-gold mx-auto mb-2" />
                   <p className="font-semibold text-deep-maroon">5-Star Rating</p>
                   <p className="text-sm text-muted-foreground">Premium Quality</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>

      {/* Booking Widget - Fixed positioning */}
      <div className="relative z-20 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <BookingWidget />
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