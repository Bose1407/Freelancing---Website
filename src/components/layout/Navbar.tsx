import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6',
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="font-bold text-2xl text-imperial-950 dark:text-white animate-hover">
            <span className="text-imperial-600 dark:text-imperial-400">Broskies<span className='text-black'>Hub</span></span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => cn(
                  'text-sm font-medium animate-hover',
                  isActive 
                    ? 'text-imperial-600 dark:text-imperial-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-imperial-500 dark:hover:text-imperial-400',
                  'link-underline'
                )}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Theme Toggle and Contact Button on Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <ThemeToggle />
            {/* Contact Us Button */}
            <Link to={'/contact'}>
              <Button className="bg-imperial-600 hover:bg-imperial-700 dark:bg-imperial-500 dark:hover:bg-imperial-600 text-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute left-0 right-0 top-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden',
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto py-6 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => cn(
                'text-base py-2 font-medium animate-hover',
                isActive 
                  ? 'text-imperial-600 dark:text-imperial-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-imperial-500 dark:hover:text-imperial-400'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <a href="/contact"><p>Contact Us</p></a>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
