import { Page, Box, useNavigate } from "zmp-ui";
import beautyShopImage from "../static/beauty-shop.png";

function VoucherDetailPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page (UserVouchersPage)
  };

  const handleUseVoucher = () => {
    // Handle voucher usage
    console.log("Sử dụng voucher");
  };

  const handleLearnMore = () => {
    // Handle learn more action
    console.log("Tìm hiểu thêm");
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - Chi tiết Ưu đãi với back button và menu */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-10" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center justify-between">
          {/* Back button */}
          <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
            <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
              <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h1 className="text-lg font-bold text-gray-800">Chi tiết Ưu đãi</h1>
          </Box>
        </Box>
      </Box>

      {/* Main Voucher Image */}
      <Box className="relative">
        <Box className="flex items-center justify-between mb-4">
          <img
            src={beautyShopImage}
            alt="Beauty Shop"
            className="w-full"
          />
        </Box>
      </Box>

      {/* Voucher Details Card - Ticket Style */}
      <Box className="px-4 mb-6 -mt-10 relative z-10">
        <Box className="bg-white shadow-lg overflow-hidden ticket-card">
          <Box className="p-4">
            <Box className="flex items-center">
              {/* Small voucher image */}
              <Box className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={beautyShopImage}
                  alt="Beauty Shop"
                  className="w-20 h-20 object-contain rounded-lg"
                />
              </Box>

              {/* Vertical dotted divider with notches */}
              <Box className="relative mx-4 flex-shrink-0">
                {/* Top notch */}
                <Box className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-b-full -mt-2" style={{ backgroundColor: '#FFFEF1' }}></Box>
                {/* Bottom notch */}
                <Box className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-t-full -mb-2" style={{ backgroundColor: '#FFFEF1' }}></Box>
                {/* Vertical dotted line */}
                <Box className="border-l-2 border-dashed border-gray-300 h-16 w-0"></Box>
              </Box>

              {/* Voucher info */}
              <Box className="flex-1">
                <Box className="flex items-center mb-2">
                  <span className="text-brand-blue border-brand-blue outline rounded px-2 py-1 text-xs font-medium mr-2">Mã tích điểm</span>
                </Box>
                <h3 className="font-bold text-gray-800 mb-1">Tích điểm ngẫu nhiên</h3>
                <p className="text-sm text-gray-600 mb-2">#ABCDEF123456</p>
                <p className="text-xs text-gray-500">HSD: 12/12/2024</p>
              </Box>
              {/* Badge */}
              <Box className="absolute top-4 right-4">
                <span className="bg-brand-blue text-white px-3 py-1 text-sm font-medium">x1 còn lại</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Details Sections */}
      <Box className="px-4 space-y-6">
        {/* Hạn sử dụng mã */}
        <Box>
          <h3 className="font-bold text-gray-800 mb-2">Hạn sử dụng mã</h3>
          <p className="text-sm text-gray-600">12 Th12 2024 12:30 - 12 Th12 2024 23:59</p>
        </Box>

        {/* Ưu đãi */}
        <Box>
          <h3 className="font-bold text-gray-800 mb-2">Ưu đãi</h3>
          <p className="text-sm text-gray-600">Lượt sử dụng có hạn. Nhanh tay kéo lô bạn nhé! Giảm 12% Đơn Tối Thiểu đ1tr Giảm tối đa đ1tr</p>
        </Box>

        {/* Áp dụng cho sản phẩm */}
        <Box>
          <h3 className="font-bold text-gray-800 mb-2">Áp dụng cho sản phẩm</h3>
          <p className="text-sm text-gray-600 mb-2">
            Chỉ áp dụng trên App cho một số sản phẩm và một số người dùng tham gia chương trình khuyến mãi nhất định.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            - Trong các sản phẩm đã chọn có một số sản phẩm không được chạy khuyến mãi theo quy định của pháp luật hoặc đây là sản phẩm độc quyền dành cho thành viên.
          </p>
          <button
            onClick={handleLearnMore}
            className="text-brand-blue text-sm font-medium underline"
          >
            Tìm hiểu thêm.
          </button>
        </Box>

        {/* Thanh toán */}
        <Box>
          <h3 className="font-bold text-gray-800 mb-2">Thanh toán</h3>
          <p className="text-sm text-gray-600">Tất cả các hình thức thanh toán</p>
        </Box>
      </Box>

      {/* Bottom Action Button */}
      <Box className="bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-md">
        <Box className="max-w-sm mx-auto">
          <button
            onClick={handleUseVoucher}
            className="w-full bg-brand-blue text-white py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Dùng ngay
          </button>
        </Box>
      </Box>
    </Page>
  );
}

export default VoucherDetailPage;