
import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/utils/animations';
import { toast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send data to the backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Your message has been sent successfully. We'll get back to you soon.",
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <FadeIn className="w-full max-w-2xl mx-auto">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-imperial-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-200 outline-none"
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-imperial-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-200 outline-none"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-imperial-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-200 outline-none"
            placeholder="How can we help you?"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-imperial-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-200 outline-none resize-none"
            placeholder="Tell us more about your project, needs, and timeline..."
          />
        </div>
        
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-imperial-600 hover:bg-imperial-700 dark:bg-imperial-500 dark:hover:bg-imperial-600 text-white py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
