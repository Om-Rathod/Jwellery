import React from "react";

const promotions = [
  {
    title: "Your First Diamond",
    subtitle: "Begin Your Legacy",
    cta: "Explore Now",
    bgImage: "/images/diamond.jpeg",
  },
  {
    title: "Celebrating Success",
    subtitle: "Milestone Collections",
    cta: "Discover More",
    bgImage: "/images/success-bg.jpg",
  },
  {
    title: "New Moms",
    subtitle: "Timeless Treasures",
    cta: "Shop Gifts",
    bgImage: "/images/moms-bg.jpg",
  },
  {
    title: "Golden Anniversary",
    subtitle: "50 Years Celebration",
    cta: "View Collection",
    bgImage: "/images/anniversary-bg.jpeg",
  },
];

const PromotionGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Featured Card (Left side) */}
        <div className="relative rounded-3xl overflow-hidden h-[500px] group shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('/images/featured-bg.jpg')` }}
          >
<div className="absolute inset-0 bg-gradient-to-t from-purple-200/70 via-white/20 to-transparent" />          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-10 space-y-6">
            <h2 className="text-4xl font-serif font-semibold text-gray-800">
              Golden Milestone
            </h2>
            <p className="text-2xl text-gray-600 font-medium">
              Up to <span className="text-amber-500 font-bold">30% Off</span>
            </p>
            <button className="w-max px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-full transition transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Grid Cards (Right side) */}
        <div className="grid grid-cols-2 gap-6">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden h-60 group shadow-md hover:shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${promo.bgImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/30 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {promo.title}
                </h3>
                <p className="text-sm text-gray-600">{promo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PromotionGrid;
