
import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/utils/animations';

const ContactForm: React.FC = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <FadeIn className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-imperial-500 focus:border-transparent transition duration-200 outline-none"
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-imperial-500 focus:border-transparent transition duration-200 outline-none"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-imperial-500 focus:border-transparent transition duration-200 outline-none"
            placeholder="How can we help you?"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-imperial-500 focus:border-transparent transition duration-200 outline-none resize-none"
            placeholder="Tell us more about your project, needs, and timeline..."
          />
        </div>
        
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-imperial-600 hover:bg-imperial-700 text-white py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
