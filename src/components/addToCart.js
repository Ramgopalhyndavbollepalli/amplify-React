// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingProductIndex > -1) {
                // Update quantity if product already in cart
                const newCart = [...prevCart];
                newCart[existingProductIndex].quantity += product.quantity;
                return newCart;
            }
            // Add new product to cart
            return [...prevCart, { ...product, quantity: product.quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/products"
                    element={<ProductList addToCart={addToCart} />}
                />
                <Route
                    path="/products/:id"
                    element={<ProductDetail addToCart={addToCart} />}
                />
                <Route
                    path="/cart"
                    element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
                />
                <Route
                    path="/checkout"
                    element={<Checkout cartItems={cart} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
