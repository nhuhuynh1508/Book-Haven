import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/bookSlice";

export default function Cart({book}) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.book.cartItems);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="w-full text-left bg-gray-100 border-b border-gray-200">
                        <th className="p-4">Thumbnail</th>
                        <th className="p-4">Product Title</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Quantity</th>
                        <th className="p-4">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={book.ISBN} className="border-b border-gray-200">
                            <td className="p-4">
                                <img
                                    src={item["Image-URL-M"]}
                                    alt={item["Book-Title"]}
                                    className="w-32 h-40 object-cover"
                                />
                            </td>
                            <td className="p-4">
                                <h1 className="text-lg font-bold">{item["Book-Title"]}</h1>
                            </td>
                            <td className="p-4">
                                <span>{item["Price"]} ₫</span>
                            </td>
                            <td className="p-4">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    className="border p-2 text-center w-12"
                                    min="1"
                                    readOnly
                                />
                            </td>
                            <td className="p-4">
                                <span>{item["Price"] * item.quantity} ₫</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {cartItems.length > 0 && (
                <button
                    className="bg-red-500 text-white px-4 py-2 m-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            )}
        </div>
    );
}
