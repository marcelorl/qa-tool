import React, {Component} from 'react'
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
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  
  &&&:last-child {
    border: none;
  }
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

class QuestionsList extends Component {
  constructor(props) {
    super(props)

    this.state = {list: props.list}

    this.onClick = this.onClick.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({list: props.list})
  }

  onClick(index) {
    const { list } = this.state

    const nList = Array.from(list)

    nList[index].isOpen = !nList[index].isOpen

    this.setState({ list: nList })
  }

  renderAnswer (item) {
    if (item.isOpen) {
      return (
        <div>{item.answer}</div>
      )
    }
  }

  renderList () {
    const { list: questions, removeItem } = this.props

    if (questions.length) {
      return (
        <List>
          {questions.map((item, index) => {
            return (
              <ListItem key={index}>
                <div>
                  <ListItemQuestion onClick={() => this.onClick(index)}>
                    {item.question}
                  </ListItemQuestion>
                  {this.renderAnswer(item)}
                </div>
                <button type='button' onClick={() => removeItem(index)}>X</button>
              </ListItem>
            )
          })}
        </List>
      )
    }
  }

  render() {
    const { list, remove, sort } = this.props

    return (
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
            {this.renderList()}
          </Col>
        </Row>

        {renderButtons(list.length, remove, sort)}
      </div>
    )
  }
}

QuestionsList.defaultProps = {
  list: []
}

export default QuestionsList
