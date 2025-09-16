import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Gallery', href: '/gallery', isRoute: true },
    { name: 'How It Works', href: '#how' },
    { name: 'About', href: '#about' }
  ];

  const handleNavClick = (item) => (e) => {
    if (!item.isRoute) {
      // Handle anchor navigation (for sections on same page)
      e.preventDefault();
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 border border-black bg-white flex items-center justify-center">
              <span className="text-black font-light text-lg">F</span>
            </div>
            <span className="ml-3 text-2xl font-light text-black">FaceMint</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => 
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-black transition-colors font-light"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick(item)}
                  className="text-gray-600 hover:text-black transition-colors font-light cursor-pointer"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-black"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => 
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-black transition-colors py-2 font-light"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick(item)}
                    className="text-gray-600 hover:text-black transition-colors py-2 font-light cursor-pointer"
                  >
                    {item.name}
                  </a>
                )
              )}
              <Button className="bg-black text-white hover:bg-gray-800 w-full mt-4 py-3 font-light">
                Connect Wallet
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;