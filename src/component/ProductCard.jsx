
import { useContext } from 'react';
import {CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';
export const ProductCard = ({ id,name, image, old_price, new_price}) =>{
    const {addToCart, cart} = useContext(CartContext)
    const cartItemAmount = cart[id];
    return(
    <div>
    <h1>products</h1>
    <Link to={`/products/${id}`}>
    <img src={image} alt="" />
    </Link>
    <h3>{name}</h3>
    <p>${old_price}</p>
    <p>${new_price}</p>
    <button onClick={()=> addToCart(id)}>Add {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>

    )
};