import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./features/cart";
import Product from "./features/product/Product";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
