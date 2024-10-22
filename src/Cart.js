import "./Cart.css";

function Cart(props) {
  return (
    <div className="Shopping">
      <img src={props.image} alt="Shopping Cart" id="cart" />
      <span class="quantity">0</span>
    </div>
  );
}

export default Cart;
