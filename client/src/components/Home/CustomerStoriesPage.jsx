import React from "react";

const customerStories = [
  {
    name: "Sophia R.",
    story: "I’ve never seen my mom so happy! The necklace I bought from here was exactly what she wanted. Thank you for making her birthday so special!",
    image: "/images/shopia.jpg",
    role: "Daughter of the Year"
  },
  {
    name: "Ravi K.",
    story: "The bracelet I got for my wife was just perfect. The design and quality were beyond expectations. She loved it!",
    image: "/images/ravi.jpg",
    role: "Loving Husband"
  },
  {
    name: "Anika S.",
    story: "Bought earrings for my sister-in-law’s wedding, and she couldn’t stop praising them. Absolutely gorgeous pieces!",
    image: "/images/anika.jpg",
    role: "Wedding Guest"
  },
];

const CustomerStoryCard = ({ story, name, image, role }) => (
  <div className="relative bg-[#0F0F0F] rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 group">
    <div className="relative h-48 bg-[#faf8f5]">
      <div className="absolute inset-0 flex items-end justify-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover rounded-full border-4 border-[#D4AF37] shadow-lg transform -translate-y-16"
        />
      </div>
    </div>
    <div className="p-8 text-center">
      <div className="mb-4">
        <svg 
          className="w-8 h-8 mx-auto text-[#D4AF37]" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
        </svg>
      </div>
      <p className="text-lg text-[#faf8f5] font-lora mb-6 italic">
        "{story}"
      </p>
      <h3 className="text-xl font-playfair font-semibold text-[#D4AF37]">{name}</h3>
      <p className="text-sm text-[#faf8f5]/80">{role}</p>
    </div>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"/>
  </div>
);

const CustomerStoriesPage = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-playfair font-bold text-[#0F0F0F] mb-16">
          Cherished Moments
          <span className="block mt-2 text-2xl text-[#D4AF37] font-lora">From Our Treasured Clients</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {customerStories.map((story, index) => (
            <CustomerStoryCard
              key={index}
              name={story.name}
              story={story.story}
              image={story.image}
              role={story.role}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#0F0F0F] text-[#faf8f5] px-8 py-3 rounded-full hover:bg-[#D4AF37] transition-colors duration-300 font-lora">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesPage;