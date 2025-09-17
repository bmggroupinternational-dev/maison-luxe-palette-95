import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Crown, Calendar } from "lucide-react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Royal Romance Package",
      description: "Indulge in luxury with champagne, roses, and premium amenities for couples",
      discount: "25% OFF",
      validUntil: "Limited Time",
      features: ["Champagne & Roses", "Couples Spa", "Private Dining"],
      image: "/lovable-uploads/71e2c082-776c-4641-ba29-75d0235037aa.png"
    },
    {
      id: 2,
      title: "Extended Stay Special",
      description: "Stay 5 nights or more and enjoy exclusive benefits and significant savings",
      discount: "30% OFF",
      validUntil: "Stay 5+ Nights",
      features: ["Daily Housekeeping", "Concierge Service", "Welcome Amenities"],
      image: "/lovable-uploads/777254a0-b59c-4619-88d9-275ba8876547.png"
    },
    {
      id: 3,
      title: "Royal Experience",
      description: "The ultimate luxury experience with personalized service and premium perks",
      discount: "EXCLUSIVE",
      validUntil: "Members Only",
      features: ["Personal Butler", "Private Transfer", "Gourmet Dining"],
      image: "/lovable-uploads/dcbeb7b6-a298-4788-b0d8-903a2f832c45.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 floating-particles opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-gradient-glass backdrop-blur-xl border border-champagne-gold/30 text-imperial-burgundy px-4 py-2">
            <Crown className="w-4 h-4 mr-2" />
            Royal Special Offers
          </Badge>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gradient-imperial mb-8">
            Exclusive Luxury Experiences
          </h2>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto font-cormorant leading-relaxed">
            Discover our carefully curated royal offers designed to elevate your stay with exceptional luxury and unforgettable experiences worthy of royalty.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group relative overflow-hidden card-premium luxury-hover"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  fetchPriority="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-imperial-burgundy/60 via-transparent to-transparent" />
                <Badge className="absolute top-6 right-6 bg-gradient-gold text-obsidian font-bold px-4 py-2 shadow-gold">
                  {offer.discount}
                </Badge>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-6 h-6 text-champagne-gold" />
                  <span className="text-sm text-imperial-burgundy font-cormorant font-semibold tracking-wide">{offer.validUntil}</span>
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-imperial-burgundy mb-4 group-hover:text-gradient-imperial transition-all duration-300">
                  {offer.title}
                </h3>
                
                <p className="text-charcoal-gray/80 mb-6 text-base font-cormorant leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-gradient-gold shadow-sm" />
                      <span className="font-medium text-charcoal-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-imperial text-royal-white font-semibold py-4 rounded-xl shadow-imperial hover:shadow-luxury hover:scale-105 transition-all duration-500 group-hover:bg-gradient-royal">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reserve Royal Offer
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            variant="imperial-outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold"
          >
            <Crown className="w-5 h-5 mr-2" />
            View All Royal Offers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;