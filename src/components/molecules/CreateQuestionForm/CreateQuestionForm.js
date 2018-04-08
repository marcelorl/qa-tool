import React from 'react'
import {
  Form,
  Input,
  Label,
  Row
} from 'reactstrap'

const CreateQuestionForm = () =>
  <Form>
    <h1>Create a new question</h1>
    <Row>
      <Label for="question">Question</Label>
      <Input type="text" name="question" id="question" required />
    </Row>

    <Row>
      <Label for="question">Answer</Label>
      <Input type="textarea" name="answer" id="answer" />
    </Row>
  </Form>

export default CreateQuestionForm
