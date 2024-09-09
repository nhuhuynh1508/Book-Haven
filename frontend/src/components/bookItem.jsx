import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bookSlice";

export default function BookItem({ book }) {
    const dispatch = useDispatch();

    const handleAddToCart = (book) => {
        dispatch(addToCart(book));
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={book["Image-URL-M"]}
                alt={book["Book-Title"]}
                style={{ width: '50%', height: '280px', position: 'relative', left: '25%' }}
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book["Book-Title"]}</h3>
                <p className="text-gray-700">Author: {book["Book-Author"]}</p>
                <p className="text-gray-700">Year: {book["Year-Of-Publication"]}</p>
                <p className="text-gray-700">Publisher: {book.Publisher}</p>
                <div className="flex items-center justify-between">
                    <p className="text-gray-500 mt-4">ISBN: {book.ISBN}</p>
                    <button
                        className="ml-4 bg-blue-500 text-white text-lg px-3 py-1 rounded-full hover:bg-blue-700 flex items-center"
                        onClick={() => handleAddToCart(book.ISBN)}
                    >
                        <img
                            src="/assets/shopping-cart.png"
                            alt="cart"
                            style={{ width: '20px', height: '20px' }}
                        />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
