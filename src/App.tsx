import React, { useState } from 'react';
import {
  PhoneCall,
  Baby,
  Building2,
  Home,
  Calendar,
  Leaf,
  Shield,
  CheckCircle2,
  MapPin,
  Star,
} from 'lucide-react';
import { Logo } from './components/Logo';
import { BookingModal } from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(103, 159, 190, 0.9)' }} />
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            <a
              href="tel:+14079175229"
              className="flex items-center space-x-2 bg-[#FFA500] hover:bg-[#FF8C00] text-white px-4 py-2 rounded-full transition duration-300"
            >
              <PhoneCall className="h-5 w-5" />
              <span>Call for Quote</span>
            </a>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Professional Eco-Friendly Cleaning Services in Orlando
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Experience the difference with our pet-safe, child-safe cleaning solutions. 
              Satisfaction guaranteed for all your residential and commercial cleaning needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 flex items-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Now</span>
              </button>
              <a 
                href="tel:+14079175229"
                className="bg-white hover:bg-gray-100 text-[#679FBE] px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#679FBE] mb-12">
            Our Professional Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Move In/Out Cleaning",
                description: "Comprehensive cleaning services to ensure your property is ready for its next chapter."
              },
              {
                icon: Building2,
                title: "Office Cleaning",
                description: "Keep your workplace pristine and professional with our commercial cleaning solutions."
              },
              {
                icon: Baby,
                title: "Childcare Facility Cleaning",
                description: "Specialized cleaning services ensuring a safe, hygienic environment for children."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#679FBE]">
                <service.icon className="h-12 w-12 text-[#FFA500] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-[#679FBE]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#679FBE] mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                content: "The team at Squeaky Spring is amazing! They transformed my home and their eco-friendly products give me peace of mind with my kids and pets.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Office Manager",
                content: "Professional, reliable, and thorough. Our office has never looked better. The staff is always courteous and pays attention to every detail.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Daycare Owner",
                content: "As a childcare facility, cleanliness is our top priority. Squeaky Spring consistently delivers exceptional service with safe, effective cleaning.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFA500] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-[#679FBE]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#679FBE]">Why Choose Squeaky Spring?</h2>
              <div className="space-y-4">
                {[
                  { icon: Leaf, text: "Eco-friendly cleaning products" },
                  { icon: Shield, text: "Pet and child safe solutions" },
                  { icon: CheckCircle2, text: "100% satisfaction guaranteed" },
                  { icon: MapPin, text: "Serving greater Orlando area" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="h-6 w-6 text-[#FFA500]" />
                    <span className="text-lg text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80"
                alt="Eco-friendly cleaning products"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#679FBE' }} className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Book your cleaning service today and experience the Squeaky Spring difference.
            Satisfaction guaranteed!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Schedule Cleaning
            </button>
            <a
              href="tel:+14079175229"
              className="bg-white hover:bg-gray-100 text-[#679FBE] px-8 py-3 rounded-full text-lg font-semibold transition duration-300 flex items-center space-x-2"
            >
              <PhoneCall className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/squeaky-duck.png" 
                alt="Squeaky Spring Cleaning Duck Mascot" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Squeaky Spring Cleaning</span>
            </div>
            <div className="text-center md:text-right">
              <p>Serving the Greater Orlando Area</p>
              <p className="mt-2">© 2024 Squeaky Spring Cleaning. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;