import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { format, addDays } from 'date-fns';
import { X, Clock, Home } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 'residential', name: 'Residential Cleaning', icon: Home, duration: '2-3 hours' },
  { id: 'deep', name: 'Deep Cleaning', icon: Home, duration: '4-5 hours' },
  { id: 'move', name: 'Move In/Out Cleaning', icon: Home, duration: '5-6 hours' },
];

// Initialize EmailJS with environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email notification using environment variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'squeakyspringcleaning@gmail.com',
          from_name: name,
          from_email: email,
          phone: phone,
          service: services.find(s => s.id === selectedService)?.name,
          date: format(selectedDate, 'MMMM d, yyyy'),
          time: selectedTime,
          message: `New cleaning service booking request from ${name}`,
        }
      );

      // Show success message
      alert('Booking request sent successfully! We will contact you shortly to confirm your appointment.');
      onClose();
      setStep(1);
      resetForm();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error processing your request. Please try again or call us at (407) 917-5229');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedDate(new Date());
    setSelectedTime('');
    setSelectedService('');
    setEmail('');
    setName('');
    setPhone('');
  };

  const nextAvailableDates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i + 1));

  // Embed Calendly inline widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-xl w-full bg-white rounded-xl shadow-lg">
          <div className="relative p-6">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>

            <Dialog.Title className="text-2xl font-semibold text-[#679FBE] mb-6">
              Schedule a Cleaning
            </Dialog.Title>

            {step === 1 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Select a Service</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.id);
                        setStep(2);
                      }}
                      className={`w-full p-4 text-left rounded-lg border transition-all ${
                        selectedService === service.id
                          ? 'border-[#679FBE] bg-blue-50'
                          : 'border-gray-200 hover:border-[#679FBE]'
                      }`}
                    >
                      <div className="flex items-center">
                        <service.icon className="h-6 w-6 text-[#679FBE] mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">{service.name}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Your Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#679FBE] focus:ring-[#679FBE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#679FBE] focus:ring-[#679FBE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#679FBE] focus:ring-[#679FBE]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Select Date and Time</h3>
                  <div 
                    className="calendly-inline-widget" 
                    data-url={import.meta.env.VITE_CALENDLY_URL}
                    style={{ minWidth: '320px', height: '400px' }} 
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !name || !email || !phone}
                  className="w-full bg-[#679FBE] text-white py-3 px-4 rounded-lg hover:bg-[#5a8ba8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : 'Book Cleaning Service'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Or call us directly at{' '}
                  <a href="tel:+14079175229" className="text-[#679FBE] font-semibold">
                    (407) 917-5229
                  </a>
                </p>
              </form>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}