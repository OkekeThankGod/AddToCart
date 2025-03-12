import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import data_product from "../assets/Assets/data";

export const CartItems = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // 🛒 Calculate total price
  const totalPrice = data_product.reduce((acc, p) => {
    return acc + (cart[p.id] ? p.new_price * cart[p.id] : 0);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">🛒 Cart Items</h1>
      
      {Object.keys(cart).length > 0 ? (
        <div className="space-y-4">
          {data_product.map((p) => {
            if (cart[p.id]) {
              return (
                <div key={p.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-4">
                    <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold">{p.name}</h2>
                      <p className="text-gray-600">Price: ${p.new_price}</p>
                      <p className="text-gray-600">Quantity: {cart[p.id]}</p>
                      <p className="font-bold">Total: ${p.new_price * cart[p.id]}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(p.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              );
            }
            return null;
          })}

          {/* 🛒 Display Grand Total */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-green-600">Grand Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Your cart is empty 🛒</p>
      )}
    </div>
  );
};
