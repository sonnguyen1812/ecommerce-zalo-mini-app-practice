import { Box } from 'zmp-ui';
import { useState } from 'react';

// Import SVG icons
import trangChuActive from '../static/trang-chu.svg';
import trangChuInactive from '../static/trang-chu-inactive.svg';
import uuDaiActive from '../static/uu-dai-active.svg';
import uuDaiInactive from '../static/uu-dai.svg';
import sanPhamActive from '../static/san-pham-active.svg';
import sanPhamInactive from '../static/san-pham.svg';
import gioHangActive from '../static/gio-hang-active.svg';
import gioHangInactive from '../static/gio-hang.svg';
import taiKhoanActive from '../static/tai-khoan-active.svg';
import taiKhoanInactive from '../static/tai-khoan.svg';

const BottomMenuBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    {
      id: 'home',
      label: 'Trang chủ',
      icon: (isActive) => (
        <img
          src={isActive ? trangChuActive : trangChuInactive}
          alt="Trang chủ"
          className="w-6 h-6 object-contain"
        />
      )
    },
    {
      id: 'voucher',
      label: 'Ưu đãi',
      icon: (isActive) => (
        <img
          src={isActive ? uuDaiActive : uuDaiInactive}
          alt="Ưu đãi"
          className="w-6 h-6 object-contain"
        />
      )
    },
    {
      id: 'products',
      label: 'Sản phẩm',
      icon: (isActive) => (
        <img
          src={isActive ? sanPhamActive : sanPhamInactive}
          alt="Sản phẩm"
          className="w-6 h-6 object-contain"
        />
      )
    },
    {
      id: 'cart',
      label: 'Giỏ hàng',
      icon: (isActive) => (
        <img
          src={isActive ? gioHangActive : gioHangInactive}
          alt="Giỏ hàng"
          className="w-6 h-6 object-contain"
        />
      )
    },
    {
      id: 'account',
      label: 'Tài khoản',
      icon: (isActive) => (
        <img
          src={isActive ? taiKhoanActive : taiKhoanInactive}
          alt="Tài khoản"
          className="w-6 h-6 object-contain"
        />
      )
    }
  ];

  return (
    <Box className="bottom-menu-bar bg-white border-t border-gray-200 z-40">
      <Box className="flex items-center justify-around py-2 px-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 transition-colors duration-200"
          >
            <Box className="mb-1">
              {item.icon(activeTab === item.id)}
            </Box>
            <span className={`text-xs leading-tight ${
              activeTab === item.id ? 'text-blue-600 font-medium' : 'text-gray-500'
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </Box>
    </Box>
  );
};

export default BottomMenuBar;
