import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Shop from './component/Shop'
import { Cart } from "./component/Cart";
import ProductDetails from './component/ProductDetails'
import { NavBar } from "./component/NavBar";
import Todo_List from "./formValidation/Todo_List";

function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route  path="/" element={ <Shop />}/>
        <Route  path="/cart" element={ <Cart />}/>
        <Route path="/Todo_List" element={<Todo_List/>}/>
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </CartProvider>
  )
}

export default App
