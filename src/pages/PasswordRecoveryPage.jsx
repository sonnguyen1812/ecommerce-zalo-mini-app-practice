import { Page, Box, useNavigate } from "zmp-ui";
import { useState } from "react";

function PasswordRecoveryPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Request, 2: Success
  const [email, setEmail] = useState("tom.cyberad@gmail.com");

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSendPasswordClick = () => {
    // Handle send password logic here
    console.log("Gửi mật khẩu đến:", email);
    setStep(2); // Move to success step
  };

  const handleDoneClick = () => {
    navigate(-1); // Go back after completion
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Lấy mật khẩu với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-3" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">Lấy mật khẩu</h1>
          </Box>
        </Box>
      </Box>

      {step === 1 ? (
        // Step 1: Request Password
        <>
          {/* Info Section */}
          <Box className="mt-6 mb-6">
            <Box className="bg-white shadow-md p-6">
              <Box className="text-center mb-6">
                {/* Lock Icon */}
                <Box className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 18.75H28.75V12.5C28.75 7.25 24.5 3.75 20 3.75C15.5 3.75 11.25 7.25 11.25 12.5V18.75H10C8.625 18.75 7.5 19.875 7.5 21.25V32.5C7.5 33.875 8.625 35 10 35H30C31.375 35 32.5 33.875 32.5 32.5V21.25C32.5 19.875 31.375 18.75 30 18.75ZM20 28.75C18.625 28.75 17.5 27.625 17.5 26.25C17.5 24.875 18.625 23.75 20 23.75C21.375 23.75 22.5 24.875 22.5 26.25C22.5 27.625 21.375 28.75 20 28.75ZM25 18.75H15V12.5C15 9.375 17.375 6.25 20 6.25C22.625 6.25 25 9.375 25 12.5V18.75Z" fill="#1531AD"/>
                  </svg>
                </Box>
                
                <h2 className="text-xl font-bold text-brand-blue mb-2">Lấy mật khẩu tài khoản</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Chúng tôi sẽ gửi mật khẩu tạm thời đến email của bạn để đăng nhập vào webapp shopvaotech.vn
                </p>
              </Box>

              {/* Email Display */}
              <Box className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email nhận mật khẩu</label>
                <Box className="flex items-center p-4 bg-gray-50 rounded-lg border">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-700 flex-1">{email}</span>
                  <span className="text-xs text-brand-blue font-medium">Đã xác thực</span>
                </Box>
              </Box>

              {/* Warning Notice */}
              <Box className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <Box className="flex">
                  <svg className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <Box>
                    <h4 className="text-sm font-medium text-yellow-800 mb-1">Lưu ý quan trọng</h4>
                    <p className="text-xs text-yellow-700 leading-relaxed">
                      Mật khẩu tạm thời sẽ có hiệu lực trong 24 giờ. Vui lòng đổi mật khẩu ngay sau khi đăng nhập thành công.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* Send Button */}
              <button 
                onClick={handleSendPasswordClick}
                className="w-full bg-brand-blue text-white py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Gửi mật khẩu đến email
              </button>
            </Box>
          </Box>
        </>
      ) : (
        // Step 2: Success
        <>
          {/* Success Section */}
          <Box className="mt-6 mb-6">
            <Box className="bg-white shadow-md p-6">
              <Box className="text-center">
                {/* Success Icon */}
                <Box className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.75C11.0625 3.75 3.75 11.0625 3.75 20C3.75 28.9375 11.0625 36.25 20 36.25C28.9375 36.25 36.25 28.9375 36.25 20C36.25 11.0625 28.9375 3.75 20 3.75ZM28.125 16.875L18.75 26.25C18.375 26.625 17.875 26.8125 17.375 26.8125C16.875 26.8125 16.375 26.625 16 26.25L11.875 22.125C11.125 21.375 11.125 20.125 11.875 19.375C12.625 18.625 13.875 18.625 14.625 19.375L17.375 22.125L25.375 14.125C26.125 13.375 27.375 13.375 28.125 14.125C28.875 14.875 28.875 16.125 28.125 16.875Z" fill="#10B981"/>
                  </svg>
                </Box>
                
                <h2 className="text-xl font-bold text-green-600 mb-2">Gửi thành công!</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Mật khẩu tạm thời đã được gửi đến email <strong>{email}</strong>
                </p>

                {/* Instructions */}
                <Box className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">Hướng dẫn tiếp theo:</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Kiểm tra hộp thư đến của bạn</li>
                    <li>• Sử dụng mật khẩu tạm thời để đăng nhập tại shopvaotech.vn</li>
                    <li>• Đổi mật khẩu mới ngay sau khi đăng nhập</li>
                    <li>• Mật khẩu tạm thời có hiệu lực trong 24 giờ</li>
                  </ul>
                </Box>

                {/* Done Button */}
                <button 
                  onClick={handleDoneClick}
                  className="w-full bg-brand-blue text-white py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Hoàn thành
                </button>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Page>
  );
}

export default PasswordRecoveryPage;
