import { useState } from "react";
import { format, addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const BookingWidget = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(addDays(new Date(), 1));

  const handleBookNow = () => {
    const bookingParams = new URLSearchParams({
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      adults: '1',
      children: '0'
    });
    navigate(`/booking?${bookingParams.toString()}`);
  };

  return (
    <div className="bg-royal-white/95 backdrop-blur-sm border border-royal-white/20 rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        {/* Check In Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-deep-maroon">Check In</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-12 bg-royal-white border-charcoal-gray/20 hover:border-deep-gold",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-deep-gold" />
                {checkIn ? format(checkIn, "MMM dd, yyyy") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  if (date) {
                    setCheckIn(date);
                    if (date >= checkOut) {
                      setCheckOut(addDays(date, 1));
                    }
                  }
                }}
                disabled={(date) => date < new Date()}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check Out Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-deep-maroon">Check Out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-12 bg-royal-white border-charcoal-gray/20 hover:border-deep-gold",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-deep-gold" />
                {checkOut ? format(checkOut, "MMM dd, yyyy") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={(date) => date && setCheckOut(date)}
                disabled={(date) => date <= checkIn}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Book Now Button */}
        <div className="space-y-2">
          <div className="h-6"></div> {/* Spacer for alignment */}
          <Button 
            onClick={handleBookNow}
            className="w-full h-12 bg-gradient-to-r from-deep-maroon to-deep-maroon/90 hover:from-deep-maroon/90 hover:to-deep-maroon text-royal-white font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;