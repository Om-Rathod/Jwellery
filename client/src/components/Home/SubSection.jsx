
  
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Subsection = () => {
    const products = [
      {
        id: 1,
        name: "Tiya 22KT Gold Pendant",
        price: "₹42,289",
        image: "/images/pendant1.jpeg",
      },
      {
        id: 2,
        name: "Siya 22KT Gold Pendant",
        price: "₹24,028",
        image: "/images/pendant2.avif",
      },
      {
        id: 3,
        name: "Farida 22KT Gold Stud",
        price: "₹19,397",
        image: "/images/earring3.jpeg",
      },
      {
        id: 4,
        name: "Pravya 22KT Gold Pendant",
        price: "₹30,150",
        image: "/images/pendant4.jpg",
      },
    ];
    return (
      <div className="flex flex-col md:flex-row p-8 rounded-[2rem] bg-gradient-to-br my-10 from-purple-950 to-purple-800 shadow-2xl overflow-hidden border border-purple-900/20">
        {/* Left Banner */}
        <div className="md:w-1/3 flex flex-col justify-center items-start space-y-8 p-10 bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-lg rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/diamond-pattern.webp')] opacity-15" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-5xl font-serif font-light text-white tracking-tight">
              Everyday
              <span className="block font-medium text-amber-300 mt-2">22KT Gold</span>
            </h2>
            <div className="border-t border-purple-400/20 pt-6">
              <p className="text-lg text-purple-100/90 font-light">
                Crafting Excellence
                <br />
                <span className="text-amber-200/90 font-medium italic">6% Making Charges</span>
              </p>
              <button className="mt-8 px-6 py-3 bg-amber-300/95 hover:bg-amber-200 text-purple-900 font-medium rounded-lg transition-all flex items-center gap-3 
                hover:gap-4 group shadow-lg hover:shadow-amber-300/20">
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
  
        {/* Right Products */}
        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8 relative">
          <div className="flex overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex space-x-6 px-1">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group min-w-[240px] bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 relative
                    border border-white/20 hover:border-amber-100/30">
                  <div className="relative z-10 space-y-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-48 w-full object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="text-center space-y-2">
                      <p className="text-xl font-semibold text-purple-900">{product.price}</p>
                      <p className="text-sm text-purple-700/90 font-medium">{product.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <button className="bg-white/90 p-3 rounded-full shadow-xl hover:bg-white transition-transform border border-purple-100/20
              transform hover:scale-105 active:scale-95">
              <ArrowLeft className="w-6 h-6 text-purple-900" />
            </button>
            <button className="bg-white/90 p-3 rounded-full shadow-xl hover:bg-white transition-transform border border-purple-100/20
              transform hover:scale-105 active:scale-95">
              <ArrowRight className="w-6 h-6 text-purple-900" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Subsection;