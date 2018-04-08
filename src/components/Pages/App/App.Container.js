import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, remove, sort } from '../../../actions/question'
import App from '../../Templates/App';

class AppContainer extends Component {
  render () {
    return (
      <App {...this.props} />
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators({
  add,
  remove,
  sort
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
