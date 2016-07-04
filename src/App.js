import React, { Component } from 'react';
import Header from './Header'
import Layout from './Layout'
import Slideshow from './Slideshow'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slideshow />
        <Layout />
      </div>
    );
  }
}
