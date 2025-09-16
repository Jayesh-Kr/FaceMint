import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { title: 'Gallery', href: '/gallery', isRoute: true },
    { title: 'How It Works', href: '#how' },
    { title: 'About', href: '#about' }
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

  // Check if current path matches the nav item
  const isActive = (item) => {
    if (item.isRoute) {
      return location.pathname === item.href;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-8 h-8 border border-black dark:border-white bg-white dark:bg-gray-900 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:dark:bg-white">
              <span className="text-black dark:text-white font-mono text-lg group-hover:text-white group-hover:dark:text-black transition-colors duration-300">F</span>
            </div>
            <span className="ml-3 text-xl font-mono font-medium text-black dark:text-white">FaceMint</span>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => 
                item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`font-mono text-sm font-medium transition-all duration-300 hover:text-black dark:hover:text-white ${
                      isActive(item) ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick(item)}
                    className="font-mono text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item.title}
                  </a>
                )
              )}
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 dark:border-gray-800">
            <nav className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => 
                item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-mono text-sm font-medium py-2 transition-all duration-300 hover:text-black dark:hover:text-white ${
                      isActive(item) ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick(item)}
                    className="font-mono text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 py-2 cursor-pointer"
                  >
                    {item.title}
                  </a>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;