
import React from 'react';
import { FadeIn } from '@/utils/animations';
import ContactForm from '@/components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen transition-opacity duration-500">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-imperial-50">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-imperial-600">touch</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Have a question, project idea, or want to learn more about our services? We'd love to hear from you. Reach out using the form below or contact us directly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <FadeIn direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Contact Information
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Our team is here to help. Don't hesitate to reach out through any of the following channels.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-imperial-50 p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-imperial-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Our Office</h3>
                        <p className="text-gray-600">
                          123 Tech Boulevard<br />
                          San Francisco, CA 94107<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-imperial-50 p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-imperial-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          +1 (555) 123-4567<br />
                          Monday - Friday, 9am - 6pm PST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-imperial-50 p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-imperial-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          info@imperium.com<br />
                          support@imperium.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-imperial-50 p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-imperial-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn direction="left">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a message
                  </h2>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[16/9] bg-gray-200 w-full">
              <div className="flex items-center justify-center h-full text-gray-400">
                Map Placeholder - Google Maps would be embedded here
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;
