import { handleActions } from 'redux-actions'

import {
  add,
  remove,
  sort
} from '../actions/question'

const initialState = []

const reducer = handleActions({
  [add]: (state, action) => {
    state.push(action.payload)

    return state
  },
  [remove]: state => []
}, initialState)

export default reducer
