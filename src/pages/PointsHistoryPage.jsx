import { Page, Box, useNavigate } from "zmp-ui";
import { useState } from "react";
import buyIcon from "../static/Buy.svg";
import userIcon from "../static/3-User.svg";
import starTenPlusIcon from "../static/star-ten-plus.svg";
import starTenMinusIcon from "../static/star-ten-minus.svg";
import exchangeIcon from "../static/exchange-tick-square.svg";
import presentPlaceholderIcon from "../static/present-placeholder.png";

function PointsHistoryPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('earned'); // 'earned', 'spent', 'expired'

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleExchangeClick = () => {
    // Navigate to exchange/voucher page or show exchange options
    console.log("Navigate to exchange page");
  };

  // Sample data for different tabs
  const earnedHistory = [
    {
      id: 1,
      type: 'purchase',
      title: 'Mua hàng',
      date: '06/05/2025 11:20:25',
      description: 'Cộng điểm đơn hàng #acbsjcsj',
      points: '+10',
      icon: buyIcon
    },
    {
      id: 2,
      type: 'referral',
      title: 'Giới thiệu',
      date: '06/05/2025 11:20:25',
      description: 'Cộng điểm đơn hàng #acbsjcsj',
      points: '+10',
      icon: userIcon
    }
  ];

  const spentHistory = [
    {
      id: 1,
      type: 'purchase',
      title: 'Mua hàng',
      date: '06/05/2025 11:20:25',
      description: 'Cộng điểm đơn hàng #acbsjcsj',
      points: '-10',
      icon: buyIcon
    },
    {
      id: 2,
      type: 'exchange',
      title: 'Quy đổi',
      date: '06/05/2025 11:20:25',
      description: 'Cộng điểm đơn hàng #acbsjcsj',
      points: '-10',
      icon: exchangeIcon
    }
  ];

  const expiredHistory = [
    // Add expired points data here if needed
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'earned':
        return earnedHistory;
      case 'spent':
        return spentHistory;
      case 'expired':
        return expiredHistory;
      default:
        return earnedHistory;
    }
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Lịch sử đổi điểm với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-4" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">Lịch sử đổi điểm</h1>
          </Box>
        </Box>
      </Box>

      {/* Tab Navigation */}
      <Box className="px-4 mb-6">
        <Box className="flex justify-center items-center space-x-2">
          {/* Lượt nhận Tab */}
          <button
            onClick={() => setActiveTab('earned')}
            className={`px-4 py-3 rounded-full text-xs font-medium transition-colors flex-1 text-center border whitespace-nowrap ${
              activeTab === 'earned'
                ? 'bg-brand-blue border-brand-blue text-white'
                : 'bg-transparent border-brand-blue text-brand-blue'
            }`}
          >
            Lượt nhận
          </button>

          {/* Vertical Divider */}
          <Box className="w-px h-8 bg-gray-300"></Box>

          {/* Lượt chi Tab */}
          <button
            onClick={() => setActiveTab('spent')}
            className={`px-4 py-3 rounded-full text-xs font-medium transition-colors flex-1 text-center border whitespace-nowrap ${
              activeTab === 'spent'
                ? 'bg-brand-blue border-brand-blue text-white'
                : 'bg-transparent border-brand-blue text-brand-blue'
            }`}
          >
            Lượt chi
          </button>

          {/* Vertical Divider */}
          <Box className="w-px h-8 bg-gray-300"></Box>

          {/* Quá của tôi Tab */}
          <button
            onClick={() => setActiveTab('expired')}
            className={`px-4 py-3 rounded-full text-xs font-medium transition-colors flex-1 text-center border whitespace-nowrap ${
              activeTab === 'expired'
                ? 'bg-brand-blue border-brand-blue text-white'
                : 'bg-transparent border-brand-blue text-brand-blue'
            }`}
          >
            Quá của tôi
          </button>
        </Box>
      </Box>

      {/* History Content */}
      <Box className="px-4">
        {getCurrentData().length > 0 ? (
          <Box className="space-y-4">
            {getCurrentData().map((item) => (
              <Box key={item.id} className="bg-white rounded-2xl shadow-md p-4">
                <Box className="flex items-center justify-between">
                  {/* Left side - Icon and Content */}
                  <Box className="flex items-center flex-1">
                    {/* Icon */}
                    <Box className="flex-shrink-0 mr-4">
                      <Box className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.type === 'purchase' ? 'bg-red-100' :
                        item.type === 'exchange' ? 'bg-purple-100' : 'bg-yellow-100'
                      }`}>
                        <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" />
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box className="flex-1">
                      <h3 className="text-lg font-bold text-brand-blue mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </Box>
                  </Box>

                  {/* Right side - Points with Star */}
                  <Box className="flex-shrink-0 ml-4">
                    {activeTab === 'earned' ? (
                      <img src={starTenPlusIcon} alt="Star +10" className="w-16 h-16 object-contain" />
                    ) : (
                      <img src={starTenMinusIcon} alt="Star -10" className="w-16 h-16 object-contain" />
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          /* Empty State */
          <Box className="flex flex-col items-center justify-center py-16">
            {activeTab === 'expired' ? (
              /* Special empty state for "Quà của tôi" tab */
              <>
                <Box className="mb-6">
                  <img src={presentPlaceholderIcon} alt="No gifts" className="w-48 h-48 object-contain" />
                </Box>
                <h3 className="text-lg font-medium text-gray-500 mb-4">Bạn chưa có quà</h3>
                <button
                  onClick={handleExchangeClick}
                  className="text-brand-blue text-sm font-medium underline"
                >
                  Đổi Stars để lấy quà ngay!
                </button>
              </>
            ) : (
              /* Default empty state for other tabs */
              <>
                <Box className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Box>
                <h3 className="text-lg font-medium text-gray-500 mb-2">Chưa có lịch sử</h3>
                <p className="text-sm text-gray-400 text-center">
                  {activeTab === 'earned' && 'Bạn chưa có lịch sử nhận điểm nào'}
                  {activeTab === 'spent' && 'Bạn chưa có lịch sử chi tiêu điểm nào'}
                </p>
              </>
            )}
          </Box>
        )}
      </Box>
    </Page>
  );
}

export default PointsHistoryPage;
