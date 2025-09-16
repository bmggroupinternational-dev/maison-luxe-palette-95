import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Phone, Mail, MapPin, Clock, Send, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";

const Contact = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [bookingDates, setBookingDates] = useState<{
    checkIn: string;
    checkOut: string;
  } | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const checkIn = urlParams.get('checkIn');
    const checkOut = urlParams.get('checkOut');

    if (type === 'booking' && checkIn && checkOut) {
      setIsBooking(true);
      setBookingDates({
        checkIn: format(new Date(checkIn), 'MMM dd, yyyy'),
        checkOut: format(new Date(checkOut), 'MMM dd, yyyy')
      });
    }
  }, []);

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
            <span className="text-gradient-maroon">{isBooking ? 'Complete Your' : 'Get in'}</span>{" "}
            <span className="text-gradient-gold">{isBooking ? 'Booking' : 'Touch'}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isBooking 
              ? 'Finalize your luxury apartment booking. Our team will contact you within 24 hours to confirm your reservation.'
              : 'Ready to experience luxury living? Contact our dedicated team to schedule a viewing or learn more about our premium apartments.'
            }
          </p>
          
          {isBooking && bookingDates && (
            <div className="mt-8 inline-flex items-center gap-6 bg-deep-gold/10 rounded-full px-8 py-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-deep-gold" />
                <span className="text-deep-maroon font-medium">Check In: {bookingDates.checkIn}</span>
              </div>
              <div className="w-px h-6 bg-deep-gold/30"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-deep-gold" />
                <span className="text-deep-maroon font-medium">Check Out: {bookingDates.checkOut}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-deep-maroon mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Our professional team is here to assist you with all your luxury living needs.
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="card-royal p-6 royal-hover">
                  <div className="flex items-start gap-4">
                    <div className="bg-deep-gold/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-deep-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-maroon mb-2">Phone</h3>
                      <p className="text-muted-foreground">+255 123 456 789</p>
                      <p className="text-muted-foreground">+255 987 654 321</p>
                    </div>
                  </div>
                </div>

                <div className="card-royal p-6 royal-hover">
                  <div className="flex items-start gap-4">
                    <div className="bg-deep-gold/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-deep-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-maroon mb-2">Email</h3>
                      <p className="text-muted-foreground">info@maisonluxe.tz</p>
                      <p className="text-muted-foreground">leasing@maisonluxe.tz</p>
                    </div>
                  </div>
                </div>

                <div className="card-royal p-6 royal-hover">
                  <div className="flex items-start gap-4">
                    <div className="bg-deep-gold/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-deep-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-maroon mb-2">Address</h3>
                      <p className="text-muted-foreground">Maison Luxe Apartments</p>
                      <p className="text-muted-foreground">123 Premium Avenue</p>
                      <p className="text-muted-foreground">Dodoma, Tanzania</p>
                    </div>
                  </div>
                </div>

                <div className="card-royal p-6 royal-hover">
                  <div className="flex items-start gap-4">
                    <div className="bg-deep-gold/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-deep-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-maroon mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-royal p-8">
              <h2 className="text-3xl font-bold text-deep-maroon mb-6">
                {isBooking ? 'Booking Details' : 'Send us a Message'}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-maroon mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-maroon mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-maroon mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-maroon mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all"
                    placeholder="+255 123 456 789"
                  />
                </div>

                {isBooking && (
                  <div>
                    <label className="block text-sm font-medium text-deep-maroon mb-2">
                      Number of Guests
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all">
                      <option>Select number of guests</option>
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-deep-maroon mb-2">
                    {isBooking ? 'Apartment Type' : 'Interest'}
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all">
                    <option>{isBooking ? 'Select apartment type' : 'Select your interest'}</option>
                    <option>Royal Suite</option>
                    <option>Executive Suite</option>
                    <option>Luxury Studio</option>
                    {!isBooking && <option>General Inquiry</option>}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-maroon mb-2">
                    {isBooking ? 'Special Requests' : 'Message'}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all"
                    placeholder={isBooking 
                      ? "Any special requests for your stay? (early check-in, late check-out, etc.)"
                      : "Tell us about your luxury living requirements..."
                    }
                  ></textarea>
                </div>

                <Button variant="royal" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  {isBooking ? 'Confirm Booking Request' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;