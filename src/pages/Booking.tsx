import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { format, differenceInDays } from "date-fns";
import { motion } from "framer-motion";
import { 
  Crown, Calendar, Users, Star, ArrowLeft, Plus, Minus, 
  Wifi, Car, Bath, Coffee, MapPin, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState<any[]>([]);
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  // Parse URL params
  useEffect(() => {
    const checkInParam = searchParams.get('checkIn');
    const checkOutParam = searchParams.get('checkOut');
    
    if (checkInParam) setCheckInDate(new Date(checkInParam));
    if (checkOutParam) setCheckOutDate(new Date(checkOutParam));
  }, [searchParams]);

  const nights = checkInDate && checkOutDate ? differenceInDays(checkOutDate, checkInDate) : 1;

  const rooms = [
    {
      id: 1,
      name: "Royal Imperial Suite",
      description: "Experience ultimate luxury in our flagship suite with panoramic ocean views, marble bathrooms, and dedicated butler service.",
      image: "/lovable-uploads/bce1d982-9fcf-4c18-a1ac-cd2fc531fd3a.png",
      price: 2500,
      maxGuests: 4,
      amenities: ["Ocean View", "Butler Service", "Marble Bath", "Private Terrace", "WiFi", "Mini Bar", "Spa Access"]
    },
    {
      id: 2,
      name: "Crown Executive Suite",
      description: "Sophisticated elegance meets modern comfort in this spacious suite featuring a separate living area and premium amenities.",
      image: "/lovable-uploads/42caf215-9f9a-49b7-ba26-f66213ef9fdf.png",
      price: 1800,
      maxGuests: 3,
      amenities: ["City View", "Living Area", "Work Desk", "WiFi", "Mini Bar", "Room Service"]
    },
    {
      id: 3,
      name: "Majestic Deluxe Room",
      description: "Perfectly appointed room combining classic luxury with contemporary amenities for the discerning traveler.",
      image: "/lovable-uploads/6869a47f-2442-4fb4-a77b-7c7dc0afa205.png",
      price: 1200,
      maxGuests: 2,
      amenities: ["Garden View", "King Bed", "WiFi", "Mini Fridge", "Safe", "Breakfast Included"]
    },
    {
      id: 4,
      name: "Royal Penthouse Villa",
      description: "The pinnacle of luxury living with private pool, rooftop terrace, and unparalleled service for the ultimate experience.",
      image: "/lovable-uploads/777254a0-b59c-4619-88d9-275ba8876547.png",
      price: 5000,
      maxGuests: 6,
      amenities: ["Private Pool", "Rooftop Terrace", "Chef Service", "Concierge", "Helicopter Pad", "Wine Cellar"]
    }
  ];

  const addRoom = (room: any) => {
    const existingRoom = selectedRooms.find(r => r.room.id === room.id);
    if (existingRoom) {
      setSelectedRooms(selectedRooms.map(r => 
        r.room.id === room.id 
          ? { ...r, quantity: r.quantity + 1 }
          : r
      ));
    } else {
      setSelectedRooms([...selectedRooms, { room, quantity: 1 }]);
    }
  };

  const removeRoom = (roomId: number) => {
    setSelectedRooms(selectedRooms.filter(r => r.room.id !== roomId));
  };

  const getTotalPrice = () => {
    return selectedRooms.reduce((total, selectedRoom) => 
      total + (selectedRoom.room.price * selectedRoom.quantity * nights), 0
    );
  };

  return (
    <div className="min-h-screen bg-gradient-royal">
      {/* Luxury Header */}
      <div className="bg-deep-royal/90 backdrop-blur-md shadow-luxury border-b border-light-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gradient-gold font-playfair"
            >
              Reserve Your Royal Experience
            </motion.h1>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="border-light-gold/30 text-light-gold hover:bg-light-gold/10 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Luxury Search Widget */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="card-royal bg-deep-royal/20 backdrop-blur-md border-light-gold/30 p-8 shadow-luxury">
                <h2 className="text-2xl font-semibold mb-6 text-gradient-gold font-playfair">Refine Your Search</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {/* Check-in Date */}
                  <div className="space-y-3">
                    <Label className="text-royal-white font-medium">Arrival</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border-light-gold/30 text-royal-white hover:bg-light-gold/10 bg-deep-royal/30 backdrop-blur-sm"
                        >
                          <Calendar className="mr-2 h-4 w-4 text-light-gold" />
                          {checkInDate ? format(checkInDate, "MMM dd") : "Select Date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-deep-royal/95 backdrop-blur-md border-light-gold/30" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto text-royal-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Check-out Date */}
                  <div className="space-y-3">
                    <Label className="text-royal-white font-medium">Departure</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border-light-gold/30 text-royal-white hover:bg-light-gold/10 bg-deep-royal/30 backdrop-blur-sm"
                        >
                          <Calendar className="mr-2 h-4 w-4 text-light-gold" />
                          {checkOutDate ? format(checkOutDate, "MMM dd") : "Select Date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-deep-royal/95 backdrop-blur-md border-light-gold/30" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          disabled={(date) => !checkInDate || date <= checkInDate}
                          initialFocus
                          className="p-3 pointer-events-auto text-royal-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Adults */}
                  <div className="space-y-3">
                    <Label className="text-royal-white font-medium">Guests</Label>
                    <Select value={adults.toString()} onValueChange={(value) => setAdults(parseInt(value))}>
                      <SelectTrigger className="border-light-gold/30 text-royal-white bg-deep-royal/30 backdrop-blur-sm hover:bg-light-gold/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-deep-royal/95 backdrop-blur-md border-light-gold/30">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-royal-white hover:bg-light-gold/20">
                            {num} Adult{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Children */}
                  <div className="space-y-3">
                    <Label className="text-royal-white font-medium">Children</Label>
                    <Select value={children.toString()} onValueChange={(value) => setChildren(parseInt(value))}>
                      <SelectTrigger className="border-light-gold/30 text-royal-white bg-deep-royal/30 backdrop-blur-sm hover:bg-light-gold/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-deep-royal/95 backdrop-blur-md border-light-gold/30">
                        {[0, 1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-royal-white hover:bg-light-gold/20">
                            {num} Child{num !== 1 ? 'ren' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-3">
                    <Label className="text-royal-white font-medium">Promo Code</Label>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="border-light-gold/30 text-royal-white bg-deep-royal/30 backdrop-blur-sm placeholder:text-royal-white/50"
                      />
                      <Button variant="gold" size="sm" className="px-4">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Luxury Available Rooms */}
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-semibold mb-8 text-gradient-gold font-playfair"
            >
              Royal Accommodations
            </motion.h2>
            <div className="space-y-8">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="overflow-hidden card-royal bg-deep-royal/20 backdrop-blur-md border-light-gold/30 shadow-luxury royal-hover">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                      <motion.div 
                        className="aspect-video rounded-xl overflow-hidden relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-royal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-semibold mb-3 text-gradient-gold font-playfair">{room.name}</h3>
                          <p className="text-royal-white/80 text-base mb-6 leading-relaxed">{room.description}</p>
                          <div className="flex flex-wrap gap-3 mb-6">
                            {room.amenities.map((amenity, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-light-gold/40 text-light-gold bg-deep-gold/10 hover:bg-deep-gold/20">
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-royal-white/60 font-medium">Per night</div>
                            <div className="text-3xl font-bold text-gradient-gold">${room.price}</div>
                            <div className="text-xs text-royal-white/50">Maximum {room.maxGuests} guests</div>
                          </div>
                          <Button 
                            onClick={() => addRoom(room)}
                            variant="royal"
                            size="lg"
                            className="flex items-center gap-2 shadow-lg"
                          >
                            <Plus className="w-5 h-5" />
                            Reserve Room
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Luxury Booking Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="sticky top-4 card-royal bg-deep-royal/30 backdrop-blur-md border-light-gold/30 shadow-luxury">
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-gradient-gold font-playfair mb-6">Reservation Summary</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-light-gold/20">
                      <span className="text-royal-white/70 font-medium">Arrival:</span>
                      <span className="text-royal-white">{checkInDate ? format(checkInDate, "MMM dd, yyyy") : "Not selected"}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-light-gold/20">
                      <span className="text-royal-white/70 font-medium">Departure:</span>
                      <span className="text-royal-white">{checkOutDate ? format(checkOutDate, "MMM dd, yyyy") : "Not selected"}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-light-gold/20">
                      <span className="text-royal-white/70 font-medium">Duration:</span>
                      <span className="text-royal-white">{nights} night{nights !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-light-gold/20">
                      <span className="text-royal-white/70 font-medium">Guests:</span>
                      <span className="text-royal-white">{adults} adult{adults !== 1 ? 's' : ''}{children > 0 ? `, ${children} child${children !== 1 ? 'ren' : ''}` : ''}</span>
                    </div>
                  </div>

                  {selectedRooms.length > 0 && (
                    <div className="space-y-4 mb-8">
                      <h4 className="font-medium text-light-gold text-lg">Selected Accommodations:</h4>
                      {selectedRooms.map((selectedRoom, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-deep-royal/40 backdrop-blur-sm rounded-xl border border-light-gold/20"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-royal-white text-sm">{selectedRoom.room.name}</div>
                            <div className="text-xs text-royal-white/60">
                              ${selectedRoom.room.price} × {selectedRoom.quantity} × {nights} nights
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeRoom(selectedRoom.room.id)}
                            className="border-light-gold/30 text-light-gold hover:bg-light-gold/10 ml-3"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="border-t border-light-gold/30 pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xl font-semibold text-royal-white">Total Amount:</span>
                      <span className="text-3xl font-bold text-gradient-gold">${getTotalPrice()}</span>
                    </div>
                    
                    <Button 
                      variant="royal"
                      className="w-full py-4 text-lg font-semibold shadow-luxury"
                      size="lg"
                      disabled={selectedRooms.length === 0 || !checkInDate || !checkOutDate}
                      onClick={() => {
                        const searchParams = new URLSearchParams({
                          checkIn: checkInDate?.toISOString() || '',
                          checkOut: checkOutDate?.toISOString() || '',
                          adults: adults.toString(),
                          children: children.toString(),
                          rooms: JSON.stringify(selectedRooms),
                          total: getTotalPrice().toString()
                        });
                        navigate(`/payment?${searchParams.toString()}`);
                      }}
                    >
                      Complete Reservation
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;