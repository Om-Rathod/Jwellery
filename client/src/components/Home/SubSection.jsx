import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Subsection = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

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
    <div className="flex flex-col md:flex-row p-8 rounded-[3rem] bg-gradient-to-br my-16 from-purple-950 to-purple-900 shadow-[0_20px_60px_-10px_rgba(128,90,213,0.6)] overflow-hidden border border-purple-800/30">
      
      {/* Left Banner */}
      <div className="md:w-1/3 flex flex-col justify-center items-start space-y-8 p-10 bg-gradient-to-br from-purple-900/60 to-purple-800/40 backdrop-blur-md rounded-2xl relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/images/diamond-pattern.webp')] bg-repeat opacity-5 pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <h2 className="text-5xl font-serif font-light text-white leading-tight tracking-tight">
            Everyday
            <span className="block font-bold text-amber-400 mt-2 drop-shadow-lg">22KT Gold</span>
          </h2>
          <div className="border-t border-purple-400/20 pt-6">
            <p className="text-lg text-purple-100/90 font-light">
              Crafting Excellence
              <br />
              <span className="text-amber-300 font-semibold italic">6% Making Charges</span>
            </p>
            <button className="mt-8 px-7 py-3 bg-amber-300 hover:bg-amber-200 text-purple-950 font-semibold rounded-full transition-all flex items-center gap-3 hover:gap-5 group shadow-lg hover:shadow-amber-300/30">
              <span className="tracking-wide">Explore Collection</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Products */}
      <div className="md:w-2/3 mt-10 md:mt-0 md:ml-8 relative">
        <div ref={scrollRef} className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
          <div className="flex space-x-8 px-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="group min-w-[260px] bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:shadow-amber-300/20 transition-all duration-500 relative border border-white/10 hover:border-amber-300/40 snap-start"
              >
                <div className="relative z-10 space-y-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-amber-300">{product.price}</p>
                    <p className="text-base text-amber-300 font-medium">{product.name}</p>
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
            className="bg-white/30 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-amber-300/30 transition-transform transform hover:scale-110 active:scale-95 border border-white/10"
          >
            <ArrowLeft className="w-6 h-6 text-purple-900" />
          </button>
          <button
            onClick={() => scroll(300)}
            className="bg-white/30 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-amber-300/30 transition-transform transform hover:scale-110 active:scale-95 border border-white/10"
          >
            <ArrowRight className="w-6 h-6 text-purple-900" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subsection;
