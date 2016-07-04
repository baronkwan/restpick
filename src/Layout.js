import React from 'react'
import { FormGroup, ControlLabel, FormControl, ButtonToolbar, Button } from 'react-bootstrap'

const Layout = (props) => (
  <div className='jumbotron'>
    <div className="container">
      <h3>Add Restaurant (This is From Layout.js)</h3>
      <FormGroup controlId="formControlsText">
        <ControlLabel>New Restaurant Name:</ControlLabel>
        <FormControl type="text" placeholder="Enter text" />
      </FormGroup>
      <ButtonToolbar>
        <Button bsStyle="info" bsSize="sm">+</Button>
        <Button bsStyle="danger" bsSize="sm">-</Button>
      </ButtonToolbar>
      {props.children}
    </div>
  </div> 
)

Layout.propTypes = {
  children: React.PropTypes.element
}

module.exports = Layout
