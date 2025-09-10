import { Crown, Shield, Wifi, Car, Utensils, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// Using uploaded luxury apartment images

const Features = () => {
  const navigate = useNavigate();
  const amenities = [
    {
      icon: Crown,
      title: "Royal Treatment",
      description: "Personalized concierge service and premium hospitality"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Advanced security systems and round-the-clock protection"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary ultra-fast internet throughout the property"
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Secure parking with professional valet service"
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Gourmet room service and nearby premium restaurants"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym and wellness facilities"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Crown className="w-8 h-8 text-deep-gold" />
            <span className="text-sm font-semibold text-deep-gold uppercase tracking-wide">
              Royal Amenities
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-maroon mb-6">
            Prestige, Prestige, Prestige!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every detail at Maison Luxe has been crafted to provide you with the ultimate luxury experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Showcase */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src="/lovable-uploads/dcbeb7b6-a298-4788-b0d8-903a2f832c45.png" 
                alt="Luxury living room at Maison Luxe"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-card-overlay"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 card-royal p-4 royal-hover">
              <div className="text-center">
                <Crown className="w-10 h-10 text-deep-gold mx-auto mb-2" />
                <p className="font-bold text-deep-maroon text-lg">Royal</p>
                <p className="text-sm text-muted-foreground">Living</p>
              </div>
            </div>
          </div>

          {/* Amenities List */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gradient-gold mb-8">
              Luxury Amenities & Services
            </h3>
            <div className="grid gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl hover:bg-royal-white/80 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-maroon rounded-xl flex items-center justify-center shadow-royal">
                    <amenity.icon className="w-6 h-6 text-royal-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-gray mb-1">{amenity.title}</h4>
                    <p className="text-muted-foreground">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Feature Row */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content First on Mobile */}
          <div className="lg:order-1 order-2 space-y-8">
            <h3 className="text-3xl font-bold text-gradient-maroon mb-8">
              Your Royal Address in Tanzania
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-deep-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-2">Prime Location</h4>
                  <p className="text-muted-foreground">Strategically located in the heart of Dodoma with easy access to business districts and cultural attractions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-deep-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-2">Elegant Design</h4>
                  <p className="text-muted-foreground">Contemporary architecture meets royal aesthetics in every corner of our thoughtfully designed spaces.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-deep-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-2">Exclusive Community</h4>
                  <p className="text-muted-foreground">Join a prestigious community of discerning individuals who value quality, comfort, and sophistication.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-2 order-1 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src="/lovable-uploads/6869a47f-2442-4fb4-a77b-7c7dc0afa205.png" 
                alt="Luxury bedroom at Maison Luxe"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-card-overlay"></div>
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-6 -left-6 card-royal p-6 max-w-xs royal-hover">
              <p className="text-sm italic text-charcoal-gray mb-2">
                "Luxury Living, Redefined"
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                - Maison Luxe Promise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;