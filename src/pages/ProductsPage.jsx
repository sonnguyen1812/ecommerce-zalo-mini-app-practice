import { Page, Box } from "zmp-ui";
import Header from "../components/Header";

function ProductsPage() {
  return (
    <Page className="min-h-screen pb-20" style={{ backgroundColor: '#FFFEF1' }}>
      {/* Header Section */}
      <Header />
      
      {/* Content */}
      <Box className="p-4">
        <Box className="bg-white rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Sản Phẩm</h1>
          <p className="text-gray-600">Trang sản phẩm sẽ được phát triển ở đây...</p>
        </Box>
      </Box>
    </Page>
  );
}

export default ProductsPage;
