import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Products from "./components/Product/Products";
import ProductDetails from "./components/Product/areas/ProductDetails";
import Blogs from "./components/Blog/Blogs";
import "./App.css";
import BlogDetails from "./components/Blog/areas/BlogDetails";
import Header from "./Header";
import Cart from "./components/Cart/Cart";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Account from "./components/Account/Account";
import Order from "./components/Order/Order";
import Wishlist from "./components/Wishlist/Wishlist";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <Router>
      <Header />
      <main className="fix">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
