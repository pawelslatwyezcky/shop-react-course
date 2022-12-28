// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
// import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  // const { cartsItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const navigation = useNavigate();
  const goToCheckOutHandler = () => {
    navigation("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-cart-message">Your Cart is empty</span>
        )}
      </div>
      <Button style={{ padding: 0 }} onClick={goToCheckOutHandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
