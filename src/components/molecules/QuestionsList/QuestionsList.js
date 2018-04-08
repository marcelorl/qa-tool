import React from 'react'
import styled from 'styled-components'
import {
  Alert,
  Button,
  Col,
  Row
} from 'reactstrap'

import Tooltip from '../../atoms/Tooltip'

const List = styled.ul`
  border: #d3d3d3 solid 1px;
  border-radius: 3px;
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  border-bottom: #d3d3d3 solid 1px;
  padding: 0.5rem 1rem;
`

const ListItemQuestion = styled.div`
  font-weight: bold;
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
            <ListItem key={index}>
              <ListItemQuestion>{item.question}</ListItemQuestion>
              <div>{item.answer}</div>
            </ListItem>
          )
        })}
      </List>
    )
  }
}

const renderButtons = (questionsNumber, remove, sort) => {
  if (questionsNumber) {
    return (
      <Row>
        <Col>
          <Button color='primary' onClick={sort}>Sort questions</Button>{' '}
          <Button color='danger' onClick={remove}>Remove questions</Button>
        </Col>
      </Row>
    )
  }
}

const QuestionsList = ({ list, remove, sort }) =>
  <div>
    <Row>
      <Col>
        <Tooltip text='Here you can find the created questions and their answers.'>
          <h2>Created questions</h2>
        </Tooltip>
      </Col>
    </Row>

    <Row>
      <Col>
        {renderAlert(list.length)}
        {renderList(list)}
      </Col>
    </Row>

    {renderButtons(list.length, remove, sort)}
  </div>

QuestionsList.defaultProps = {
  list: []
}

export default QuestionsList
