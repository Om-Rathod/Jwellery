import React, { useRef } from "react";

const categories = [
  {
    title: "Wrapped with Love",
    icon: "/images/gift-icon.png",
    isIcon: true,
    link: "/gifts",
  },
  {
    title: "LATEST RINGS",
    image: "/images/ring.jpeg",
    link: "/rings",
  },
  { 
    title: "TRENDY BRACELETS",
    image: "/images/bracelet.avif",
    link: "/bracelets",
  },
  {
    title: "MUST-HAVE EARRINGS",
    image: "/images/earrings.avif",
    link: "/earrings",
  },
  {
    title: "ALL-DAY CHAINS",
    image: "/images/chain.jpg",
    link: "/chains",
  },
  {
    title: "ON-TREND NECKLACES",
    image: "/images/nacklase.jpeg",
    link: "/necklaces",
  },
  {
    title: "UNDER ₹30K STYLES",
    image: "/images/under30k.webp",
    link: "/under-30k",
  },
];
const CategoryRow = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative group">
      <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-[3rem] p-8 shadow-xl shadow-purple-100/50">
        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 -left-4 w-24 flex items-center justify-start bg-gradient-to-r from-white via-white/80 to-transparent z-20">
          <button 
            onClick={() => scroll('left')}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 -right-4 w-24 flex items-center justify-end bg-gradient-to-l from-white via-white/80 to-transparent z-20">
          <button 
            onClick={() => scroll('right')}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div 
          ref={scrollContainer}
          className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        >
          {categories.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group flex flex-col items-center min-w-[200px] md:min-w-[240px] space-y-4 transition-all duration-300 hover:-translate-y-2 snap-start"
              role="button"
              aria-label={`Explore ${item.title}`}
            >
              <div className="relative w-full aspect-[3/4] bg-white rounded-3xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                {item.isIcon ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-100 to-white">
                    <div className="relative z-10 flex-1 w-full flex items-center justify-center">
                      <img 
                        src={item.icon} 
                        alt=""
                        className="h-24 w-24 object-contain opacity-90 mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                    <p className="relative z-10 text-center text-lg font-medium text-purple-900 mb-4 px-4">
                      {item.title}
                    </p>
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10" />
                  </div>
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-lg font-medium text-white text-center">
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
        <div className="absolute top-0 left-8 w-24 h-24 bg-purple-200/30 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-8 w-32 h-32 bg-purple-300/20 blur-[80px] rounded-full" />
      </div>
    </section>
  );
};

export default CategoryRow;