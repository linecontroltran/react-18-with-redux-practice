/*

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Walter Isaacson",
  title: "Elon Musk",
  img: "./images/book1.jpg",
};

const secondBook = {
  author: "Arthur C. Brooks, And Oprah",
  title: "Build the Life You Want: The Art and Science of Getting Happier",
  img: "./images/book2.jpg",
};
//paramters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
//arguments
someFunc("job", "developer");

const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>DUMMY TEXT TESTING THIS CHILDREN PROP</p>
        <button>click meeee</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

/* i prefer this version below, 2 different ways of setting up props

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);

*/
