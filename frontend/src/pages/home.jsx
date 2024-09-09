import React from 'react';
import { Link } from "react-router-dom";
import { sampleBooks } from '../components/bookData';
import BookItem from '../components/bookItem';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/bookSlice';


function Home() {
    const dispatch = useDispatch();
    
    const cartItems = useSelector((state) => state.book.cartItems);
    const cartTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    
    return (
        <>
        <div className="mt-20">
            <img
                src="/assets/books.jpg"
                alt="book"
                style={{ width: '100%', height: '50%' }}
            />
            <span className="absolute bottom-56 pb-28 pl-12 font-lato font-bold text-white text-5xl">
                --Welcome to Book Haven--
            </span>
            <p className="absolute bottom-52 pb-10 m-4 text-white text-left pl-12 text-xl">
            Discover a world of stories, knowledge, and inspiration. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, we have something for every reader. Dive into your next great read today!
            </p>
        </div>
        <div className="left-0 top-0 w-full absolute bg-slate-300 h-20 flex items-center sm:px-8 justify-between">
            <div className="flex items-center">
                <Link to="/home" className="flex items-center">
                    <span className="text-black text-2xl sm:text-4xl font-pacifico">Book Haven</span>
                    <img
                        src="/assets/book-icon.png"
                        alt="icon"
                        style={{ width: '75px', height: '75px' }}
                        className="ml-4"
                    />
                </Link>
            </div>
            <div className="flex items-center ml-auto">
                <Link to="/shoppingCart" className="relative inline-block">
                    <img
                        src="/assets/cart.png"
                        alt="cart"
                        style={{ width: '50px', height: '40px' }}
                        className="mr-4"
                    />
                    <span
                        className="absolute top-2 right-6 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
                        style={{ transform: 'translate(50%, -50%)', zIndex: 1 }}
                    >
                        {cartTotalQuantity}
                    </span>
                </Link>
                <img
                    src="/assets/wishlist.png"
                    alt="wishlist"
                    style={{ width: '40px', height: '40px' }}
                />
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {sampleBooks.map((book, index) => (
            <BookItem
            key={index}
            book={book}
            handleAddToCart={() => dispatch(addToCart(book.ISBN))}
            handleRemoveFromCart={() => dispatch(removeFromCart(book))} />
        ))}
    </div>
        </>
    );
}

export default Home;
