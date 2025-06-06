import { Page, Box, useNavigate } from "zmp-ui";

function AccountInfoPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleUpdateClick = () => {
    // Handle update logic here
    console.log("Cập nhật thông tin cá nhân");
  };

  const handleEditProfileClick = () => {
    navigate('/edit-profile'); // Navigate to edit profile page
  };

  const handlePasswordClick = () => {
    navigate('/password-recovery'); // Navigate to password recovery page
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Thông tin tài khoản với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-3" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">Thông tin tài khoản</h1>
          </Box>
        </Box>
      </Box>

      {/* User Profile Section */}
      <Box className="mt-6 mb-6">
        <Box className="bg-white shadow-md p-6">
          {/* User Avatar and Name */}
          <Box className="flex items-center pb-6 border-b border-gray-200">
            {/* Avatar with edit icon */}
            <Box className="flex items-center justify-center mr-4 relative">
              <Box className="w-20 h-20 rounded-full border-3 border-brand-blue flex items-center justify-center bg-white">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#E5E7EB"/>
                  <circle cx="20" cy="16" r="6" fill="#9CA3AF"/>
                  <path d="M8 32c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="#9CA3AF"/>
                </svg>
              </Box>
              {/* Edit icon overlay */}
              <Box className="absolute -bottom-1 -right-1 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center cursor-pointer" onClick={handleEditProfileClick}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Z" fill="white"/>
                  <path d="m5.21 8.842.875.875-1.523.435.648-1.31Z" fill="white"/>
                </svg>
              </Box>
            </Box>
            {/* User Details */}
            <Box className="flex-1">
              <Box className="flex items-center">
                <h3 className="text-lg font-bold text-brand-blue mr-2">Nguyễn Trí Tường</h3>
                {/* Edit Icon */}
                <svg 
                  width="17" 
                  height="17" 
                  viewBox="0 0 17 17" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  onClick={handleEditProfileClick}
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.47949 15.0517H3.55616C4.46283 15.0517 4.96574 15.0517 5.46158 14.8463C5.92553 14.6551 6.25845 14.3257 6.87116 13.7194L6.94199 13.6485L13.9262 6.65728C14.6132 5.9702 14.9957 5.5877 15.0453 5.02103C15.0524 4.92186 15.0524 4.81561 15.0453 4.72353C14.9901 4.16182 14.6217 3.78995 13.9616 3.1227L13.9191 3.0802C13.2249 2.38603 12.8424 2.00353 12.2687 1.95395C12.1743 1.94764 12.0797 1.94764 11.9853 1.95395C11.4045 2.00353 11.022 2.38603 10.3349 3.0802L9.19945 4.21636L9.17537 4.24045L3.35074 10.0651L3.30612 10.109C2.69695 10.7182 2.35412 11.061 2.15366 11.5448C1.94824 12.0335 1.94824 12.5364 1.94824 13.4431V14.5198C1.94824 14.8102 2.18908 15.0517 2.47949 15.0517ZM9.55574 5.34686L4.09449 10.8152C3.50658 11.396 3.24449 11.6652 3.12408 11.9556C3.00366 12.246 3.00366 12.6498 3.00366 13.4431V13.9885H3.54908C4.34949 13.9885 4.74616 13.9885 5.05074 13.8681C5.33408 13.7477 5.61033 13.4785 6.15574 12.926L11.6453 7.43645L9.55574 5.34686ZM10.3066 4.59603L12.3962 6.68561L13.1682 5.91353C13.6499 5.43186 13.9687 5.11311 13.9828 4.91478V4.82978C13.9616 4.62436 13.6428 4.30561 13.1612 3.82395C12.6795 3.34228 12.3607 3.02353 12.1695 3.00228H12.0703C11.8748 3.01645 11.583 3.31182 11.1006 3.80128L11.0787 3.82324L10.3066 4.59603Z" fill="#797979" />
                </svg>
              </Box>
              <p className="text-sm text-gray-600">Thành viên vàng</p>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Thông tin cơ bản Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md p-6">
          <h2 className="text-lg font-bold mb-6 text-brand-blue">Thông tin cơ bản</h2>
          
          {/* Form Fields */}
          <Box className="space-y-4">
            {/* Họ và tên */}
            <Box>
              <Box className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Họ và tên</label>
                <span className="text-sm text-brand-blue font-medium">Nguyễn Văn Tâm</span>
              </Box>
            </Box>

            {/* Ngày sinh */}
            <Box>
              <Box className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Ngày sinh</label>
                <span className="text-sm text-brand-blue font-medium">02/03/1992</span>
              </Box>
            </Box>

            {/* Địa chỉ */}
            <Box>
              <Box className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Địa chỉ</label>
                <Box className="text-right">
                  <span className="text-sm text-brand-blue font-medium">Số 12 Đường 8th ave, Sunrise I, KDT</span>
                  <br />
                  <span className="text-sm text-brand-blue font-medium">The Manor, Nguyễn Xiển, Hoàng</span>
                  <br />
                  <span className="text-sm text-brand-blue font-medium">Mai, Hà Nội</span>
                </Box>
              </Box>
            </Box>

            {/* Email */}
            <Box>
              <Box className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <span className="text-sm text-brand-blue font-medium">tom.cyberad@gmail.com</span>
              </Box>
            </Box>
          </Box>

          {/* Update Button */}
          <Box className="mt-8">
            <button 
              onClick={handleUpdateClick}
              className="w-full bg-brand-blue text-white py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Cập nhật thông tin cá nhân
            </button>
          </Box>
        </Box>
      </Box>

      {/* Lấy mật khẩu Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md p-6 cursor-pointer" onClick={handlePasswordClick}>
          <Box className="flex items-center justify-between">
            <Box className="flex-1">
              <h3 className="text-sm font-medium text-brand-blue mb-1">Lấy mật khẩu</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lấy mật khẩu cho tài khoản của bạn để đăng nhập vào nền tảng webapp của chúng tôi tại shopvaotech.vn
              </p>
            </Box>
            <svg className="w-5 h-5 text-gray-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

export default AccountInfoPage;
