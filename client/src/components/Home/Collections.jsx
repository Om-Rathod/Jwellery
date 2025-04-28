import React from 'react';
import { ArrowRight } from 'lucide-react';

const CollectionCard = ({ title, imageUrl, count, description, price }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
      {/* Background Image */}
      <div 
        className="h-[500px] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${imageUrl})` }}
        >
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <div className="transform group-hover:translate-y-[-10px] transition-transform duration-300">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 mb-2">{description}</p>
          <p className="text-gold-400 font-medium mb-4">Starting from ${price.toLocaleString()}</p>
          <div className="flex items-center text-white/90 mb-4">
            <span>{count} pieces</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Collections = () => {
  const collections = [
    {
      title: "Gold Elegance",
      description: "Timeless 22K gold pieces crafted for everyday luxury",
      imageUrl: "https://images.pexels.com/photos/10984701/pexels-photo-10984701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: 28,
      price: 999
    },
    {
      title: "Diamond Masterpieces",
      description: "Exquisite diamond jewelry for life's special moments",
      imageUrl: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: 24,
      price: 2499
    },
    {
      title: "Bridal Collection",
      description: "Stunning wedding and engagement rings",
      imageUrl: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: 16,
      price: 1899
    },
    {
      title: "Heritage Collection",
      description: "Traditional designs with contemporary elegance",
      imageUrl: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: 20,
      price: 1299
    },
    {
      title: "Statement Necklaces",
      description: "Bold and beautiful neckpieces for every occasion",
      imageUrl: "https://images.pexels.com/photos/11838178/pexels-photo-11838178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: 15,
      price: 1599
    },
    {
      title: "Designer Earrings",
      description: "From subtle studs to dramatic chandeliers",
      imageUrl: "https://images.pexels.com/photos/12984392/pexels-photo-12984392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: 32,
      price: 799
    }
  ];

  return (
    <section id="collections" className="py-20 bg-cream-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Curated Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections of fine jewelry, where traditional craftsmanship meets contemporary design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard 
              key={index}
              title={collection.title}
              imageUrl={collection.imageUrl}
              count={collection.count}
              description={collection.description}
              price={collection.price}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center bg-black hover:bg-gold-400 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300"
          >
            View All Collections
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collections;