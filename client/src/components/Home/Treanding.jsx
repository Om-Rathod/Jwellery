import React, { useRef, useState, useEffect } from "react";

const categories = [
  { title: "EXCLUSIVE DIAMOND RINGS", image: "/images/ring.jpeg", link: "/diamond-rings" },
  { title: "LUXURY BRACELETS", image: "/images/bracelet.avif", link: "/luxury-bracelets" },
  { title: "ELEGANT EARRINGS", image: "/images/earrings.avif", link: "/elegant-earrings" },
  { title: "PREMIUM CHAINS", image: "/images/chain.jpg", link: "/premium-chains" },
  { title: "VOGUE NECKLACES", image: "/images/g6.jpg", link: "/vogue-necklaces" },
  { title: "STYLE ICONS UNDER ₹50K", image: "/images/nacklase.jpeg", link: "/under-50k" },
];

const Treanding = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const scrollContainer = useRef(null);

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
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-4xl font-serif font-bold text-gray-900 mb-6">Trending Now</h2>

      <div className="relative bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 shadow-xl rounded-lg">

        {/* Cards */}
        <div ref={scrollContainer} className="flex gap-6 overflow-x-auto scrollbar-hide snap-x py-4 w-full">
          {categories.slice(0, visibleCount).map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group flex flex-col items-center space-y-3 transition-all duration-300 hover:-translate-y-2 snap-start min-w-[300px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[380px]"
            >
              <div className="relative w-full aspect-[4/5] bg-white overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
                  <p className="text-sm font-semibold text-white text-center">{item.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Show More button for mobile */}
        {visibleCount < categories.length && (
          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all"
            >
              View More
            </button>
          </div>
        )}

        {/* Decorative Blurs */}
        <div className="absolute top-0 left-10 w-24 h-24 bg-purple-200/30 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-10 w-32 h-32 bg-purple-300/20 blur-[80px] rounded-full" />
      </div>
    </section>
  );
};

export default Treanding;
