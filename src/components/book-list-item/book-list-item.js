import React, { Fragment } from 'react';

import './book-list-item.scss';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;

  return (
      <Fragment>
          <span>{title}</span>
          <span>{author}</span>
          <span>{price}</span>
          <span>{coverImage}</span>
      </Fragment>
   );
}

export default BookListItem;