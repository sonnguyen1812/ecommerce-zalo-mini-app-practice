import { Page, Box, useNavigate } from "zmp-ui";
import copperShieldIcon from "../static/Anniversary copper shield.png";
import silverShieldIcon from "../static/Anniversary silver shield.png";
import goldShieldIcon from "../static/Anniversary gold shield.png";

function MemberBenefitsPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Quyền lợi của bạn với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-4" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">Quyền lợi của bạn</h1>
          </Box>
        </Box>
      </Box>

      {/* Subtitle */}
      <Box className="px-4 mb-4">
        <h2 className="text-lg font-bold text-brand-blue">Chính sách điểm thành viên</h2>
      </Box>

      {/* Member Tiers */}
      <Box className="px-4 space-y-4">
          
        {/* Bronze Tier */}
        <Box className="bg-white rounded-2xl shadow-md p-4 relative overflow-hidden min-h-40 flex items-center">
          <Box className="flex items-center relative z-10 w-full">
            {/* Icon */}
            <Box className="flex-shrink-0 mr-4">
              <Box className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={copperShieldIcon} alt="Hạng đồng" className="w-14 h-14 object-contain" />
              </Box>
            </Box>

            {/* Content */}
            <Box className="flex-1">
              <h3 className="text-lg font-bold text-brand-blue mb-1">Hạng đồng</h3>
              <p className="text-sm text-gray-600">Chi tiêu tối thiểu: <span className="text-brand-blue font-bold">10,000,000 VNĐ</span></p>
              <p className="text-sm text-gray-600">Quyền lợi: Tích điểm 1%</p>
            </Box>
          </Box>

          {/* Background decoration */}
          <Box className="absolute top-1/2 right-0 opacity-10 z-0 transform -translate-y-1/2">
            <img src={copperShieldIcon} alt="" className="size-48 object-contain transform translate-x-24" />
          </Box>
        </Box>

        {/* Silver Tier - Current */}
        <Box className="bg-white rounded-2xl shadow-md p-4 relative overflow-hidden min-h-40 flex items-center">
          {/* Current Tier Badge */}
          <Box className="absolute top-3 right-3 z-20">
            <span className="text-brand-blue text-xs">Hạng hiện tại</span>
          </Box>

          <Box className="flex items-center relative z-10 w-full">
            {/* Icon */}
            <Box className="flex-shrink-0 mr-4">
              <Box className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={silverShieldIcon} alt="Hạng bạc" className="w-12 h-12 object-contain" />
              </Box>
            </Box>

            {/* Content */}
            <Box className="flex-1 pr-14">
              <h3 className="text-lg font-bold text-brand-blue mb-1">Hạng bạc</h3>
              <p className="text-sm text-gray-600">Chi tiêu tối thiểu: <span className="text-brand-blue font-bold">10,000,000 VNĐ</span></p>
              <p className="text-sm text-gray-600">Quyền lợi: Tích điểm 1%</p>
              <p className="text-sm text-gray-600 mb-3">
                Bạn cần chi tiêu thêm <span className="text-brand-blue font-bold">1,000,000 VNĐ</span> để thăng hạng
              </p>

              {/* Progress Bar */}
              <Box className="w-full bg-gray-200 rounded-full h-2">
                <Box className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></Box>
              </Box>
            </Box>
          </Box>

          {/* Background decoration */}
          <Box className="absolute top-1/2 right-0 opacity-30 z-0 transform -translate-y-1/2">
            <img src={silverShieldIcon} alt="" className="size-40 object-contain transform translate-x-20" />
          </Box>
        </Box>

        {/* Gold Tier */}
        <Box className="bg-white rounded-2xl shadow-md p-4 relative overflow-hidden min-h-40 flex items-center">
          <Box className="flex items-center relative z-10 w-full">
            {/* Icon */}
            <Box className="flex-shrink-0 mr-4">
              <Box className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={goldShieldIcon} alt="Hạng vàng" className="w-12 h-12 object-contain" />
              </Box>
            </Box>

            {/* Content */}
            <Box className="flex-1">
              <h3 className="text-lg font-bold text-brand-blue mb-1">Hạng vàng</h3>
              <p className="text-sm text-gray-600">Chi tiêu tối thiểu: <span className="text-brand-blue font-bold">10,000,000 VNĐ</span></p>
              <p className="text-sm text-gray-600">Quyền lợi: Tích điểm 1%</p>
            </Box>
          </Box>

          {/* Background decoration */}
          <Box className="absolute top-1/2 right-0 opacity-10 z-0 transform -translate-y-1/2">
            <img src={goldShieldIcon} alt="" className="size-40 object-contain transform translate-x-20" />
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

export default MemberBenefitsPage;
