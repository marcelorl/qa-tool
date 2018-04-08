import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'

import Sidebar from '../../molecules/Sidebar'
import CreateQuestionForm from '../../molecules/CreateQuestionForm'
import QuestionsList from '../../molecules/QuestionsList'

const QATool = props => {
  const { add, question, remove, sort } = props

  return (
    <Row>
      <Col sm='12' md='4'>
        <Sidebar numberOfQuestions={question.length} />
      </Col>
      <Col sm='12' md='8' className='border-left'>
        <QuestionsList list={question} remove={remove} sort={sort} />
        <CreateQuestionForm add={add} />
      </Col>
    </Row>
  )
}

export default QATool
