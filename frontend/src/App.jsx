import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const App = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:-[9vw]">
            <Navbar />
            <SearchBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/collection' element={<Collection/>} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/place-order' element={<Home />} />
                <Route path='/order' element={<Orders />} />
            </Routes>
            <Footer />
        </div>
    );
};
export default App;
