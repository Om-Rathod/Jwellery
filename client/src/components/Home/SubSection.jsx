import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Subsection = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ 
        left: offset, 
        behavior: "smooth",
        inline: "center"
      });
    }
  };

  const products = [
    {
      id: 1,
      name: "Tiya 22KT Gold Pendant",
      price: "₹42,289",
      image: "/images/pendant1.jpeg",
      collection: "Heritage Collection"
    },
    {
      id: 2,
      name: "Siya 22KT Gold Pendant",
      price: "₹24,028",
      image: "/images/pendant2.avif",
      collection: "Modern Classics"
    },
    {
      id: 3,
      name: "Farida 22KT Gold Stud",
      price: "₹19,397",
      image: "/images/earring3.jpeg",
      collection: "Everyday Elegance"
    },
    {
      id: 4,
      name: "Pravya 22KT Gold Pendant",
      price: "₹30,150",
      image: "/images/pendant4.jpg",
      collection: "Royal Legacy"
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-8 rounded-[4rem] bg-[#0F0F0F] my-16 shadow-[0_35px_60px_-15px_rgba(212,175,55,0.3)] overflow-hidden border border-[#D4AF37]/20 relative group">

      {/* Left Banner */}
      <div className="md:w-1/3 flex flex-col justify-center items-start space-y-8 p-10 bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] rounded-3xl relative overflow-hidden">
        {/* Luxury Texture */}
        <div className="absolute inset-0 bg-[url('/images/gold-texture.png')] bg-repeat opacity-10 mix-blend-soft-light" />
        
        {/* Animated Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#D4AF37]/20 rounded-full blur-3xl animate-glow-pulse" />
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-5xl font-playfair font-light text-[#faf8f5] leading-tight">
            Eternal
            <span className="block font-bold text-[#D4AF37] mt-3 text-6xl drop-shadow-gold">
              22KT Gold
            </span>
          </h2>
          
          <div className="border-t border-[#D4AF37]/20 pt-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#0F0F0F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <p className="text-lg text-[#faf8f5]/90 font-lora">
                Premium Craftsmanship
                <br />
                <span className="text-[#D4AF37] font-semibold">6% Making Charges</span>
              </p>
            </div>

            <button className="mt-4 px-8 py-4 bg-[#D4AF37] hover:bg-[#f5e6c6] text-[#0F0F0F] font-playfair font-bold rounded-full transition-all flex items-center gap-3 group hover:gap-5 shadow-xl hover:shadow-[#D4AF37]/40">
              <span className="tracking-wider">Discover Collection</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2 group-hover:scale-125" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Products */}
      <div className="md:w-2/3 mt-10 md:mt-0 md:ml-8 relative">
        <div ref={scrollRef} className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
          <div className="flex space-x-8 px-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group min-w-[300px] bg-[#faf8f5]/5 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500 relative border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 snap-start cursor-grab active:cursor-grabbing"
              >
                {/* Collection Badge */}
                <div className="absolute top-6 right-6 bg-[#D4AF37]/90 text-[#0F0F0F] px-4 py-1 rounded-full text-sm font-lora z-20">
                  {product.collection}
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="text-center space-y-3">
                    <p className="text-3xl font-playfair font-bold text-[#D4AF37]">
                      {product.price}
                    </p>
                    <p className="text-lg text-[#faf8f5] font-lora font-medium">
                      {product.name}
                    </p>
                    <button className="mt-4 w-full bg-[#D4AF37]/20 text-[#D4AF37] py-3 rounded-xl hover:bg-[#D4AF37]/40 transition-colors font-lora">
                      Customize Design
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-6">
          <button
            onClick={() => scroll(-300)}
            className="bg-[#faf8f5]/10 backdrop-blur-lg p-4 rounded-full shadow-2xl hover:bg-[#D4AF37]/50 transition-all transform hover:scale-125 active:scale-95 border border-[#D4AF37]/20"
          >
            <ArrowLeft className="w-8 h-8 text-[#D4AF37]" strokeWidth="1.5" />
          </button>
          <button
            onClick={() => scroll(300)}
            className="bg-[#faf8f5]/10 backdrop-blur-lg p-4 rounded-full shadow-2xl hover:bg-[#D4AF37]/50 transition-all transform hover:scale-125 active:scale-95 border border-[#D4AF37]/20"
          >
            <ArrowRight className="w-8 h-8 text-[#D4AF37]" strokeWidth="1.5" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37]/20" />
      <div className="absolute top-4 right-4 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default Subsection;