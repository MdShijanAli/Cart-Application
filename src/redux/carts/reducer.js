import { ADDED, DELETED, UPDATED } from "./actionTypes";
import initialState from "./initialState";

const nextCartId = (carts) => {
  const nextId = carts.reduce((maxId, cart) => Math.max(cart.id, maxId), 0);
  return nextId + 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      const { product_id, title, category, image, price, qty } = action.payload
      return [
        ...state,
        {
          id: nextCartId(state),
          product_id: product_id,
          title: title,
          category: category,
          image: image,
          price: price,
          qty: qty,
        }
      ]

    case UPDATED:
      const { id, productQty } = action.payload
      return state.map((cart) => {
        if (cart.id !== id) {
          return cart
        }

        return {
          ...cart,
          qty: productQty
        }
      })

      case DELETED:
        return state.filter((cart)=> cart.id !== action.payload)

    default:
      return state
  }
}

export default reducer;