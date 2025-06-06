import { Page, Box, useNavigate } from "zmp-ui";

function UserVouchersPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleVoucherClick = () => {
    navigate('/voucher-detail'); // Navigate to voucher detail page
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Ưu đãi của bạn với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-4" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">Ưu đãi của bạn</h1>
          </Box>
        </Box>
      </Box>

      {/* Phiếu ưu đãi của bạn Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md p-6">
          {/* Header */}
          <h2 className="text-lg font-bold mb-6 text-brand-blue">Phiếu ưu đãi của bạn</h2>

          {/* Vouchers List */}
          <Box className="space-y-4">
            {/* Voucher 1 - Beauty Shop */}
            <Box className="relative p-4 bg-gray-50 rounded-lg star-offer-card cursor-pointer" onClick={handleVoucherClick}>
              {/* x1 Badge - Top Right */}
              <Box className="absolute top-3 right-3">
                <span className="star-badge px-2 py-1 rounded text-xs font-medium">x1</span>
              </Box>

              {/* Main Content */}
              <Box className="flex items-center min-h-[80px]">
                {/* Icon */}
                <Box className="flex-shrink-0 flex items-center justify-center" onClick={handleVoucherClick}>
                  <Box className="star-offer-image-bg">
                    <img
                      src="/src/static/beauty-shop.png"
                      alt="Beauty Shop"
                      className="w-16 h-auto"
                    />
                  </Box>
                </Box>

                {/* Vertical Dotted Divider */}
                <Box className="vertical-dotted-divider"></Box>

                {/* Content */}
                <Box className="flex-1">
                  <Box className="flex items-center mb-2">
                    <span className="discount-tag px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">Mã giảm giá</span>
                  </Box>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm whitespace-nowrap">Giảm 20k cho đơn từ 100k</h3>

                  {/* Bottom row with text */}
                  <Box className="flex items-center pr-4">
                    <Box>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Đơn tối thiểu: 20k</p>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Hết hạng trong: 10 ngày</p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Action Button - Absolute positioned to right */}
              <Box className="absolute bottom-2 right-2">
                <button
                  className="bg-brand-blue text-white py-2 rounded-full text-xs font-medium star-offer-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    handleVoucherClick();
                  }}
                >
                  Sử dụng ngay
                </button>
              </Box>
            </Box>

            {/* Voucher 2 - Zalo App */}
            <Box className="relative p-4 bg-gray-50 rounded-lg star-offer-card cursor-pointer" onClick={handleVoucherClick}>
              {/* x1 Badge - Top Right */}
              <Box className="absolute top-3 right-3">
                <span className="star-badge px-2 py-1 rounded text-xs font-medium">x1</span>
              </Box>

              {/* Main Content */}
              <Box className="flex items-center min-h-[80px]">
                {/* Icon */}
                <Box className="flex-shrink-0 flex items-center justify-center" onClick={handleVoucherClick}>
                  <Box className="star-offer-image-bg">
                    <img
                      src="/src/static/ap-dung-tren-zalo-app.png"
                      alt="Áp dụng trên Zalo app"
                      className="w-16 h-auto"
                    />
                  </Box>
                </Box>

                {/* Vertical Dotted Divider */}
                <Box className="vertical-dotted-divider"></Box>

                {/* Content */}
                <Box className="flex-1">
                  <Box className="flex items-center mb-2">
                    <span className="discount-tag px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">Mã giảm giá</span>
                  </Box>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm whitespace-nowrap">Giảm 20k cho đơn từ 100k</h3>

                  {/* Bottom row with text */}
                  <Box className="flex items-center pr-4">
                    <Box>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Đơn tối thiểu: 20k</p>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Hết hạng trong: 10 ngày</p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Action Button - Absolute positioned to right */}
              <Box className="absolute bottom-2 right-2">
                <button
                  className="bg-brand-blue text-white py-2 rounded-full text-xs font-medium star-offer-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    handleVoucherClick();
                  }}
                >
                  Đổi ngay
                </button>
              </Box>
            </Box>

            {/* Voucher 3 - Beauty Shop */}
            <Box className="relative p-4 bg-gray-50 rounded-lg star-offer-card cursor-pointer" onClick={handleVoucherClick}>
              {/* x1 Badge - Top Right */}
              <Box className="absolute top-3 right-3">
                <span className="star-badge px-2 py-1 rounded text-xs font-medium">x1</span>
              </Box>

              {/* Main Content */}
              <Box className="flex items-center min-h-[80px]">
                {/* Icon */}
                <Box className="flex-shrink-0 flex items-center justify-center" onClick={handleVoucherClick}>
                  <Box className="star-offer-image-bg">
                    <img
                      src="/src/static/beauty-shop.png"
                      alt="Beauty Shop"
                      className="w-16 h-auto"
                    />
                  </Box>
                </Box>

                {/* Vertical Dotted Divider */}
                <Box className="vertical-dotted-divider"></Box>

                {/* Content */}
                <Box className="flex-1">
                  <Box className="flex items-center mb-2">
                    <span className="discount-tag px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">Mã giảm giá</span>
                  </Box>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm whitespace-nowrap">Giảm 20k cho đơn từ 100k</h3>

                  {/* Bottom row with text */}
                  <Box className="flex items-center pr-4">
                    <Box>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Đơn tối thiểu: 20k</p>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Hết hạng trong: 10 ngày</p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Action Button - Absolute positioned to right */}
              <Box className="absolute bottom-2 right-2">
                <button
                  className="bg-brand-blue text-white py-2 rounded-full text-xs font-medium star-offer-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    handleVoucherClick();
                  }}
                >
                  Sử dụng ngay
                </button>
              </Box>
            </Box>

            {/* Voucher 4 - Zalo App */}
            <Box className="relative p-4 bg-gray-50 rounded-lg star-offer-card cursor-pointer" onClick={handleVoucherClick}>
              {/* x1 Badge - Top Right */}
              <Box className="absolute top-3 right-3">
                <span className="star-badge px-2 py-1 rounded text-xs font-medium">x1</span>
              </Box>

              {/* Main Content */}
              <Box className="flex items-center min-h-[80px]">
                {/* Icon */}
                <Box className="flex-shrink-0 flex items-center justify-center" onClick={handleVoucherClick}>
                  <Box className="star-offer-image-bg">
                    <img
                      src="/src/static/ap-dung-tren-zalo-app.png"
                      alt="Áp dụng trên Zalo app"
                      className="w-16 h-auto"
                    />
                  </Box>
                </Box>

                {/* Vertical Dotted Divider */}
                <Box className="vertical-dotted-divider"></Box>

                {/* Content */}
                <Box className="flex-1">
                  <Box className="flex items-center mb-2">
                    <span className="discount-tag px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">Mã giảm giá</span>
                  </Box>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm whitespace-nowrap">Giảm 20k cho đơn từ 100k</h3>

                  {/* Bottom row with text */}
                  <Box className="flex items-center pr-4">
                    <Box>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Đơn tối thiểu: 20k</p>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Hết hạng trong: 10 ngày</p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Action Button - Absolute positioned to right */}
              <Box className="absolute bottom-2 right-2">
                <button
                  className="bg-brand-blue text-white py-2 rounded-full text-xs font-medium star-offer-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    handleVoucherClick();
                  }}
                >
                  Đổi ngay
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

export default UserVouchersPage;
