import React, { Component } from 'react';
import {Router} from 'react-router'
import routes from '../routes'

export default class App extends Component {
  render() {
    const {history, store} = this.props
    return (
      <Router routes={routes(store)} history={history} />
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
}
