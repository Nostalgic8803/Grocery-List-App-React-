import "./Category.css";

function Category(props) {
  return (
    <div class="CategoryContainer">
    <div class="category">
      <button id="product-category">
        <span>{props.all}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.fruits}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.snacks}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.meat}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.grains}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.seafood}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.vegetables}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.bakery}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.beverages}</span>
      </button>
    </div>
    <div class="category">
      <button id="product-category">
        <span>{props.spices}</span>
      </button>
    </div>
  </div>
  );
}

export default Category;