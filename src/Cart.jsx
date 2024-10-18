
// Cart.jsx
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); 
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito esta vacio.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="btn btn-danger" onClick={clearCart}>Limpiar</button>
          <Link to={`/invoice`} state={{ cart, total }} className="btn btn-success">Pagar</Link>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
