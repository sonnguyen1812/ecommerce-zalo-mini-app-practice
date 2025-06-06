import { Page, Box, useNavigate } from "zmp-ui";
import taiKhoanIcon from "../static/tai-khoan.svg";
import qrCodeImage from "../static/qr-code-image-sample.png";
import saochepIcon from "../static/saochep.svg";
import taixuongIcon from "../static/taixuong.svg";
import chiaseIcon from "../static/chiase.svg";
import evotechLogo from "../static/Evotech-logo.svg";

function PointsPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleUserVouchersClick = () => {
    navigate('/user-vouchers'); // Navigate to user vouchers page
  };

  const handleEarnPointsClick = () => {
    navigate('/earn-points'); // Navigate to earn points page
  };

  const handleMemberBenefitsClick = () => {
    navigate('/member-benefits'); // Navigate to member benefits page
  };

  const handlePointsHistoryClick = () => {
    navigate('/points-history'); // Navigate to points history page
  };

  const handleEditProfileClick = () => {
    navigate('/edit-profile'); // Navigate to edit profile page
  };

  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - NTT Việt Nam Rewards với back button */}
      <Box className="sticky top-0 z-20 px-4 pt-10 pb-3" style={{ backgroundColor: '#FFFEF1' }}>
        <Box className="flex items-center cursor-pointer" onClick={handleBackClick}>
          {/* Back Arrow */}
          <svg className="w-6 h-6 text-gray-800 mr-3" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1.01743 8.49998L9.03487 16" fill="#161616" />
            <path d="M9 1L1.01743 8.49998L9.03487 16" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          {/* Header Content */}
          <Box className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">NTT Việt Nam Rewards</h1>
            <Box className="flex items-center mt-1">
              <span className="text-sm text-gray-600 mr-2">Xin chào, Nguyễn Trí Tường</span>
              {/* User icon */}
              <svg className="w-4 h-4 text-brand-blue" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7552 2.2675C13.9102 1.40417 12.7052 1.08667 11.526 1.42167C11.4462 1.44729 11.362 1.45659 11.2785 1.44902C11.195 1.44144 11.1139 1.41714 11.04 1.37756C10.9661 1.33799 10.9009 1.28394 10.8483 1.21865C10.7957 1.15336 10.7568 1.07815 10.7338 0.997504C10.7109 0.916858 10.7044 0.832423 10.7148 0.749225C10.7252 0.666027 10.7522 0.585768 10.7942 0.513224C10.8363 0.44068 10.8925 0.377336 10.9595 0.326961C11.0265 0.276587 11.103 0.240212 11.1844 0.220003C12.7985 -0.239997 14.4794 0.199169 15.6485 1.39334C15.7072 1.45172 15.7537 1.52118 15.7854 1.59769C15.817 1.6742 15.8331 1.75623 15.8328 1.83902C15.8325 1.92181 15.8157 2.00371 15.7834 2.07996C15.7512 2.15621 15.7041 2.22529 15.6449 2.28319C15.5857 2.3411 15.5157 2.38667 15.4387 2.41726C15.3618 2.44785 15.2795 2.46285 15.1968 2.46139C15.114 2.45993 15.0323 2.44204 14.9565 2.40875C14.8807 2.37547 14.8123 2.32746 14.7552 2.2675ZM8.32519 1.75584C8.14686 1.45 7.62686 1.26417 7.09936 1.56667C6.57269 1.86667 6.48019 2.3975 6.65602 2.6975L8.76019 6.3075C8.80509 6.37848 8.83522 6.45777 8.84879 6.54065C8.86236 6.62352 8.85909 6.70829 8.83917 6.78987C8.81925 6.87146 8.7831 6.94819 8.73286 7.01549C8.68263 7.08279 8.61935 7.13928 8.54679 7.18157C8.47424 7.22387 8.39391 7.25112 8.3106 7.26168C8.22728 7.27224 8.14269 7.2659 8.06188 7.24304C7.98107 7.22018 7.9057 7.18127 7.84026 7.12863C7.77482 7.07599 7.72067 7.0107 7.68102 6.93667L5.57519 3.3275L4.87436 2.12417C4.69602 1.81834 4.17602 1.6325 3.64852 1.935C3.12186 2.235 3.02936 2.76584 3.20436 3.06584L6.36186 8.48C6.40322 8.55092 6.43022 8.62928 6.4413 8.71063C6.45238 8.79198 6.44732 8.87471 6.42643 8.9541C6.40554 9.0335 6.36921 9.108 6.31953 9.17335C6.26984 9.23871 6.20777 9.29364 6.13686 9.335C6.06594 9.37637 5.98757 9.40336 5.90623 9.41444C5.82488 9.42552 5.74215 9.42047 5.66276 9.39958C5.58336 9.37869 5.50886 9.34236 5.44351 9.29267C5.37815 9.24299 5.32322 9.18092 5.28186 9.11L3.87852 6.70334C3.70019 6.3975 3.18102 6.21167 2.65269 6.51417C2.12686 6.81417 2.03352 7.34417 2.20936 7.645L5.36602 13.0592C6.70769 15.3583 10.016 16.1042 12.8219 14.5008C15.6252 12.8983 16.6219 9.6975 15.2844 7.40334L13.1794 3.79417C13.001 3.48834 12.481 3.3025 11.9535 3.60417C11.4269 3.905 11.3352 4.435 11.5102 4.73584L12.9135 7.14167C12.9552 7.21302 12.9824 7.29192 12.9934 7.37383C13.0044 7.45573 12.999 7.53901 12.9776 7.61883C12.9563 7.69866 12.9192 7.77345 12.8688 7.83887C12.8183 7.9043 12.7553 7.95907 12.6835 8C11.3977 8.73334 11.0044 10.1542 11.5669 11.1192C11.6082 11.1901 11.6352 11.2685 11.6463 11.3498C11.6574 11.4311 11.6523 11.5139 11.6314 11.5933C11.6105 11.6727 11.5742 11.7472 11.5245 11.8125C11.4748 11.8779 11.4128 11.9328 11.3419 11.9742C11.2709 12.0155 11.1926 12.0425 11.1112 12.0536C11.0299 12.0647 10.9472 12.0596 10.8678 12.0387C10.7884 12.0179 10.7139 11.9815 10.6485 11.9318C10.5832 11.8822 10.5282 11.8201 10.4869 11.7492C9.60352 10.235 10.1602 8.36334 11.5394 7.26834L8.32519 1.75584ZM10.6002 3.17417L9.40602 1.1275C8.80936 0.104169 7.47019 -0.0841641 6.48019 0.482503C6.17839 0.653375 5.91847 0.889376 5.71936 1.17334C5.05269 0.439169 3.90436 0.350003 3.02852 0.850003C2.03686 1.4175 1.52602 2.66834 2.12602 3.69667L2.96102 5.12917C2.63469 5.16513 2.3191 5.26721 2.03352 5.42917C1.04102 5.99584 0.530189 7.2475 1.13019 8.27584L4.28769 13.69C6.04602 16.7067 10.1744 17.455 13.4427 15.5867C16.7127 13.7183 18.1269 9.79584 16.3652 6.77417L14.2585 3.16584C13.6619 2.1425 12.3227 1.95417 11.3327 2.52C11.041 2.68667 10.791 2.9125 10.5985 3.17417M2.67852 13.8825C2.74943 13.8411 2.8278 13.8141 2.90915 13.803C2.9905 13.7919 3.07324 13.797 3.15264 13.8179C3.23204 13.8388 3.30654 13.8751 3.3719 13.9248C3.43725 13.9745 3.49217 14.0366 3.53352 14.1075C4.22269 15.2892 5.27519 16.1825 6.57519 16.7625C6.72658 16.8301 6.84491 16.9551 6.90414 17.11C6.96337 17.2649 6.95865 17.4369 6.89102 17.5883C6.82339 17.7397 6.69839 17.8581 6.54352 17.9173C6.38864 17.9765 6.21658 17.9718 6.06519 17.9042C4.55602 17.23 3.28936 16.1708 2.45352 14.7375C2.41213 14.6666 2.38512 14.5882 2.37403 14.5069C2.36294 14.4255 2.36799 14.3428 2.38888 14.2634C2.40978 14.184 2.44611 14.1095 2.49581 14.0441C2.54551 13.9788 2.60759 13.9239 2.67852 13.8825Z" fill="#1531AD" />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* User Profile Section */}
      <Box className="mt-6 mb-6">
        <Box className="bg-white shadow-md p-6">
          {/* User Info */}
          <Box className="flex items-center pb-6">
            {/* Avatar with border */}
            <Box className="flex items-center justify-center mr-4">
              <Box className="w-16 h-16 rounded-full border-3 border-brand-blue flex items-center justify-center bg-white">
                <img src={taiKhoanIcon} alt="Avatar" className="w-10 h-10 icon-brand-blue" />
              </Box>
            </Box>
            {/* User Details */}
            <Box className="flex-1">
              <Box className="flex items-center cursor-pointer" onClick={handleEditProfileClick}>
                <h3 className="text-lg font-bold text-brand-blue mr-2">Nguyễn Trí Tường</h3>
                {/* Edit Icon */}
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47949 15.0517H3.55616C4.46283 15.0517 4.96574 15.0517 5.46158 14.8463C5.92553 14.6551 6.25845 14.3257 6.87116 13.7194L6.94199 13.6485L13.9262 6.65728C14.6132 5.9702 14.9957 5.5877 15.0453 5.02103C15.0524 4.92186 15.0524 4.81561 15.0453 4.72353C14.9901 4.16182 14.6217 3.78995 13.9616 3.1227L13.9191 3.0802C13.2249 2.38603 12.8424 2.00353 12.2687 1.95395C12.1743 1.94764 12.0797 1.94764 11.9853 1.95395C11.4045 2.00353 11.022 2.38603 10.3349 3.0802L9.19945 4.21636L9.17537 4.24045L3.35074 10.0651L3.30612 10.109C2.69695 10.7182 2.35412 11.061 2.15366 11.5448C1.94824 12.0335 1.94824 12.5364 1.94824 13.4431V14.5198C1.94824 14.8102 2.18908 15.0517 2.47949 15.0517ZM9.55574 5.34686L4.09449 10.8152C3.50658 11.396 3.24449 11.6652 3.12408 11.9556C3.00366 12.246 3.00366 12.6498 3.00366 13.4431V13.9885H3.54908C4.34949 13.9885 4.74616 13.9885 5.05074 13.8681C5.33408 13.7477 5.61033 13.4785 6.15574 12.926L11.6453 7.43645L9.55574 5.34686ZM10.3066 4.59603L12.3962 6.68561L13.1682 5.91353C13.6499 5.43186 13.9687 5.11311 13.9828 4.91478V4.82978C13.9616 4.62436 13.6428 4.30561 13.1612 3.82395C12.6795 3.34228 12.3607 3.02353 12.1695 3.00228H12.0703C11.8748 3.01645 11.583 3.31182 11.1006 3.80128L11.0787 3.82324L10.3066 4.59603Z" fill="#797979" />
                </svg>
              </Box>
              <p className="text-sm text-gray-600 cursor-pointer" onClick={handleEditProfileClick}>Thành viên vàng</p>
            </Box>
          </Box>

          {/* Points card */}
          <Box className="rounded-2xl shadow-md p-6 text-white text-center points-card-responsive" style={{ background: 'radial-gradient(ellipse 70% 40% at center, #018CD0 7%, #01476A 75%)' }}>
            {/* Points Number */}
            <h2 className="text-5xl font-bold mb-2">1000</h2>

            {/* Points Label */}
            <p className="text-lg mb-6">Star</p>

            {/* Action Button */}
            <Box className="mb-6">
              <button className="bg-white text-brand-blue px-4 py-2 rounded-full text-xs font-medium max-w-xs mx-auto leading-tight">
                Dùng Star để đổi lấy Ưu đãi hoặc quà tặng tại NTT
              </button>
            </Box>

            {/* Points Description */}
            <p className="text-sm leading-relaxed max-w-sm mx-auto">
              Chi tiêu thêm 1,540,333 vnđ để đạt hạng Thành viên Kim Cương và
              mở khóa nhiều đặc quyền hấp dẫn!
            </p>
          </Box>
        </Box>
      </Box>

      {/* Star Features Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md p-6">
          {/* Features Grid */}
          <Box className="grid grid-cols-4 gap-4">
            {/* Ưu đãi của bạn */}
            <Box className="flex flex-col items-center cursor-pointer" onClick={handleUserVouchersClick}>
              <Box className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.6252 17.7084C27.6252 15.7534 29.2118 14.1667 31.1668 14.1667V12.75C31.1668 7.08335 29.7502 5.66669 24.0835 5.66669H9.91683C4.25016 5.66669 2.8335 7.08335 2.8335 12.75V13.4584C4.7885 13.4584 6.37516 15.045 6.37516 17C6.37516 18.955 4.7885 20.5417 2.8335 20.5417V21.25C2.8335 26.9167 4.25016 28.3334 9.91683 28.3334H24.0835C29.7502 28.3334 31.1668 26.9167 31.1668 21.25C29.2118 21.25 27.6252 19.6634 27.6252 17.7084Z" stroke="#1531AD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.75 20.8958L21.25 12.3958" stroke="#1531AD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.2421 20.8958H21.2548" stroke="#1531AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.7421 13.1041H12.7548" stroke="#1531AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Box>
              <span className="text-xs text-center text-brand-blue font-medium leading-tight">Ưu đãi<br />của bạn</span>
            </Box>

            {/* Cách kiếm điểm */}
            <Box className="flex flex-col items-center cursor-pointer" onClick={handleEarnPointsClick}>
              <Box className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9999 33.6004C12.4799 33.6004 6.3999 27.5204 6.3999 20.0004C6.3999 12.4804 12.4799 6.40039 19.9999 6.40039C27.5199 6.40039 33.5999 12.4804 33.5999 20.0004C33.5999 27.5204 27.5199 33.6004 19.9999 33.6004ZM19.9999 8.00039C13.3599 8.00039 7.9999 13.3604 7.9999 20.0004C7.9999 26.6404 13.3599 32.0004 19.9999 32.0004C26.6399 32.0004 31.9999 26.6404 31.9999 20.0004C31.9999 13.3604 26.6399 8.00039 19.9999 8.00039Z" fill="#1531AD" />
                  <path d="M12.7998 19.1992H27.1998V20.7992H12.7998V19.1992Z" fill="#1531AD" />
                  <path d="M19.2002 12.8008H20.8002V27.2008H19.2002V12.8008Z" fill="#1531AD" />
                </svg>
              </Box>
              <span className="text-xs text-center text-brand-blue font-medium leading-tight">Cách kiếm<br />điểm</span>
            </Box>

            {/* Lịch sử đổi điểm */}
            <Box className="flex flex-col items-center cursor-pointer" onClick={handlePointsHistoryClick}>
              <Box className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 4.25C9.96094 4.25 4.25 9.96094 4.25 17C4.25 24.0391 9.96094 29.75 17 29.75C24.0391 29.75 29.75 24.0391 29.75 17C29.75 9.96094 24.0391 4.25 17 4.25Z" stroke="#1531AD" stroke-width="2" stroke-miterlimit="10" />
                  <path d="M17 8.5V18.0625H23.375" stroke="#1531AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Box>
              <span className="text-xs text-center text-brand-blue font-medium leading-tight">Lịch sử<br />đổi điểm</span>
            </Box>

            {/* Quyền lợi của bạn */}
            <Box className="flex flex-col items-center cursor-pointer" onClick={handleMemberBenefitsClick}>
              <Box className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_12863_1787" fill="white">
                    <path d="M17 24.5C17.2378 24.5 17.4361 24.42 17.595 24.26C17.7539 24.1 17.8333 23.9022 17.8333 23.6667V16.1667C17.8333 15.93 17.7533 15.7322 17.5933 15.5733C17.4333 15.4144 17.235 15.3344 16.9983 15.3333C16.7617 15.3322 16.5639 15.4122 16.405 15.5733C16.2461 15.7344 16.1667 15.9322 16.1667 16.1667V23.6667C16.1667 23.9033 16.2467 24.1011 16.4067 24.26C16.5667 24.4189 16.765 24.4989 17.0017 24.5M17 12.9617C17.2911 12.9617 17.535 12.8633 17.7317 12.6667C17.9283 12.47 18.0261 12.2267 18.025 11.9367C18.0239 11.6467 17.9256 11.4028 17.73 11.205C17.5344 11.0072 17.2911 10.9089 17 10.91C16.7089 10.9111 16.4656 11.0094 16.27 11.205C16.0744 11.4006 15.9761 11.6444 15.975 11.9367C15.9739 12.2289 16.0722 12.4722 16.27 12.6667C16.4678 12.8611 16.7111 12.9594 17 12.9617ZM17.005 32C14.9306 32 12.9806 31.6067 11.155 30.82C9.32944 30.0322 7.74111 28.9633 6.39 27.6133C5.03889 26.2633 3.96944 24.6767 3.18167 22.8533C2.39389 21.03 2 19.0806 2 17.005C2 14.9294 2.39389 12.9794 3.18167 11.155C3.96833 9.32944 5.03556 7.74111 6.38333 6.39C7.73111 5.03889 9.31833 3.96944 11.145 3.18167C12.9717 2.39389 14.9217 2 16.995 2C19.0683 2 21.0183 2.39389 22.845 3.18167C24.6706 3.96833 26.2589 5.03611 27.61 6.385C28.9611 7.73389 30.0306 9.32111 30.8183 11.1467C31.6061 12.9722 32 14.9217 32 16.995C32 19.0683 31.6067 21.0183 30.82 22.845C30.0333 24.6717 28.9644 26.26 27.6133 27.61C26.2622 28.96 24.6756 30.0294 22.8533 30.8183C21.0311 31.6072 19.0817 32.0011 17.005 32ZM17 30.3333C20.7222 30.3333 23.875 29.0417 26.4583 26.4583C29.0417 23.875 30.3333 20.7222 30.3333 17C30.3333 13.2778 29.0417 10.125 26.4583 7.54167C23.875 4.95833 20.7222 3.66667 17 3.66667C13.2778 3.66667 10.125 4.95833 7.54167 7.54167C4.95833 10.125 3.66667 13.2778 3.66667 17C3.66667 20.7222 4.95833 23.875 7.54167 26.4583C10.125 29.0417 13.2778 30.3333 17 30.3333Z" />
                  </mask>
                  <path d="M17 24.5C17.2378 24.5 17.4361 24.42 17.595 24.26C17.7539 24.1 17.8333 23.9022 17.8333 23.6667V16.1667C17.8333 15.93 17.7533 15.7322 17.5933 15.5733C17.4333 15.4144 17.235 15.3344 16.9983 15.3333C16.7617 15.3322 16.5639 15.4122 16.405 15.5733C16.2461 15.7344 16.1667 15.9322 16.1667 16.1667V23.6667C16.1667 23.9033 16.2467 24.1011 16.4067 24.26C16.5667 24.4189 16.765 24.4989 17.0017 24.5M17 12.9617C17.2911 12.9617 17.535 12.8633 17.7317 12.6667C17.9283 12.47 18.0261 12.2267 18.025 11.9367C18.0239 11.6467 17.9256 11.4028 17.73 11.205C17.5344 11.0072 17.2911 10.9089 17 10.91C16.7089 10.9111 16.4656 11.0094 16.27 11.205C16.0744 11.4006 15.9761 11.6444 15.975 11.9367C15.9739 12.2289 16.0722 12.4722 16.27 12.6667C16.4678 12.8611 16.7111 12.9594 17 12.9617ZM17.005 32C14.9306 32 12.9806 31.6067 11.155 30.82C9.32944 30.0322 7.74111 28.9633 6.39 27.6133C5.03889 26.2633 3.96944 24.6767 3.18167 22.8533C2.39389 21.03 2 19.0806 2 17.005C2 14.9294 2.39389 12.9794 3.18167 11.155C3.96833 9.32944 5.03556 7.74111 6.38333 6.39C7.73111 5.03889 9.31833 3.96944 11.145 3.18167C12.9717 2.39389 14.9217 2 16.995 2C19.0683 2 21.0183 2.39389 22.845 3.18167C24.6706 3.96833 26.2589 5.03611 27.61 6.385C28.9611 7.73389 30.0306 9.32111 30.8183 11.1467C31.6061 12.9722 32 14.9217 32 16.995C32 19.0683 31.6067 21.0183 30.82 22.845C30.0333 24.6717 28.9644 26.26 27.6133 27.61C26.2622 28.96 24.6756 30.0294 22.8533 30.8183C21.0311 31.6072 19.0817 32.0011 17.005 32ZM17 30.3333C20.7222 30.3333 23.875 29.0417 26.4583 26.4583C29.0417 23.875 30.3333 20.7222 30.3333 17C30.3333 13.2778 29.0417 10.125 26.4583 7.54167C23.875 4.95833 20.7222 3.66667 17 3.66667C13.2778 3.66667 10.125 4.95833 7.54167 7.54167C4.95833 10.125 3.66667 13.2778 3.66667 17C3.66667 20.7222 4.95833 23.875 7.54167 26.4583C10.125 29.0417 13.2778 30.3333 17 30.3333Z" fill="#1531AD" />
                  <path d="M17.8333 23.6667H20.8333H17.8333ZM17 12.9617L16.9769 15.9616L16.9885 15.9617H17V12.9617ZM17.005 32L17.0066 29H17.005V32ZM11.155 30.82L9.96637 33.5745L9.96778 33.5751L11.155 30.82ZM3.18167 11.155L5.93588 12.3442L5.93675 12.3422L3.18167 11.155ZM22.845 3.18167L21.657 5.93641L21.6578 5.93675L22.845 3.18167ZM17 30.3333V27.3333V30.3333ZM17 24.5V27.5C17.9886 27.5 18.9683 27.1346 19.7237 26.3739L17.595 24.26L15.4663 22.1461C15.6577 21.9533 15.9064 21.7782 16.2049 21.6578C16.5002 21.5387 16.7773 21.5 17 21.5V24.5ZM17.595 24.26L19.7237 26.3739C20.4678 25.6246 20.8333 24.6549 20.8333 23.6667H17.8333H14.8333C14.8333 23.4417 14.8726 23.1657 14.9899 22.8735C15.1084 22.5787 15.2796 22.3341 15.4663 22.1461L17.595 24.26ZM17.8333 23.6667H20.8333V16.1667H17.8333H14.8333V23.6667H17.8333ZM17.8333 16.1667H20.8333C20.8333 15.1749 20.465 14.1971 19.7072 13.4446L17.5933 15.5733L15.4794 17.702C15.2881 17.512 15.113 17.2643 14.9922 16.9658C14.8726 16.6701 14.8333 16.3917 14.8333 16.1667H17.8333ZM17.5933 15.5733L19.7072 13.4446C18.9587 12.7013 17.9929 12.338 17.0124 12.3334L16.9983 15.3333L16.9842 18.3333C16.7633 18.3323 16.4912 18.2929 16.2024 18.1764C15.9108 18.0587 15.6674 17.8888 15.4794 17.702L17.5933 15.5733ZM16.9983 15.3333L17.0124 12.3334C16.0095 12.3287 15.0235 12.7017 14.269 13.4668L16.405 15.5733L18.541 17.6799C18.3507 17.8728 18.1008 18.0509 17.7974 18.1736C17.4969 18.2952 17.2135 18.3344 16.9842 18.3333L16.9983 15.3333ZM16.405 15.5733L14.269 13.4668C13.5346 14.2114 13.1667 15.1755 13.1667 16.1667H16.1667H19.1667C19.1667 16.3942 19.1268 16.6701 19.0101 16.9607C18.8925 17.2534 18.7234 17.4949 18.541 17.6799L16.405 15.5733ZM16.1667 16.1667H13.1667V23.6667H16.1667H19.1667V16.1667H16.1667ZM16.1667 23.6667H13.1667C13.1667 24.6585 13.535 25.6362 14.2928 26.3887L16.4067 24.26L18.5206 22.1313C18.7119 22.3213 18.887 22.569 19.0078 22.8676C19.1274 23.1632 19.1667 23.4416 19.1667 23.6667H16.1667ZM16.4067 24.26L14.2928 26.3887C15.0413 27.1321 16.0071 27.4954 16.9876 27.5L17.0017 24.5L17.0158 21.5C17.2367 21.5011 17.5088 21.5405 17.7976 21.657C18.0892 21.7746 18.3325 21.9446 18.5206 22.1313L16.4067 24.26ZM17 12.9617V15.9617C18.0454 15.9617 19.0651 15.5759 19.853 14.788L17.7317 12.6667L15.6103 10.5453C15.7806 10.3751 16.0058 10.2159 16.2794 10.1056C16.5503 9.99634 16.8023 9.96167 17 9.96167V12.9617ZM17.7317 12.6667L19.853 14.788C20.6415 13.9995 21.029 12.9767 21.025 11.9252L18.025 11.9367L15.025 11.9482C15.0243 11.7471 15.0588 11.4919 15.1688 11.2181C15.2798 10.9418 15.4401 10.7156 15.6103 10.5453L17.7317 12.6667ZM18.025 11.9367L21.025 11.9252C21.021 10.8867 20.637 9.87821 19.8633 9.0957L17.73 11.205L15.5967 13.3143C15.4312 13.1469 15.2761 12.9261 15.1681 12.6581C15.061 12.3925 15.0258 12.1445 15.025 11.9482L18.025 11.9367ZM17.73 11.205L19.8633 9.0957C19.0725 8.29595 18.0432 7.906 16.9885 7.91002L17 10.91L17.0114 13.91C16.8105 13.9107 16.5533 13.8761 16.2768 13.7644C15.9975 13.6515 15.7687 13.4882 15.5967 13.3143L17.73 11.205ZM17 10.91L16.9885 7.91002C15.952 7.91398 14.9359 8.29642 14.1487 9.08368L16.27 11.205L18.3913 13.3263C18.2199 13.4977 17.9948 13.6563 17.7232 13.7661C17.4546 13.8746 17.2056 13.9092 17.0114 13.91L17 10.91ZM16.27 11.205L14.1487 9.08368C13.3591 9.87328 12.979 10.8911 12.975 11.9253L15.975 11.9367L18.975 11.9481C18.9742 12.1402 18.9401 12.3881 18.8319 12.6564C18.7225 12.9279 18.5639 13.1538 18.3913 13.3263L16.27 11.205ZM15.975 11.9367L12.975 11.9253C12.971 12.9775 13.3589 14.0117 14.1668 14.8059L16.27 12.6667L18.3732 10.5274C18.5507 10.7019 18.7158 10.9332 18.8294 11.2143C18.9417 11.4921 18.9757 11.7492 18.975 11.9481L15.975 11.9367ZM16.27 12.6667L14.1668 14.8059C14.9451 15.5711 15.9452 15.9536 16.9769 15.9616L17 12.9617L17.0231 9.96175C17.218 9.96325 17.4629 9.99892 17.7249 10.1048C17.9891 10.2116 18.2073 10.3642 18.3732 10.5274L16.27 12.6667ZM17.005 32V29C15.3207 29 13.7765 28.683 12.3422 28.0649L11.155 30.82L9.96778 33.5751C12.1846 34.5304 14.5404 35 17.005 35V32ZM11.155 30.82L12.3436 28.0655C10.8513 27.4215 9.5827 26.5625 8.51045 25.4911L6.39 27.6133L4.26955 29.7355C5.89952 31.3641 7.80758 32.6429 9.96637 33.5745L11.155 30.82ZM6.39 27.6133L8.51045 25.4911C7.4382 24.4198 6.57914 23.1529 5.93562 21.6635L3.18167 22.8533L0.427716 24.0432C1.35975 26.2004 2.63958 28.1069 4.26955 29.7355L6.39 27.6133ZM3.18167 22.8533L5.93562 21.6635C5.31744 20.2327 5 18.6901 5 17.005H2H-1C-1 19.471 -0.529663 21.8273 0.427716 24.0432L3.18167 22.8533ZM2 17.005H5C5 15.3199 5.31744 13.7765 5.93588 12.3442L3.18167 11.155L0.427452 9.96576C-0.529663 12.1824 -1 14.539 -1 17.005H2ZM3.18167 11.155L5.93675 12.3422C6.58 10.8495 7.43782 9.58079 8.50727 8.5087L6.38333 6.39L4.25939 4.2713C2.63329 5.90143 1.35666 7.80941 0.426579 9.96778L3.18167 11.155ZM6.38333 6.39L8.50727 8.5087C9.5749 7.43843 10.8408 6.57996 12.333 5.93641L11.145 3.18167L9.95698 0.426926C7.79588 1.35893 5.88732 2.63935 4.25939 4.2713L6.38333 6.39ZM11.145 3.18167L12.333 5.93641C13.7687 5.31727 15.3126 5 16.995 5V2V-1C14.5307 -1 12.1747 -0.529487 9.95698 0.426926L11.145 3.18167ZM16.995 2V5C18.6774 5 20.2213 5.31727 21.657 5.93641L22.845 3.18167L24.033 0.426926C21.8153 -0.529488 19.4593 -1 16.995 -1V2ZM22.845 3.18167L21.6578 5.93675C23.15 6.57978 24.4184 7.43781 25.4904 8.50807L27.61 6.385L29.7296 4.26193C28.0994 2.63441 26.1911 1.35688 24.0322 0.426579L22.845 3.18167ZM27.61 6.385L25.4904 8.50807C26.5615 9.57741 27.4203 10.8439 28.0639 12.3353L30.8183 11.1467L33.5728 9.95803C32.6408 7.7983 31.3607 5.89036 29.7296 4.26193L27.61 6.385ZM30.8183 11.1467L28.0639 12.3353C28.6827 13.7695 29 15.3126 29 16.995H32H35C35 14.5307 34.5295 12.175 33.5728 9.95803L30.8183 11.1467ZM32 16.995H29C29 18.678 28.6831 20.2224 28.0646 21.6584L30.82 22.845L33.5753 24.0316C34.5303 21.8142 35 19.4587 35 16.995H32ZM30.82 22.845L28.0646 21.6584C27.4221 23.1504 26.5639 24.4177 25.4929 25.4878L27.6133 27.61L29.7338 29.7322C31.365 28.1023 32.6446 26.1929 33.5753 24.0316L30.82 22.845ZM27.6133 27.61L25.4929 25.4878C24.4194 26.5604 23.1512 27.4203 21.6615 28.0653L22.8533 30.8183L24.0452 33.5714C26.1999 32.6386 28.105 31.3596 29.7338 29.7322L27.6133 27.61ZM22.8533 30.8183L21.6615 28.0653C20.2332 28.6836 18.6919 29.0009 17.0066 29L17.005 32L17.0034 35C19.4714 35.0013 21.829 34.5309 24.0452 33.5714L22.8533 30.8183ZM17 30.3333V33.3333C21.5011 33.3333 25.4219 31.7374 28.5797 28.5797L26.4583 26.4583L24.337 24.337C22.3281 26.346 19.9434 27.3333 17 27.3333V30.3333ZM26.4583 26.4583L28.5797 28.5797C31.7374 25.4219 33.3333 21.5011 33.3333 17H30.3333H27.3333C27.3333 19.9434 26.346 22.3281 24.337 24.337L26.4583 26.4583ZM30.3333 17H33.3333C33.3333 12.4989 31.7374 8.57807 28.5797 5.42035L26.4583 7.54167L24.337 9.66299C26.346 11.6719 27.3333 14.0566 27.3333 17H30.3333ZM26.4583 7.54167L28.5797 5.42035C25.4219 2.26262 21.5011 0.666667 17 0.666667V3.66667V6.66667C19.9434 6.66667 22.3281 7.65404 24.337 9.66299L26.4583 7.54167ZM17 3.66667V0.666667C12.4989 0.666667 8.57807 2.26262 5.42035 5.42035L7.54167 7.54167L9.66299 9.66299C11.6719 7.65404 14.0566 6.66667 17 6.66667V3.66667ZM7.54167 7.54167L5.42035 5.42035C2.26262 8.57807 0.666667 12.4989 0.666667 17H3.66667L6.66667 17C6.66667 14.0566 7.65404 11.6719 9.66299 9.66299L7.54167 7.54167ZM3.66667 17H0.666667C0.666667 21.5011 2.26262 25.4219 5.42035 28.5797L7.54167 26.4583L9.66299 24.337C7.65404 22.3281 6.66667 19.9434 6.66667 17L3.66667 17ZM7.54167 26.4583L5.42035 28.5797C8.57807 31.7374 12.4989 33.3333 17 33.3333V30.3333V27.3333C14.0566 27.3333 11.6719 26.346 9.66299 24.337L7.54167 26.4583Z" fill="#1531AD" mask="url(#path-1-inside-1_12863_1787)" />
                </svg>
              </Box>
              <span className="text-xs text-center text-brand-blue font-medium leading-tight">Quyền lợi<br />của bạn</span>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Đổi Star Section */}
      <Box className="mb-6">
        <Box className="bg-white shadow-md p-6">
          {/* Header */}
          <h2 className="text-lg font-bold mb-6 text-brand-blue">Đổi Star</h2>

          {/* Offers List */}
          <Box className="space-y-4">
            {/* Offer 1 - Zalo App */}
            <Box className="relative p-4 bg-gray-50 rounded-lg star-offer-card">
              {/* x1 Badge - Top Right */}
              <Box className="absolute top-3 right-3">
                <span className="star-badge px-2 py-1 rounded text-xs font-medium">x1</span>
              </Box>

              {/* Main Content */}
              <Box className="flex items-center min-h-[80px]">
                {/* Icon */}
                <Box className="flex-shrink-0 flex items-center justify-center">
                  <Box className="star-offer-image-bg">
                    <img
                      src="/src/static/ap-dung-tren-zalo-app.png"
                      alt="Áp dụng trên Zalo app"
                      className="w-16 h-auto"
                    />
                  </Box>
                </Box>

                {/* Vertical Dotted Divider */}
                <Box className="vertical-dotted-divider"></Box>

                {/* Content */}
                <Box className="flex-1">
                  <Box className="flex items-center mb-2">
                    <span className="discount-tag px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">Mã giảm giá</span>
                  </Box>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">Giảm 20k cho đơn từ 100k</h3>

                  {/* Bottom row with text and button */}
                  <Box className="flex items-center justify-between pr-4">
                    <Box>
                      <p className="text-xs text-gray-500">Đơn tối thiểu: 20k</p>
                      <p className="text-xs text-gray-500">hết hạn trong: 10 ngày</p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Action Button - Absolute positioned to right */}
              <Box className="absolute bottom-2 right-2">
                <button className="bg-brand-blue text-white py-2 rounded-full text-xs font-medium star-offer-button">
                  Đổi ngay
                </button>
              </Box>
            </Box>

            {/* Offer 2 - Beauty Shop */}
            <Box className="relative p-4 bg-gray-50 rounded-lg star-offer-card">
              {/* x1 Badge - Top Right */}
              <Box className="absolute top-3 right-3">
                <span className="star-badge px-2 py-1 rounded text-xs font-medium">x1</span>
              </Box>

              {/* Main Content */}
              <Box className="flex items-center min-h-[80px]">
                {/* Icon */}
                <Box className="flex-shrink-0 flex items-center justify-center">
                  <Box className="star-offer-image-bg">
                    <img
                      src="/src/static/beauty-shop.png"
                      alt="Beauty Shop"
                      className="w-16 h-auto"
                    />
                  </Box>
                </Box>

                {/* Vertical Dotted Divider */}
                <Box className="vertical-dotted-divider"></Box>

                {/* Content */}
                <Box className="flex-1">
                  <Box className="flex items-center mb-2">
                    <span className="discount-tag px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">Mã giảm giá</span>
                    <span className="star-tag px-2 py-1 rounded text-xs whitespace-nowrap">100 Star</span>
                  </Box>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">Giảm 20k cho đơn từ 100k</h3>

                  {/* Bottom row with text */}
                  <Box className="flex items-center pr-4">
                    <Box>
                      <p className="text-xs text-gray-500">Đơn tối thiểu: 20k</p>
                      <p className="text-xs text-gray-500">HSD: 12/12/2024</p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Action Button - Absolute positioned to right */}
              <Box className="absolute bottom-2 right-2">
                <button className="bg-brand-blue text-white py-2 rounded-full text-xs font-medium star-offer-button">
                  Đổi voucher
                </button>
              </Box>
            </Box>

            {/* Offer 3 - Zalo App */}
            <Box className="relative p-4 bg-gray-50 rounded-lg star-offer-card">
              {/* x1 Badge - Top Right */}
              <Box className="absolute top-3 right-3">
                <span className="star-badge px-2 py-1 rounded text-xs font-medium">x1</span>
              </Box>

              {/* Main Content */}
              <Box className="flex items-center min-h-[80px]">
                {/* Icon */}
                <Box className="flex-shrink-0 flex items-center justify-center">
                  <Box className="star-offer-image-bg">
                    <img
                      src="/src/static/ap-dung-tren-zalo-app.png"
                      alt="Áp dụng trên Zalo app"
                      className="w-16 h-auto"
                    />
                  </Box>
                </Box>

                {/* Vertical Dotted Divider */}
                <Box className="vertical-dotted-divider"></Box>

                {/* Content */}
                <Box className="flex-1">
                  <Box className="flex items-center mb-2">
                    <span className="discount-tag px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">Mã giảm giá</span>
                  </Box>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm whitespace-nowrap">Giảm 20k cho đơn từ 100k</h3>

                  {/* Bottom row with text */}
                  <Box className="flex items-center pr-4">
                    <Box>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Đơn tối thiểu: 20k</p>
                      <p className="text-xs text-gray-500 whitespace-nowrap">hết hạn trong: 10 ngày</p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Action Button - Absolute positioned to right */}
              <Box className="absolute bottom-2 right-2">
                <button className="bg-brand-blue text-white py-2 rounded-full text-xs font-medium star-offer-button">
                  Đổi ngay
                </button>
              </Box>
            </Box>

            {/* Offer 4 - Zalo App */}
            <Box className="relative p-4 bg-gray-50 rounded-lg star-offer-card">
              {/* x1 Badge - Top Right */}
              <Box className="absolute top-3 right-3">
                <span className="star-badge px-2 py-1 rounded text-xs font-medium">x1</span>
              </Box>

              {/* Main Content */}
              <Box className="flex items-center min-h-[80px]">
                {/* Icon */}
                <Box className="flex-shrink-0 flex items-center justify-center">
                  <Box className="star-offer-image-bg">
                    <img
                      src="/src/static/ap-dung-tren-zalo-app.png"
                      alt="Áp dụng trên Zalo app"
                      className="w-16 h-auto"
                    />
                  </Box>
                </Box>

                {/* Vertical Dotted Divider */}
                <Box className="vertical-dotted-divider"></Box>

                {/* Content */}
                <Box className="flex-1">
                  <Box className="flex items-center mb-2">
                    <span className="discount-tag px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">Mã giảm giá</span>
                  </Box>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm whitespace-nowrap">Giảm 20k cho đơn từ 100k</h3>

                  {/* Bottom row with text */}
                  <Box className="flex items-center pr-4">
                    <Box>
                      <p className="text-xs text-gray-500 whitespace-nowrap">Đơn tối thiểu: 20k</p>
                      <p className="text-xs text-gray-500 whitespace-nowrap">hết hạn trong: 10 ngày</p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Action Button - Absolute positioned to right */}
              <Box className="absolute bottom-2 right-2">
                <button className="bg-brand-blue text-white py-2 rounded-full text-xs font-medium star-offer-button">
                  Đổi ngay
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Đổi quà mê say Section */}
      <Box>
        <Box className="bg-white shadow-md p-6">
          {/* Header */}
          <Box className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-brand-blue">Đổi quà mê say!</h2>
            <Box className="flex items-center">
              <span className="text-sm text-brand-blue mr-2">Xem tất cả</span>
              <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Box>
          </Box>

          {/* Gift Cards Grid */}
          <Box className="grid grid-cols-2 gap-4">
            {/* Gift 1 */}
            <Box className="rounded-lg p-4 gift-card-responsive" style={{ backgroundColor: '#FFFEF1' }}>
              {/* Gift Image */}
              <Box className="flex justify-center mb-4">
                <img
                  src="/src/static/present-2.png"
                  alt="Quà tặng gấu bông"
                  className="w-20 h-20 object-contain"
                />
              </Box>

              {/* Gift Info */}
              <h3 className="font-bold text-xs text-brand-blue mb-2 text-left leading-tight">Quà tặng gấu bông cho...</h3>
              <p className="text-gray-500 mb-2 text-left leading-tight" style={{ fontSize: '10px' }}>Còn 10 quà - 1/1 lượt đổi khả dụng</p>

              {/* Progress Bar */}
              <Box className="w-full bg-gray-200 rounded-full h-1 mb-3">
                <Box className="bg-brand-blue h-1 rounded-full" style={{ width: '5%' }}></Box>
              </Box>

              {/* Points */}
              <p className="text-xs text-brand-blue mb-3 whitespace-nowrap text-left">10/200 điểm</p>

              {/* Button */}
              <button className="w-full py-2 border border-brand-blue text-brand-blue rounded-full text-xs font-medium bg-transparent">
                Kiếm thêm điểm
              </button>
            </Box>

            {/* Gift 2 */}
            <Box className="rounded-lg p-4 gift-card-responsive" style={{ backgroundColor: '#FFFEF1' }}>
              {/* Gift Image */}
              <Box className="flex justify-center mb-4">
                <img
                  src="/src/static/present-2.png"
                  alt="Quà tặng gấu bông"
                  className="w-20 h-20 object-contain"
                />
              </Box>

              {/* Gift Info */}
              <h3 className="font-bold text-xs text-brand-blue mb-2 text-left leading-tight">Quà tặng gấu bông cho...</h3>
              <p className="text-gray-500 mb-2 text-left leading-tight" style={{ fontSize: '10px' }}>Còn 10 quà - 1/1 lượt đổi khả dụng</p>

              {/* Progress Bar */}
              <Box className="w-full bg-gray-200 rounded-full h-1 mb-3">
                <Box className="bg-brand-blue h-1 rounded-full" style={{ width: '100%' }}></Box>
              </Box>

              {/* Points */}
              <p className="text-xs text-brand-blue mb-3 whitespace-nowrap text-left">250/200 điểm</p>

              {/* Button */}
              <button className="w-full py-2 border border-brand-blue text-brand-blue rounded-full text-xs font-medium bg-transparent">
                Đổi quà ngay
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

export default PointsPage;
