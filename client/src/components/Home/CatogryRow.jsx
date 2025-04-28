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
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative group">
      <h2 className=" text-center text-3xl md:text-4xl font-serif font-bold mb-4">Recommended Collection</h2>

      <div className="relative bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 shadow-xl shadow-purple-100/50">

        {/* Navigation Buttons */}
        <div className="hidden md:flex absolute inset-y-0 left-2 items-center z-20">
          <button
            onClick={() => scroll("left")}
            className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-2xl transition-transform hover:scale-110"
          >
            <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex absolute inset-y-0 right-2 items-center z-20">
          <button
            onClick={() => scroll("right")}
            className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-2xl transition-transform hover:scale-110"
          >
            <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Cards */}
        <div
  ref={scrollContainer}
  className="flex gap-6 overflow-x-auto scrollbar-hide snap-x py-4"
>
  {categories.slice(0, visibleCount).map((item, index) => (
    <a
      key={index}
      href={item.link}
      className="group flex flex-col items-center space-y-3 transition-all duration-300 hover:-translate-y-2 snap-start min-w-[300px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[380px]"
    >
      <div className="relative w-full aspect-[4/5] bg-white overflow-hidden shadow-md hover:shadow-2xl transition-shadow">
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

export default CategoryRow;
