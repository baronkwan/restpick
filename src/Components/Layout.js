import React from 'react'
import Header from './Header'

const Layout = (props) => (
  <div>
    <Header />
    <div className="container">
      {props.children}
    </div>
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element
}

module.exports = Layout
