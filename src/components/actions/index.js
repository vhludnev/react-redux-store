const booksLoaded = (newBooks) => {
  return {
    //type: 'BOOKS_LOADED',
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    //type: 'BOOKS_REQUESTED'
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksError = (error) => {
  return {
    // type: 'BOOKS_ERROR',
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchBooks
};

// export {
//   booksLoaded,
//   booksRequested,
//   booksError
// };