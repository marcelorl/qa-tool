import {
  ADD_QUESTION,
  REMOVE_QUESTIONS,
  REMOVE_ITEM,
  SORT_QUESTIONS
} from '../actions/question'

const initialState = [
  { answer: 'asdf', question: 'B' }, { answer: 'ASDF', question: 'b' }, { answer: 'qwerty', question: 'A' }, { answer: 'zxcv', question: 'a' }]

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

    case REMOVE_ITEM: {
      return state.filter((item, index) => {
        if (index !== action.index) {
          return true
        }
      })
    }

    case SORT_QUESTIONS: {
      const nQuestions = Array.from(state)

      return nQuestions.sort((a, b) => {
        if (b.question.toUpperCase() > a.question.toUpperCase()) {
          return -1
        }
        if (b.question.toUpperCase() < a.question.toUpperCase()) {
          return 1
        }

        return 0
      })
    }

    default:
      return state
  }
}

export default layersReducer
