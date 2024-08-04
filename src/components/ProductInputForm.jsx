import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/products/actions";

function ProductInputForm() {
  const dispatch = useDispatch()
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleChangeProductName = (e) => {
    setProductName(e.target.value)
  }
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleChangeImage = (e) => {
    setImage(e.target.value)
  }
  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleChangeQty = (e) => {
    setQuantity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productData = {
      title: productName,
      category,
      image,
      price,
      qty: quantity
    }
    dispatch(add(productData))
    setProductName('')
    setCategory('')
    setImage('')
    setPrice('')
    setQuantity('')
  }


  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input value={productName} onChange={handleChangeProductName} className="addProductInput" id="lws-inputName" type="text" required />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input value={category} onChange={handleChangeCategory} className="addProductInput" id="lws-inputCategory" type="text" required />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input value={image} onChange={handleChangeImage} className="addProductInput" id="lws-inputImage" type="text" required />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input value={price} onChange={handleChangePrice} className="addProductInput" type="number" id="lws-inputPrice" required />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input value={quantity} onChange={handleChangeQty} className="addProductInput" type="number" id="lws-inputQuantity" required />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductInputForm;