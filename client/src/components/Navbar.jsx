import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Cart from '../pages/Cart';  // Import Cart component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const [cartOpen, setCartOpen] = useState(false);  // State to manage cart visibility
  
  const navigation = [
    { name: 'Home', href: '/' },

    {
      name: 'Shop',
      submenu: [
        { name: 'Rings', href: '/shop/rings' },
        { name: 'Necklaces', href: '/shop/necklaces' },
        { name: 'Bracelets', href: '/shop/bracelets' },
        { name: 'Earrings', href: '/shop/earrings' },
        { name: 'Chains', href: '/shop/chains' },
        { name: 'Pendants', href: '/shop/pendants' },
        { name: 'Bangles', href: '/shop/bangles' },
        { name: 'Anklets', href: '/shop/anklets' },
        { name: 'Toe Rings', href: '/shop/toe-rings' },
        { name: 'Men’s Jewelry', href: '/shop/men' },
        { name: 'Kids Collection', href: '/shop/kids' },
      ]
    },
  
    {
      name: 'Collections',
      submenu: [
        { name: 'Wedding', href: '/collections/wedding' },
        { name: 'Festive', href: '/collections/festive' },
        { name: 'Everyday', href: '/collections/everyday' },
        { name: 'Office Wear', href: '/collections/office-wear' },
        { name: 'Party Wear', href: '/collections/party-wear' },
        { name: 'Minimal', href: '/collections/minimal' },
        { name: 'Boho Chic', href: '/collections/boho' },
        { name: 'Luxury Sets', href: '/collections/luxury' },
      ]
    },
  
    {
      name: 'Gifts',
      submenu: [
        { name: 'For Her', href: '/gifts/for-her' },
        { name: 'For Him', href: '/gifts/for-him' },
        { name: 'Anniversary Gifts', href: '/gifts/anniversary' },
        { name: 'Birthday Gifts', href: '/gifts/birthday' },
        { name: 'Custom Engraved', href: '/gifts/custom-engraved' },
        { name: 'Under ₹5000', href: '/gifts/under-5000' },
        { name: 'Under ₹10000', href: '/gifts/under-10000' },
        { name: 'Gift Cards', href: '/gifts/gift-cards' },
      ]
    },
  
    {
      name: 'Custom Design',
      submenu: [
        { name: 'Design Your Own', href: '/custom/design' },
        { name: 'Upload Inspiration', href: '/custom/upload' },
        { name: 'Consult an Expert', href: '/custom/consult' },
      ]
    },
    { name: 'About', href: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`bg-white/95 backdrop-blur-xl fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'h-16 shadow-sm' : 'h-20'}`}>
      {/* Gold accent line */}
      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <motion.img
              src="/logo.png"
              alt="Luxury Jewelry"
              className={`transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-12">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 font-medium font-serif text-lg ${pathname === item.href ? 'text-gold-600' : 'text-gray-800 hover:text-gold-600'} transition-colors duration-300`}
                  >
                    {item.name}
                  </Link>

                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gold-50 hover:text-gold-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ y: -2 }}
              className="p-2 text-gray-800 hover:text-gold-600 transition-colors relative group"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              className="p-2 text-gray-800 hover:text-gold-600 transition-colors relative group"
            >
              <UserIcon className="h-6 w-6" />
            </motion.button>

            {/* Shopping Bag Icon with onClick */}
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => setCartOpen(true)} // Toggle cart visibility
              className="p-2 text-gray-800 hover:text-gold-600 transition-colors relative group"
            >
              <ShoppingBagIcon className="h-6 w-6" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="lg:hidden p-2 text-gray-800 hover:text-gold-600 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Mobile menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Cart Component */}
        <AnimatePresence>
          {cartOpen && <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-0 bg-white/97 backdrop-blur-2xl pt-24"
              style={{ background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.97), rgba(255,255,255,0.95))' }}
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 5 }}
                    className="border-b border-gold-50"
                  >
                    <Link
                      to={item.href}
                      className={`block px-4 py-5 text-xl font-serif ${pathname === item.href ? 'text-gold-600 font-semibold pl-6' : 'text-gray-800 hover:text-gold-600'} transition-all duration-200`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-10 px-4 space-y-5">
                  <Link
                    to="/login"
                    className="block w-full text-center py-4 px-6 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors shadow-lg hover:shadow-gold-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center py-4 px-6 border-2 border-gold-600 text-gold-600 rounded-lg hover:bg-gold-50 transition-colors shadow-sm"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
