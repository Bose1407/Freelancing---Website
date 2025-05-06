
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-imperial-600">Broskies<span className='text-black'>Hub</span></h3>
            <p className="text-gray-600 mt-2 max-w-xs">
              Empowering businesses through innovative technology solutions that drive growth and transformation.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="text-gray-600 hover:text-imperial-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="text-gray-600 hover:text-imperial-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="text-gray-600 hover:text-imperial-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="text-gray-600 hover:text-imperial-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-imperial-600 transition-colors link-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development', 
                'Mobile Applications', 
                'UI/UX Design', 
                'Digital Marketing', 
                'Cloud Solutions'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-600 hover:text-imperial-600 transition-colors link-underline"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-imperial-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Madurai,Tamilnadu
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-imperial-600 mr-2 flex-shrink-0" />
                <a href="tel:+91 7094511720" className="text-gray-600 hover:text-imperial-600 transition-colors">
                  +91 7094511720
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-imperial-600 mr-2 flex-shrink-0" />
                <a href="mailto:broskieshub@gmail.com" className="text-gray-600 hover:text-imperial-600 transition-colors">
                  broskieshub@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} BroskiesHub. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-imperial-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-imperial-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
