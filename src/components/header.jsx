function Header() {
    return (
        <div className="fixed left-0 top-0 w-full z-10 bg-slate-300 h-20 flex items-center sm:px-8 justify-between">
            <div className="flex items-center">
                <span className="text-black text-2xl sm:text-4xl font-pacifico">Book Haven</span>
                <img
                    src="/assets/book-icon.png"
                    alt="icon"
                    style={{ width: '75px', height: '75px' }}
                />
            </div>
            <div className="flex items-center ml-auto">
                <img
                    src="/assets/cart.png"
                    alt="cart"
                    style={{ width: '50px', height: '40px' }}
                    className="mr-4"
                />
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
