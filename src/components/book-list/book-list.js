import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../actions';
import { compose } from '../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.scss';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;

    booksRequested();                    // loading new data (resetting state) after returning back to the books page
    // 1. receive data
    // const data = bookstoreService.getBooks();     // when there is no asynchronity
    
    // 2. dispacth action to store
    // booksLoaded(data);                            // when there is no asynchronity
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) return <Spinner />
    if (error) return <ErrorIndicator />;

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {    // the same as: const mapStateToProps = ( state ) =>
  return { books, loading, error };                         //                  return { books: state.books }; };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch({
//                 type: 'BOOKS_LOADED',
//                 payload: newBooks
//             });
//         }
//     };
// }
// shorter version: 
const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

