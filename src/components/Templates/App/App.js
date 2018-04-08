import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Container,
  Row
} from 'reactstrap'

import QATool from '../../organisms/QATool'

const H1 = styled.h1`
  margin: 0 auto;
`

class App extends Component {
  render () {
    return (
      <Container>
        <Row className='w-100 mb-5'>
          <H1 className='m'>The Awesome Q/A tool</H1>
        </Row>
        <QATool {...this.props} />
      </Container>
    )
  }
}

export default App
