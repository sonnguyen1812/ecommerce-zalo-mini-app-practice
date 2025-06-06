import { Page, Box, useNavigate } from "zmp-ui";

function TermsPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page (AccountPage)
  };

  // Terms and policies menu items
  const termsItems = [
    {
      id: 1,
      title: "Điều khoản sử dụng",
      onClick: () => {
        // TODO: Navigate to specific terms page or show content
        console.log("Navigate to Điều khoản sử dụng");
      }
    },
    {
      id: 2,
      title: "Chính sách thanh toán",
      onClick: () => {
        // TODO: Navigate to payment policy page
        console.log("Navigate to Chính sách thanh toán");
      }
    },
    {
      id: 3,
      title: "Chính sách vận chuyển và giao vận",
      onClick: () => {
        // TODO: Navigate to shipping policy page
        console.log("Navigate to Chính sách vận chuyển và giao vận");
      }
    },
    {
      id: 4,
      title: "Chính sách bảo mật",
      onClick: () => {
        // TODO: Navigate to privacy policy page
        console.log("Navigate to Chính sách bảo mật");
      }
    },
    {
      id: 5,
      title: "Chính sách giải quyết khiếu nại",
      onClick: () => {
        // TODO: Navigate to complaint policy page
        console.log("Navigate to Chính sách giải quyết khiếu nại");
      }
    },
    {
      id: 6,
      title: "Chính sách đổi trả",
      onClick: () => {
        // TODO: Navigate to return policy page
        console.log("Navigate to Chính sách đổi trả");
      }
    }
  ];

  return (
    <Page className="min-h-screen" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Điều khoản và chính sách với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-4" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-semibold text-gray-800">Điều khoản và chính sách</h1>
          </Box>
        </Box>
      </Box>

      {/* Terms Menu List */}
      <Box className="px-4">
        <Box className="bg-white rounded-lg shadow-sm">
          {termsItems.map((item, index) => (
            <Box key={item.id}>
              <Box 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={item.onClick}
              >
                {/* Menu Item Text */}
                <Box className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{item.title}</p>
                </Box>

                {/* Arrow Icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Box>

              {/* Divider - không hiển thị cho item cuối */}
              {index < termsItems.length - 1 && (
                <Box className="border-b border-gray-200 mx-4"></Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Page>
  );
}

export default TermsPage;
