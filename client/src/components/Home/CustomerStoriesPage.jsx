import React from "react";

const customerStories = [
  {
    name: "Sophia",
    story: "I’ve never seen my mom so happy! The necklace I bought from here was exactly what she wanted. Thank you for making her birthday so special!",
    image: "/images/sophia.jpg", // Update with the actual image URL
  },
  {
    name: "Ravi",
    story: "The bracelet I got for my wife was just perfect. The design and quality were beyond expectations. She loved it!",
    image: "/images/ravi.jpg", // Update with the actual image URL
  },
  {
    name: "Anika",
    story: "Bought a pair of earrings for my sister-in-law’s wedding, and she couldn’t stop praising them. Absolutely gorgeous pieces!",
    image: "/images/anika.jpg", // Update with the actual image URL
  },
];

const CustomerStoryCard = ({ story, name, image }) => (
  <div className="relative bg-gradient-to-r from-pink-500 to-red-500 rounded-xl shadow-2xl overflow-hidden w-full max-w-xs mx-auto mb-8">
    <div className="relative h-48 bg-gradient-to-br from-pink-400 to-red-500 rounded-t-xl">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
      />
    </div>
    <div className="p-6 bg-white rounded-b-xl text-center">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-700">{story}</p>
    </div>
  </div>
);

const CustomerStoriesPage = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <h2 className="text-center text-4xl font-serif font-bold text-gray-900 mb-10">
        Customer Stories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {customerStories.map((story, index) => (
          <CustomerStoryCard
            key={index}
            name={story.name}
            story={story.story}
            image={story.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerStoriesPage;
