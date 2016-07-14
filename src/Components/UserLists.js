import React from 'react'
import {Accordion, Panel} from 'react-bootstrap'

const UserLists = React.createClass({
  render () {
    return (
      <Accordion>
        <Panel header="List #1" eventKey="1">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Panel>
        <Panel header="List #2" eventKey="2">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Panel>
        <Panel header="List #3" eventKey="3">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Panel>
      </Accordion>
    )
  }
})

module.exports = UserLists
