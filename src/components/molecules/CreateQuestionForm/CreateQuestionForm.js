import React from 'react'
import {
  Button,
  Col,
  Form,
  Input,
  Label,
  Row
} from 'reactstrap'

const CreateQuestionForm = () =>
  <Form className="mt-3">
    <Row>
      <Col>
        <h2 className="mx-0">Create a new question</h2>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <Label for="question">Question</Label>
        <Input type="text" name="question" id="question" required />
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <Label for="question">Answer</Label>
        <Input type="textarea" name="answer" id="answer" />
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <Button color="success">Create Question</Button>
      </Col>
    </Row>
  </Form>

export default CreateQuestionForm
