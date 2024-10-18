//Checkout.jsx
//Checkout.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, total }) => {
  return (
    <div className="container">
      <h2>Factura</h2>
      {cart.length === 0 ? (
        <p>Tu carrito esta vacio, anade productos a tu carrito.</p>
      ) : (
        <div>
          <h3>Gracias por tu compra!</h3>
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
          <h4>Total: ${total.toFixed(2)}</h4>
          <Link to="/" className="btn btn-primary">Seguir comprando</Link>
        </div>
      )}
    </div>
  );
};

Checkout.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
};

export default Checkout;
