import { Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound.js";
import Policy from "./components/Policy";
import Register from './components/Auth/Register.js';
import Login from './components/Auth/Login.js';
import Dashboard from './components/client/Dashboard.js';
import PrivateRoute from './components/Routes/PrivateRoute.js';
import ForgetPassword from './components/Auth/ForgetPassword.js';
import AdminRoute from './components/Routes/AdminRoute.js';
import AdminDashboard from './components/Admin/AdminDashboard.js';
import CreateCategory from './components/Admin/CreateCategory.js';
import CreateProduct from './components/Admin/CreateProduct.js';
import Users from './components/Admin/Users.js';
import Orders from './components/client/Orders.js';
import Profile from './components/client/Profile.js';
import Products from './components/Admin/Product.js';
import UpdateProduct from './components/Admin/UpdateProduct.js';
import Search from './Search.js';
import ProductDetails from './components/ProductDetails.js';
import Categories from './components/Categories.js';
import CategoryProduct from './components/CategoryProduct.js';
import CartPage from './components/CartPage.js';
import AdminOrders from './components/Admin/AdminOrders.js';


function App() {
  return (
    <div>
      <Routes>

        {/*===========================for users========================================== */}
        <Route path="/dashboard" element={<PrivateRoute />} >
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders/>} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        {/*===========================for admin==============================================*/}
        <Route path="/dashboard" element={<AdminRoute />} >
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>

        {/*==================Normal pages========================*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
