import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import ShoppingCart from './components/shopping-cart';

const App = () => {
const [cart, setCart] = useState([]);

const addToCart = (book) => {
    setCart(prevCart => {
        const existingBook = prevCart.find(item => item.ISBN === book.ISBN);
        if (existingBook) {
            // Update the quantity of the existing book
            return prevCart.map(item =>
                item.ISBN === book.ISBN
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            // Add the new book to the cart
            return [...prevCart, { ...book, quantity: 1 }];
        }
    });
};

const cartItemCount = cart.reduce((number, item) => number + item.quantity, 0);
    
    return (
        <div className="bg-white min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home addToCart={addToCart} cartItemCount={cartItemCount} />} />
                    <Route path="/shopping-cart" element={<ShoppingCart cart={cart} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
