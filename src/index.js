import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);
//const { dispatch } = store;   // ok to distructure if there are many dispatch-es are used in the code

//const { inc, dec, rnd } = bindActionCreators(actions, store.dispatch);

//const update = () => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <Counter 
         counter={store.getState()}
         inc={inc}
         dec={dec}
         rnd={() => {
           const value = Math.floor(Math.random()*10);
           rnd(value);
         }}
      /> */}
      <Provider store={store}>
        <App/>
      </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
  );
//};

//update();
//store.subscribe(update);                  // store.subscribe -> is used to update UI

