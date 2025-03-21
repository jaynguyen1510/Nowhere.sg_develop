import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Collection from './pages/Collection';
import PlaceOrder from './pages/PlaceOrder';
import About from './pages/About';
import Contact from './pages/Contact';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const App = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Navbar />
            <SearchBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:productId" element={<Products />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
