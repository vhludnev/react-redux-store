import React from 'react';

import './book-list-item.scss';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage, page } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <a href={page} target="_blank" rel="noreferrer" className="book-title">{title}</a>
       {/*  <span className="book-title">{title}</span> */}
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button 
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart">
            Add to cart
        </button>
      </div>

    </div>
   );
};

export default BookListItem;