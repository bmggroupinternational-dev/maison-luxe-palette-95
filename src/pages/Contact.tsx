import { Button } from "@/components/ui/button";
import { Crown, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
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
            <span className="text-gradient-maroon">Get in</span>{" "}
            <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience luxury living? Contact our dedicated team to schedule a viewing
            or learn more about our premium apartments.
          </p>
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
              <h2 className="text-3xl font-bold text-deep-maroon mb-6">Send us a Message</h2>
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

                <div>
                  <label className="block text-sm font-medium text-deep-maroon mb-2">
                    Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all">
                    <option>Select your interest</option>
                    <option>Royal Suite</option>
                    <option>Executive Suite</option>
                    <option>Luxury Studio</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-maroon mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-deep-gold focus:border-transparent transition-all"
                    placeholder="Tell us about your luxury living requirements..."
                  ></textarea>
                </div>

                <Button variant="royal" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
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