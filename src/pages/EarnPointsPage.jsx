import { Page, Box, useNavigate } from "zmp-ui";
import tickSquareIcon from "../static/Tick Square.svg";
import buyIcon from "../static/Buy.svg";
import userIcon from "../static/3-User.svg";
import discountIcon from "../static/Discount.svg";
import profileIcon from "../static/Profile.svg";
import chiaseIcon from "../static/chiase.svg";

function EarnPointsPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleShareClick = () => {
    // Handle share functionality
    console.log("Share clicked");
  };

  const handleUpdateBirthdayClick = () => {
    // Handle update birthday functionality
    console.log("Update birthday clicked");
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Cách kiếm điểm với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-4" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">Cách kiếm điểm</h1>
          </Box>
        </Box>
      </Box>

      {/* Earn Points Methods */}
      <Box className="px-4 space-y-4">
        {/* Thưởng khi đăng ký */}
        <Box className="bg-white rounded-2xl shadow-md p-4">
          <Box className="flex items-start">
            {/* Icon */}
            <Box className="flex-shrink-0 mr-4 mt-1">
              <Box className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <img src={tickSquareIcon} alt="Tick Square" className="w-6 h-6 object-contain" />
              </Box>
            </Box>

            {/* Content */}
            <Box className="flex-1">
              <h3 className="text-lg font-bold text-brand-blue mb-1">Thưởng khi đăng ký</h3>
              <p className="text-sm text-gray-600">Bạn nhận được <span className="text-brand-blue font-bold">10</span> điểm khi tạo tài khoản mới</p>
            </Box>
          </Box>
        </Box>

        {/* Tích điểm trên đơn hàng */}
        <Box className="bg-white rounded-2xl shadow-md p-4">
          <Box className="flex items-start">
            {/* Icon */}
            <Box className="flex-shrink-0 mr-4 mt-1">
              <Box className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <img src={buyIcon} alt="Buy" className="w-6 h-6 object-contain" />
              </Box>
            </Box>

            {/* Content */}
            <Box className="flex-1">
              <h3 className="text-lg font-bold text-brand-blue mb-1">Tích điểm trên đơn hàng</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hoàn thành đơn hàng và nhận điểm thưởng theo tỉ lệ của chương trình thẻ thành viên
              </p>
            </Box>
          </Box>
        </Box>

        {/* Thêm bạn thêm vui */}
        <Box className="bg-white rounded-2xl shadow-md p-4">
          <Box className="flex items-start">
            {/* Icon */}
            <Box className="flex-shrink-0 mr-4 mt-1">
              <Box className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <img src={userIcon} alt="3-User" className="w-6 h-6 object-contain" />
              </Box>
            </Box>

            {/* Content */}
            <Box className="flex-1">
              <h3 className="text-lg font-bold text-brand-blue mb-1">Thêm bạn thêm vui</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Nhận <span className="text-brand-blue font-bold">50</span> điểm khi giới thiệu bạn bè vào app
                tạo tài khoản thành công và mua sắm tối
                thiểu <span className="font-bold text-brand-blue">200.000 VNĐ</span>
              </p>

              {/* Share Button */}
              <Box className="flex items-center">
                <button
                  onClick={handleShareClick}
                  className="flex items-center text-brand-blue text-sm font-medium"
                >
                  <img src={chiaseIcon} alt="Chia sẻ" className="w-4 h-4 mr-2 object-contain" />
                  Chia sẻ ngay
                </button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Nhận điểm qua QR tích điểm */}
        <Box className="bg-white rounded-2xl shadow-md p-4">
          <Box className="flex items-start">
            {/* Icon */}
            <Box className="flex-shrink-0 mr-4 mt-1">
              <Box className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <img src={discountIcon} alt="Discount" className="w-6 h-6 object-contain" />
              </Box>
            </Box>

            {/* Content */}
            <Box className="flex-1">
              <h3 className="text-lg font-bold text-brand-blue mb-1">Nhận điểm qua QR tích điểm</h3>
              <p className="text-sm text-gray-600">
                Nhận điểm thưởng theo chương trình QR tích điểm được ban hành tuỳ từng thời điểm
              </p>
            </Box>
          </Box>
        </Box>

        {/* Thưởng mừng sinh nhật */}
        <Box className="bg-white rounded-2xl shadow-md p-4">
          <Box className="flex items-start">
            {/* Icon */}
            <Box className="flex-shrink-0 mr-4 mt-1">
              <Box className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <img src={profileIcon} alt="Profile" className="w-6 h-6 object-contain" />
              </Box>
            </Box>

            {/* Content */}
            <Box className="flex-1">
              <h3 className="text-lg font-bold text-brand-blue mb-1">Thưởng mừng sinh nhật</h3>
              <p className="text-sm text-gray-600 mb-3">
                Nhận <span className="text-brand-blue font-bold">100</span> điểm vào ngày sinh nhật
              </p>

              {/* Update Birthday Button */}
              <button
                onClick={handleUpdateBirthdayClick}
                className="px-4 py-2 border border-brand-blue text-brand-blue rounded-full text-sm font-medium bg-white hover:bg-blue-50 transition-colors"
              >
                Cập nhật ngày sinh
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

export default EarnPointsPage;
