import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import coffee_bean from "./coffee_bean.jpg";
import { useCart } from './CartContext';
import cartImg from "./cart.svg"
import { useNavigate } from 'react-router-dom';

function Navbar({ cartItemsCount }) {
  const navigate = useNavigate();
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  
  const handleCloseCart = () => {
    setIsCartOpen(false)
  };

  function rickRoll() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }

  function cartFunction() {
    setIsCartOpen(!isCartOpen);
  }
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      const cartSection = document.querySelector('.max-w-full');
      if (cartSection) {
        cartSection.style.transform = 'translateX(0)';
      }
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [isCartOpen]);

  function incrementQuantity(item) {
    increaseQuantity(item)
  }

  function decrementQuantity(item) {
    decreaseQuantity(item)
  } 

  return (
    <>
      <nav className="bg-custom-bg-color text-white py-4 lg:px-20 md:px-20 flex justify-between items-center sticky top-0 z-10 px-2">
        <div className="flex items-center">
          <Link to="/" className="mr-6 font-semibold flex items-center sm:mr-3">
            <img src={coffee_bean} alt="Coffee Bean" className="w-8 h-8 rounded-full mr-3" />
            Coffee Shop
          </Link>
          <div>
            <Link className="md:mx-5 lg:mx-5 md:px-8 lg:px-8 py-3 rounded hover:bg-custom-bg-color-hover mx-2 px-4" to="/" >Coffee</Link>
          </div>
          <div>
            <Link className="md:mx-5 lg:mx-5 md:px-8 lg:px-8 py-3 rounded hover:bg-custom-bg-color-hover text-nowrap mx-2 px-4" to="/about-us"  >About Us</Link>
          </div>
        </div>
        <div>
          <div onClick={cartFunction} className=" relative ">
            <img className='w-8 h-8' style={{ filter: 'invert(100%)'}} src={cartImg} alt="cart" />
            {cartItems.length > 0 && (
              <span className="bg-red-500 rounded-full px-2 py-1 text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </nav>
      {isCartOpen && (
        <div className="fixed inset-0 overflow-hidden z-50 min-w-full">
          <div className="bg-black bg-opacity-50 absolute inset-0 transition-opacity" aria-hidden="true">
          </div>
          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" style={{ transform: 'translateX(100%)', transition: 'transform 0.5s' }}>
            <div className="w-screen max-w-md">
              <div className="h-full divide-y divide-gray-200 bg-white shadow-xl overflow-y-scroll">
                <div className="min-h-full flex flex-col py-6 bg-gray-50">
                  <div className="px-4 sm:px-6 flex justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                    <h2 className="text-lg text-right cursor-pointer hover:bg-gray-200 rounded p-1" onClick={handleCloseCart}>&times;</h2>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <ul className="divide-y divide-gray-200">
                      {Array.from(new Set(cartItems.map(item => item.id))).map((id) => {
                        const item = cartItems.find(item => item.id === id);
                        const quantity = cartItems.filter(item => item.id === id).length;
                        return (
                          <li key={id} className="flex py-4 justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-md" src={item.image_url} alt="" />
                              </div>
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <button className="text-right cursor-pointer hover:bg-gray-200 rounded p-1" onClick={() => incrementQuantity(item)}>+</button>
                              <div className="text-sm text-gray-500">{quantity}</div>
                              <button className="text-right cursor-pointer hover:bg-gray-200 rounded p-1" onClick={() => decrementQuantity(item)}>-</button>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              ${item.price}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-sm font-medium text-gray-900">
                      <p>Total:</p>
                      <p>${(Math.floor(cartItems.reduce((total, item) => total + item.price, 0) * 100) / 100)}</p>
                    </div>
                    <div className="mt-6">
                      <button onClick={rickRoll} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-bg-color hover:bg-custom-bg-color-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Navbar;
