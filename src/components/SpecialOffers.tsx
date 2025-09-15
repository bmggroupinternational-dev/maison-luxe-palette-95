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
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/20">
            <Star className="w-4 h-4 mr-2" />
            Special Offers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-maroon mb-6">
            Exclusive Luxury Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated special offers designed to elevate your stay with exceptional value and unforgettable experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  fetchPriority="auto"
                />
                <div className="absolute inset-0 bg-gradient-card-overlay" />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {offer.discount}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary font-medium">{offer.validUntil}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {offer.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {offer.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full btn-royal group-hover:shadow-gold transition-all duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book This Offer
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
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary hover:bg-primary/5">
            View All Offers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;