import { useState, useEffect } from "react";
import { X, Sparkles, Clock, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PromotionsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after 10 seconds if user hasn't seen promotions today
    const timer = setTimeout(() => {
      const lastShown = localStorage.getItem('promotionsLastShown');
      const today = new Date().toDateString();
      
      if (lastShown !== today) {
        setIsVisible(true);
        localStorage.setItem('promotionsLastShown', today);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Countdown timer
    if (isVisible && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => Math.max(0, prev - 1));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isVisible, timeLeft]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBookNow = () => {
    setIsVisible(false);
    navigate("/booking");
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
      <Card className="relative w-full max-w-lg bg-gradient-to-br from-royal-white via-royal-white/95 to-deep-gold/10 border-2 border-deep-gold/40 shadow-[0_0_60px_rgba(218,165,32,0.4)] animate-scale-in overflow-hidden">
        {/* Animated background sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 left-4 animate-pulse">
            <Sparkles className="w-4 h-4 text-champagne-gold/60" />
          </div>
          <div className="absolute top-8 right-8 animate-pulse delay-500">
            <Sparkles className="w-3 h-3 text-deep-gold/60" />
          </div>
          <div className="absolute bottom-8 left-8 animate-pulse delay-1000">
            <Sparkles className="w-5 h-5 text-champagne-gold/40" />
          </div>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-gray/10 hover:bg-charcoal-gray/20 transition-colors"
        >
          <X className="w-5 h-5 text-charcoal-gray" />
        </button>

        <CardContent className="p-8 text-center relative">
          {/* Special Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-imperial-burgundy to-deep-maroon text-royal-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-luxury">
            <Crown className="w-4 h-4" />
            LIMITED TIME OFFER
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gradient-imperial mb-2">
            Early Bird Special
          </h2>
          <p className="text-lg text-deep-gold font-semibold mb-4">
            Save up to 40% on luxury stays
          </p>

          {/* Timer */}
          <div className="bg-gradient-to-r from-charcoal-gray/10 to-champagne-gold/10 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-imperial-burgundy" />
              <span className="text-sm font-medium text-charcoal-gray">Offer expires in:</span>
            </div>
            <div className="text-2xl font-bold text-imperial-burgundy font-mono">
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Offer Details */}
          <div className="text-left space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-deep-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-charcoal-gray">
                <span className="font-semibold">40% OFF</span> weekend bookings (Fri-Sun)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-champagne-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-charcoal-gray">
                <span className="font-semibold">25% OFF</span> weekday luxury suites
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-imperial-burgundy rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-charcoal-gray">
                <span className="font-semibold">FREE</span> champagne welcome & late checkout
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleBookNow}
              className="w-full bg-gradient-imperial text-royal-white font-semibold py-3 px-6 rounded-lg shadow-luxury hover:shadow-imperial hover:scale-105 transition-all duration-300 group"
            >
              Book Now & Save
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={handleClose}
              className="w-full border-champagne-gold/30 text-charcoal-gray hover:bg-champagne-gold/10 transition-all duration-300"
            >
              View All Offers
            </Button>
          </div>

          {/* Fine Print */}
          <p className="text-xs text-charcoal-gray/50 mt-4">
            *Valid for new bookings only. Subject to availability. Cannot be combined with other offers.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromotionsPopup;