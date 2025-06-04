import { Box } from 'zmp-ui';
import logoImage from '../static/logo-image.png';

const Header = () => {
  return (
    <Box className="flex items-center px-4 pt-6 pb-3" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Logo NIT */}
      <Box className="flex-shrink-0 mr-4">
        <img
          src={logoImage}
          alt="NIT Logo"
          className="h-full w-full object-contain"
        />
      </Box>

      {/* Search Bar */}
      <Box className="flex-1 max-w-sm mr-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Bạn muốn tìm gì?"
            className="w-full pl-8 pr-4 py-2 rounded-full border border-gray-300 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm"
          />
          <svg
            className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </Box>

      {/* Empty space on the right */}
      <Box className="flex-shrink-0 w-20">
        {/* Khoảng trống bên phải */}
      </Box>
    </Box>
  );
};

export default Header;
