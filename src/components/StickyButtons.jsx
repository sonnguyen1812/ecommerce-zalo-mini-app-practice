import { Box } from 'zmp-ui';
import clickSymbol from '../static/click-sympol.png';

const StickyButtons = () => {
  return (
    <Box className="sticky-buttons z-50 flex flex-col space-y-3">
      {/* Menu Button */}
      <button className="w-14 h-14 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-105 border border-gray-200">
        <svg className="w-7 h-7" fill="none" stroke="#1531AD" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Zalo Button */}
      <button className="w-14 h-14 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-105 border border-gray-200">
        <div className="flex flex-col items-center">
          <img src={clickSymbol} alt="Click Symbol" className="w-5 h-5 object-contain mb-0.5" />
          <div className="text-xs leading-tight font-bold" style={{ color: '#1531AD' }}>Về Zalo</div>
        </div>
      </button>
    </Box>
  );
};

export default StickyButtons;
