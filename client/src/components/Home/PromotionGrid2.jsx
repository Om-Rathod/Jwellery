import React from "react";

const promotions = [
  {
    title: "First Anniversary Gift",
    subtitle: "Celebrate Love & Moments",
    cta: "Shop Now",
    bgImage: "/images/g2.jpg",
  },
  {
    title: "Success Celebration",
    subtitle: "Achieve & Celebrate Milestones",
    cta: "Learn More",
    bgImage: "/images/g5.jpg",
  },
  {
    title: "Gift for New Moms",
    subtitle: "Timeless and Beautiful",
    cta: "Browse Gifts",
    bgImage: "/images/g6.jpg",
  },
  {
    title: "Golden Anniversary",
    subtitle: "Celebrate 50 Glorious Years",
    cta: "Explore Collection",
    bgImage: "/images/g7.jpg",
  },
];

const PromotionGrid2 = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Featured Card (Left side) */}
        <div className="relative rounded-3xl overflow-hidden h-[650px] group shadow-2xl mt-6">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('/images/g4.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-300/80 via-white/30 to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-10 space-y-6">
            <h2 className="text-5xl font-serif font-bold text-gray-800">
              Golden Milestone
            </h2>
            <p className="text-2xl text-gray-700 font-medium">
              Up to <span className="text-amber-500 font-bold">30% Off</span>
            </p>
            <button className="w-max px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-full transition transform hover:scale-105 shadow-xl">
              Shop Now
            </button>
          </div>
        </div>

        {/* Grid Cards (Right side) */}
        <div className="grid grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="relative rounded-2xl overflow-hidden h-[300px] w-full group shadow-lg hover:shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${promo.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />
                </div>
              </div>
              {/* Text and Button Outside */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">{promo.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{promo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PromotionGrid2;
