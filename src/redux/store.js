

import { createStore, applyMiddleware, compose} from 'redux'
import createLogger from 'redux-logger'
import counter from  './reducer'
import middlewareDemo from './middlewareDemo'
import loggerMiddleware from './loggerMiddleware'
//applyMiddleware(middleware1, middleware2)

import thunk from 'redux-thunk'

import { reducer } from '../components/Counter/CounterRedux'
import DevTools from '../containers/DevTools'

//DevTools.instrument()
const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
)

//First use of applyMiddleware
const store = createStore( counter, enhancer)



//Second use of applyMiddleware
// const finalCreateStore = applyMiddleware( createLogger() )(createStore)
//
// const store = finalCreateStore ( counter )

export default store
