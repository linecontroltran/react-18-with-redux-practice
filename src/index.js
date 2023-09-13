import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/814mI0-rkxL._AC_UL900_SR900,600_.jpg"
      alt="elon musk"
    />
  );
};

const Title = () => {
  return <h1>Elon Musk</h1>;
};

const Author = () => {
  return <h4>Walter Isaacson </h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
