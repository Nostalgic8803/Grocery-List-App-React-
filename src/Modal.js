import "./Modal.css";
import { useState, useEffect } from "react";

function Modal({
  onClose,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
  product,
}) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    brand: "",
    price: "",
    category: "",
    store: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      onEditProduct(formData);
    } else {
      onAddProduct({ ...formData, id: Date.now() });
    }
  };

  const handleDelete = () => {
    onDeleteProduct(formData.id);
    onClose(); // Close the modal after deletion
  };

  return (
    <div className="Modal">
      <div className="ModalContent">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{product ? "Edit Product" : "Add Product"}</h2>
        <form id="productForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">-- Please choose a category --</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="snacks">Snacks</option>
              <option value="beverages">Beverages</option>
              <option value="meat">Meat</option>
              <option value="seafood">Seafood</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="store">Store:</label>
            <input
              type="text"
              id="store"
              name="store"
              value={formData.store}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImage">Product Image:</label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="EditBtns">
            <button type="submit" id="submit-btn">
              Submit
            </button>
            {product && (
              <button type="button" id="delete-btn" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
