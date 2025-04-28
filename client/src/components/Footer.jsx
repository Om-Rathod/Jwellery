import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapPin } from 'react-icons/fa'; // Icons from react-icons
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Social icons from react-icons

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Collections',
      links: [
        { name: 'Bridal', href: '/collections/bridal' },
        { name: 'Fine Jewelry', href: '/collections/fine-jewelry' },
        { name: 'Limited Editions', href: '/collections/limited' },
        { name: 'Vintage', href: '/collections/vintage' },
      ],
    },
    {
      title: 'Client Services',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Shipping & Returns', href: '/shipping' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Warranty', href: '/warranty' },
      ],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 border-t border-gold-100"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          {/* Newsletter Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl text-gray-800 mb-6">Exceptional Craftsmanship</h3>
            <p className="text-gray-600 mb-6">
              Join our newsletter for exclusive designs, private events, and artisan stories.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b border-gray-300 bg-transparent py-2 focus:border-gold-500 outline-none placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-gold-600 text-black rounded-full shadow-lg hover:bg-gold-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-serif text-lg text-gray-800 mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.href}
                      className="text-gray-600 hover:text-gold-600 transition-colors flex items-center gap-2"
                    >
                      <span className="text-gold-500">•</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-gray-800 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapPin className="h-5 w-5 text-gold-600 mt-1" />
                <p className="text-gray-600">
                  5th Avenue, 750<br />
                  New York, NY 10019
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="h-5 w-5 text-gold-600" />
                <a href="tel:+18885551234" className="text-gray-600 hover:text-gold-600">
                  +1 (888) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="h-5 w-5 text-gold-600" />
                <a href="mailto:contact@luxuryjewels.com" className="text-gray-600 hover:text-gold-600">
                  contact@luxuryjewels.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social and Certifications */}
        <div className="border-t border-gold-50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-600 hover:text-gold-600"
              >
                <FaInstagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-600 hover:text-gold-600"
              >
                <FaFacebookF className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-600 hover:text-gold-600"
              >
                <FaTwitter className="h-6 w-6" />
              </motion.a>
            </div>

            <div className="flex items-center space-x-8">
              <img src="/payment-icons.png" alt="Payment Methods" className="h-8" />
              <img src="/ssl-secure.png" alt="SSL Secure" className="h-8" />
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Luxury Jewels. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
