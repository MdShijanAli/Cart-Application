import { useSelector } from "react-redux";
import logoImg from "../assets/images/logo.png";

function Navbar({setView}) {
  const cartItems = useSelector((state)=> state.carts)
  const handleChangeView = (value) =>{
    setView(value)
  }
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logoImg} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <p onClick={()=> handleChangeView('home')} className="navHome cursor-pointer" id="lws-home"> Home </p>
          <p onClick={()=> handleChangeView('cart')} className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cartItems?.length}</span>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;