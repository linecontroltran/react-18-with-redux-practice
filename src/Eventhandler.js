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
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    //console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>typical form</h2>
        <input
          type="text"
          name="product"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">submit</button>
        <div>
          <button onClick={handleButtonClick} type="button">
            click me
          </button>
        </div>
      </form>
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
