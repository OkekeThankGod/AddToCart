import { Link } from "react-router-dom";
import data_product from "../assets/Assets/data";
import { ProductCard } from "./ProductCard";

export default function Shop() {
  return (
    <div className="flex flex-col-1 gap-3 py-5 px-3 rounded-full mt-20">
      <h1 className="flex text-center mb-24">Sacred Goods</h1>
      {data_product.map((product,id) =>(
      <ProductCard key={id} name={product.name} image={product.image} id={id} new_price={product.new_price} old_price={product.old_price} />
      ))}
    </div>
    
  );
}