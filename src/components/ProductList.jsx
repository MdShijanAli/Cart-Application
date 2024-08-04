import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductList() {
   const products = useSelector((state)=> state.products)
  return ( 
     <div className="productContainer" id="lws-productContainer">
      {
         products.length === 0 ? <h1>No Products Found</h1>
         :
         products.map(product=> (
            <ProductItem product={product} key={product.id}/>
       ))
      }      
      </div>
   );
}

export default ProductList;