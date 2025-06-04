import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Products from "./components/Product/Products";
import ProductDetails from "./components/Product/areas/ProductDetails";
import Blogs from "./components/Blog/Blogs";
import "./App.css"; // Assuming you have some global styles
import BlogDetails from "./components/Blog/areas/BlogDetails";
import Header from "./Header";

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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
