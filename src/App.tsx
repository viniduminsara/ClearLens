import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Wishlist from "./pages/Wishlist.tsx";
import Cart from "./pages/Cart.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/product/id' element={<ProductDetails/>}/>
                <Route path='/wishlist' element={<Wishlist/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
