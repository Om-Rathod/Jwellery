import React, { useRef, useState, useEffect } from "react";

const categories = [
  { title: "LATEST RINGS", image: "/images/ring.jpeg", link: "/rings" },
  { title: "TRENDY BRACELETS", image: "/images/bracelet.avif", link: "/bracelets" },
  { title: "MUST-HAVE EARRINGS", image: "/images/earrings.avif", link: "/earrings" },
  { title: "ALL-DAY CHAINS", image: "/images/chain.jpg", link: "/chains" },
  { title: "ON-TREND NECKLACES", image: "/images/nacklase.jpeg", link: "/necklaces" },
  { title: "UNDER ₹30K STYLES", image: "/images/under30k.webp", link: "/under-30k" },
];

const CategoryRow = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(categories.length); // Desktop
      } else if (window.innerWidth >= 768) {
        setVisibleCount(5); // Tablet
      } else {
        setVisibleCount(3); // Mobile
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative group">
    <div className="relative bg-gradient-to-br from-[#fff8f0] via-[#fefefe] to-white rounded-[3rem] p-10 shadow-2xl shadow-yellow-100/60 border border-[#f1e4c5]">
      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 -left-4 w-24 flex items-center justify-start bg-gradient-to-r from-white via-white/70 to-transparent z-20">
        <button 
          onClick={() => scroll('left')}
          className="p-3 bg-white/80 backdrop-blur-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-[#ecd9b0]"
          aria-label="Scroll left"
        >
          <svg className="w-7 h-7 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>
  
      <div className="absolute inset-y-0 -right-4 w-24 flex items-center justify-end bg-gradient-to-l from-white via-white/70 to-transparent z-20">
        <button 
          onClick={() => scroll('right')}
          className="p-3 bg-white/80 backdrop-blur-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-[#ecd9b0]"
          aria-label="Scroll right"
        >
          <svg className="w-7 h-7 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
  
      {/* Content */}
      <div 
        ref={scrollContainer}
        className="flex gap-10 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
      >
        {categories.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group flex flex-col items-center min-w-[200px] md:min-w-[240px] space-y-4 transition-all duration-500 hover:-translate-y-3 snap-start"
            role="button"
            aria-label={`Explore ${item.title}`}
          >
            <div className="relative w-full aspect-[3/4] bg-white rounded-3xl border border-[#f1e4c5] shadow-xl overflow-hidden transition-shadow duration-500 hover:shadow-2xl">
              {item.isIcon ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#fdf5e6] to-white">
                  <div className="relative z-10 flex-1 w-full flex items-center justify-center">
                    <img 
                      src={item.icon} 
                      alt=""
                      className="h-24 w-24 object-contain opacity-90 mix-blend-multiply"
                      loading="lazy"
                    />
                  </div>
                  <p className="relative z-10 text-center text-lg font-semibold text-yellow-800 mt-4 px-4">
                    {item.title}
                  </p>
                  <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10" />
                </div>
              ) : (
                <>
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent">
                    <p className="text-lg font-semibold text-white text-center tracking-wide">
                      {item.title}
                    </p>
                  </div>
                </>
              )}
              <div className="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none" />
            </div>
          </a>
        ))}
      </div>
  
      {/* Decorative Elements */}
      <div className="absolute top-0 left-8 w-32 h-32 bg-yellow-100/40 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-8 w-36 h-36 bg-yellow-200/30 blur-[80px] rounded-full" />
    </div>
  </section>
  
  );
};

export default CategoryRow;
