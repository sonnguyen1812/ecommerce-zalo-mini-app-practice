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
          </AnimationRoutes>
          {/* Bottom Menu Bar - shared across all pages */}
          <BottomMenuBar />
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default Layout;
