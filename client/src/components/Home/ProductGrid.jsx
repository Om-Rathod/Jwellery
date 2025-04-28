import { useState } from 'react';

function ProductCard({ image, rating, reviews, price, oldPrice, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 h-[460px] flex flex-col justify-between">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-contain" />
        <button className="absolute top-2 right-2 text-pink-500 hover:text-yellow-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs flex items-center gap-1 shadow">
          <span className="text-yellow-500">⭐ {rating}</span> | {reviews}
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xl font-bold text-gray-900">
          ₹{price}{' '}
          <span className="line-through text-gray-400 text-sm">₹{oldPrice}</span>
        </p>
        <p className="text-gray-700 text-base mt-2">{title}</p>
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-pink-300 to-yellow-300 hover:from-pink-400 hover:to-yellow-400 text-pink-900 font-bold py-2 rounded-full transition-all duration-300">
        Add to Cart
      </button>
    </div>
  );
}

function ProductGrid() {
  const [visibleCount, setVisibleCount] = useState(4);

  const products = [
    {
      image: 'data:image/jpeg;base64,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',
      rating: 4.8,
      reviews: 103,
      price: 2699,
      oldPrice: 4599,
      title: 'Golden Glint Pendant With Link Chain',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYp9Gfz2Q6VkwkFHQCZr7Igrh8ydmotCey8w&s',
      rating: 4.7,
      reviews: 88,
      price: 2499,
      oldPrice: 4299,
      title: 'Elegant Heart Pendant',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhVH0Umup9Yc7zWRAt6Sss51KFfld8_BvVQ&s',
      rating: 4.9,
      reviews: 150,
      price: 2999,
      oldPrice: 4799,
      title: 'Luxury Diamond Pendant',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOMN6PlUYcOal505ROf2Nlcf_5cZpYHzUKg&s',
      rating: 4.6,
      reviews: 76,
      price: 2199,
      oldPrice: 3999,
      title: 'Chic Star Pendant',
    },
    {
      image: 'https://your-image-url.com/pendant5.png',
      rating: 4.5,
      reviews: 64,
      price: 2099,
      oldPrice: 3899,
      title: 'Classic Pearl Pendant',
    },
  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="px-4 py-10 bg-gradient-to-b from-pink-50 to-yellow-50 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleCount).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleShowMore}
            className="bg-gradient-to-r from-pink-400 to-yellow-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
