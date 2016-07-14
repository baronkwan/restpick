import React from 'react'
import {Accordion, Panel} from 'react-bootstrap'
var data = require('../FakeData/data')

const Users = React.createClass({
  render () {
    let usersList = data.users.map((user) => {
      return (
        <Panel header={`User #${user.uid} ${user.username}`} eventKey={user.uid}>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </Panel>
      )
    })
    return (
      <Accordion>
        {usersList}
      </Accordion>
    )
  }
})

module.exports = Users
