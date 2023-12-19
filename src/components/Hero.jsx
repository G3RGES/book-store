import React, { useState } from "react";
import Book1 from "../assets/books/book2.jpg";
import Book2 from "../assets/books/book1.jpg";
import Book3 from "../assets/books/book3.jpg";
import Vector from "../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life will forever be Changed",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Book2,
    title: "Who's there",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(Book1);
  const [title, setTitle] = useState("His Life will forever be Changed");
  const [description, setDescription] = React.useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 
        flex justify-center items-center 
        dark:bg-gray-950 dark:text-white duration-200 "
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text-content-section */}
            <div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl 
                          font-bold "
              >
                {title}
                <p
                  className="bg-clip-text text-right text-transparent bg-gradient-to-b
                from-primary to-secondary  text-sm"
                >
                  by Anonymous
                </p>
              </h1>
              <p className="text-sm ">{description}</p>
              <div>
                <button
                  className="bg-gradient-to-tr
                 from-primary to-secondary rounded-full 
                 px-4 py-2 mt-4 text-white hover:scale-110 
                 duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* image-content-section */}
            <div
              className="min-h-[450px] flex justify-center
            items-center relative order-1 sm:order-2 "
            >
              <div
                className="h-[300px] sm:h-[450px] 
              overflow-hidden flex justify-center items-center"
              >
                <img src={imageId} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
