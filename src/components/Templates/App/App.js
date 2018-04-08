import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Col,
  Container,
  Row
} from 'reactstrap'

import QATool from '../../organisms/QATool'

const H1 = styled.h1`
  text-align: center;
`

class App extends Component {
  render () {
    return (
      <Container>
        <Row className='mt-3 mb-3'>
          <Col>
            <H1>The Awesome Q/A tool</H1>
          </Col>
        </Row>
        <QATool {...this.props} />
      </Container>
    )
  }
}

export default App
