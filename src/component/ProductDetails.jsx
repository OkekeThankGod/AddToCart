import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import data_product from "../assets/Assets/data";

const ProductDetails = () => {
  const { id } = useParams(); //  Declare the  id first
  const numericId = Number(id); //  Convert the ID to a number
  const { addToCart, cart } = useContext(CartContext); // import functionality to use
  const cartItemAmount = cart[numericId] || 0; //  Use numeric ID

  console.log("Product ID:", numericId);
  console.log("Data product:", data_product);

  const product = data_product.find((p) => p.id === numericId)

  if (!product) return <h3>Product not found</h3>;

  return (
    <div className="p-5 flex">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-600">Price: ${product.new_price}</p>

      <button 
        onClick={() => addToCart(numericId)} 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default ProductDetails;
