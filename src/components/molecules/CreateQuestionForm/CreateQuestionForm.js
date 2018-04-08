import React, { Component } from 'react'
import {
  Button,
  Col,
  Form,
  Input,
  Label,
  Row
} from 'reactstrap'

class CreateQuestionForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      answer: '',
      question: ''
    }

    this.add = this.add.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  add (e) {
    e.preventDefault()

    this.props.add(this.state)

    this.setState({
      answer: '',
      question: ''
    })
  }

  onChange (el) {
    this.setState({
      [el.target.name]: el.target.value
    })
  }

  render () {
    return (
      <Form className='mt-3' onSubmit={this.add}>
        <Row>
          <Col>
            <h2 className='mx-0'>Create a new question</h2>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col>
            <Label for='question'>Question</Label>
            <Input
              type='text'
              name='question'
              id='question'
              value={this.state.question}
              onChange={this.onChange}
              required />
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col>
            <Label for='question'>Answer</Label>
            <Input
              type='textarea'
              name='answer'
              id='answer'
              value={this.state.answer}
              onChange={this.onChange} />
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col>
            <Button color='success'>Create Question</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default CreateQuestionForm