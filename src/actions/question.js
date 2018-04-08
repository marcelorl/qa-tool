export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTIONS = 'REMOVE_QUESTIONS'
export const SORT_QUESTIONS = 'SORT_QUESTIONS'

export const addAction = question => ({
  type: ADD_QUESTION,
  question
})

export const removeAction = () => ({
  type: REMOVE_QUESTIONS
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

export const sortQuestions = () =>
  dispatch => {
    dispatch(sortAction())
  }
