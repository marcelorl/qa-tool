import {
  ADD_QUESTION,
  REMOVE_QUESTIONS,
  SORT_QUESTIONS
} from '../actions/question'

const initialState = []

const layersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION: {
      const nQuestions = Array.from(state)

      nQuestions.push(action.question)

      return nQuestions
    }

    case REMOVE_QUESTIONS: {
      return []
    }

    case SORT_QUESTIONS: {
      const nQuestions = Array.from(state)

      return nQuestions
    }

    default:
      return state
  }
}

export default layersReducer
