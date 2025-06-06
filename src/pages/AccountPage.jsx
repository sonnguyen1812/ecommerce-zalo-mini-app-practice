import { Page, Box, useNavigate } from "zmp-ui";
import StickyButtons from "../components/StickyButtons";
import taiKhoanIcon from "../static/tai-khoan.svg";
import qrcodeIcon from "../static/qrcode-icon.png";
import walletIcon from "../static/Wallet.svg";
import boxIcon from "../static/box.svg";
import deliveryIcon from "../static/delivery.svg";
import starIcon from "../static/star.svg";
import sodiachIcon from "../static/sodiachi.svg";
import khovoucherIcon from "../static/khovoucher.svg";
import thongtintaikhoanIcon from "../static/thongtintaikhoan.svg";
import danhsachcuahangIcon from "../static/danhsachcuahang.svg";
import taoiconappIcon from "../static/taoiconapp.svg";
import dieukhoaIcon from "../static/dieukhoan.svg";
import hotrovahoidapIcon from "../static/hotrovahoidap.svg";
import qrCodeImage from "../static/qr-code-image-sample.png";
import saochepIcon from "../static/saochep.svg";
import taixuongIcon from "../static/taixuong.svg";
import chiaseIcon from "../static/chiase.svg";
import evotechLogo from "../static/Evotech-logo.svg";

function AccountPage() {
  const navigate = useNavigate();

  const handlePointsClick = () => {
    navigate('/points');
  };

  const handleAccountInfoClick = () => {
    navigate('/account-info');
  };

  const handleEditProfileClick = () => {
    navigate('/edit-profile');
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - chữ "Tài khoản" */}
      <Box className="px-4 pt-10 pb-3" style={{ backgroundColor: '#FFFEF1' }}>
        <h1 className="text-2xl font-bold text-gray-800">Tài khoản</h1>
      </Box>

      {/* User Profile Section */}
      <Box className="mt-6 mb-6">
        <Box className="bg-white shadow-md p-6">
          {/* User Info */}
          <Box className="flex items-center justify-between pb-4">
            <Box className="flex items-center">
              {/* Avatar */}
              <Box className="flex items-center justify-center mr-4">
                <img src={taiKhoanIcon} alt="Avatar" className="w-16 h-16 icon-brand-blue" />
              </Box>
              {/* User Details */}
              <Box>
                <Box className="flex items-center cursor-pointer" onClick={handleEditProfileClick}>
                  <h3 className="text-lg font-bold text-brand-blue mr-2">Nguyễn Trí Tường</h3>
                  {/* Edit Icon */}
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.47949 15.0517H3.55616C4.46283 15.0517 4.96574 15.0517 5.46158 14.8463C5.92553 14.6551 6.25845 14.3257 6.87116 13.7194L6.94199 13.6485L13.9262 6.65728C14.6132 5.9702 14.9957 5.5877 15.0453 5.02103C15.0524 4.92186 15.0524 4.81561 15.0453 4.72353C14.9901 4.16182 14.6217 3.78995 13.9616 3.1227L13.9191 3.0802C13.2249 2.38603 12.8424 2.00353 12.2687 1.95395C12.1743 1.94764 12.0797 1.94764 11.9853 1.95395C11.4045 2.00353 11.022 2.38603 10.3349 3.0802L9.19945 4.21636L9.17537 4.24045L3.35074 10.0651L3.30612 10.109C2.69695 10.7182 2.35412 11.061 2.15366 11.5448C1.94824 12.0335 1.94824 12.5364 1.94824 13.4431V14.5198C1.94824 14.8102 2.18908 15.0517 2.47949 15.0517ZM9.55574 5.34686L4.09449 10.8152C3.50658 11.396 3.24449 11.6652 3.12408 11.9556C3.00366 12.246 3.00366 12.6498 3.00366 13.4431V13.9885H3.54908C4.34949 13.9885 4.74616 13.9885 5.05074 13.8681C5.33408 13.7477 5.61033 13.4785 6.15574 12.926L11.6453 7.43645L9.55574 5.34686ZM10.3066 4.59603L12.3962 6.68561L13.1682 5.91353C13.6499 5.43186 13.9687 5.11311 13.9828 4.91478V4.82978C13.9616 4.62436 13.6428 4.30561 13.1612 3.82395C12.6795 3.34228 12.3607 3.02353 12.1695 3.00228H12.0703C11.8748 3.01645 11.583 3.31182 11.1006 3.80128L11.0787 3.82324L10.3066 4.59603Z" fill="#797979" />
                  </svg>
                </Box>
                <p className="text-sm text-gray-600 cursor-pointer" onClick={handleEditProfileClick}>Thành viên vàng</p>
              </Box>
            </Box>
            {/* Notification Bell */}
            <Box className="relative">
              <Box
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                onClick={() => navigate('/notifications')}
              >
                <svg className="w-6 h-6 fill-brand-blue" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
              </Box>
              {/* Red notification dot */}
              <Box className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full"></Box>
            </Box>
          </Box>

          {/* Points card */}
          <Box className="rounded-2xl shadow-md p-6 text-white" style={{ background: 'radial-gradient(ellipse 70% 40% at center, #018CD0 7%, #01476A 75%)' }}>
            {/* Points Header */}
            <Box className="flex items-center justify-between">
              <Box className="flex items-center cursor-pointer" onClick={handlePointsClick}>
                <h2 className="text-3xl font-bold mr-2">1000</h2>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Box>
              {/* QR Code Button */}
              <Box className="bg-white rounded-full px-4 py-2 flex items-center">
                <img src={qrcodeIcon} alt="QR Code" className="w-5 h-5 mr-2 icon-brand-blue" />
                <span className="text-sm font-medium text-brand-blue">Quét mã QR</span>
              </Box>
            </Box>

            {/* Points Label */}
            <p className="text-sm mb-3">Star</p>

            {/* Points Description */}
            <p className="text-sm leading-relaxed">
              Chi tiêu thêm 1,540,333 vnđ để đạt hạng Thành viên Kim Cương và
              mở khóa nhiều đặc quyền hấp dẫn!
            </p>
          </Box>
        </Box>
      </Box>

      {/* Đơn hàng của tôi Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md p-8">
          {/* Header */}
          <Box className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-brand-blue">Đơn hàng của tôi</h2>
            <Box className="flex items-center">
              <span className="text-sm mr-1 text-brand-blue">Xem lịch sử mua hàng</span>
              <svg className="w-4 h-4 stroke-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Box>
          </Box>

          {/* Order Status Icons */}
          <Box className="relative">
            {/* Connecting Lines - Dashed */}
            <Box className="absolute top-6 left-0 right-0 flex items-center justify-between px-6">
              {/* Line 1: Chờ xác nhận -> Chờ lấy hàng (màu 1531AD, nét đứt) */}
              <Box className="flex-1 h-0.5 mx-auto border-t-2 border-dashed border-brand-blue"></Box>
              {/* Line 2: Chờ lấy hàng -> Chờ giao hàng (màu xám, nét đứt) */}
              <Box className="flex-1 h-0.5 mx-auto border-t-2 border-dashed border-gray-300"></Box>
              {/* Line 3: Chờ giao hàng -> Đánh giá (màu xám, nét đứt) */}
              <Box className="flex-1 h-0.5 mx-auto border-t-2 border-dashed border-gray-300"></Box>
            </Box>

            {/* Icons Grid */}
            <Box className="grid grid-cols-4 gap-4 relative z-10">
              {/* Chờ xác nhận - Active (nền xám nhạt, không outline) */}
              <Box className="flex flex-col items-center">
                <Box className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <img src={walletIcon} alt="Wallet" className="w-6 h-6 object-contain icon-brand-blue" />
                </Box>
                <span className="text-xs text-center text-gray-600 leading-tight">Chờ xác nhận</span>
              </Box>

              {/* Chờ lấy hàng - Next Active (outline màu 1531AD, nền trắng) */}
              <Box className="flex flex-col items-center">
                <Box className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 border-2 border-brand-blue">
                  <img src={boxIcon} alt="Box" className="w-6 h-6 object-contain icon-brand-blue" />
                </Box>
                <span className="text-xs text-center text-gray-600 leading-tight">Chờ lấy hàng</span>
              </Box>

              {/* Chờ giao hàng - Inactive (outline xám nhạt, nền trắng) */}
              <Box className="flex flex-col items-center">
                <Box className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 border-2 border-gray-300">
                  <img src={deliveryIcon} alt="Delivery" className="w-6 h-6 object-contain icon-brand-blue" />
                </Box>
                <span className="text-xs text-center text-gray-600 leading-tight">Chờ giao hàng</span>
              </Box>

              {/* Đánh giá - Inactive (outline xám nhạt, nền trắng) */}
              <Box className="flex flex-col items-center">
                <Box className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 border-2 border-gray-300">
                  <img src={starIcon} alt="Star" className="w-6 h-6 object-contain icon-brand-blue" />
                </Box>
                <span className="text-xs text-center text-gray-600 leading-tight">Đánh giá</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Chương trình đối tác Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md p-6">
          {/* Header */}
          <h2 className="text-lg font-bold mb-6 text-brand-blue">Chương trình đối tác</h2>

          {/* Partnership Card */}
          <Box className="bg-gray-50 rounded-2xl p-3 border-2 border-brand-blue">
            <Box className="flex items-center justify-between">
              {/* Partnership Content */}
              <Box className="flex-1 w-3/5 pl-3">
                {/* First Partnership */}
                <Box>
                  <p className="text-xs text-gray-700 mb-1 whitespace-nowrap">Giới thiệu khách hàng cấp 1 hoa hồng</p>
                  <p className="text-lg font-bold whitespace-nowrap text-brand-blue">10%</p>
                </Box>

                {/* Divider Line */}
                <Box className="border-t border-gray-300 my-1"></Box>

                {/* Second Partnership */}
                <Box>
                  <p className="text-xs text-gray-700 mb-1 whitespace-nowrap">Giới thiệu khách hàng cấp 1 hoa hồng</p>
                  <p className="text-lg font-bold whitespace-nowrap text-brand-blue">5%</p>
                </Box>
              </Box>

              {/* Register Button */}
              <Box className="ml-12 flex items-center justify-center w-2/5">
                <button className="px-6 py-3 rounded-full text-white font-medium text-xs bg-brand-blue">
                  Đăng ký
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Menu Options Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md">
          <Box className="p-5">
            {/* Số đã chi & Kho Voucher */}
            <Box className="grid grid-cols-2">
              {/* Số đã chi */}
              <Box className="p-4 mr-1 mb-2 border border-gray-200 rounded-lg flex items-center justify-center">
                <Box className="flex items-center">
                  <Box className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img src={sodiachIcon} alt="Số đã chi" className="w-6 h-6 object-contain icon-brand-blue" />
                  </Box>
                  <Box>
                    <p className="text-sm font-medium text-brand-blue">Số đã chi</p>
                    <p className="text-xs text-gray-500">Tất cả nhật hàng</p>
                  </Box>
                </Box>
              </Box>

              {/* Kho Voucher */}
              <Box className="p-4 ml-1 mb-2 border border-gray-200 rounded-lg flex items-center justify-center">
                <Box className="flex items-center">
                  <Box className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img src={khovoucherIcon} alt="Kho Voucher" className="w-6 h-6 object-contain icon-brand-blue" />
                  </Box>
                  <Box>
                    <p className="text-sm font-medium text-brand-blue">Kho Voucher</p>
                    <p className="text-xs text-gray-500">Các voucher khuyến mãi</p>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="border border-gray-200 rounded-lg">
              {/* Menu Items */}
              <Box>
                {/* Thông tin tài khoản */}
                <Box className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer" onClick={handleAccountInfoClick}>
                  <Box className="flex items-center">
                    <Box className="w-8 h-8 mr-3 flex items-center justify-center">
                      <img src={thongtintaikhoanIcon} alt="Thông tin tài khoản" className="w-6 h-6 object-contain icon-brand-blue" />
                    </Box>
                    <Box>
                      <p className="text-sm font-medium text-brand-blue">Thông tin tài khoản</p>
                      <p className="text-xs text-gray-500">Cập nhật thông tin định danh</p>
                    </Box>
                  </Box>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Box>

                {/* Danh sách cửa hàng */}
                <Box
                  className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => navigate('/store-list')}
                >
                  <Box className="flex items-center">
                    <Box className="w-8 h-8 mr-3 flex items-center justify-center">
                      <img src={danhsachcuahangIcon} alt="Danh sách cửa hàng" className="w-6 h-6 object-contain icon-brand-blue" />
                    </Box>
                    <Box>
                      <p className="text-sm font-medium text-brand-blue">Danh sách cửa hàng</p>
                      <p className="text-xs text-gray-500">Vị trí và thông tin cửa hàng</p>
                    </Box>
                  </Box>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Box>

                {/* Tạo icon App trên màn hình chính */}
                <Box className="flex items-center justify-between p-4 border-b border-gray-200">
                  <Box className="flex items-center">
                    <Box className="w-8 h-8 mr-3 flex items-center justify-center">
                      <img src={taoiconappIcon} alt="Tạo icon App" className="w-6 h-6 object-contain icon-brand-blue" />
                    </Box>
                    <Box>
                      <p className="text-sm font-medium text-brand-blue">Tạo icon App trên màn hình chính</p>
                      <p className="text-xs text-gray-500">Dễ dàng truy cập Mini App hơn</p>
                    </Box>
                  </Box>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Box>

                {/* Điều khoản và hỗi đáp */}
                <Box
                  className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => navigate('/terms')}
                >
                  <Box className="flex items-center">
                    <Box className="w-8 h-8 mr-3 flex items-center justify-center">
                      <img src={dieukhoaIcon} alt="Điều khoản" className="w-6 h-6 object-contain icon-brand-blue" />
                    </Box>
                    <Box>
                      <p className="text-sm font-medium text-brand-blue">Điều khoản và hỗi đáp</p>
                      <p className="text-xs text-gray-500">Câu hỏi thường gặp</p>
                    </Box>
                  </Box>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Box>

                {/* Hỗ trợ và hỗi đáp */}
                <Box className="flex items-center justify-between p-4">
                  <Box className="flex items-center">
                    <Box className="w-8 h-8 mr-3 flex items-center justify-center">
                      <img src={hotrovahoidapIcon} alt="Hỗ trợ và hỗi đáp" className="w-6 h-6 object-contain icon-brand-blue" />
                    </Box>
                    <Box>
                      <p className="text-sm font-medium text-brand-blue">Hỗ trợ và hỗi đáp</p>
                      <p className="text-xs text-gray-500">Câu hỏi liên đến ngôi nhân viên</p>
                    </Box>
                  </Box>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* QR Code Sharing Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md p-6">
          {/* Header Text */}
          <Box className="text-center mb-6">
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Chia sẻ cửa hàng "Brand" với bạn bè để nhận điểm thưởng! QR này<br />có chứa mã giới thiệu của bạn!
            </p>
            <button className="text-sm font-medium underline text-brand-blue">
              Xem chi tiết
            </button>
          </Box>

          {/* Dashed Line */}
          <Box className="border border-dashed border-gray-800 mb-6 w-2/3 mx-auto"></Box>

          {/* QR Code */}
          <Box className="flex justify-center mb-6">
            <img src={qrCodeImage} alt="QR Code" className="w-full h-full object-contain rounded-lg" />
          </Box>

          {/* Action Buttons */}
          <Box className="grid grid-cols-3">
            {/* Sao chép */}
            <Box className="flex flex-col items-center">
              <Box className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                <img src={saochepIcon} alt="Sao chép" className="w-6 h-6 object-contain icon-brand-blue" />
              </Box>
              <span className="text-xs text-center font-medium text-brand-blue">Sao chép</span>
            </Box>

            {/* Tải xuống */}
            <Box className="flex flex-col items-center">
              <Box className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                <img src={taixuongIcon} alt="Tải xuống" className="w-6 h-6 object-contain icon-brand-blue" />
              </Box>
              <span className="text-xs text-center font-medium text-brand-blue">Tải xuống</span>
            </Box>

            {/* Chia sẻ link */}
            <Box className="flex flex-col items-center">
              <Box className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                <img src={chiaseIcon} alt="Chia sẻ link" className="w-6 h-6 object-contain icon-brand-blue" />
              </Box>
              <span className="text-xs text-center font-medium text-brand-blue">Chia sẻ link</span>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box className="px-4 mt-1">
        <Box className="flex items-center justify-center gap-2">
          <p className="text-xs text-gray-400" style={{ fontFamily: 'SVN-Helvetica Now, sans-serif' }}>
            POWERED BY
          </p>
          <img src={evotechLogo} alt="Evotech" className="h-6 object-contain opacity-60" />
        </Box>
      </Box>

      {/* Sticky Buttons */}
      <StickyButtons />
    </Page>
  );
}

export default AccountPage;
