import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addQuestion, removeItem, removeQuestions, sortQuestions } from '../../../actions/question'
import App from '../../Templates/App'

const AppContainer = props =>
  <App {...props} />

const mapStateToProps = state =>
  (Object.assign({}, {
    question: state.question
  }))

const mapDispatchToProps = dispatch => bindActionCreators({
  add: addQuestion,
  remove: removeQuestions,
  sort: sortQuestions,
  removeItem,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
