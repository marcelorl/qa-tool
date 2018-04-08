import React from 'react'
import {
  Col,
  Container,
  Row
} from 'reactstrap'

import CreateQuestionForm from '../../molecules/CreateQuestionForm'

const App = () =>
  <Container>
    <Row>
      <Col sm="12" md="8">
        <CreateQuestionForm />
      </Col>
    </Row>
  </Container>

export default App
