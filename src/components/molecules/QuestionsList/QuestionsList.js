import React from 'react'
import styled from 'styled-components'
import {
  Alert,
  Button,
  Col,
  Row
} from 'reactstrap'

const List = styled.ul`
  border: #d3d3d3 solid 1px
`

const renderAlert = questionsNumber => {
  if (!questionsNumber) {
    return (
      <Alert color='danger' className='w-100'>
        No questions yet! :-(
      </Alert>
    )
  }
}

const renderList = questions => {
  if (questions.length) {
    return (
      <List>
        {questions.map((item, index) => {
          return (
            <li key={index}>
              {item.question}
              {item.answer}
            </li>
          )
        })}
      </List>
    )
  }
}

const renderButtons = questionsNumber => {
  if (questionsNumber) {
    return (
      <Row>
        <Col>
          <Button color='primary'>Sort questions</Button>{' '}
          <Button color='danger'>Remove questions</Button>
        </Col>
      </Row>
    )
  }
}

const QuestionsList = ({ list }) =>
  <div>
    <Row>
      <Col>
        <h2>Created questions</h2>
      </Col>
    </Row>

    <Row>
      <Col>
        {renderAlert(list.length)}
        {renderList(list)}
      </Col>
    </Row>

    {renderButtons(list.length)}
  </div>

QuestionsList.defaultProps = {
  list: []
}

export default QuestionsList
