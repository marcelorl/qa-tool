import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'

import Sidebar from '../../molecules/Sidebar'
import CreateQuestionForm from '../../molecules/CreateQuestionForm'
import QuestionsList from '../../molecules/QuestionsList'

const QATool = () =>
  <Row>
    <Col sm="12" md="4">
      <Sidebar />
    </Col>
    <Col sm="12" md="8" className="border-left">
      <QuestionsList />
      <CreateQuestionForm />
    </Col>
  </Row>

export default QATool
