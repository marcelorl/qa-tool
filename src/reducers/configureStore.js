import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import questionReducer from './question'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  question: questionReducer
})

const middlewares = applyMiddleware(
  loggerMiddleware
)

const configureStore =
  createStore(
    reducers,
    composeWithDevTools(
      middlewares
    )
  )

export default configureStore
