import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { added } from "../redux/carts/action";

function ProductItem({product}) {
  const cartItems = useSelector((state)=> state.carts)
  const dispatch = useDispatch()
  const {id, title, image, category, price, qty} = product
  const [isAddedCart, setIsAddedCart] = useState(false)

  useEffect(() => {
    const isProductInCart = cartItems.some((item) => item.product_id === id);
    setIsAddedCart(isProductInCart);
  }, [cartItems, id]);

  const handleAddToCart = () => {
    const cartItem = {
      product_id: id,
      title,
      category,
      image,
      price,
      qty: 1
    }
    if(isAddedCart){
      return
    }
    dispatch(added(cartItem))
  }

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{title}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
          <p className="productQuantity">QTY <span className="lws-quantity">{qty}</span></p>
        </div>
        <button className={`lws-btnAddToCart ${isAddedCart ? 'disabled cursor-not-allowed' : ''}`} onClick={handleAddToCart}>
          {isAddedCart ? 'Added' : 'Add To Cart'}
          </button>
      </div>
    </div>
  );
}

export default ProductItem;