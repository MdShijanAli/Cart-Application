import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleted, updated } from "../redux/carts/action";

function CartItem({ cart }) {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const { id, title, category, image, price, qty } = cart
  const [cartQty, setCartQty] = useState(qty)
  const [total, setTotal] = useState(price)

  const handleIncreaseQty = () => {
    let newQty = cartQty + 1;
      setCartQty(newQty)
      dispatch(updated(id, newQty))
  }
  const handleDecreaseQty = () => {
    if (cartQty <= 1) return;

    const newQty = cartQty - 1;
    setCartQty(newQty);
    dispatch(updated(id, newQty));
  };

  useEffect(() => {
    const totalPrice = cartQty * price;
    setTotal(totalPrice)
  }, [cartQty, price])

  const handleDeleteCartItem = (id) => {
    dispatch(deleted(id))
  }

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={image} />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{title}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>BDT <span className="lws-cartPrice">{price}</span></p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button onClick={handleIncreaseQty} className="lws-incrementQuantity">
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{cartQty}</span>
          <button onClick={handleDecreaseQty} className="lws-decrementQuantity">
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{total}</span></p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={() => handleDeleteCartItem(id)} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;