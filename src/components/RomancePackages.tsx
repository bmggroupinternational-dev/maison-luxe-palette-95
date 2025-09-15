import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Wine, Calendar } from "lucide-react";

const RomancePackages = () => {
  const packages = [
    {
      id: 1,
      title: "Honeymoon Bliss",
      subtitle: "Perfect for newlyweds",
      price: "From $899/night",
      image: "/lovable-uploads/bf2205c7-df76-4de9-8760-3ea82d31a6ba.png",
      features: [
        "Champagne & chocolate-covered strawberries",
        "Rose petal turndown service",
        "Couples massage at the spa",
        "Private candlelit dinner",
        "Late checkout until 2 PM"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Anniversary Celebration",
      subtitle: "Celebrate your love story",
      price: "From $699/night", 
      image: "/lovable-uploads/bce1d982-9fcf-4c18-a1ac-cd2fc531fd3a.png",
      features: [
        "Bottle of premium wine",
        "Anniversary cake",
        "Professional photography session",
        "Romantic room decoration",
        "Personalized gift"
      ],
      popular: false
    },
    {
      id: 3,
      title: "Romantic Getaway",
      subtitle: "Escape together",
      price: "From $599/night",
      image: "/lovable-uploads/6869a47f-2442-4fb4-a77b-7c7dc0afa205.png",
      features: [
        "Welcome bottle of champagne",
        "Daily fresh flowers",
        "Breakfast in bed service",
        "Access to couples' amenities",
        "Complimentary spa access"
      ],
      popular: false
    }
  ];

  const floatingHearts = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute text-primary/20"
      initial={{ 
        x: Math.random() * 100 + "%", 
        y: "100%",
        scale: 0,
        rotate: 0
      }}
      animate={{ 
        y: "-100%",
        scale: [0, 1, 0],
        rotate: 360,
        x: `${Math.random() * 100}%`
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        delay: i * 1.5,
        ease: "easeInOut"
      }}
    >
      <Heart className="w-4 h-4" />
    </motion.div>
  ));

  return (
    <section className="relative py-20 bg-gradient-subtle overflow-hidden">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts}
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/20">
            <Heart className="w-4 h-4 mr-2 text-primary" />
            Romance Packages
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-maroon">Love</span> in Luxury
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create unforgettable romantic memories with our specially curated packages designed for couples seeking the perfect intimate escape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl shadow-elegant border ${
                pkg.popular ? 'border-primary/50 ring-2 ring-primary/20' : 'border-border'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  fetchPriority="auto"
                />
                <div className="absolute inset-0 bg-gradient-card-overlay" />
                
                <div className="absolute bottom-4 left-4 text-royal-white">
                  <div className="text-sm font-medium opacity-90">{pkg.subtitle}</div>
                  <div className="text-2xl font-bold">{pkg.title}</div>
                </div>
              </div>

              <div className="p-6 bg-card">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                  <Badge variant="outline" className="border-primary/30">
                    <Wine className="w-3 h-3 mr-1" />
                    Inclusive
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  className={`w-full transition-all duration-300 ${
                    pkg.popular 
                      ? 'btn-royal shadow-royal hover:shadow-gold' 
                      : 'btn-gold hover:shadow-royal'
                  }`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Romance Package
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need something more personalized? Let us create a custom romantic experience just for you.
          </p>
          <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary hover:bg-primary/5">
            <Heart className="w-4 h-4 mr-2" />
            Create Custom Package
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RomancePackages;