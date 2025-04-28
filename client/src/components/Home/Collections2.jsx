import React from 'react';
import { Diamond, Award, Shield, Clock } from 'lucide-react';

const CraftsmanshipFeature = ({ icon: Icon, title, description }) => (
  <div className="text-center p-8 md:p-10 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/10 shadow-lg hover:shadow-amber-300/20 transition-transform hover:scale-105 duration-300">
    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 bg-amber-400/10 rounded-full">
      <Icon size={30} className="text-amber-400" />
    </div>
    <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>
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
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-amber-50 to-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            The Art of Fine Jewelry
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            With over two decades of expertise, we combine traditional craftsmanship with modern innovation to create timeless pieces that tell your unique story.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <CraftsmanshipFeature key={index} {...feature} />
          ))}
        </div>

        {/* Image + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative overflow-hidden rounded-3xl group">
            <img 
              src="https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Jewelry crafting" 
              className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8 px-0 md:px-6">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Crafted with Passion
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Every piece of jewelry that leaves our workshop is a testament to our dedication to excellence. Our master craftsmen combine age-old techniques with cutting-edge technology to create pieces that are both beautiful and durable.
            </p>
            <ul className="space-y-4">
              {[
                "Hand-selected premium materials",
                "Precision crafting and quality control",
                "Certified gemologists and artisans",
                "Sustainable and ethical practices",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full mr-4 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#about" 
              className="inline-block mt-6 px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-black font-semibold text-base md:text-lg rounded-full transition-all duration-300 shadow-md hover:shadow-amber-400/30"
            >
              Learn More About Our Process
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Craftsmanship;
