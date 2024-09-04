function Title() {
    return (
        <div className=" mt-20 relative">
            <img
                src="/assets/book.jpeg"
                alt="book"
                style={{ width: '100%', height: '50%' }}
                className="block top-0"
            />
            <span className="absolute bottom-12 p-12 font-lato font-bold text-white text-5xl">
                --Welcome to Book Haven--
            </span>
        </div>
    );
}

export default Title;
