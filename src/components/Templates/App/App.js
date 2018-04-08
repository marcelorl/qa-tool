import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Row
} from 'reactstrap'

import QATool from '../../organisms/QATool'

const H1 = styled.h1`
  margin: 0 auto;
`

const App = () =>
  <Container>
    <Row className="w-100 mb-5">
      <H1 className="m">The Awesome Q/A tool</H1>
    </Row>
    <QATool />
  </Container>

export default App
