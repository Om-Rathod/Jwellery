import React from "react";

const ImageGallery = () => {
  const images = [
    "/images/g1.jpg", // Small
    "/images/g2.jpg", // Large
    "/images/g3.jpg", // Tall
    "/images/g4.jpg", // Wide
  ];

  const categories = ["Gold", "Weadding", "Diamand", "Dailywear"];

  return <>
    <h2 className=" text-center text-3xl md:text-4xl font-serif  mb-4">jewellery World</h2>
          <p className=" text-center text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections of fine jewelry, where traditional craftsmanship meets contemporary design.
          </p>
    <div className="px-4 md:px-12 flex justify-center gap-1.5 mb-4 mt-12">
        

      {/* Left Side Column (Image 1 and Image 3) */}
      <div className="flex flex-col gap-1.5 w-[40%]">
        {/* First Image */}
        <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            src={images[0]}
            alt={`${categories[0]} Collection`}
            className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center p-4">
            <h3 className="text-lg md:text-2xl font-semibold text-white text-center">
              {categories[0]}
            </h3>
          </div>
        </div>

        {/* Third Image */}
        <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            src={images[2]}
            alt={`${categories[2]} Collection`}
            className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center p-4">
            <h3 className="text-lg md:text-2xl font-semibold text-white text-center">
              {categories[2]}
            </h3>
          </div>
        </div>
      </div>

      {/* Right Side Column (Image 2 and Image 4) */}
      <div className="flex flex-col gap-1.5 w-[40%]">
        {/* Second Image */}
        <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            src={images[1]}
            alt={`${categories[1]} Collection`}
            className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center p-4">
            <h3 className="text-lg md:text-2xl font-semibold text-white text-center">
              {categories[1]}
            </h3>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            src={images[3]}
            alt={`${categories[3]} Collection`}
            className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center p-4">
            <h3 className="text-lg md:text-2xl font-semibold text-white text-center">
              {categories[3]}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default ImageGallery;
