import React from 'react';
import { Link } from 'react-router-dom';
import coffee_bean from "./coffee_bean.jpg";
import { useCart } from './CartContext';
import cartImg from "./cart.svg"


function Navbar({ cartItemsCount }) {
  const { cartItems } = useCart();

  return (
    <nav className="bg-custom-bg-color text-white py-4 px-20 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <img src={coffee_bean} alt="Coffee Bean" className="w-8 h-8 rounded-full mr-3 " />
        <Link to="/" className="mr-6 font-semibold">Coffee Shop</Link>
        <div >
          <Link className="mx-10 px-8 py-3 rounded hover:bg-custom-bg-color-hover" to="/" >Coffee</Link>
        </div>
        <div >
          <Link className="mx-10 px-8 py-3 rounded hover:bg-custom-bg-color-hover" to="/about-us"  >About Us</Link>
        </div>
      </div>
      <div >
        <Link  to="/cart" className=" relative ">
          <img className='w-8 h-8' style={{ filter: 'invert(100%)'}} src={cartImg} alt="cart" />
          {cartItems.length > 0 && (
            <span className="bg-red-500 rounded-full px-2 py-1 text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
