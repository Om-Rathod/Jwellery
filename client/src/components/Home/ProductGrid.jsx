import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { id: 1, name: 'Diamond Cascade Necklace', price: 2499, image: 'necklase.jpg' },
    { id: 2, name: 'Vintage Pearl Earrings', price: 899, image: 'earrings.avif' },
    { id: 3, name: 'Art Deco Gold Bracelet', price: 1599, image: 'bracelet.avif' },
    { id: 4, name: 'Sapphire Royal Ring', price: 1999, image: 'ring.jpg' },
    // Add more products
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Navigation */}
      <nav className="bg-[#0F0F0F] py-4 px-8 fixed w-full z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-playfair text-[#D4AF37]">Luxe Bijoux</h1>
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative text-[#D4AF37] hover:text-[#f5e6c6] transition">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span className="absolute -top-1 -right-2 bg-[#D4AF37] text-[#0F0F0F] rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">3</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Product Grid */}
      <div className="pt-20 pb-16 px-8">
        <h2 className="text-4xl font-playfair text-center text-[#0F0F0F] mb-12">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-lora text-lg text-[#0F0F0F] mb-2">{product.name}</h3>
                <p className="text-[#D4AF37] text-xl font-semibold">${product.price}</p>
                <button className="mt-4 w-full bg-[#0F0F0F] text-[#faf8f5] py-2 rounded-md hover:bg-[#D4AF37] transition-colors duration-300">
                  Quick View
                </button>
              </div>
              <div className="absolute top-4 right-4 bg-[#D4AF37]/90 text-[#0F0F0F] px-3 py-1 rounded-full text-sm font-medium">
                New Arrival
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] py-6 px-8">
        <p className="text-center text-[#D4AF37] font-lora">
          © 2024 Luxe Bijoux - Crafting Timeless Elegance
        </p>
      </footer>
    </div>
  );
};

export default Products;