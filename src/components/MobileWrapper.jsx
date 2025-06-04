import { Box } from 'zmp-ui';

const MobileWrapper = ({ children }) => {
  return (
    <Box className="mobile-wrapper">
      {children}
    </Box>
  );
};

export default MobileWrapper;
