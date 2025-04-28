import React from "react";

const BannerGrid = () => {
  const banners = [
    {
      type: "anniversary",
      title: "Golden Jubilee Celebration",
      subtitle: "50 Years of Timeless Elegance",
      image: "/images/banner1.jpg",
      link: "/anniversary-sale",
    },
    {
      type: "new-arrival",
      title: "Diamond Dreams Collection",
      subtitle: "Sparkling New Arrivals",
      image: "/images/banner2.jpg",
      link: "/new-arrivals",
    },
    {
      type: "sale",
      title: "Summer Glow Sale",
      subtitle: "Up to 60% Off Selected Pieces",
      image: "/images/banner3.jpg",
      link: "/summer-sale",
    },
  ];

  return (
    <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[800px]">
        {/* Main Anniversary Banner */}
        <a
          href={banners[0].link}
          className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={banners[0].image}
            alt="Anniversary celebration"
            className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xl font-light mb-2">{banners[0].subtitle}</p>
              <h2 className="text-4xl font-bold mb-4">{banners[0].title}</h2>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                Explore Collection
              </button>
            </div>
          </div>
        </a>

        {/* Secondary Banners Container */}
        <div className="grid grid-rows-2 gap-6 h-full">
          {banners.slice(1).map((banner, index) => (
            <a
              key={index}
              href={banner.link}
              className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-light mb-1">{banner.subtitle}</p>
                  <h3 className="text-2xl font-bold">{banner.title}</h3>
                </div>
              </div>
              {banner.type === "sale" && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Limited Time
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerGrid;