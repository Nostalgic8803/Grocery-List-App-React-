import "./AddProduct.css";

function AddProduct({ onClick }) {
  return (
    <div className="AddProduct">
      <button className="AddButton" id="addProductBtn" onClick={onClick}>
      <iconify-icon icon="icon-park-solid:add"></iconify-icon>
      </button>
    </div>
  );
}

export default AddProduct;
