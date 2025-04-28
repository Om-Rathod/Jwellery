import React from 'react';
import { Diamond, Award, Shield, Clock } from 'lucide-react';

const CraftsmanshipFeature = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6 md:p-8 bg-[#FAF9F6] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-5 bg-[#F4E7D4] rounded-full">
      <Icon size={32} className="text-[#BFA67A]" />
    </div>
    <h3 className="text-lg md:text-xl font-serif font-semibold mb-2 text-[#1A1A1A]">{title}</h3>
    <p className="text-gray-500 text-sm md:text-base leading-relaxed">{description}</p>
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
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Title Section */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#1A1A1A]">
            The Art of Fine Jewelry
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            With over two decades of expertise, we blend traditional craftsmanship with modern innovation to create timeless pieces that tell your unique story.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <CraftsmanshipFeature key={index} {...feature} />
          ))}
        </div>

        {/* Image + Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl group shadow-lg">
            <img 
              src="https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Jewelry crafting" 
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 px-0 md:px-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A]">
              Crafted with Passion
            </h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Every piece of jewelry that leaves our workshop is a testament to our dedication to excellence. Our master craftsmen combine age-old techniques with cutting-edge technology to create pieces that are both beautiful and durable.
            </p>

            {/* List */}
            <ul className="space-y-4">
              {[
                "Hand-selected premium materials",
                "Precision crafting and quality control",
                "Certified gemologists and artisans",
                "Sustainable and ethical practices"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-[#BFA67A] rounded-full mr-3"></span>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a 
              href="#about" 
              className="inline-block mt-6 px-8 py-3 bg-[#1A1A1A] hover:bg-[#BFA67A] text-white font-medium rounded-full text-sm md:text-base transition-all duration-300"
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
