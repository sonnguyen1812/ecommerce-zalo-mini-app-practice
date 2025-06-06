import { Page, Box, useNavigate } from "zmp-ui";
import { useState } from "react";
import shopImage from "../static/shop-image.png";

function StoreListPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Thành phố");

  // Sample store data
  const stores = [
    {
      id: 1,
      name: "Cửa hàng A",
      phone: "0123456789",
      hours: "7:00 - 23:00",
      address: "176 P. Định Công, Phường Liệt, Hoàng Mai, Hà Nội",
      image: shopImage // Using store image from static folder
    },
    {
      id: 2,
      name: "Cửa hàng A",
      phone: "0123456789",
      hours: "7:00 - 23:00",
      address: "176 P. Định Công, Phường Liệt, Hoàng Mai, Hà Nội",
      image: shopImage
    },
    {
      id: 3,
      name: "Cửa hàng A",
      phone: "0123456789",
      hours: "7:00 - 23:00",
      address: "176 P. Định Công, Phường Liệt, Hoàng Mai, Hà Nội",
      image: shopImage
    },
    {
      id: 4,
      name: "Cửa hàng A",
      phone: "0123456789",
      hours: "7:00 - 23:00",
      address: "176 P. Định Công, Phường Liệt, Hoàng Mai, Hà Nội",
      image: shopImage
    }
  ];

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleCallClick = (phone) => {
    console.log("Call:", phone);
  };

  const handleLocationClick = (address) => {
    // Navigate to MapPage with address data
    navigate('/map', { state: { address } });
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Danh sách cửa hàng với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-4" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-semibold text-gray-800">Danh sách cửa hàng</h1>
          </Box>
        </Box>
      </Box>

      {/* Search and Filter Section */}
      <Box className="px-4 mb-6">
        <Box className="flex items-center space-x-3">
          {/* Search Input */}
          <Box className="flex-1 relative">
            <input
              type="text"
              placeholder="Tìm cửa hàng..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm"
            />
            {/* Search Icon */}
            <Box className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Box>
          </Box>

          {/* Vertical Divider */}
          <Box className="w-px h-8 bg-gray-300"></Box>

          {/* City Filter Dropdown */}
          <Box className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-3 bg-brand-blue text-white border border-brand-blue rounded-full focus:ring-2 focus:ring-brand-blue outline-none text-sm font-medium min-w-[120px] appearance-none cursor-pointer"
              style={{
                backgroundImage: 'none'
              }}
            >
              <option value="Thành phố" className="bg-white text-black">Thành phố</option>
              <option value="Hà Nội" className="bg-white text-black">Hà Nội</option>
              <option value="TP. Hồ Chí Minh" className="bg-white text-black">TP. Hồ Chí Minh</option>
              <option value="Đà Nẵng" className="bg-white text-black">Đà Nẵng</option>
            </select>
            {/* Dropdown Arrow */}
            <Box className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Store List */}
      <Box className="px-4 space-y-4">
        {stores.map((store) => (
          <Box key={store.id} className="bg-white rounded-lg shadow-sm p-4">
            <Box className="flex space-x-4 items-center">
              {/* Left Content: Store Name + Image + Info */}
              <Box className="flex-1">
                {/* Store Name - Above Image */}
                <h3 className="text-base font-semibold text-brand-blue mb-1">{store.name}</h3>

                <Box className="flex space-x-4 items-center">
                  {/* Store Image */}
                  <Box className="flex-shrink-0">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </Box>

                  {/* Store Info */}
                  <Box className="flex-1">
                    <p className="text-xs text-gray-600 mb-1">
                      Điện thoại: <span className="text-brand-blue font-medium">{store.phone}</span>
                    </p>
                    <p className="text-xs text-gray-600 mb-1">
                      Giờ mở cửa: <span className="text-brand-blue font-medium">{store.hours}</span>
                    </p>
                    <p className="text-xs text-gray-600">
                      Địa chỉ: <span className="text-brand-blue font-medium">{store.address}</span>
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* Action Buttons - Vertically Centered with entire card */}
              <Box className="flex flex-col items-center justify-center">
                {/* Call Button */}
                <button
                  onClick={() => handleCallClick(store.phone)}
                  className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>

                {/* Horizontal Divider */}
                <Box className="w-6 h-px bg-gray-300 my-2"></Box>

                {/* Location Button */}
                <button
                  onClick={() => handleLocationClick(store.address)}
                  className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Page>
  );
}

export default StoreListPage;
