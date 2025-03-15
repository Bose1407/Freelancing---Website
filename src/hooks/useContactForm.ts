
import { useState } from 'react';
import { ContactFormData } from '@/types';
import { useToast } from '@/components/ui/use-toast';

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here is where you would normally send the data to your backend
      // For now, we'll simulate a successful submission
      console.log('Form submitted with data:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        duration: 5000,
      });

      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "An error occurred while sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  };
};
