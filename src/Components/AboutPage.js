import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const AboutPage = React.createClass({
  render () {
    return (
      <Jumbotron>
        <h2>Ever wonder this app will exist? Here are the answers.</h2>
        <ul>
          <li>
            <h3>#1 What is this application for?</h3>
            <p>This app is designed to help users free from deciding what to eat.</p>
            
          </li>
          <li>
            <h3>#2 TBD</h3>
            <p></p>
          </li>
        </ul>
      </Jumbotron>
    )
  }
})

module.exports = AboutPage