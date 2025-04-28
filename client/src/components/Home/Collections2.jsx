import React from 'react';
import { Diamond, Award, Shield, Clock } from 'lucide-react';

const CraftsmanshipFeature = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6 md:p-8 bg-cream-50 rounded-2xl transition-transform hover:scale-105 duration-300">
    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 bg-gold-400/10 rounded-full">
      <Icon size={28} className="text-gold-400" />
    </div>
    <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-3">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base">{description}</p>
  </div>
);

const Craftsmanship = () => {
  const features = [
    {
      icon: Diamond,
      title: "Expert Craftsmanship",
      description: "Each piece is meticulously crafted by our master artisans with decades of experience."
    },
    {
      icon: Award,
      title: "Finest Materials",
      description: "We use only the highest quality precious metals and ethically sourced gemstones."
    },
    {
      icon: Shield,
      title: "Lifetime Guarantee",
      description: "Every piece comes with our lifetime warranty and free maintenance service."
    },
    {
      icon: Clock,
      title: "Custom Creation",
      description: "From concept to creation, we bring your dream jewelry to life within 4 weeks."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-3 md:mb-4">The Art of Fine Jewelry</h2>
          <p className="text-gray-600 text-sm md:text-base">
            With over two decades of expertise, we combine traditional craftsmanship with modern innovation to create timeless pieces that tell your unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {features.map((feature, index) => (
            <CraftsmanshipFeature key={index} {...feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative overflow-hidden rounded-2xl group">
            <img 
              src="https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Jewelry crafting" 
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          <div className="space-y-4 md:space-y-6 px-0 md:px-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold">Crafted with Passion</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Every piece of jewelry that leaves our workshop is a testament to our dedication to excellence. Our master craftsmen combine age-old techniques with cutting-edge technology to create pieces that are both beautiful and durable.
            </p>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                <span className="text-sm md:text-base">Hand-selected premium materials</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                <span className="text-sm md:text-base">Precision crafting and quality control</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                <span className="text-sm md:text-base">Certified gemologists and artisans</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                <span className="text-sm md:text-base">Sustainable and ethical practices</span>
              </li>
            </ul>
            <a 
              href="#about" 
              className="inline-block mt-4 md:mt-6 px-6 md:px-8 py-2.5 md:py-3 bg-black text-white text-sm md:text-base rounded-full hover:bg-gold-400 transition-colors duration-300"
            >
              Learn More About Our Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;