import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const increaseQuantity = (product) => {
    setCartItems([...cartItems, product]);
  };

  const decreaseQuantity = (product) => {
    const indexToRemove = cartItems.findIndex(item => item.id === product.id)
    const newArray = [...cartItems.slice(0, indexToRemove), ...cartItems.slice(indexToRemove + 1)]
    setCartItems(newArray)
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
