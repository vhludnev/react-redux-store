import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        onClick={dec}
        className="btn btn-primary btn-sm">DEC</button>
      <button
        onClick={inc}
        className="btn btn-primary btn-sm">INC</button>
      <button
        onClick={rnd}
        className="btn btn-primary btn-sm">RND</button>
    </div>
  );
};
//// reading from Store
const mapStateToProps = (state) => {
  return {
    counter: state
  };
};
//// updating from Store with dispatch
// const mapDispatchToProps = (dispatch) => {
  /// the same before refactoring: ///
  // return {                                   
  //  inc: () => dispatch({type: 'INC'}), 
  //  dec: () => dispatch({type: 'DEC'}),
  //  rnd: () => {
  //    const randomValue = Math.floor(Math.random()*10);
  //    dispatch(rnd(randomValue)); }
  // }

  // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  // return {
  //   inc,
  //   dec,
  //   rnd
  // }

//  return bindActionCreators(actions, dispatch);
//};

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);