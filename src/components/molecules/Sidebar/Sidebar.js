import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'

const renderNumberOfQuestions = numberOfQuestions => {
  if (numberOfQuestions) {
    return 'no questions'
  }
}

const Sidebar = ({ numberOfQuestions }) =>
  <Row>
    <Col>
      Here you can find {renderNumberOfQuestions(numberOfQuestions)}. Feel free to create your own questions!
    </Col>
  </Row>

Sidebar.defaultProps = {
  numberOfQuestions: 2
}

export default Sidebar
