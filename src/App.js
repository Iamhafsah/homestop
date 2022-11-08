import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './features/cart';
import Product from './features/product/Product';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
