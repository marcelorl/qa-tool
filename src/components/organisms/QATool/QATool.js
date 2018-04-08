import React from 'react'
import styled from 'styled-components'
import {
  Col,
  Row
} from 'reactstrap'

import Sidebar from '../../molecules/Sidebar'
import CreateQuestionForm from '../../molecules/CreateQuestionForm'
import QuestionsList from '../../molecules/QuestionsList'

const ColContent = styled(Col)`
  border-left: none;
  border-top: 1px solid #000;
  margin-top: 1rem;
  padding-top: 1rem;

  @media (min-width: 768px) {
    border-left: 1px solid #000;
    border-top: none;
    margin-top: 0;
    padding-top: 0;
  }
`

const QATool = props => {
  const { add, question, remove, sort } = props

  return (
    <Row>
      <Col sm='12' md='4'>
        <Sidebar numberOfQuestions={question.length} />
      </Col>
      <ColContent sm='12' md='8'>
        <QuestionsList list={question} remove={remove} sort={sort} />
        <CreateQuestionForm add={add} />
      </ColContent>
    </Row>
  )
}

export default QATool
