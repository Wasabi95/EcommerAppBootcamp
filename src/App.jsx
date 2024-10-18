

// App.jsx
import { useState, } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductForm from './ProductForm';
import Cart from './Cart';
import Invoice from './Invoice'; 

const App = () => {
  const [cart, setCart] = useState(() => {
   
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ProductForm onSubmit={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/invoice" element={<Invoice cart={cart} />} /> 
      </Routes>
    </Router>
  );
};

export default App;
