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
        <Link to="/" className="mr-4 hover:bg-custom-bg-color-hover">Coffee</Link>
        <Link to="/about-us" className="mr-4 hover:bg-custom-bg-color-hover">About Us</Link>
      </div>
      <div>
        <Link to="/cart" className="font-semibold relative hover:bg-custom-bg-color-hover">
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
