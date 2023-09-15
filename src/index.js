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
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, id } = book;
        return (
          <Book
            img={img}
            title={title}
            author={author}
            key={id}
            displayValue={displayValue}
          />
        );
      })}
    </section>
  );
};

const Book = ({ img, title, author, displayValue }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author}</h4>
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


*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);

//adding a line here to test this shit
