function Header() {
    return (
        <div className="left-0 top-0 w-full absolute bg-slate-300 h-20 flex items-center sm:px-8 justify-between">
            <div className="flex items-center">
                <span className="text-black text-2xl sm:text-4xl font-pacifico">Book Haven</span>
                <img
                    src="/assets/book-icon.png"
                    alt="icon"
                    style={{ width: '75px', height: '75px' }}
                />
            </div>
            <div className="flex items-center ml-auto">
            <div className="relative inline-block">
                <img
                    src="/assets/cart.png"
                    alt="cart"
                    style={{ width: '50px', height: '40px' }}
                    className="mr-4"
                />
                <span
                    className="absolute top-2 right-6 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
                    style={{ transform: 'translate(50%, -50%)', zIndex: '1' }}
                >
                    0
                </span>
            </div>
                <img
                    src="/assets/wishlist.png"
                    alt="wishlist"
                    style={{ width: '40px', height: '40px' }}
                />
            </div>
        </div>
    );
}

export default Header;
