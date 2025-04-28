import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import heroImage from '../../assets/hero-main.jpg'; 
import secondaryImage from '../../assets/hero-secondary.webp'; 

const slides = [
  {
    bgImage: heroImage,
    content: {
      title: "Timeless Elegance,\nCrafted to Perfection",
      text: "Discover our exquisite collection of handcrafted jewelry pieces that celebrate life's most precious moments.",
      buttons: [
        { text: "Shop Now", variant: 'primary' },
        { text: "Explore Collection", variant: 'secondary' },
      ],
    },
  },
  {
    bgImage: secondaryImage,
    content: {
      title: "Luxury Redefined,\nDiamonds Eternal",
      text: "Experience the brilliance of our signature diamond collections crafted with precision and passion.",
      buttons: [
        { text: "New Arrivals", variant: 'primary' },
        { text: "Custom Design", variant: 'secondary' },
      ],
    },
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden shadow-hero">
      {/* Enhanced Slides with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === activeSlide ? 1 : 0,
              scale: 1
            }}
            transition={{ 
              duration: 1.6, 
              ease: [0.83, 0, 0.17, 1],
              scale: { duration: 1.8 }
            }}
            className="absolute inset-0"
          >
            <motion.img
              src={slide.bgImage}
              alt=""
              className="w-full h-full object-cover object-center"
              animate={{
                scale: autoPlay ? 1.05 : 1
              }}
              transition={{
                duration: 8,
                ease: "linear"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/75" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Refined Content Section */}
      <div className="relative z-10 h-full">
        {slides.map((slide, index) => (
          index === activeSlide && (
            <div key={index} className="absolute inset-0">
              <div className="container mx-auto px-4 h-full flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-white space-y-10 max-w-2xl relative"
                >
                  <div className="relative pl-8 ml-[-8px] border-l-4 border-gold-500">
                    <motion.h1
                      className="text-5xl md:text-6xl xl:text-7xl font-playfair font-bold leading-[1.15] whitespace-pre-line"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {slide.content.title.split('\n').map((line, i) => (
                        <motion.span
                          key={i}
                          className="block"
                          initial={{ y: 30 }}
                          animate={{ y: 0 }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                        >
                          {line}
                        </motion.span>
                      ))}
                    </motion.h1>
                    <div className="absolute left-[-4px] top-0 w-2 h-full bg-gold-500/30" />
                  </div>

                  <motion.p 
                    className="text-lg md:text-xl font-light opacity-95 max-w-xl tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {slide.content.text}
                  </motion.p>

                  <div className="flex gap-6">
                    {slide.content.buttons.map((button, btnIndex) => (
                      <motion.button
                        key={btnIndex}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 12px 32px -8px rgba(214, 174, 94, 0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative overflow-hidden group ${
                          button.variant === 'primary'
                            ? 'bg-gradient-to-br from-gold-500 via-gold-600 to-gold-500'
                            : 'border border-gold-500/30 hover:border-gold-500'
                        } px-10 py-5 rounded-none font-medium uppercase tracking-widest transition-all duration-300`}
                      >
                        <span className="relative z-10 mix-blend-exclusion">
                          {button.text}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {button.variant === 'primary' && (
                          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Elegant Controls */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-6">
        <motion.button
          onClick={() => { setAutoPlay(false); prevSlide(); }}
          whileHover={{ scale: 1.15, rotate: -5 }}
          className="p-4 rounded-full bg-gradient-to-br from-black/40 via-black/20 to-black/40 backdrop-blur-lg hover:from-gold-500/90 hover:to-gold-600 transition-all shadow-xl"
        >
          <FiChevronLeft className="w-10 h-10 text-gold-100" />
        </motion.button>
        <motion.button
          onClick={() => { setAutoPlay(false); nextSlide(); }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="p-4 rounded-full bg-gradient-to-bl from-black/40 via-black/20 to-black/40 backdrop-blur-lg hover:from-gold-500/90 hover:to-gold-600 transition-all shadow-xl"
        >
          <FiChevronRight className="w-10 h-10 text-gold-100" />
        </motion.button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-30 bg-black/30">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-500 to-gold-600"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: "linear" }}
          onAnimationComplete={() => autoPlay && nextSlide()}
        />
      </div>

      {/* Luxury Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => { setAutoPlay(false); goToSlide(index); }}
            whileHover={{ scale: 1.3 }}
            className="relative p-2"
          >
            <div className={`w-3 h-3 rounded-full transition-colors ${
              index === activeSlide ? 'bg-gold-500' : 'bg-white/50'
            }`} />
            {index === activeSlide && (
              <motion.div
                className="absolute inset-0 border-2 border-gold-500 rounded-full"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring' }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Animated Scroll Hint */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-14 h-20 rounded-full border-2 border-gold-500/40 flex items-center justify-center p-2 backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all">
          <motion.div
            className="w-4 h-4 bg-gold-500 rounded-full"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
