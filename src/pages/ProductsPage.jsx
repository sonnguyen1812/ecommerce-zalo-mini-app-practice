import { Page, Box } from "zmp-ui";
import StickyButtons from "../components/StickyButtons";

function ProductsPage() {
  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header - chữ "Sản phẩm" */}
      <Box className="px-4 pt-6 pb-3" style={{ backgroundColor: '#FFFEF1' }}>
        <h1 className="text-2xl font-bold text-gray-800">Sản phẩm</h1>
      </Box>

      {/* Content Section - giống layout trang chủ */}
      <Box className="mx-4 mt-4 mb-6">
        <Box className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          {/* Nội dung trang sản phẩm sẽ được phát triển ở đây */}
        </Box>
      </Box>

      {/* Sticky Buttons - giống trang chủ */}
      <StickyButtons />
    </Page>
  );
}

export default ProductsPage;
