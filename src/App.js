import "./style.css";
import { useState } from "react";

import Header from "./Header";
import Cart from "./Cart";
import Category from "./Category";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import Modal from "./Modal";

function App() {
  const initialProducts = [
    { id: 1, name: "Apple", price: 50, image: "./apple.png" },
    { id: 2, name: "Orange", price: 30, image: "./orange.png" },
    { id: 3, name: "Candy", price: 40, image: "./candy.png" },
    { id: 4, name: "Pork", price: 60, image: "./pork.png" }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    setModalOpen(false);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setModalOpen(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const openModal = (product = null) => {
    setCurrentProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProduct(null);
  };

  // Filter products based on search query
  const filteredProducts = products.filter(product => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.price.toString().includes(query)
    );
  });

  return (
    <div className="Container">
      <div className="Header">
        <Header title="Grocery List" />
        <Cart image="./shopping-cart.png" />
      </div>
      <Category all="All" fruits="Fruits" snacks="Snacks" meat="Meat" grains="Grains" seafood="Seafood" vegetables="Vegetables" bakery="Bakery" beverages="Beverages" spices="Spices" />
      <SearchBar onSearch={setSearchQuery} />
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          onAddProduct={handleAddProduct}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
          product={currentProduct}
        />
      )}
      <ProductList
        products={filteredProducts}  // Show all filtered products
        onEdit={openModal}
        onDelete={handleDeleteProduct}
      />
      <AddProduct onClick={() => openModal()} />
    </div>
  );
}

export default App;