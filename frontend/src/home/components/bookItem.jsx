import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList } from "../../redux/bookSlice";

export const BookItem = ({ book }) => {
    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.book.wishlistItems);

    const isWishList = wishList.some((item) => item.ISBN === book.ISBN);

    const handleAddToCart = (book) => {
        dispatch(addToCart(book));
    };

    const handleAddToWishList = () => {
        dispatch(addToWishList(book));
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
                src={book["Image-URL-M"]}
                alt={book["Book-Title"]}
                className="w-1/2 h-72 object-cover mx-auto"
            />
            <button
                className="absolute top-2 right-2"
                onClick={() => handleAddToWishList(book)}
            >
                <img
                    src={isWishList ? "/assets/red-wishlist.png" : "/assets/wishlist.png"}
                    alt="wishlist"
                    style={{ width: '40px', height: '40px' }}
                />
            </button>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book["Book-Title"]}</h3>
                <p className="text-gray-700">Author: {book["Book-Author"]}</p>
                <p className="text-gray-700">Year: {book["Year-Of-Publication"]}</p>
                <p className="text-gray-700">Publisher: {book.Publisher}</p>
                <p className="text-gray-700 font-bold pt-2 text-lg">{book.Price}đ</p>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-gray-500">ISBN: {book.ISBN}</p>
                    <button
                        className="ml-4 bg-blue-500 text-white text-lg px-3 py-1 rounded-full hover:bg-blue-700 flex items-center"
                        onClick={() => handleAddToCart(book)}
                    >
                        <img
                            src="/assets/shopping-cart.png"
                            alt="cart"
                            style={{ width: '20px', height: '20px' }}
                        />
                        <span className="ml-2">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
