import { Button } from "@/components/ui/button";
import { Crown, MapPin, Star, Bed, Bath, Square, Wifi, Car, Dumbbell, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Apartments = () => {
  const apartments = [
    {
      id: 1,
      name: "Royal Suite",
      price: "$2,500",
      period: "per month",
      image: "/lovable-uploads/6869a47f-2442-4fb4-a77b-7c7dc0afa205.png",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,200 sq ft",
      features: ["Ocean View", "Private Balcony", "Premium Finishes", "Smart Home"],
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "$1,800",
      period: "per month",
      image: "/lovable-uploads/dcbeb7b6-a298-4788-b0d8-903a2f832c45.png",
      bedrooms: 2,
      bathrooms: 2,
      area: "950 sq ft",
      features: ["City View", "Modern Kitchen", "Luxury Bath", "Parking"],
    },
    {
      id: 3,
      name: "Luxury Studio",
      price: "$1,200",
      period: "per month",
      image: "/lovable-uploads/777254a0-b59c-4619-88d9-275ba8876547.png",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sq ft",
      features: ["Open Plan", "High Ceilings", "Premium Appliances", "Storage"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="crown-float mb-8">
            <Crown className="w-16 h-16 text-deep-gold mx-auto" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="text-gradient-maroon">Luxury</span>{" "}
            <span className="text-gradient-gold">Apartments</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of premium apartments designed for the discerning resident.
            Each unit features world-class amenities and breathtaking views.
          </p>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {apartments.map((apartment) => (
              <div key={apartment.id} className="card-royal royal-hover group">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={apartment.image}
                    alt={apartment.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-deep-gold text-royal-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-deep-maroon">{apartment.name}</h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-deep-gold">{apartment.price}</div>
                      <div className="text-sm text-muted-foreground">{apartment.period}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{apartment.bedrooms} beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{apartment.bathrooms} baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{apartment.area}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {apartment.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-deep-gold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="royal" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="gold-outline" className="flex-1">
                      Schedule Tour
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apartments;