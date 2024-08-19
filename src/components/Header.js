import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white py-3">
            <div className="container">
                <h1 className="mb-0">E-Commerce App</h1>
                <nav>
                    <Link className="text-white mx-2" to="/">Home</Link>|
                    <Link className="text-white mx-2" to="/products">Products</Link>|
                    <Link className="text-white mx-2" to="/cart">Cart</Link>|
                    <Link className="text-white mx-2" to="/checkout">Checkout</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
