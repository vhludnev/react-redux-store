import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../components/actions';
import { compose } from '../../components/utils';
import Spinner from '../../components/spinner';

import './book-list.scss';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    // 1. receive data
    // const data = bookstoreService.getBooks();     // when there is no asynchronity

    // 2. dispacth action to store
    // booksLoaded(data);                // when there is no asynchronity

    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;
    if (loading) return <Spinner />

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

const mapStateToProps = ({ books, loading }) => {    // the same as: const mapStateToProps = ( state ) =>
  return { books, loading };                         //                  return { books: state.books }; };
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
  booksLoaded
};


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

