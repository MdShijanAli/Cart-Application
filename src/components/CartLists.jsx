import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartLists() {
  const cartItems = useSelector((state)=> state.carts)
  return (
    <div>
      {
        cartItems.map((cart=> (
          <CartItem cart={cart} key={cart.id}/>
        )))
      }
    </div>
  );
}

export default CartLists;