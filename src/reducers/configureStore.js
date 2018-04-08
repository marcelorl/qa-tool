import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

// import userReducer from './user'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  // user: userReducer
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
