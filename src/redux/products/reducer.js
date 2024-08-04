import { ADD } from "./actionTypes";
import initialState from "./initialState";

const nextProductId = (products) =>{
  const nextId = products.reduce((maxId, product)=> Math.max(product.id, maxId), 0);
  return nextId + 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const {title,category, image, price, qty} = action.payload
      return [
        ...state,
        {
          id: nextProductId(state),
          title: title,
          category: category,
          image: image,
          price: price,
          qty: qty,
        }
      ]

      default:
        return state
  }
}

export default reducer