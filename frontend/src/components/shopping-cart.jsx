import React from "react";
import { Link } from "react-router-dom";

function ShoppingCart({ cart = [] }) {
    return (
        <>
        <div className="mt-20">
            <img
                src="/assets/bookstore.jpg"
                alt="book"
                style={{ width: '100%', height: '50vh' }}
            />
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
                <img
                    src="/assets/wishlist.png"
                    alt="wishlist"
                    style={{ width: '40px', height: '40px' }}
                />
            </div>
        </div>
        <h1 className="text-5xl font-serif p-4">Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {cart.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={item["Image-URL-M"]}
                        alt={item["Book-Title"]}
                        style={{ width: '50%', height: '280px', position: 'relative', left: '25%' }}
                    />
                    <div className="p-4">
                        <h1 className="text-xl font-bold">{item["Book-Title"]}</h1>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default ShoppingCart;
