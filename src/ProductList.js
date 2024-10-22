import "./ProductList.css";

function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="ProductContainer">
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id} className="ProductList">
            <div className="ProductItem">
              <img
                src={product.image}
                alt={product.name}
                id="product-image"
              />
              <button id="edit-product" onClick={() => onEdit(product)}>
                <iconify-icon icon="lucide:edit"></iconify-icon>
              </button>
              <h3>{product.name}</h3>
              <p>₱{product.price}</p>
              <button id="add-to-cart">Add To Cart</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductList;