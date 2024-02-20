// CoffeePage.jsx
import React from 'react';
import { useCart } from './CartContext';



function CoffeePage({ data }) {
    
  function count(arr, targetId) {
    let count = 0;
    for (const obj of arr) {
      if (obj.id === targetId) {
        count++;
      }
    }
    return count;
  }

    const { addToCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-8 mb-4">Pick your coffee:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((product) => (
          <div key={product.id} className=" flex flex-col border border-gray-200 rounded-md p-4 shadow-md">
            <div className="relative overflow-hidden rounded-md">
              <img
                src={product.image_url}
                alt="coffee image"
                className="w-full transition-transform duration-300 transform hover:scale-125"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4" style={{ minHeight: '7rem' }}>{product.description}</p>
            <p className="text-gray-600 mb-4">{product.region}</p>
            <div className='flex flex-row justify-between'>
            <p className="text-gray-600 mb-4">{product.weight} g</p>
            <p className=" mb-4 text-x1">${product.price}</p>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className="bg-custom-bg-color hover:bg-custom-bg-color-hover text-white font-semibold px-4 py-2 rounded-md  justify-self-end"
            >
              Add to Cart ({count(cartItems, product.id)})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeePage;
