import { Box } from 'zmp-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Sử dụng hình ảnh goldgi-diaper.png có sẵn trong static folder
import goldgiDiaper from '../static/goldgi-diaper.png';

const HotDealsSection = () => {
  const hotDeals = [
    {
      id: 1,
      name: "Bỉm nhật Goldgi Premium...",
      size: "Size Newborn 20",
      currentPrice: "80.000",
      originalPrice: "100.000",
      discount: "10%",
      image: goldgiDiaper,
      isPrimary: true
    },
    {
      id: 2,
      name: "Bỉm nhật Goldgi Premium...",
      size: "Size Newborn 20",
      currentPrice: "80.000",
      originalPrice: "100.000",
      discount: "10%",
      image: goldgiDiaper,
      isPrimary: false
    },
    {
      id: 3,
      name: "Bỉm nhật Goldgi Premium...",
      size: "Size Newborn 20",
      currentPrice: "75.000",
      originalPrice: "90.000",
      discount: "15%",
      image: goldgiDiaper,
      isPrimary: true
    },
    {
      id: 4,
      name: "Bỉm nhật Goldgi Premium...",
      size: "Size Newborn 20",
      currentPrice: "85.000",
      originalPrice: "110.000",
      discount: "20%",
      image: goldgiDiaper,
      isPrimary: false
    }
  ];

  return (
    <Box className="mx-4 mb-6">
      {/* Header Section */}
      <Box className="mb-4">
        {/* Title with decorative lines */}
        <Box className="flex items-center justify-center mb-2">
          <Box className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-red-500 mr-4"></Box>
          <h2 className="text-xl font-bold text-blue-600 px-2">Săn Deal Siêu Hót</h2>
          <Box className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-red-400 to-red-500 ml-4"></Box>
        </Box>

        {/* Subtitle and View All */}
        <Box className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Số lượng có hạn</span>
          <Box className="flex items-center">
            <span className="text-blue-600 text-sm font-medium mr-1">Xem tất cả</span>
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Box>
        </Box>


      </Box>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        grabCursor={true}
        className="hotdeals-swiper"
      >
        {hotDeals.map((product) => (
          <SwiperSlide key={product.id}>
            <Box className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
              {/* Product Image */}
              <Box className="mb-3 flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain"
                />
              </Box>

              {/* Product Info */}
              <Box className="mb-3">
                <h3 className="text-blue-600 font-medium text-sm mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs mb-2">
                  {product.size}
                </p>

                {/* Price Section */}
                <Box className="mb-3">
                  <Box className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 font-bold text-lg">
                      {product.currentPrice}
                    </span>
                    <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                      -{product.discount}
                    </span>
                  </Box>
                  <span className="text-gray-400 text-sm line-through">
                    {product.originalPrice} vnđ
                  </span>
                </Box>
              </Box>

              {/* Action Button */}
              <button
                className={`w-full py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                  product.isPrimary
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Chọn sản phẩm
              </button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HotDealsSection;
