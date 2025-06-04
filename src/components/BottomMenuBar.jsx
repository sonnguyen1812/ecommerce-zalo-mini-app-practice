import { BottomNavigation } from 'zmp-ui';
import { useNavigate } from 'zmp-ui';
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

const tabs = {
  "/": {
    label: "Trang chủ",
    icon: <img src={trangChuInactive} alt="Trang chủ" className="w-6 h-6 object-contain" />,
    activeIcon: <img src={trangChuActive} alt="Trang chủ" className="w-6 h-6 object-contain" />
  },
  "/voucher": {
    label: "Ưu đãi",
    icon: <img src={uuDaiInactive} alt="Ưu đãi" className="w-6 h-6 object-contain" />,
    activeIcon: <img src={uuDaiActive} alt="Ưu đãi" className="w-6 h-6 object-contain" />
  },
  "/products": {
    label: "Sản phẩm",
    icon: <img src={sanPhamInactive} alt="Sản phẩm" className="w-6 h-6 object-contain" />,
    activeIcon: <img src={sanPhamActive} alt="Sản phẩm" className="w-6 h-6 object-contain" />
  },
  "/cart": {
    label: "Giỏ hàng",
    icon: <img src={gioHangInactive} alt="Giỏ hàng" className="w-6 h-6 object-contain" />,
    activeIcon: <img src={gioHangActive} alt="Giỏ hàng" className="w-6 h-6 object-contain" />
  },
  "/account": {
    label: "Tài khoản",
    icon: <img src={taiKhoanInactive} alt="Tài khoản" className="w-6 h-6 object-contain" />,
    activeIcon: <img src={taiKhoanActive} alt="Tài khoản" className="w-6 h-6 object-contain" />
  }
};

const BottomMenuBar = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('/');

  const handleTabChange = (path) => {
    setActiveKey(path);
    navigate(path);
  };

  return (
    <BottomNavigation
      fixed
      activeKey={activeKey}
      onChange={handleTabChange}
      className="bottom-menu-bar z-50"
    >
      {Object.keys(tabs).map((path) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path].activeIcon}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomMenuBar;
