import { Crown, Gift, Star, Calendar, Phone, Mail, CheckCircle, Users, Sparkles, Award, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RoyalMembers = () => {
  const navigate = useNavigate();

  const membershipTiers = [
    {
      name: "Royal Explorer",
      color: "from-champagne-gold to-deep-gold",
      nights: "1-9 nights",
      benefits: [
        "10% discount on all bookings",
        "Welcome champagne on arrival",
        "Priority room requests",
        "Free Wi-Fi premium",
        "Late checkout (2 PM)"
      ],
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Royal Elite",
      color: "from-deep-gold to-bronze-gold",
      nights: "10-24 nights",
      benefits: [
        "20% discount on all bookings",
        "Complimentary room upgrade",
        "Daily breakfast for two",
        "Access to Royal Lounge",
        "Priority dining reservations",
        "Express check-in/out"
      ],
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: "Royal Ambassador",
      color: "from-imperial-burgundy to-deep-maroon",
      nights: "25+ nights",
      benefits: [
        "25% discount on all bookings",
        "Guaranteed suite upgrade",
        "All meals complimentary",
        "Personal concierge service",
        "Exclusive member events",
        "Airport transfers included",
        "Spa credit: $200 per stay"
      ],
      icon: <Award className="w-6 h-6" />
    }
  ];

  const exclusiveServices = [
    {
      title: "Personal Concierge",
      description: "Dedicated 24/7 personal assistant for all your needs",
      icon: <Phone className="w-8 h-8 text-champagne-gold" />
    },
    {
      title: "Exclusive Events",
      description: "Private wine tastings, chef's table experiences, and cultural tours",
      icon: <Calendar className="w-8 h-8 text-deep-gold" />
    },
    {
      title: "Priority Access",
      description: "Skip the lines with priority booking and instant confirmations",
      icon: <Clock className="w-8 h-8 text-imperial-burgundy" />
    },
    {
      title: "Global Recognition",
      description: "Your Royal status recognized at luxury properties worldwide",
      icon: <MapPin className="w-8 h-8 text-deep-maroon" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-white via-champagne-gold/5 to-deep-gold/10">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-champagne-gold/20 to-deep-gold/20 px-6 py-3 rounded-full mb-8 crown-float">
            <Crown className="w-6 h-6 text-deep-gold" />
            <span className="text-sm font-semibold text-charcoal-gray uppercase tracking-wide">
              Exclusive Membership Program
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gradient-imperial mb-6 leading-tight">
            Royal Members Club
          </h1>
          
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience unparalleled luxury with our exclusive membership program. 
            Enjoy premium benefits, personalized service, and access to extraordinary experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-imperial text-royal-white font-semibold px-8 py-4 rounded-xl shadow-luxury hover:shadow-imperial hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/booking")}
            >
              <Crown className="w-5 h-5 mr-2" />
              Join Royal Club - FREE
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-champagne-gold/30 text-charcoal-gray hover:bg-champagne-gold/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-imperial mb-6">
              Membership Tiers
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Choose your level of luxury. Every tier offers exclusive benefits designed 
              to enhance your stay and create unforgettable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className={`card-premium hover:scale-105 transition-all duration-500 relative overflow-hidden group`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`} />
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {tier.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gradient-imperial">
                    {tier.name}
                  </CardTitle>
                  <p className="text-sm text-charcoal-gray/60 font-medium">
                    {tier.nights}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-deep-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-charcoal-gray">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Services */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-charcoal-gray/5 to-champagne-gold/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-imperial mb-6">
              Exclusive Services
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Royal Members enjoy access to premium services designed to exceed expectations 
              and create truly memorable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exclusiveServices.map((service, index) => (
              <Card key={index} className="card-glass hover:shadow-luxury transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gradient-imperial mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal-gray/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-imperial mb-6">
              How to Join
            </h2>
            <p className="text-lg text-charcoal-gray/70">
              Becoming a Royal Member is simple and completely free. Start enjoying 
              exclusive benefits from your very first stay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-champagne-gold to-deep-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-royal-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gradient-imperial mb-2">Sign Up</h3>
              <p className="text-charcoal-gray/70">Create your free Royal Members account online or during check-in</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-deep-gold to-bronze-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-royal-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gradient-imperial mb-2">Stay & Earn</h3>
              <p className="text-charcoal-gray/70">Enjoy your stay and automatically earn nights towards higher tiers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-imperial-burgundy to-deep-maroon rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-royal-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gradient-imperial mb-2">Enjoy Benefits</h3>
              <p className="text-charcoal-gray/70">Access exclusive perks and personalized experiences immediately</p>
            </div>
          </div>

          <Card className="card-royal p-8">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gradient-imperial mb-4">
                Ready to Experience Royal Treatment?
              </h3>
              <p className="text-charcoal-gray/70 mb-6">
                Join thousands of satisfied members who enjoy exclusive benefits and personalized luxury service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-imperial text-royal-white font-semibold px-8 py-3 rounded-lg shadow-luxury hover:shadow-imperial hover:scale-105 transition-all duration-300"
                  onClick={() => navigate("/booking")}
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Join Now - Free
                </Button>
                <Button 
                  variant="outline"
                  className="border-champagne-gold/30 text-charcoal-gray hover:bg-champagne-gold/10 px-8 py-3 rounded-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default RoyalMembers;