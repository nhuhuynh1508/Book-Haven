import React from 'react';
import { Link } from "react-router-dom";

const sampleBooks = [
    {
    "ISBN": "9780141032436",
    "Book-Title": "Le Petit Prince",
    "Book-Author": "Antoine De Saint-Expury",
    "Year-Of-Publication": "1940",
    "Publisher": "Secker & Warburg",
    "Image-URL-M": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9A8Kn0U30iAxDvB9NrdKg1QFC9tUd-gvMHQ&s"
},
{
    "ISBN": "9780061120084",
    "Book-Title": "To Kill a Mockingbird",
    "Book-Author": "Harper Lee",
    "Year-Of-Publication": "1960",
    "Publisher": "J.B. Lippincott & Co.",
    "Image-URL-M": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
},
{
    "ISBN": "9780451524935",
    "Book-Title": "The Great Gatsby",
    "Book-Author": "F. Scott Fitzgerald",
    "Year-Of-Publication": "1925",
    "Publisher": "Charles Scribner's Sons",
    "Image-URL-M": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg"
},
{
    "ISBN": "9780307269751",
    "Book-Title": "The Catcher in the Rye",
    "Book-Author": "J.D. Salinger",
    "Year-Of-Publication": "1951",
    "Publisher": "Little, Brown and Company",
    "Image-URL-M": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eef69e32497829.5686f321e1cad.jpg"
},
{
    "ISBN": "9780544003415",
    "Book-Title": "The Hobbit",
    "Book-Author": "J.R.R. Tolkien",
    "Year-Of-Publication": "1937",
    "Publisher": "George Allen & Unwin",
    "Image-URL-M": "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG"
},
{
    "ISBN": "9780679783268",
    "Book-Title": "Pride and Prejudice",
    "Book-Author": "Jane Austen",
    "Year-Of-Publication": "1813",
    "Publisher": "T. Egerton, Whitehall",
    "Image-URL-M": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrpPwNtwVg53tJUg4asRwcUrSA1qo68jvFQA&s"
},
{
    "ISBN": "9780553212419",
    "Book-Title": "Moby-Dick",
    "Book-Author": "Herman Melville",
    "Year-Of-Publication": "1851",
    "Publisher": "Harper & Brothers",
    "Image-URL-M": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cWJq7knmiO9klbysV7so7YsOyJ-CqJxwQg&s"
},
{
    "ISBN": "9780743273565",
    "Book-Title": "War and Peace",
    "Book-Author": "Leo Tolstoy",
    "Year-Of-Publication": "1869",
    "Publisher": "The Russian Messenger",
    "Image-URL-M": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iW9qa6Q7ipXaJPf-fRqPwXYdL7tSRbQeyw&s"
},
{
    "ISBN": "9780451526342",
    "Book-Title": "Brave New World",
    "Book-Author": "Aldous Huxley",
    "Year-Of-Publication": "1932",
    "Publisher": "Chatto & Windus",
    "Image-URL-M": "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"
},
{
    "ISBN": "9780142437209",
    "Book-Title": "Jane Eyre",
    "Book-Author": "Charlotte Brontë",
    "Year-Of-Publication": "1847",
    "Publisher": "Smith, Elder & Co.",
    "Image-URL-M": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyMVu4wCO4HQOlutpmDTFJUrix3bia03NVg&s"
},
{
    "ISBN": "9780140449266",
    "Book-Title": "Crime and Punishment",
    "Book-Author": "Fyodor Dostoevsky",
    "Year-Of-Publication": "1866",
    "Publisher": "The Russian Messenger",
    "Image-URL-M": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx96G5GDD20fHLBwNxTKk23UUIEvrcMloxow&s"
},
{
    "ISBN": "9798629545972",
    "Book-Title": "Sherlock Holmes",
    "Book-Author": "Arthur Conan Doyle",
    "Year-Of-Publication": "1887",
    "Publisher": "George Newnes",
    "Image-URL-M": "https://images.booksense.com/images/972/545/9798629545972.jpg"
},
];

function Home({addToCart, cartItemCount}) {
    return (
        <>
        <div className="mt-20">
            <img
                src="/assets/books.jpg"
                alt="book"
                style={{ width: '100%', height: '50%' }}
            />
            <span className="absolute bottom-56 pb-28 pl-12 font-lato font-bold text-white text-5xl">
                --Welcome to Book Haven--
            </span>
            <p className="absolute bottom-52 pb-10 m-4 text-white text-left pl-12 text-xl">
            Discover a world of stories, knowledge, and inspiration. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, we have something for every reader. Dive into your next great read today!
            </p>
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
                <Link to="/shopping-cart" className="relative inline-block">
                    <img
                        src="/assets/cart.png"
                        alt="cart"
                        style={{ width: '50px', height: '40px' }}
                        className="mr-4"
                    />
                    <span
                        className="absolute top-2 right-6 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
                        style={{ transform: 'translate(50%, -50%)', zIndex: 1 }}
                    >
                        {cartItemCount}
                    </span>
                </Link>
                <img
                    src="/assets/wishlist.png"
                    alt="wishlist"
                    style={{ width: '40px', height: '40px' }}
                />
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {sampleBooks.map((book, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                        className="ml-4 bg-blue-500 text-white text-lg px-3 py-1 rounded-full hover:bg-blue-700 flex items-ce"
                        onClick={() => addToCart(book)}
                    >
                        <img
                        src="/assets/shopping-cart.png"
                        alt="cart"
                        style={{ width: '20px', height: '20px' }}
                        ></img>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        ))}
    </div>
        </>
    );
}

export default Home;
