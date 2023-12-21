// eslint-disable-next-line no-unused-vars
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

const TopBooks = () => {
  return (
    <>
      <div className="container py-10 ">
        {/* header */}
        <div className="text-center mb-20 max-w-[400px] mx-auto ">
          <p
            className="text-sm bg-clip-text text-transparent bg-gradient-to-r 
                  from-primary to-secondary "
          >
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque ac.
          </p>
        </div>
        {/* card */}
        <div className="">
          <div className="">{booksData}</div>
        </div>
      </div>
    </>
  );
};

export default TopBooks;
