/*

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Walter Isaacson",
    title: "Elon Musk",
    img: "./images/book1.jpg",
    id: 1,
  },
  {
    author: "Arthur C. Brooks, And Oprah",
    title: "Build the Life You Want: The Art and Science of Getting Happier",
    img: "./images/book2.jpg",
    id: 2,
  },
];

const Booklist = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  //console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

// you can pass in getSingleBook in the onClick instead of the arrow function get book id

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

function Booklist () {
    return (
        <section className='booklist'>
        console.log(book);
        const {img, title, author, id} = book;
        return <Book book={book} key={index} />;
    })}
    </section>
    );
}

the function above you can get away with the 'index' for id, 
but it is not prefered, 
it only works for lists that never change




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);

//adding a line here to test this shit

*/
