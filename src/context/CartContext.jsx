import React, { Children, createContext, useState } from 'react'
import data_product from '../assets/Assets/data';

export const CartContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for( let i = 0; i < data_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const CartProvider = () => {
  const [cart, setCart] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCart((prev) =>  ({...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCart((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }
  const contextValue = { data_product, cart, addToCart, removeFromCart}
  return (
    <CartContext.provider value={contextValue}>
      {Children}
    </CartContext.provider>
  )
}

export default CartContext















































