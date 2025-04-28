import { motion } from 'framer-motion';
import heroImage from '../../assets/hero-main.jpg';
import secondaryImage from '../../assets/hero-secondary.webp';

const Hero = () => {
  return (
    <section className="relative h-[90vh] bg-gray-900 overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Diamond Jewelry"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="border-l-4 border-gold-500 pl-4">
                <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">
                  Timeless Elegance,<br/>
                  Crafted to Perfection
                </h1>
              </div>
              
              <p className="text-lg md:text-xl font-light max-w-xl opacity-90">
                Discover our exquisite collection of handcrafted jewelry pieces that 
                celebrate life's most precious moments.
              </p>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 rounded-sm font-medium uppercase tracking-wide transition-colors"
                >
                  Shop Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border border-white hover:border-gold-500 text-white px-8 py-3 rounded-sm font-medium uppercase tracking-wide transition-colors"
                >
                  Explore Collection
                </motion.button>
              </div>
            </motion.div>

            {/* Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="relative group">
                <img
                  src={secondaryImage}
                  alt="Diamond Ring"
                  className="w-full h-96 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -inset-4 border-2 border-gold-500/30 rounded-lg transform group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-gold-500 rotate-45 opacity-50" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 rounded-full border-2 border-gold-500 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-gold-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;