import {
  PhoneCall,
  Sparkles,
  Baby,
  Building2,
  Home,
  Calendar,
  Leaf,
  Shield,
  CheckCircle2,
  MapPin,
  Bed,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">Squeaky Spring Cleaning</span>
            </div>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300"
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
            <p className="text-xl text-gray-200 mb-8">
              Experience the difference with our pet-safe, child-safe cleaning solutions. 
              Satisfaction guaranteed for all your residential and commercial cleaning needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book Now</span>
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Professional Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              },
              {
                icon: Bed,
                title: "Airbnb & Vacation Rentals",
                description: "Professional turnover cleaning services to keep your rental property spotless for every guest."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <service.icon className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
              <h2 className="text-3xl font-bold mb-6">Why Choose Squeaky Spring Cleaning?</h2>
              <div className="space-y-4">
                {[
                  { icon: Leaf, text: "Eco-friendly cleaning products" },
                  { icon: Shield, text: "Pet and child safe solutions" },
                  { icon: CheckCircle2, text: "100% satisfaction guaranteed" },
                  { icon: MapPin, text: "Serving greater Orlando area" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="h-6 w-6 text-green-500" />
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
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your cleaning service today and experience the Squeaky Spring Cleaning difference.
            Satisfaction guaranteed!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
              Schedule Cleaning
            </button>
            <a
              href="tel:+1234567890"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 flex items-center space-x-2"
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
              <Sparkles className="h-6 w-6" />
              <span className="text-xl font-bold">Squeaky Spring Cleaning</span>
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