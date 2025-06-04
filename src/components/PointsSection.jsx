import { Box, Button } from 'zmp-ui';
import starIcon from '../static/star.png';
import presentIcon from '../static/present.png';
import clockIcon from '../static/clock.png';
import qaIcon from '../static/Q&A.png';
import qrcodeIcon from '../static/qrcode-icon.png';

const PointsSection = () => {
  return (
    <Box className="mx-4 mt-4 mb-6">
      {/* Main Points Card */}
      <Box className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-4">
        {/* Top Row - Points and QR Button */}
        <Box className="flex items-center justify-between mb-4">
          {/* Points Section */}
          <Box className="flex items-center">
            {/* Star Icon */}
            <Box className="mr-2">
              <img src={starIcon} alt="Star" className="w-12 h-12 object-contain" />
            </Box>

            {/* Points Info */}
            <Box>
              <Box className="flex items-center">
                <span className="text-xl font-bold text-gray-800 mr-1">1000</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Box>
              <span className="text-xs text-gray-600">Điểm thưởng Bạn đang có</span>
            </Box>
          </Box>

          {/* QR Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full flex items-center space-x-1.5 shadow-md transition-all duration-200 text-xs font-medium">
            <img src={qrcodeIcon} alt="QR Code" className="w-5 h-5 object-contain" />
            <span>Quét mã QR</span>
          </button>
        </Box>

        {/* Menu Items */}
        <Box className="grid grid-cols-4 gap-1">
          {/* Quản lý ưu đãi */}
          <Box className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity py-2">
            <img src={presentIcon} alt="Present" className="w-4 h-4 object-contain mr-1" />
            <span className="text-xs text-gray-700 leading-tight">Quản lý ưu đãi</span>
          </Box>

          {/* Cách kiếm điểm */}
          <Box className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity py-2">
            <img src={starIcon} alt="Star" className="w-4 h-4 object-contain mr-1" />
            <span className="text-xs text-gray-700 leading-tight">Cách kiếm điểm</span>
          </Box>

          {/* Lịch sử điểm */}
          <Box className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity py-2">
            <img src={clockIcon} alt="Clock" className="w-5 h-5 object-contain mr-1" />
            <span className="text-xs text-gray-700 leading-tight">Lịch sử điểm</span>
          </Box>

          {/* Chính sách */}
          <Box className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity py-2">
            <img src={qaIcon} alt="Q&A" className="w-4 h-4 object-contain mr-1" />
            <span className="text-xs text-gray-700 leading-tight">Chính sách</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PointsSection;
