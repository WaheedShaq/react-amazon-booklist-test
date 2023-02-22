import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import bookData from './components/books-data/books-data.component';
import Book from './components/book-component/book-component.jsx';

function Booklist() {
  return (
    <section className='booklist'>
      {bookData.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
