import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/cart";
import Product from "./pages/product/Product";
import Layout from "./components/layout";
import WishList from "pages/wishlist";
import Checkout from "pages/checkout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Layout>
  );
}

export default App;
