import React from "react";
import { Link } from "react-router-dom";

function ShoppingCart({ cart = [] }) {
    return (
        <>
            <div className="mt-20">
                <img
                    src="/assets/bookstore.jpg"
                    alt="bookstore"
                    style={{ width: '100%', height: '50vh' }}
                />
            </div>
            <div className="left-0 top-0 w-full absolute bg-slate-300 h-20 flex items-center sm:px-8 justify-between">
                <div className="flex items-center">
                    <Link to="/home" className="flex items-center">
                        <span className="text-black text-2xl sm:text-4xl font-pacifico">Book Haven</span>
                        <img
                            src="/assets/book-icon.png"
                            alt="book icon"
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
            <div className="container mx-auto p-4">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full text-left bg-gray-100">
                            <th className="p-4">Thumbnail</th>
                            <th className="p-4">Product Title</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Quantity</th>
                            <th className="p-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index} className="border-y-2">
                                <td className="p-4">
                                    <img
                                        src={item["Image-URL-M"]}
                                        alt={item["Book-Title"]}
                                        className="w-24 h-32 object-cover"
                                    />
                                </td>
                                <td className="p-4">
                                    <h1 className="text-lg font-bold">{item["Book-Title"]} (HC)</h1>
                                </td>
                                <td className="p-4">
                                    <span>{item.price} ₫</span>
                                </td>
                                <td className="p-4">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        className="border p-2 text-center w-12"
                                        min="1"
                                    />
                                </td>
                                <td className="p-4">
                                    <span>{item.price * item.quantity} ₫</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ShoppingCart;
