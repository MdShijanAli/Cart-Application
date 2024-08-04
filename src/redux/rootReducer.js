import { combineReducers } from "redux";
import cartReducer from "../redux/carts/reducer";
import productReducer from "../redux/products/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer
})

export default rootReducer