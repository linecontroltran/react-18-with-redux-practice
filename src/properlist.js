/*

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    author: "Walter Isaacson",
    title: "Elon Musk",
    img: "./images/book1.jpg",
  },
  {
    author: "Arthur C. Brooks, And Oprah",
    title: "Build the Life You Want: The Art and Science of Getting Happier",
    img: "./images/book2.jpg",
  },
];

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
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
