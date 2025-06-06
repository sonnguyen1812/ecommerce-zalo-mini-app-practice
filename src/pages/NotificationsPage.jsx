import { Page, Box, useNavigate } from "zmp-ui";

function NotificationsPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      message: "Bạn đã mua thành công sản phẩm Son kem PERFECT DIARY DreamMatte màu lì siêu mịn lâu trôi cao cấp 2.5g",
      time: "20 giờ trước",
      isNew: true
    },
    {
      id: 2,
      message: "Bạn đã mua thành công sản phẩm Son kem PERFECT DIARY DreamMatte màu lì siêu mịn lâu trôi cao cấp 2.5g",
      time: "12:00 20/06/2025",
      isNew: false
    },
    {
      id: 3,
      message: "Bạn đã mua thành công sản phẩm Son kem PERFECT DIARY DreamMatte màu lì siêu mịn lâu trôi cao cấp 2.5g",
      time: "12:00 20/06/2025",
      isNew: false
    },
    {
      id: 4,
      message: "Bạn đã mua thành công sản phẩm Son kem PERFECT DIARY DreamMatte màu lì siêu mịn lâu trôi cao cấp 2.5g",
      time: "12:00 20/06/2025",
      isNew: false
    },
    {
      id: 5,
      message: "Bạn đã mua thành công sản phẩm Son kem PERFECT DIARY DreamMatte màu lì siêu mịn lâu trôi cao cấp 2.5g",
      time: "12:00 20/06/2025",
      isNew: false
    }
  ];

  return (
    <Page className="min-h-screen" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Thông báo với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-4" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-semibold text-gray-800">Thông báo</h1>
          </Box>
        </Box>
      </Box>

      {/* Notifications List */}
      <Box className="px-4 space-y-3">
        {notifications.map((notification, index) => (
          <Box key={notification.id} className="bg-white rounded-lg shadow-sm p-4">
            {/* Notification Content */}
            <Box className="mb-3">
              <p className="text-xs text-gray-700 leading-relaxed">
                {notification.message}
              </p>
            </Box>

            {/* Bottom row with time */}
            <Box className="flex justify-end">
              {/* Time - Right aligned */}
              <Box className="flex-shrink-0">
                <p className="text-xs text-gray-400 whitespace-nowrap">
                  {notification.time}
                </p>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Empty state if no notifications */}
      {notifications.length === 0 && (
        <Box className="flex flex-col items-center justify-center py-20">
          <Box className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 01-7.5-7.5H7a7.5 7.5 0 017.5 7.5v5z" />
            </svg>
          </Box>
          <p className="text-gray-500 text-sm">Chưa có thông báo nào</p>
        </Box>
      )}
    </Page>
  );
}

export default NotificationsPage;
