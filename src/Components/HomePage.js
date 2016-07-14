import React from 'react'
import {Link} from 'react-router'
import {Jumbotron, Button} from 'react-bootstrap'

const HomePage = React.createClass({
  render () {
    return (
      <Jumbotron>
        <h1>Hello, Welcome to RestPick!</h1>
        <p>Having a hard time deciding what to eat? We've you covered.</p>
        <Link to="about"><Button bsStyle="primary">Learn more</Button></Link>
      </Jumbotron>
    )
  }
})

module.exports = HomePage
