export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTIONS = 'REMOVE_QUESTIONS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SORT_QUESTIONS = 'SORT_QUESTIONS'

export const addAction = question => ({
  type: ADD_QUESTION,
  question
})

export const removeAction = () => ({
  type: REMOVE_QUESTIONS
})

export const removeItemAction = index => ({
  type: REMOVE_ITEM,
  index
})

export const sortAction = () => ({
  type: SORT_QUESTIONS
})

export const addQuestion = question =>
  dispatch => {
    dispatch(addAction(question))
  }

export const removeQuestions = () =>
  dispatch => {
    dispatch(removeAction())
  }

export const removeItem = index =>
  dispatch => {
    dispatch(removeItemAction(index))
  }

export const sortQuestions = () =>
  dispatch => {
    dispatch(sortAction())
  }
