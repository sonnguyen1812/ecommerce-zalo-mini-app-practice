import { getSystemInfo } from "zmp-sdk";
import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
} from "zmp-ui";

import HomePage from "../pages/HomePage";
import VoucherPage from "../pages/VoucherPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import AccountPage from "../pages/AccountPage";
import AccountInfoPage from "../pages/AccountInfoPage";
import EditProfilePage from "../pages/EditProfilePage";
import PasswordRecoveryPage from "../pages/PasswordRecoveryPage";
import PointsPage from "../pages/PointsPage";
import UserVouchersPage from "../pages/UserVouchersPage";
import EarnPointsPage from "../pages/EarnPointsPage";
import PointsHistoryPage from "../pages/PointsHistoryPage";
import MemberBenefitsPage from "../pages/MemberBenefitsPage";
import StoreListPage from "../pages/StoreListPage";
import MapPage from "../pages/MapPage";
import TermsPage from "../pages/TermsPage";
import NotificationsPage from "../pages/NotificationsPage";
import VoucherDetailPage from "../pages/VoucherDetailPage";
import BottomMenuBar from "./BottomMenuBar";

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme}>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/voucher" element={<VoucherPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/account" element={<AccountPage />}></Route>
            <Route path="/account-info" element={<AccountInfoPage />}></Route>
            <Route path="/edit-profile" element={<EditProfilePage />}></Route>
            <Route path="/password-recovery" element={<PasswordRecoveryPage />}></Route>
            <Route path="/points" element={<PointsPage />}></Route>
            <Route path="/user-vouchers" element={<UserVouchersPage />}></Route>
            <Route path="/earn-points" element={<EarnPointsPage />}></Route>
            <Route path="/points-history" element={<PointsHistoryPage />}></Route>
            <Route path="/member-benefits" element={<MemberBenefitsPage />}></Route>
            <Route path="/store-list" element={<StoreListPage />}></Route>
            <Route path="/map" element={<MapPage />}></Route>
            <Route path="/terms" element={<TermsPage />}></Route>
            <Route path="/notifications" element={<NotificationsPage />}></Route>
            <Route path="/voucher-detail" element={<VoucherDetailPage />}></Route>
          </AnimationRoutes>
          {/* Bottom Menu Bar - shared across all pages */}
          <BottomMenuBar />
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default Layout;
