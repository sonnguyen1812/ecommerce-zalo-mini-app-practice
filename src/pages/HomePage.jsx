import { Page } from "zmp-ui";
import Header from "../components/Header";
import PointsSection from "../components/PointsSection";
import ProductSlider from "../components/ProductSlider";
import BrandSection from "../components/BrandSection";
import HotDealsSection from "../components/HotDealsSection";
import StickyButtons from "../components/StickyButtons";

function HomePage() {
  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header Section */}
      <Header />

      {/* Points Section */}
      <PointsSection />

      {/* Product Slider Section */}
      <ProductSlider />

      {/* Brand Section */}
      <BrandSection />

      {/* Hot Deals Section */}
      <HotDealsSection />

      {/* Sticky Buttons */}
      <StickyButtons />
    </Page>
  );
}

export default HomePage;
