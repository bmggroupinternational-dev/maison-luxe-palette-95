import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Clock, MapPin, Star } from "lucide-react";
import { useRef } from "react";

const Restaurant = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const menuHighlights = [
    {
      category: "Signature Dishes",
      items: ["Wagyu Beef Tenderloin", "Lobster Thermidor", "Truffle Risotto"]
    },
    {
      category: "Wine Selection",
      items: ["French Burgundy Collection", "Italian Vintage Reserves", "Champagne Selection"]
    },
    {
      category: "Desserts",
      items: ["Dark Chocolate Soufflé", "Crème Brûlée Royale", "Macarons Luxe"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <img 
          src="/lovable-uploads/a8e4d933-6da7-460b-9b67-56645a8c215a.png"
          alt="Fine dining restaurant"
          className="w-full h-[120%] object-cover"
          loading="lazy"
          fetchPriority="auto"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-royal-white"
          >
            <Badge variant="outline" className="mb-4 border-royal-white/30 text-royal-white">
              <ChefHat className="w-4 h-4 mr-2" />
              Fine Dining
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">Culinary</span>
              <br />
              Excellence
            </h2>
            
            <p className="text-lg text-royal-white/90 mb-8 leading-relaxed">
              Experience extraordinary cuisine crafted by world-renowned chefs in an atmosphere of refined elegance. Our restaurant offers an unforgettable journey through innovative flavors and impeccable presentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-light-gold" />
                </div>
                <div className="text-sm font-medium">Dinner</div>
                <div className="text-xs text-royal-white/70">6:00 PM - 11:00 PM</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-light-gold" />
                </div>
                <div className="text-sm font-medium">Location</div>
                <div className="text-xs text-royal-white/70">Ground Floor</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-light-gold" />
                </div>
                <div className="text-sm font-medium">Michelin</div>
                <div className="text-xs text-royal-white/70">Recommended</div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gold flex-1">
                Reserve Table
              </Button>
              <Button variant="outline" className="border-royal-white/30 text-royal-white hover:bg-royal-white/10 flex-1">
                View Menu
              </Button>
            </div>
          </motion.div>

          {/* Menu Highlights Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {menuHighlights.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-royal bg-royal-white/10 backdrop-blur-sm border-royal-white/20"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-royal-white mb-4">
                    {section.category}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-royal-white/90 hover:text-light-gold transition-colors cursor-pointer"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;