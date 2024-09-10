import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addToCart(state, action) {
            const bookIndex = state.cartItems.findIndex(
                (book) => book.ISBN === action.payload.ISBN);
            if (bookIndex >= 0) {
                state.cartItems[bookIndex].quantity += 1;
            }
            else {
                const tempBook = {...action.payload, quantity: 1};
                state.cartItems.push(tempBook);
            }

            state.cartTotalQuantity += 1;
        },
        removeFromCart(state, action) {
            const bookIndex = state.cartItems.findIndex(
                (book) => book.ISBN === action.payload.ISBN);
            if (bookIndex >= 0) {
                state.cartItems[bookIndex].quantity -= 1;
                state.cartTotalQuantity -= 1;
                if (state.cartItems[bookIndex].quantity === 0) {
                    state.cartItems.splice(bookIndex, 1);
                }
            }
        },
        clearCart(state, action) {
            state.cartItems = [];
            action.cartTotalQuantity = 0;
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = bookSlice.actions;

export default bookSlice.reducer;
