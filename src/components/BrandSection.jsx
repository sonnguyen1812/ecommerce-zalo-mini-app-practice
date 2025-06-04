import { Box } from 'zmp-ui';
import logoGoldgi from '../static/Logo-goldgi.png';
import logoPrimavita from '../static/Logo-primavita.png';
import logoCf from '../static/Logo-cf.png';
import logoHealth from '../static/Logo-health.png';

const BrandSection = () => {
  return (
    <Box className="mx-4 mb-6">
      {/* Brand Cards Container */}
      <Box className="grid grid-cols-2 gap-4">
        {/* Goldgi Card */}
        <Box className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center justify-center min-h-[80px]">
          <img
            src={logoGoldgi}
            alt="Goldgi"
            className="w-full h-auto object-contain max-h-16"
          />
        </Box>

        {/* Primavita Card */}
        <Box className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center justify-center min-h-[80px]">
          <img
            src={logoPrimavita}
            alt="Primavita"
            className="w-full h-auto object-contain max-h-16"
          />
        </Box>

        {/* CF Card */}
        <Box className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center justify-center min-h-[80px]">
          <img
            src={logoCf}
            alt="CF"
            className="w-full h-auto object-contain max-h-16"
          />
        </Box>

        {/* Health Card */}
        <Box className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center justify-center min-h-[80px]">
          <img
            src={logoHealth}
            alt="Health"
            className="w-full h-auto object-contain max-h-16"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BrandSection;
