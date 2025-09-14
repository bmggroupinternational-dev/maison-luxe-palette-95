import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, Leaf, Coffee, Moon, Sparkles, ArrowRight } from "lucide-react";

const RelaxingExperiences = () => {
  const experiences = [
    {
      id: 1,
      icon: Waves,
      title: "Spa Sanctuary",
      description: "Immerse yourself in tranquility with our world-class spa treatments, featuring organic products and expert therapists.",
      features: ["Hot Stone Massage", "Aromatherapy Sessions", "Himalayan Salt Room", "Relaxation Pools"],
      image: "/lovable-uploads/408ce708-044f-4e1f-822a-d21a90d1b0c8.png"
    },
    {
      id: 2,
      icon: Leaf,
      title: "Garden Meditation",
      description: "Find inner peace in our beautifully landscaped meditation gardens with flowing water features and serene atmospheres.",
      features: ["Private Garden Spaces", "Guided Meditation", "Yoga Sessions", "Nature Sounds"],
      image: "/lovable-uploads/42caf215-9f9a-49b7-ba26-f66213ef9fdf.png"
    },
    {
      id: 3,
      icon: Coffee,
      title: "Mindful Moments", 
      description: "Savor carefully crafted artisanal beverages and light bites in our peaceful lounge with stunning city views.",
      features: ["Premium Tea Selection", "Artisan Coffee", "Healthy Snacks", "Panoramic Views"],
      image: "/lovable-uploads/1b7338ac-74a6-4aec-a86b-1d89381801a1.png"
    },
    {
      id: 4,
      icon: Moon,
      title: "Sleep Sanctuary",
      description: "Experience the ultimate in comfort with our premium bedding, blackout curtains, and personalized sleep amenities.",
      features: ["Egyptian Cotton Linens", "Memory Foam Pillows", "Aromatherapy Diffusers", "Sleep Meditation"],
      image: "/lovable-uploads/777254a0-b59c-4619-88d9-275ba8876547.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Thoughtful Details
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-maroon mb-6">
            Relaxing Experiences
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every detail has been thoughtfully designed to create moments of pure relaxation and rejuvenation during your luxury stay.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center`}
              >
                {/* Image Side */}
                <div className="relative w-full lg:w-1/2 h-64 rounded-2xl overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-card-overlay" />
                  
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute top-4 left-4 w-12 h-12 rounded-full bg-royal-white/90 flex items-center justify-center shadow-elegant"
                  >
                    <IconComponent className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors"
                    whileHover={{ x: isEven ? 10 : -10 }}
                  >
                    {experience.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {experience.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.3) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    whileHover={{ x: isEven ? 10 : -10 }}
                    className="pt-2"
                  >
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-primary hover:text-primary/80 group-hover:gap-3 transition-all"
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience Pure Relaxation?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your stay and discover how every detail has been designed for your ultimate comfort and peace of mind.
            </p>
            <Button className="btn-royal shadow-royal hover:shadow-gold transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Book Your Relaxing Stay
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelaxingExperiences;