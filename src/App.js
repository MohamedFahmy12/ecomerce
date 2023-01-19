import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Uitily/Footer";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import HomePage from "./Page/Home/HomePage";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrand from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserAllAddresPage from "./Page/User/UserAllAddresPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/allbrand" element={<AllBrand />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethod" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/orders/23" element={<AdminOrderDetalisPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
