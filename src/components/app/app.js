import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import './app.scss';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  )
}

export default App;