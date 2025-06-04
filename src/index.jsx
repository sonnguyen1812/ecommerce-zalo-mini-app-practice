import { getSystemInfo } from "zmp-sdk";
import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
} from "zmp-ui";

import HomePage from "../pages/index";
import MobileWrapper from "./MobileWrapper";

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme}>
      <SnackbarProvider>
        <ZMPRouter>
          <MobileWrapper>
            <AnimationRoutes>
              <Route path="/" element={<HomePage />}></Route>
            </AnimationRoutes>
          </MobileWrapper>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default Layout;
