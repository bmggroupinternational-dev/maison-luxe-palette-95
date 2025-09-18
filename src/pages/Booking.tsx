import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { format, differenceInDays } from "date-fns";
import { Crown, Filter, Users, Bed, Wifi, Car, Bath, Coffee, Star, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState<any[]>([]);
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(new Date(Date.now() + 24 * 60 * 60 * 1000));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  // Parse URL params
  useEffect(() => {
    const checkInParam = searchParams.get('checkIn');
    const checkOutParam = searchParams.get('checkOut');
    
    if (checkInParam) setCheckIn(new Date(checkInParam));
    if (checkOutParam) setCheckOut(new Date(checkOutParam));
  }, [searchParams]);

  const nights = differenceInDays(checkOut, checkIn);

  const rooms = [
    {
      id: 1,
      name: "Royal Imperial Suite",
      image: "/lovable-uploads/bce1d982-9fcf-4c18-a1ac-cd2fc531fd3a.png",
      capacity: { adults: 2, children: 1 },
      price: 850000,
      originalPrice: 1200000,
      amenities: ["King Bed", "Ocean View", "Private Balcony", "Butler Service", "WiFi", "Mini Bar"],
      roomsLeft: 3,
      rating: 5,
      badge: "Royal"
    },
    {
      id: 2,
      name: "Crown Executive Suite",
      image: "/lovable-uploads/42caf215-9f9a-49b7-ba26-f66213ef9fdf.png",
      capacity: { adults: 2, children: 2 },
      price: 650000,
      originalPrice: 850000,
      amenities: ["Queen Bed", "City View", "Living Area", "WiFi", "Mini Bar", "Spa Access"],
      roomsLeft: 5,
      rating: 5,
      badge: "Premium"
    },
    {
      id: 3,
      name: "Majestic Deluxe Room",
      image: "/lovable-uploads/6869a47f-2442-4fb4-a77b-7c7dc0afa205.png",
      capacity: { adults: 2, children: 1 },
      price: 450000,
      originalPrice: 600000,
      amenities: ["Double Bed", "Garden View", "Work Desk", "WiFi", "Mini Fridge"],
      roomsLeft: 8,
      rating: 4,
      badge: "Popular"
    }
  ];

  const addRoom = (room: any) => {
    setSelectedRooms([...selectedRooms, { ...room, quantity: 1 }]);
  };

  const removeRoom = (roomId: number) => {
    setSelectedRooms(selectedRooms.filter(room => room.id !== roomId));
  };

  const getTotalPrice = () => {
    return selectedRooms.reduce((total, room) => total + (room.price * room.quantity * nights), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-royal">
      <Header />
      
      {/* Hero Booking Header */}
      <section className="relative bg-gradient-hero-overlay pt-24 pb-16">
        <div className="absolute inset-0 bg-deep-maroon/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-royal-white hover:bg-royal-white/10"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Search Widget */}
          <div className="card-royal p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Crown className="w-8 h-8 text-champagne-gold" />
              <h1 className="text-3xl font-playfair font-bold text-charcoal-gray">
                Reserve Your <span className="text-gradient-gold">Royal Stay</span>
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Check In */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-deep-maroon">Check In</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      {format(checkIn, "MMM dd, yyyy")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={(date) => date && setCheckIn(date)}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-deep-maroon">Check Out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      {format(checkOut, "MMM dd, yyyy")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={(date) => date && setCheckOut(date)}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Adults */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-deep-maroon">Adults</Label>
                <Select value={adults.toString()} onValueChange={(value) => setAdults(parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Children */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-deep-maroon">Children</Label>
                <Select value={children.toString()} onValueChange={(value) => setChildren(parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[0,1,2,3].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button className="w-full bg-gradient-imperial text-royal-white">
                  Update Search
                </Button>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-4 flex gap-4">
              <Input
                placeholder="Promotional Code (Optional)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="max-w-xs"
              />
              <Button variant="outline">Apply</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="card-royal p-6 sticky top-6">
                <div className="flex items-center gap-3 mb-6">
                  <Filter className="w-5 h-5 text-champagne-gold" />
                  <h3 className="font-playfair font-bold text-lg text-charcoal-gray">Filter Your Search</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <Label className="font-medium text-deep-maroon mb-3 block">Price Per Night</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price1" />
                        <Label htmlFor="price1" className="text-sm">Under 500,000 TSh</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price2" />
                        <Label htmlFor="price2" className="text-sm">500,000 - 800,000 TSh</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price3" />
                        <Label htmlFor="price3" className="text-sm">Above 800,000 TSh</Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Amenities */}
                  <div>
                    <Label className="font-medium text-deep-maroon mb-3 block">Amenities</Label>
                    <div className="space-y-2">
                      {["WiFi", "Butler Service", "Ocean View", "Mini Bar", "Spa Access"].map(amenity => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox id={amenity} />
                          <Label htmlFor={amenity} className="text-sm">{amenity}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Room Type */}
                  <div>
                    <Label className="font-medium text-deep-maroon mb-3 block">Room Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Room Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suite">Suites</SelectItem>
                        <SelectItem value="deluxe">Deluxe Rooms</SelectItem>
                        <SelectItem value="standard">Standard Rooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </div>

            {/* Rooms List */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <p className="text-charcoal-gray/80">
                  Showing {rooms.length} luxury accommodations for {nights} {nights === 1 ? 'night' : 'nights'}
                </p>
              </div>

              <div className="space-y-6">
                {rooms.map((room) => (
                  <Card key={room.id} className="card-royal overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      {/* Room Image */}
                      <div className="relative">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <Badge className={cn(
                          "absolute top-4 left-4",
                          room.badge === "Royal" && "bg-gradient-imperial",
                          room.badge === "Premium" && "bg-gradient-gold",
                          room.badge === "Popular" && "bg-deep-maroon"
                        )}>
                          {room.badge}
                        </Badge>
                      </div>

                      {/* Room Details */}
                      <div className="p-6 md:col-span-2">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-playfair font-bold text-xl text-charcoal-gray mb-2">
                              {room.name}
                            </h3>
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(room.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-champagne-gold text-champagne-gold" />
                              ))}
                              <span className="text-sm text-charcoal-gray/70 ml-2">({room.rating} Star)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-charcoal-gray/60 line-through">
                                TSh {room.originalPrice.toLocaleString()}
                              </span>
                              <Badge variant="outline" className="text-champagne-gold border-champagne-gold">
                                Save {Math.round((1 - room.price / room.originalPrice) * 100)}%
                              </Badge>
                            </div>
                            <div className="text-2xl font-bold text-deep-maroon">
                              TSh {room.price.toLocaleString()}
                            </div>
                            <div className="text-sm text-charcoal-gray/70">per night</div>
                          </div>
                        </div>

                        {/* Room Capacity */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-champagne-gold" />
                            <span className="text-sm text-charcoal-gray">
                              Up to {room.capacity.adults} Adults, {room.capacity.children} Children
                            </span>
                          </div>
                          <div className="text-sm text-champagne-gold font-medium">
                            {room.roomsLeft} rooms left
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.slice(0, 4).map((amenity) => (
                              <Badge key={amenity} variant="secondary" className="text-xs">
                                {amenity}
                              </Badge>
                            ))}
                            {room.amenities.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{room.amenities.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            onClick={() => addRoom(room)}
                            disabled={selectedRooms.some(r => r.id === room.id)}
                            className="flex-1 bg-gradient-imperial text-royal-white"
                          >
                            <Crown className="w-4 h-4 mr-2" />
                            {selectedRooms.some(r => r.id === room.id) ? "Added" : "Add Room"}
                          </Button>
                          <Button variant="outline" className="px-4">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="card-royal p-6 sticky top-6">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-5 h-5 text-champagne-gold" />
                  <h3 className="font-playfair font-bold text-lg text-charcoal-gray">Booking Summary</h3>
                </div>

                {selectedRooms.length === 0 ? (
                  <div className="text-center py-8">
                    <Bed className="w-12 h-12 text-charcoal-gray/30 mx-auto mb-4" />
                    <p className="text-charcoal-gray/60">No rooms selected</p>
                    <p className="text-sm text-charcoal-gray/50">Add rooms to see your booking summary</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Booking Details */}
                    <div className="bg-royal-white/50 rounded-lg p-4">
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-charcoal-gray/70">Check-in:</span>
                          <span className="font-medium">{format(checkIn, "MMM dd, yyyy")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal-gray/70">Check-out:</span>
                          <span className="font-medium">{format(checkOut, "MMM dd, yyyy")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal-gray/70">Duration:</span>
                          <span className="font-medium">{nights} {nights === 1 ? 'night' : 'nights'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal-gray/70">Guests:</span>
                          <span className="font-medium">{adults} Adults, {children} Children</span>
                        </div>
                      </div>
                    </div>

                    {/* Selected Rooms */}
                    <div className="space-y-3">
                      {selectedRooms.map((room) => (
                        <div key={room.id} className="border border-charcoal-gray/20 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-charcoal-gray">{room.name}</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeRoom(room.id)}
                              className="text-red-500 hover:text-red-700 h-auto p-1"
                            >
                              ×
                            </Button>
                          </div>
                          <div className="text-sm space-y-1">
                            <div className="flex justify-between">
                              <span className="text-charcoal-gray/70">Rate per night:</span>
                              <span>TSh {room.price.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-charcoal-gray/70">{nights} nights:</span>
                              <span className="font-medium">TSh {(room.price * nights).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Total */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-deep-maroon">TSh {getTotalPrice().toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-charcoal-gray/60">*Inclusive of all taxes</p>
                    </div>

                    {/* Proceed Button */}
                    <Button
                      className="w-full bg-gradient-imperial text-royal-white font-semibold py-3"
                      onClick={() => navigate("/contact", { 
                        state: { 
                          bookingData: {
                            checkIn,
                            checkOut,
                            nights,
                            adults,
                            children,
                            rooms: selectedRooms,
                            total: getTotalPrice()
                          }
                        }
                      })}
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      Proceed to Payment
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;