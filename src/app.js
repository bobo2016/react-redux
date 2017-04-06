import React,  { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import RootApp from './containers/RootApp'


import DevTools from './containers/DevTools'



let node

if( __DEV__ ){
  node = (
    <div>
      <DevTools />
      <RootApp />
    </div>
  )
}

if( __PROD__ ) {
  node = <RootApp />
}

console.log(__DEV__);
console.log(__PROD__);

render(<Provider store={ store }>
        { node }
       </Provider>,document.getElementById('app'))
