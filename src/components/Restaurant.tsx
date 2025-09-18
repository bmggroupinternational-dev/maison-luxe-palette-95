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
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Fixed Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-royal/90 via-royal-navy/85 to-deep-royal/95" />
        <div className="absolute inset-0 bg-black/40" />
        <img 
          src="/lovable-uploads/a8e4d933-6da7-460b-9b67-56645a8c215a.png"
          alt="Fine dining restaurant"
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
          fetchPriority="auto"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-start">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-royal-white space-y-8"
          >
            <div className="space-y-6 bg-deep-royal/20 backdrop-blur-sm p-8 rounded-2xl border border-light-gold/20">
              <Badge variant="outline" className="mb-6 border-light-gold/50 text-light-gold px-4 py-2 bg-deep-gold/10">
                <ChefHat className="w-4 h-4 mr-2" />
                Fine Dining Experience
              </Badge>
              
              <h2 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                <span className="text-gradient-gold">Culinary</span>
                <br />
                <span className="text-royal-white drop-shadow-md">Excellence</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-xl text-royal-white drop-shadow-sm leading-relaxed">
                  Experience extraordinary cuisine crafted by world-renowned chefs in an atmosphere of refined elegance.
                </p>
                <p className="text-lg text-royal-white/90 drop-shadow-sm leading-relaxed">
                  Our restaurant offers an unforgettable journey through innovative flavors and impeccable presentation, where every dish tells a story of culinary mastery.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="w-16 h-16 rounded-full bg-deep-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-light-gold" />
                </div>
                <div className="text-base font-semibold text-royal-white mb-1">Dinner Service</div>
                <div className="text-sm text-royal-white/70">6:00 PM - 11:00 PM</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="w-16 h-16 rounded-full bg-deep-gold/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-light-gold" />
                </div>
                <div className="text-base font-semibold text-royal-white mb-1">Location</div>
                <div className="text-sm text-royal-white/70">Ground Floor Lobby</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="w-16 h-16 rounded-full bg-deep-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-light-gold" />
                </div>
                <div className="text-base font-semibold text-royal-white mb-1">Award Winning</div>
                <div className="text-sm text-royal-white/70">Michelin Recommended</div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="royal" size="lg" className="flex-1 text-lg py-4">
                Reserve Table
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-royal-white/30 text-royal-white hover:bg-royal-white/10 flex-1 text-lg py-4"
              >
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
            className="space-y-8 xl:mt-8"
          >
            {menuHighlights.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-royal bg-deep-royal/30 backdrop-blur-md border-light-gold/30 royal-hover shadow-xl"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-royal-white mb-6 text-gradient-gold">
                    {section.category}
                  </h3>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-royal-white/90 hover:text-light-gold transition-colors cursor-pointer p-2 rounded-lg hover:bg-royal-white/10"
                      >
                        <div className="w-3 h-3 rounded-full bg-deep-gold" />
                        <span className="text-base font-medium">{item}</span>
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