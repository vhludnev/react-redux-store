import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import './app.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  )
}

export default App;




// import { withBookstoreService } from '../hoc';

// const App = ({ bookstoreService }) => {
//   console.log(bookstoreService.getBooks());
//   return <div>App</div>;
// }

// export default withBookstoreService()(App);