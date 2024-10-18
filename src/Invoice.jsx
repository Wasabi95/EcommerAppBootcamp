//Invoie.jsx
//Invoie.jsx
//Invoie.jsx
// Invoice.jsx
//Invoie.jsx
//Invoie.jsx
//Invoie.jsx
// Invoice.jsx
// Invoice.jsx
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


const getRandomName = () => {
  const names = [
    'John Cardona', 
    'Jane Smith', 
    'Emily Fernandez', 
    'Michael Perez', 
    'Jessica Soto',
    'David Wilson', 
    'Sophia Garcia', 
    'Daniel Martinez'
  ];
  return names[Math.floor(Math.random() * names.length)];
};


const getRandomEmail = (name) => {
  const domains = ['example.com', 'mail.com', 'test.com', 'demo.com'];
  const emailName = name.toLowerCase().replace(/\s/g, '');
  return `${emailName}@${domains[Math.floor(Math.random() * domains.length)]}`;
};

const Invoice = ({ cart }) => {
  // Generate random buyer information
  const buyerInfo = {
    name: getRandomName(),
    email: getRandomEmail(getRandomName()),
  };

  return (
    <div>
      <h2>Factura</h2>
      <p>Comprador: {buyerInfo.name}</p>
      <p>Email: {buyerInfo.email}</p>
      <h3>Productos:</h3>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        ))
      )}
      <h3>Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)}</h3>
    </div>
  );
};

Invoice.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Invoice;



