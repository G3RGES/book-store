import React from "react";
import Book1 from "../assets/books/book1.jpg";
import Book2 from "../assets/books/book2.jpg";
import Book3 from "../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];

const BestBooks = () => {
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto  ">
            <p
              className="text-sm bg-clip-text
              text-transparent bg-gradient-to-r from-primary
              to-secondary mb-4 "
            >
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pretium quis sapien blandit rutrum.
            </p>
          </div>
          {/* //* Book Cards Section  */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          md:gap-5 place-items-center"
          >
            {booksData.map((book) => (
              <div key={book.id}>
                <div>
                  <img src={book.img} alt={book.title} />
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBooks;
