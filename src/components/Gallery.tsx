import { useState } from "react";
import { Crown, Camera, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  const images = [
    {
      src: "/lovable-uploads/777254a0-b59c-4619-88d9-275ba8876547.png",
      alt: "Modern dining area with luxury purple chairs and copper accents",
      category: "dining",
      title: "Premium Dining Experience"
    },
    {
      src: "/lovable-uploads/a8e4d933-6da7-460b-9b67-56645a8c215a.png",
      alt: "Private swimming pool with modern architecture",
      category: "amenities",
      title: "Exclusive Pool Area"
    },
    {
      src: "/lovable-uploads/71e2c082-776c-4641-ba29-75d0235037aa.png",
      alt: "Luxury kitchen bar with black marble and gold accents",
      category: "kitchen",
      title: "Designer Kitchen Bar"
    },
    {
      src: "/lovable-uploads/1b7338ac-74a6-4aec-a86b-1d89381801a1.png",
      alt: "Elegant dining room with crystal chandeliers",
      category: "dining",
      title: "Royal Dining Room"
    },
    {
      src: "/lovable-uploads/408ce708-044f-4e1f-822a-d21a90d1b0c8.png",
      alt: "Compact luxury kitchen with wood cabinetry",
      category: "kitchen",
      title: "Gourmet Kitchen"
    },
    {
      src: "/lovable-uploads/6869a47f-2442-4fb4-a77b-7c7dc0afa205.png",
      alt: "Master bedroom with luxury wood furnishings",
      category: "bedroom",
      title: "Master Bedroom Suite"
    },
    {
      src: "/lovable-uploads/dcbeb7b6-a298-4788-b0d8-903a2f832c45.png",
      alt: "Modern living room with green accent furniture",
      category: "living",
      title: "Contemporary Living"
    },
    {
      src: "/lovable-uploads/bce1d982-9fcf-4c18-a1ac-cd2fc531fd3a.png",
      alt: "Luxury living room with designer lighting",
      category: "living",
      title: "Designer Living Space"
    },
    {
      src: "/lovable-uploads/bf2205c7-df76-4de9-8760-3ea82d31a6ba.png",
      alt: "Walk-in closet with luxury wood finishes",
      category: "bedroom",
      title: "Walk-In Wardrobe"
    },
    {
      src: "/lovable-uploads/42caf215-9f9a-49b7-ba26-f66213ef9fdf.png",
      alt: "Luxury bedroom suite with premium bedding",
      category: "bedroom",
      title: "Executive Bedroom"
    }
  ];

  const categories = [
    { id: "all", label: "All Spaces" },
    { id: "living", label: "Living Areas" },
    { id: "bedroom", label: "Bedrooms" },
    { id: "dining", label: "Dining" },
    { id: "kitchen", label: "Kitchens" },
    { id: "amenities", label: "Amenities" }
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-deep-gold" />
            <span className="text-sm font-semibold text-deep-gold uppercase tracking-wide">
              Royal Gallery
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-maroon mb-6">
            Experience Luxury Living
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step inside and discover the elegance and sophistication that defines Maison Luxe apartments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "royal" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="px-6 py-3 transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.category}-${index}`}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-royal transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-gray/80 via-charcoal-gray/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-royal-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <ZoomIn className="w-5 h-5 text-royal-white" />
                </div>
                
                {/* Crown Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-deep-gold/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0">
                  <Crown className="w-4 h-4 text-royal-white" />
                  <span className="text-xs font-medium text-royal-white">LUXE</span>
                </div>
              </div>

              {/* Image Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-royal-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h3>
                <div className="h-1 bg-gradient-gold rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Map */}
        <div className="text-center mt-16">
          <div className="card-royal p-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <Crown className="w-8 h-8 text-deep-gold" />
              <span className="text-sm font-semibold text-deep-gold uppercase tracking-wide">
                Our Location
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gradient-maroon mb-6">
              Visit Maison Luxe
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.741843933076!2d39.2083284!3d-6.8040442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b5e7f5c5555%3A0x1234567890abcdef!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maison Luxe Location"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                variant="royal" 
                size="lg"
                onClick={() => navigate("/apartments")}
              >
                Explore Apartments
              </Button>
              <Button 
                variant="gold-outline" 
                size="lg"
                onClick={() => navigate("/contact")}
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;