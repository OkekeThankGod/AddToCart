
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md">
      <h1 className="text-2xl font-bold">Shop</h1>

      
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-300 transition">Shop</Link>
        <Link to="/cart" className="hover:text-gray-300 transition">Cart</Link>
        <Link to="/Todo_List" className="hover:text-gray-300 transition">Todo_List</Link>
      </div>
    </nav>
  );
};

