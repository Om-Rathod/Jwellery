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
import Cart from '../pages/Cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { pathname } = useLocation();

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
      ],
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
      ],
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
      ],
    },
    {
      name: 'Customize',
      submenu: [
        { name: 'Design Your Own', href: '/custom/design' },
        { name: 'Upload Inspiration', href: '/custom/upload' },
        { name: 'Consult an Expert', href: '/custom/consult' },
      ],
    },
    { name: 'About', href: '/about' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md ${isScrolled ? 'h-16 shadow-md' : 'h-20'} border-b border-gray-200`}>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="h-16 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href || '#'}
                className={`text-lg font-medium ${pathname.startsWith(item.href) ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'} transition-colors`}
              >
                {item.name}
              </Link>

              {item.submenu && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3 hidden group-hover:block">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white shadow-lg rounded-lg border border-yellow-100 py-4 px-6 grid grid-cols-1 gap-2 w-52"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="text-gray-600 hover:text-yellow-500 text-sm transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <IconButton Icon={MagnifyingGlassIcon} />
          <IconButton Icon={UserIcon} />
          <IconButton Icon={ShoppingBagIcon} onClick={() => setCartOpen(true)} badge="3" />

          {/* Mobile Menu */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
            {isMenuOpen ? <XMarkIcon className="h-8 w-8 text-gray-700" /> : <Bars3Icon className="h-8 w-8 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Cart */}
      <AnimatePresence>
        {cartOpen && (
          <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed inset-0 bg-white z-40 p-8 pt-24 flex flex-col space-y-6"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-2xl text-gray-700 hover:text-yellow-500 transition"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-auto space-y-4">
              <Link to="/login" className="block w-full py-3 text-center text-white bg-yellow-500 rounded-xl shadow hover:bg-yellow-600">
                Sign In
              </Link>
              <Link to="/register" className="block w-full py-3 text-center border-2 border-yellow-500 text-yellow-500 rounded-xl hover:bg-yellow-50">
                Create Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const IconButton = ({ Icon, onClick, badge }) => (
  <button onClick={onClick} className="relative p-2 text-gray-700 hover:text-yellow-500 transition">
    <Icon className="h-6 w-6" />
    {badge && (
      <span className="absolute -top-1 -right-1 text-xs bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
        {badge}
      </span>
    )}
  </button>
);

export default Navbar;
