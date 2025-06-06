import { Page, Box, useNavigate } from "zmp-ui";
import { useState } from "react";
import taiKhoanIcon from "../static/tai-khoan.svg";
import editIcon2 from "../static/edit-icon-2.svg";
import updateSuccessfully from "../static/update-successfully.png";

function EditProfilePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [formData] = useState({
    fullName: "Nguyễn Văn Tâm",
    birthDate: "02/03/1992",
    address: "Số 12 Đường 8th ave, Sunrise I, KDT The Manor, Nguyễn Xiển, Hoàng Mai, Hà Nội",
    email: "tom.cyberad@gmail.com"
  });

  const [modalFormData, setModalFormData] = useState({
    fullName: "",
    birthDate: "",
    email: "",
    address: "",
    city: "Tỉnh(Thành phố)",
    district: "Quận(Huyện)",
    ward: "Phường(Xã)"
  });

  const [passwordFormData, setPasswordFormData] = useState({
    fullName: "",
    birthDate: ""
  });

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSaveClick = () => {
    // Handle save logic here
    console.log("Cập nhật thông tin cá nhân");
    // Navigate back after saving
    navigate(-1);
  };

  const handlePasswordClick = () => {
    setShowPasswordModal(true); // Show password modal instead of navigate
  };

  const handleUpdateClick = () => {
    setShowModal(true); // Show modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  const handleModalInputChange = (field, value) => {
    setModalFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleModalSubmit = () => {
    // Handle form submission
    console.log("Cập nhật thông tin:", modalFormData);
    setShowModal(false);
    // Show success modal
    setShowSuccessModal(true);
    // You can add API call here
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
  };

  const handlePasswordInputChange = (field, value) => {
    setPasswordFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordSubmit = () => {
    // Handle password form submission
    console.log("Lấy mật khẩu:", passwordFormData);
    setShowPasswordModal(false);
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
          {/* User Info */}
          <Box className="flex items-center justify-between pb-4">
            <Box className="flex items-center">
              {/* Avatar */}
              <Box className="flex items-center justify-center mr-4">
                <img src={taiKhoanIcon} alt="Avatar" className="w-16 h-16 icon-brand-blue" />
              </Box>
              {/* User Details */}
              <Box>
                <h3 className="text-lg font-bold text-brand-blue cursor-pointer" >Nguyễn Trí Tường</h3>
                <p className="text-sm text-gray-600 cursor-pointer" >Thành viên vàng</p>
              </Box>
            </Box>
            {/* Edit Icon - Right aligned */}
            <Box className="cursor-pointer" >
              <img src={editIcon2} alt="Edit" className="w-5 h-5 object-contain" />
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
                <span className="text-sm text-brand-blue font-medium">{formData.fullName}</span>
              </Box>
            </Box>

            {/* Ngày sinh */}
            <Box>
              <Box className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Ngày sinh</label>
                <span className="text-sm text-brand-blue font-medium">{formData.birthDate}</span>
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
                <span className="text-sm text-brand-blue font-medium">{formData.email}</span>
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
                Lấy mật khẩu cho tài khoản của bạn để đăng nhập vào nền tảng webapp của chúng tôi tại <a href="https://www.youtube.com/" className="text-brand-blue underline">shop.evotech.vn</a>
              </p>
            </Box>
            <svg className="w-5 h-5 text-gray-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Box>
        </Box>
      </Box>

      {/* Modal */}
      {showModal && (
        <Box className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <Box
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          ></Box>

          {/* Modal Content */}
          <Box className="relative bg-white rounded-2xl p-6 w-full max-w-sm mx-auto z-10">
            {/* Modal Header */}
            <Box className="text-center mb-6">
              <h2 className="text-xl font-bold text-brand-blue mb-3">Thông tin cơ bản</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hãy cập nhật ngay thông tin của bạn để được ưu tiên chăm sóc và tận hưởng trọn vẹn các đặc quyền dành riêng cho thành viên!
              </p>
            </Box>

            {/* Form Fields */}
            <Box className="space-y-4 mb-6">
              {/* Họ tên */}
              <input
                type="text"
                placeholder="Họ tên"
                value={modalFormData.fullName}
                onChange={(e) => handleModalInputChange('fullName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm"
              />

              {/* Ngày sinh nhật */}
              <input
                type="text"
                placeholder="Ngày sinh nhật"
                value={modalFormData.birthDate}
                onChange={(e) => handleModalInputChange('birthDate', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={modalFormData.email}
                onChange={(e) => handleModalInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm"
              />

              {/* Địa chỉ */}
              <input
                type="text"
                placeholder="Địa chỉ"
                value={modalFormData.address}
                onChange={(e) => handleModalInputChange('address', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm"
              />

              {/* City and District Row */}
              <Box className="flex space-x-3">
                <select
                  value={modalFormData.city}
                  onChange={(e) => handleModalInputChange('city', e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm bg-white"
                >
                  <option value="Tỉnh(Thành phố)">Tỉnh(Thành phố)</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>

                <select
                  value={modalFormData.district}
                  onChange={(e) => handleModalInputChange('district', e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm bg-white"
                >
                  <option value="Quận(Huyện)">Quận(Huyện)</option>
                  <option value="Quận 1">Quận 1</option>
                  <option value="Quận 2">Quận 2</option>
                  <option value="Quận 3">Quận 3</option>
                </select>
              </Box>

              {/* Ward */}
              <select
                value={modalFormData.ward}
                onChange={(e) => handleModalInputChange('ward', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm bg-white"
              >
                <option value="Phường(Xã)">Phường(Xã)</option>
                <option value="Phường 1">Phường 1</option>
                <option value="Phường 2">Phường 2</option>
                <option value="Phường 3">Phường 3</option>
              </select>
            </Box>

            {/* Submit Button */}
            <button
              onClick={handleModalSubmit}
              className="w-full bg-brand-blue text-white py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Cập nhật thông tin cá nhân
            </button>
          </Box>
        </Box>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <Box className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <Box
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCloseSuccessModal}
          ></Box>

          {/* Success Modal Content */}
          <Box className="relative w-full px-4">
            {/* Modal Card */}
            <Box className="bg-white rounded-2xl p-6 w-full max-w-xs mx-auto text-center">
              {/* Success Image */}
              <Box className="mb-8 flex justify-center">
                <img
                  src={updateSuccessfully}
                  alt="Update Successfully"
                  className="w-32 h-32 object-contain"
                />
              </Box>

              {/* Success Message */}
              <Box className="mb-8">
                <h2 className="text-xl font-bold text-brand-blue mb-4">Cập nhật thông tin thành công</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bạn đã cập nhật thông tin của bạn đã được cập. Hãy tận hưởng trọn vẹn các đặc quyền dành riêng cho thành viên!
                </p>
              </Box>
            </Box>

            {/* Close Button - Outside Modal */}
            <Box className="flex justify-center mt-6">
              <button
                onClick={handleCloseSuccessModal}
                className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </Box>
          </Box>
        </Box>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <Box className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <Box
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleClosePasswordModal}
          ></Box>

          {/* Password Modal Content */}
          <Box className="relative bg-white rounded-2xl p-6 w-full max-w-sm mx-auto z-10">
            {/* Modal Header */}
            <Box className="text-center mb-6">
              <h2 className="text-xl font-bold text-brand-blue mb-3">Lấy mật khẩu</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lấy mật khẩu cho tài khoản của bạn để đăng nhập vào nền tảng webapp của chúng tôi tại địa chỉ{' '}
                <a href="https://shop.evotech.vn" className="text-brand-blue underline">
                  shop.evotech.vn
                </a>
              </p>
            </Box>

            {/* Form Fields */}
            <Box className="space-y-4 mb-6">
              {/* Họ tên */}
              <input
                type="text"
                placeholder="Họ tên"
                value={passwordFormData.fullName}
                onChange={(e) => handlePasswordInputChange('fullName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm"
              />

              {/* Ngày sinh nhật */}
              <input
                type="text"
                placeholder="Ngày sinh nhật"
                value={passwordFormData.birthDate}
                onChange={(e) => handlePasswordInputChange('birthDate', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm"
              />
            </Box>

            {/* Submit Button */}
            <button
              onClick={handlePasswordSubmit}
              className="w-full bg-brand-blue text-white py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Xác nhận
            </button>
          </Box>
        </Box>
      )}
    </Page>
  );
}

export default EditProfilePage;
