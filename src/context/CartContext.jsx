import { createContext, useState } from "react";
import data_product from "../assets/Assets/data";

 export const CartContext = createContext();

 const getDefaultCart = () => {
   let cart = {}
   for (let i = 0; i < data_product.length + 1; i++ ) {
    cart[i] = 0;
   }
  return cart;
 };
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCart((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  };
  const removeFromCart = (itemId) => {
    setCart((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  };
  const contextValue = { data_product,cart, addToCart, removeFromCart}

console.log(cart)
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
