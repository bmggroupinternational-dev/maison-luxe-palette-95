import { useState, useEffect } from "react";
import { X, Crown, Gift, Star, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LoyaltyProgram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if not shown before
    const timer = setTimeout(() => {
      if (!hasShown && !localStorage.getItem('royalClubShown')) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('royalClubShown', 'true');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleJoin = () => {
    // Here you would integrate with your loyalty program API
    console.log("Joining Royal Members Club");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal-gray/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-md bg-gradient-to-br from-royal-white via-royal-white/95 to-champagne-gold/10 border-2 border-champagne-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.3)] animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-gray/10 hover:bg-charcoal-gray/20 transition-colors"
        >
          <X className="w-5 h-5 text-charcoal-gray" />
        </button>

        <CardContent className="p-8 text-center">
          {/* Crown Icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-champagne-gold to-deep-gold rounded-full flex items-center justify-center shadow-luxury crown-float">
              <Crown className="w-10 h-10 text-royal-white" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-imperial-burgundy to-deep-maroon rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-royal-white" fill="currentColor" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gradient-imperial mb-2">
            Royal Members Club
          </h2>
          <p className="text-sm text-charcoal-gray/70 mb-6 leading-relaxed">
            Join our exclusive loyalty program and unlock premium benefits, exclusive discounts, and royal treatment!
          </p>

          {/* Benefits */}
          <div className="space-y-3 mb-6 text-left">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-champagne-gold/10 to-transparent">
              <Gift className="w-5 h-5 text-deep-gold flex-shrink-0" />
              <span className="text-sm text-charcoal-gray font-medium">Up to 25% off on all bookings</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-deep-gold/10 to-transparent">
              <Calendar className="w-5 h-5 text-champagne-gold flex-shrink-0" />
              <span className="text-sm text-charcoal-gray font-medium">Priority booking & early check-in</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-imperial-burgundy/10 to-transparent">
              <Phone className="w-5 h-5 text-imperial-burgundy flex-shrink-0" />
              <span className="text-sm text-charcoal-gray font-medium">24/7 dedicated concierge service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleJoin}
              className="w-full bg-gradient-imperial text-royal-white font-semibold py-3 px-6 rounded-lg shadow-luxury hover:shadow-imperial hover:scale-105 transition-all duration-300"
            >
              <Crown className="w-4 h-4 mr-2" />
              Join Royal Club - FREE
            </Button>
            <Button 
              variant="outline"
              onClick={handleClose}
              className="w-full border-champagne-gold/30 text-charcoal-gray hover:bg-champagne-gold/10 transition-all duration-300"
            >
              Maybe Later
            </Button>
          </div>

          {/* Fine Print */}
          <p className="text-xs text-charcoal-gray/50 mt-4">
            No fees. Cancel anytime. Terms & conditions apply.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoyaltyProgram;