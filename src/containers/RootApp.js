import React, { Component } from 'react'
import { connect } from 'react-redux'

import Counter from '../components/Counter/Counter'
import { Inc, Dec} from '../components/Counter/CounterRedux'


//1. delay 2s return action
//2. return function, Action must be plain objects.
//3. redux-thunk; 定义action -> function, 接受的参数: dispatch, getState
// function Inc() {
//   return (dispatch, getState)=>{
//     setTimeout(function () {
//       return dispatch({ type: "INCREMENT"})
//     },2000)
//   }
//
//
// }
// function Dec() {
//   return { type: "DECREMENT"}
// }


//connect()  return a function
//connect()(component), return still a component
//RootApp component after connect

const mapStateToProps = ( state ) => {
  //  return {
  //    value: state
  //  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onIncrement: () => dispatch( Inc() ),
    onDecrement: () => dispatch( Dec() )
  }
}
const RootApp = connect( mapStateToProps, mapDispatchToProps)(Counter)


export default RootApp
