import { Box } from 'zmp-ui';
import { useState } from 'react';
import milkImage from '../static/milk.png';

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: milkImage,
      alt: "Primavita Product 1"
    },
    {
      id: 2,
      image: milkImage,
      alt: "Primavita Product 2"
    },
    {
      id: 3,
      image: milkImage,
      alt: "Primavita Product 3"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Box className="mx-4 mb-6">
      {/* Slider Container */}
      <Box className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Slider Images */}
        <Box className="relative overflow-hidden">
          <Box
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <Box
                key={slide.id}
                className="w-full flex-shrink-0"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-auto object-contain"
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <Box className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-blue-600 scale-110' 
                  : 'bg-white bg-opacity-60 hover:bg-opacity-80'
              }`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSlider;
