import { Page, Box, useNavigate, useLocation } from "zmp-ui";
import { useEffect, useState } from "react";

function MapPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mapSrc, setMapSrc] = useState("");
  
  // Get address from navigation state
  const address = location.state?.address || "176 P. Định Công, Phường Liệt, Hoàng Mai, Hà Nội";

  useEffect(() => {
    // Create Google Maps embed URL with the address
    const encodedAddress = encodeURIComponent(address);

    // Use Google Maps search embed with gesture handling for single finger
    const googleMapsUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed&gestureHandling=greedy`;

    setMapSrc(googleMapsUrl);
  }, [address]);

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page (StoreListPage)
  };

  const handleSearchClick = () => {
    // Handle search functionality - open native maps app or Google Maps
    const searchQuery = encodeURIComponent(address);

    // Try to open in native maps app first, fallback to Google Maps
    const mapsUrl = `https://maps.google.com/maps?q=${searchQuery}`;

    // For mobile devices, try to open native maps app
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Try native maps app first
      const nativeUrl = `maps://maps.google.com/maps?q=${searchQuery}`;
      window.location.href = nativeUrl;

      // Fallback to web version after a short delay
      setTimeout(() => {
        window.open(mapsUrl, '_blank');
      }, 1000);
    } else {
      // Desktop - open in new tab
      window.open(mapsUrl, '_blank');
    }
  };

  return (
    <Page className="min-h-screen" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-3" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-semibold text-gray-800">Vị trí cửa hàng</h1>
          </Box>
        </Box>
      </Box>

      {/* Map Container */}
      <Box className="flex-1 relative">
        {/* Google Maps Iframe */}
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{
            border: 0,
            minHeight: 'calc(100vh - 140px)', // Full height minus header and search
            pointerEvents: 'auto',
            touchAction: 'pan-x pan-y zoom-in zoom-out'
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map for ${address}`}
          allow="geolocation"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>

        {/* Search Bar Overlay */}
        <Box className="absolute bottom-6 left-4 right-4">
          <Box 
            className="bg-white rounded-full shadow-lg px-4 py-3 flex items-center cursor-pointer"
            onClick={handleSearchClick}
          >
            {/* Search Icon */}
            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
            {/* Search Text */}
            <span className="text-gray-600 text-sm flex-1">Tìm trên Bản đồ</span>
            
            {/* Microphone Icon */}
            <svg className="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </Box>
        </Box>




      </Box>
    </Page>
  );
}

export default MapPage;
