
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = '',
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 30px, 0)';
      case 'down':
        return 'translate3d(0, -30px, 0)';
      case 'left':
        return 'translate3d(30px, 0, 0)';
      case 'right':
        return 'translate3d(-30px, 0, 0)';
      case 'none':
        return 'translate3d(0, 0, 0)';
    }
  };

  const styles = {
    transition: `transform ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s, opacity ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0)' : getTransform(),
  };

  return (
    <div ref={ref} style={styles} className={className}>
      {children}
    </div>
  );
};

interface ScrollImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const BlurImage: React.FC<ScrollImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={cn('blur-load', isLoaded && 'loaded', className)}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-500"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export const PageTransition: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div
      className="min-h-screen transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {children}
    </div>
  );
};
