import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Wishlist from "./pages/Wishlist.tsx";
import Cart from "./pages/Cart.tsx";
import {AppContextProvider} from "./context/AppContext.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import {ToastProvider} from "./context/ToastContext.tsx";
import ToastContainer from "./components/ToastContainer.tsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.tsx";

function App() {

    return (
        <ToastProvider>
            <AppContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout/>}>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/signin' element={<SignIn/>}/>
                            <Route path='/signup' element={<SignUp/>}/>
                            <Route path='/products' element={<Products/>}/>
                            <Route path='/product/:productId' element={<ProductDetails/>}/>
                            <Route element={<ProtectedRoutes/>}>
                                <Route path='/wishlist' element={<Wishlist/>}/>
                                <Route path='/cart' element={<Cart/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
                <ToastContainer/>
            </AppContextProvider>
        </ToastProvider>
    )
}

export default App
