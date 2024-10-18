//ProductList.jsx
//ProductList.jsx
//ProductList.jsx
//ProductList.jsx
// ProductList.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductForm from './ProductForm';

const ProductList = ({ products, setProducts }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? product : p
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mt-4">
      <ProductForm onSubmit={editingProduct ? editProduct : addProduct} product={editingProduct} />
      {products.map((product) => (
        <div key={product.id} className="border p-2 mb-2">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button className="btn btn-warning" onClick={() => setEditingProduct(product)}>Editar</button>
          <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default ProductList;
