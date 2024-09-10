import React from 'react';

import { Background } from './components/background';
import { sampleBooks } from './components/bookData';
import { BookItem } from './components/bookItem';
import { Header } from './components/header';

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/bookSlice';

function Home() {
    const dispatch = useDispatch();

    return (
        <>
        <Background />
        <Header />
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
