import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const author = "Walter Isaacson";
const title = "Elon Musk";
const img = "./images/book1.jpg";

//paramters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
//arguments
someFunc("job", "developer");

const Booklist = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book author={author} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
